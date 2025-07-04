// Tool Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
    initCopyButtons();
    initSmoothScrolling();
    initToolPageAnimations();
});

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// Copy Button Functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const card = this.closest('.prompt-card');
            const promptText = card.querySelector('.prompt-text');
            const textToCopy = promptText.textContent.trim();
            
            copyToClipboard(textToCopy);
            
            // Show feedback
            this.innerHTML = '<span class="copy-icon">✅</span>';
            this.title = getTranslation('common.copied') || 'Copied!';
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = '<span class="copy-icon">📋</span>';
                this.title = getTranslation('common.copy') || 'Copy';
            }, 2000);
            
            // Show notification
            showNotification(getTranslation('common.copied') || 'Copied to clipboard!', 'success');
        });
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Tool Page Specific Animations
function initToolPageAnimations() {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.content-section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll', 'visible');
                
                // Animate children with stagger
                const animatedChildren = entry.target.querySelectorAll('.step-card, .feature-card, .prompt-card, .limitation-card, .tip-card, .faq-item');
                animatedChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('fade-in');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Parallax effect for tool hero
    const toolHero = document.querySelector('.tool-hero');
    if (toolHero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            toolHero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Floating animation for tool icon
    const toolIcon = document.querySelector('.tool-icon-large');
    if (toolIcon) {
        toolIcon.classList.add('float');
    }
}

// Enhanced Copy to Clipboard Function
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // Use the modern clipboard API
        return navigator.clipboard.writeText(text).then(() => {
            return true;
        }).catch(() => {
            // Fallback to older method
            return fallbackCopyToClipboard(text);
        });
    } else {
        // Fallback for older browsers
        return fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make the textarea invisible
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    } catch (err) {
        document.body.removeChild(textArea);
        return false;
    }
}

// Tool-specific assistant responses
function updateAssistantForTool(toolName) {
    const assistantMessages = document.getElementById('assistantMessages');
    if (assistantMessages) {
        // Clear existing messages
        assistantMessages.innerHTML = '';
        
        // Add tool-specific welcome message
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'message assistant-message';
        
        const welcomeText = document.createElement('p');
        welcomeText.textContent = `Hello! I'm here to help you learn about ${toolName}. Ask me anything about features, usage, or tips!`;
        welcomeMessage.appendChild(welcomeText);
        
        assistantMessages.appendChild(welcomeMessage);
    }
}

// Keyboard shortcuts for tool pages
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + / to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Escape to close FAQ items
    if (e.key === 'Escape') {
        const activeFAQ = document.querySelector('.faq-item.active');
        if (activeFAQ) {
            activeFAQ.classList.remove('active');
            const answer = activeFAQ.querySelector('.faq-answer');
            answer.style.maxHeight = '0';
        }
    }
    
    // Number keys 1-6 to jump to sections
    if (e.key >= '1' && e.key <= '6' && !e.ctrlKey && !e.metaKey) {
        const sections = [
            '#overview',
            '#usage',
            '#features',
            '#comparison',
            '#prompts',
            '#limitations'
        ];
        
        const sectionIndex = parseInt(e.key) - 1;
        if (sections[sectionIndex]) {
            e.preventDefault();
            const targetElement = document.querySelector(sections[sectionIndex]);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// Progress indicator
function initProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), var(--purple-glow));
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize progress indicator
initProgressIndicator();

// Tool-specific data for assistant
const toolSpecificData = {
    'veo3': {
        name: 'Veo 3',
        features: ['4K Resolution', 'Native Audio', 'Cinematic Controls', 'Realistic Physics'],
        maxDuration: '8 seconds',
        resolution: '4K',
        pricing: 'Pay-per-use'
    },
    'sora': {
        name: 'Sora',
        features: ['High Quality', 'Realistic Physics', 'Complex Scenes', 'Cinematic Quality'],
        maxDuration: '60 seconds',
        resolution: '1080p',
        pricing: 'Subscription'
    },
    'runway': {
        name: 'Runway ML',
        features: ['Professional Editing', 'AI Effects', 'Collaboration', 'Advanced Tools'],
        maxDuration: 'Unlimited',
        resolution: '4K',
        pricing: 'Subscription'
    },
    'kling': {
        name: 'Kling AI',
        features: ['Artistic Styles', 'Creative Effects', 'Unique Aesthetics', 'Custom Styles'],
        maxDuration: '30 seconds',
        resolution: '1080p',
        pricing: 'Freemium'
    }
};

// Export functions for use in other scripts
window.updateAssistantForTool = updateAssistantForTool;
window.toolSpecificData = toolSpecificData; 