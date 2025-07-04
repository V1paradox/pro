// Translation data
const translations = {
    en: {
        // Header
        "header.title": "AI Tools Hub",
        
        // Hero Section
        "hero.title": "Master AI Content Creation",
        "hero.subtitle": "Discover the most powerful AI tools for video generation, image creation, and multimedia content",
        
        // Tools
        "tools.veo3.description": "Google's advanced text-to-video generator with native audio and cinematic controls",
        "tools.sora.description": "OpenAI's revolutionary text-to-video AI with stunning visual quality and physics",
        "tools.runway.description": "Professional video editing and AI-powered creative suite for filmmakers",
        "tools.kling.description": "Advanced AI video generation with unique artistic styles and effects",
        
        // Common
        "common.explore": "Explore Tool",
        "common.back": "Back to Home",
        "common.loading": "Loading...",
        "common.error": "An error occurred",
        "common.success": "Success!",
        "common.copy": "Copy",
        "common.copied": "Copied!",
        
        // Footer
        "footer.developed": "Developed by",
        "footer.copyright": "© 2024 AI Tools Hub. All rights reserved.",
        "footer.github": "GitHub",
        
        // Assistant
        "assistant.title": "AI Assistant",
        "assistant.welcome": "Hello! I'm here to help you learn about AI tools. Ask me anything!",
        "assistant.placeholder": "Ask a question...",
        "assistant.typing": "Typing...",
        
        // Tool Pages
        "tool.overview": "Overview",
        "tool.features": "Core Features",
        "tool.usage": "Step-by-Step Usage Guide",
        "tool.comparison": "Comparison Table",
        "tool.prompts": "Ready-to-Use Prompts",
        "tool.limitations": "Limitations & Warnings",
        "tool.faq": "FAQ",
        "tool.tips": "Expert Tips & Use Cases",
        
        // Veo3 Specific
        "veo3.overview": "Veo 3 is Google's latest breakthrough in text-to-video generation, offering unprecedented control over cinematic elements and native audio generation. Launched in May 2025, it represents a significant leap forward in AI video creation technology.",
        "veo3.features": [
            "4K Resolution Output",
            "Native Audio Generation",
            "Cinematic Camera Controls",
            "Realistic Physics Simulation",
            "Advanced Prompt Adherence",
            "Professional Editing Tools"
        ],
        "veo3.steps": [
            "Create a Google account and access Veo 3",
            "Navigate to the video creation interface",
            "Write a detailed prompt describing your scene",
            "Select camera movements and cinematic style",
            "Generate and review your video",
            "Export in your preferred format"
        ],
        "veo3.prompts": [
            "A futuristic Tokyo street with holographic ads, filmed in Blade Runner style with neon lighting and rain",
            "A time-lapse of a sunflower growing from seed to bloom, golden hour lighting, cinematic camera movement",
            "An astronaut's POV floating in zero gravity, Earth visible through the spacesuit visor, slow motion"
        ],
        "veo3.limitations": [
            "8-second maximum clip length",
            "Requires detailed prompting for best results",
            "Limited to English language prompts",
            "No real-time collaboration features"
        ],
        "veo3.faq": [
            {
                "question": "How long can Veo 3 videos be?",
                "answer": "Veo 3 currently supports up to 8-second video clips."
            },
            {
                "question": "Does Veo 3 generate audio?",
                "answer": "Yes, Veo 3 includes native audio generation with dialogue, sound effects, and music."
            },
            {
                "question": "What resolution does Veo 3 support?",
                "answer": "Veo 3 can generate videos up to 4K resolution."
            }
        ],
        
        // Sora Specific
        "sora.overview": "Sora is OpenAI's revolutionary text-to-video AI model that creates stunning, high-quality videos from text descriptions. It excels at generating realistic physics, complex scenes, and cinematic-quality content.",
        "sora.features": [
            "High-Quality Video Generation",
            "Realistic Physics Simulation",
            "Complex Scene Understanding",
            "Cinematic Quality Output",
            "Advanced Prompt Interpretation",
            "Multiple Style Support"
        ],
        "sora.steps": [
            "Subscribe to ChatGPT Plus, Team, or Enterprise",
            "Access Sora through OpenAI's platform",
            "Write a detailed scene description",
            "Choose your preferred style and settings",
            "Generate and review the video",
            "Download or share your creation"
        ],
        "sora.prompts": [
            "A cyberpunk city at night with neon-lit hovercars flying between skyscrapers, cinematic lighting",
            "A steampunk inventor tinkering with a brass robot in a cluttered workshop, warm lighting",
            "A cozy cabin in a snowstorm, smoke curling from the chimney, warm light in the windows"
        ],
        "sora.limitations": [
            "Requires ChatGPT Plus subscription",
            "Limited access and availability",
            "No audio generation",
            "Content restrictions apply"
        ],
        "sora.faq": [
            {
                "question": "How do I access Sora?",
                "answer": "Sora is available to ChatGPT Plus, Team, and Enterprise subscribers."
            },
            {
                "question": "What makes Sora different?",
                "answer": "Sora excels at realistic physics simulation and complex scene generation."
            },
            {
                "question": "Can Sora generate audio?",
                "answer": "No, Sora focuses on video generation without audio."
            }
        ],
        
        // Runway ML Specific
        "runway.overview": "Runway ML is a professional-grade AI-powered creative suite designed for filmmakers, artists, and content creators. It offers advanced video editing tools combined with cutting-edge AI capabilities.",
        "runway.features": [
            "Professional Video Editing",
            "AI-Powered Effects",
            "Motion Graphics Tools",
            "Collaborative Workflows",
            "Advanced Compositing",
            "Real-Time Rendering"
        ],
        "runway.steps": [
            "Sign up for a Runway ML account",
            "Choose your project type and settings",
            "Import or create your media assets",
            "Apply AI effects and editing tools",
            "Collaborate with team members",
            "Export your final project"
        ],
        "runway.prompts": [
            "Create a professional product commercial with smooth camera movements and dynamic lighting",
            "Generate a sci-fi movie scene with advanced visual effects and atmospheric lighting",
            "Design an animated logo reveal with particle effects and smooth transitions"
        ],
        "runway.limitations": [
            "Steep learning curve for beginners",
            "Requires powerful hardware",
            "Subscription-based pricing",
            "Limited free tier features"
        ],
        "runway.faq": [
            {
                "question": "Is Runway ML suitable for beginners?",
                "answer": "Runway ML has a learning curve but offers tutorials and templates for beginners."
            },
            {
                "question": "What hardware do I need?",
                "answer": "Runway ML works best with a modern computer and good internet connection."
            },
            {
                "question": "Can I collaborate with others?",
                "answer": "Yes, Runway ML offers collaborative features for team projects."
            }
        ],
        
        // Kling AI Specific
        "kling.overview": "Kling AI is an innovative video generation platform that specializes in unique artistic styles and creative effects. It offers distinctive visual aesthetics and creative tools for content creators.",
        "kling.features": [
            "Unique Artistic Styles",
            "Creative Effects Library",
            "Custom Style Training",
            "High-Quality Output",
            "User-Friendly Interface",
            "Community Features"
        ],
        "kling.steps": [
            "Create a Kling AI account",
            "Browse available artistic styles",
            "Upload or describe your content",
            "Apply creative effects and filters",
            "Generate your artistic video",
            "Download and share your creation"
        ],
        "kling.prompts": [
            "Create an anime-style music video with vibrant colors and dynamic character movements",
            "Generate a watercolor painting animation of a sunset over mountains",
            "Design a cyberpunk art piece with neon colors and futuristic elements"
        ],
        "kling.limitations": [
            "Limited to artistic and creative content",
            "May not suit professional applications",
            "Style consistency challenges",
            "Processing time for complex effects"
        ],
        "kling.faq": [
            {
                "question": "What makes Kling AI unique?",
                "answer": "Kling AI specializes in artistic styles and creative effects not found in other tools."
            },
            {
                "question": "Can I create my own styles?",
                "answer": "Yes, Kling AI allows users to train and create custom artistic styles."
            },
            {
                "question": "Is Kling AI good for professional work?",
                "answer": "Kling AI is best suited for creative and artistic projects rather than professional video production."
            }
        ]
    },
    
    fr: {
        // Header
        "header.title": "Hub d'Outils IA",
        
        // Hero Section
        "hero.title": "Maîtrisez la Création de Contenu IA",
        "hero.subtitle": "Découvrez les outils IA les plus puissants pour la génération vidéo, la création d'images et le contenu multimédia",
        
        // Tools
        "tools.veo3.description": "Générateur vidéo avancé de Google avec audio natif et contrôles cinématographiques",
        "tools.sora.description": "IA révolutionnaire de génération vidéo d'OpenAI avec une qualité visuelle exceptionnelle",
        "tools.runway.description": "Suite créative professionnelle d'édition vidéo alimentée par l'IA pour les cinéastes",
        "tools.kling.description": "Génération vidéo IA avancée avec des styles artistiques uniques et des effets",
        
        // Common
        "common.explore": "Explorer l'Outil",
        "common.back": "Retour à l'Accueil",
        "common.loading": "Chargement...",
        "common.error": "Une erreur s'est produite",
        "common.success": "Succès !",
        "common.copy": "Copier",
        "common.copied": "Copié !",
        
        // Footer
        "footer.developed": "Développé par",
        "footer.copyright": "© 2024 Hub d'Outils IA. Tous droits réservés.",
        "footer.github": "GitHub",
        
        // Assistant
        "assistant.title": "Assistant IA",
        "assistant.welcome": "Bonjour ! Je suis là pour vous aider à apprendre sur les outils IA. Posez-moi n'importe quelle question !",
        "assistant.placeholder": "Posez une question...",
        "assistant.typing": "Saisie en cours...",
        
        // Tool Pages
        "tool.overview": "Aperçu",
        "tool.features": "Fonctionnalités Principales",
        "tool.usage": "Guide d'Utilisation Étape par Étape",
        "tool.comparison": "Tableau de Comparaison",
        "tool.prompts": "Prompts Prêts à Utiliser",
        "tool.limitations": "Limitations et Avertissements",
        "tool.faq": "FAQ",
        "tool.tips": "Conseils d'Expert et Cas d'Usage"
    },
    
    ar: {
        // Header
        "header.title": "مركز أدوات الذكاء الاصطناعي",
        
        // Hero Section
        "hero.title": "أتقن إنشاء المحتوى بالذكاء الاصطناعي",
        "hero.subtitle": "اكتشف أقوى أدوات الذكاء الاصطناعي لتوليد الفيديو وإنشاء الصور والمحتوى المتعدد الوسائط",
        
        // Tools
        "tools.veo3.description": "مولد فيديو متقدم من جوجل مع صوت أصلي وضوابط سينمائية",
        "tools.sora.description": "ذكاء اصطناعي ثوري لتوليد الفيديو من OpenAI مع جودة بصرية مذهلة",
        "tools.runway.description": "مجموعة إبداعية احترافية لتحرير الفيديو مدعومة بالذكاء الاصطناعي للمخرجين",
        "tools.kling.description": "توليد فيديو متقدم بالذكاء الاصطناعي مع أنماط فنية فريدة وتأثيرات",
        
        // Common
        "common.explore": "استكشف الأداة",
        "common.back": "العودة للرئيسية",
        "common.loading": "جاري التحميل...",
        "common.error": "حدث خطأ",
        "common.success": "نجح!",
        "common.copy": "نسخ",
        "common.copied": "تم النسخ!",
        
        // Footer
        "footer.developed": "تم التطوير بواسطة",
        "footer.copyright": "© 2024 مركز أدوات الذكاء الاصطناعي. جميع الحقوق محفوظة.",
        "footer.github": "GitHub",
        
        // Assistant
        "assistant.title": "المساعد الذكي",
        "assistant.welcome": "مرحباً! أنا هنا لمساعدتك في تعلم أدوات الذكاء الاصطناعي. اسألني أي شيء!",
        "assistant.placeholder": "اطرح سؤالاً...",
        "assistant.typing": "جاري الكتابة...",
        
        // Tool Pages
        "tool.overview": "نظرة عامة",
        "tool.features": "الميزات الأساسية",
        "tool.usage": "دليل الاستخدام خطوة بخطوة",
        "tool.comparison": "جدول المقارنة",
        "tool.prompts": "نصوص جاهزة للاستخدام",
        "tool.limitations": "القيود والتحذيرات",
        "tool.faq": "الأسئلة الشائعة",
        "tool.tips": "نصائح الخبراء وحالات الاستخدام"
    }
};

// Current language
let currentLanguage = 'en';

// Initialize translations
function initTranslations() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = currentLanguage;
    }
    
    // Set document direction for RTL languages
    if (currentLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    // Apply translations
    applyTranslations();
}

// Apply translations to the page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// Get translation for a key
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Change language
function changeLanguage(language) {
    if (translations[language]) {
        currentLanguage = language;
        localStorage.setItem('language', language);
        
        // Set document direction
        if (language === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
        
        // Apply translations
        applyTranslations();
        
        // Update assistant if it exists
        if (window.updateAssistantLanguage) {
            updateAssistantLanguage(language);
        }
    }
}

// Export functions for use in other scripts
window.translations = translations;
window.currentLanguage = currentLanguage;
window.initTranslations = initTranslations;
window.applyTranslations = applyTranslations;
window.getTranslation = getTranslation;
window.changeLanguage = changeLanguage; 