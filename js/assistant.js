// AI Assistant Q&A Database
const assistantQA = {
    en: {
        "what is veo3": "Veo 3 is Google's latest text-to-video AI model that can generate high-quality videos up to 4K resolution with native audio generation. It's particularly good at cinematic camera movements and realistic physics.",
        "what is sora": "Sora is OpenAI's revolutionary text-to-video AI that creates stunning, high-quality videos from text descriptions. It excels at realistic physics simulation and complex scene generation.",
        "what is runway": "Runway ML is a professional-grade AI-powered creative suite for filmmakers and content creators. It combines advanced video editing tools with cutting-edge AI capabilities.",
        "what is kling": "Kling AI is an innovative video generation platform that specializes in unique artistic styles and creative effects. It's great for creating distinctive visual content.",
        "how to use veo3": "To use Veo 3: 1) Access through Google's platform, 2) Write a detailed prompt describing your scene, 3) Select camera movements and style, 4) Generate and review your video, 5) Export in your preferred format.",
        "how to use sora": "To use Sora: 1) Subscribe to ChatGPT Plus/Team/Enterprise, 2) Access Sora through OpenAI's platform, 3) Write a detailed scene description, 4) Choose style and settings, 5) Generate and download your video.",
        "how to use runway": "To use Runway ML: 1) Sign up for an account, 2) Choose your project type, 3) Import or create media assets, 4) Apply AI effects and editing tools, 5) Collaborate with team members, 6) Export your project.",
        "how to use kling": "To use Kling AI: 1) Create an account, 2) Browse artistic styles, 3) Upload or describe your content, 4) Apply creative effects, 5) Generate your artistic video, 6) Download and share.",
        "best ai video tool": "The best AI video tool depends on your needs: Veo 3 for cinematic quality and audio, Sora for realistic physics, Runway ML for professional editing, and Kling AI for artistic styles.",
        "compare ai tools": "Veo 3: 4K resolution, native audio, cinematic controls. Sora: High quality, realistic physics, complex scenes. Runway ML: Professional editing, collaboration, advanced effects. Kling AI: Artistic styles, creative effects, unique aesthetics.",
        "ai video generation": "AI video generation uses machine learning to create videos from text descriptions. Popular tools include Veo 3, Sora, Runway ML, and Kling AI, each with unique strengths and capabilities.",
        "prompt writing": "Good prompts should be detailed and specific. Include: subject, action, setting, style, camera movements, and lighting. Be descriptive about what you want to see in the video.",
        "video quality": "Video quality depends on the tool: Veo 3 supports 4K, Sora produces high-quality output, Runway ML offers professional-grade results, and Kling AI focuses on artistic quality.",
        "audio generation": "Currently, Veo 3 is the only tool that generates native audio including dialogue, sound effects, and music. Other tools focus primarily on visual content.",
        "pricing": "Pricing varies: Sora requires ChatGPT Plus subscription, Runway ML has subscription tiers, Veo 3 and Kling AI have their own pricing models. Check each tool's website for current pricing.",
        "limitations": "Common limitations include: clip length restrictions, content policies, hardware requirements, learning curves, and processing time. Each tool has specific limitations.",
        "help": "I can help you learn about AI video tools like Veo 3, Sora, Runway ML, and Kling AI. Ask me about features, usage, comparisons, or any specific questions!",
        "hello": "Hello! I'm your AI assistant. I can help you learn about AI video generation tools. What would you like to know?",
        "hi": "Hi there! I'm here to help you explore AI video tools. Feel free to ask me anything about Veo 3, Sora, Runway ML, or Kling AI!",
        "thanks": "You're welcome! Is there anything else you'd like to know about AI video tools?",
        "thank you": "You're welcome! Feel free to ask more questions about AI video generation tools.",
        "bye": "Goodbye! Feel free to come back if you have more questions about AI video tools.",
        "goodbye": "See you later! Don't hesitate to return if you need help with AI video tools."
    },
    
    fr: {
        "qu'est-ce que veo3": "Veo 3 est le dernier modèle d'IA texte-vers-vidéo de Google qui peut générer des vidéos haute qualité jusqu'à 4K avec génération audio native. Il est particulièrement bon pour les mouvements de caméra cinématographiques.",
        "qu'est-ce que sora": "Sora est l'IA révolutionnaire texte-vers-vidéo d'OpenAI qui crée des vidéos de qualité exceptionnelle à partir de descriptions textuelles. Il excelle dans la simulation physique réaliste.",
        "qu'est-ce que runway": "Runway ML est une suite créative professionnelle alimentée par l'IA pour les cinéastes et créateurs de contenu. Il combine des outils d'édition vidéo avancés avec des capacités IA de pointe.",
        "qu'est-ce que kling": "Kling AI est une plateforme innovante de génération vidéo qui se spécialise dans des styles artistiques uniques et des effets créatifs.",
        "comment utiliser veo3": "Pour utiliser Veo 3 : 1) Accédez via la plateforme Google, 2) Écrivez une description détaillée, 3) Sélectionnez les mouvements de caméra, 4) Générez et examinez votre vidéo, 5) Exportez dans votre format préféré.",
        "meilleur outil vidéo ia": "Le meilleur outil vidéo IA dépend de vos besoins : Veo 3 pour la qualité cinématographique, Sora pour la physique réaliste, Runway ML pour l'édition professionnelle, Kling AI pour les styles artistiques.",
        "aide": "Je peux vous aider à apprendre sur les outils vidéo IA comme Veo 3, Sora, Runway ML et Kling AI. Posez-moi des questions sur les fonctionnalités, l'utilisation ou les comparaisons !",
        "bonjour": "Bonjour ! Je suis votre assistant IA. Je peux vous aider à apprendre sur les outils de génération vidéo IA. Que souhaitez-vous savoir ?",
        "salut": "Salut ! Je suis là pour vous aider à explorer les outils vidéo IA. N'hésitez pas à me poser des questions sur Veo 3, Sora, Runway ML ou Kling AI !",
        "merci": "De rien ! Y a-t-il autre chose que vous aimeriez savoir sur les outils vidéo IA ?",
        "au revoir": "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions sur les outils vidéo IA."
    },
    
    ar: {
        "ما هو veo3": "Veo 3 هو أحدث نموذج ذكاء اصطناعي لتحويل النص إلى فيديو من جوجل يمكنه توليد فيديوهات عالية الجودة حتى 4K مع توليد صوت أصلي. إنه جيد بشكل خاص في حركات الكاميرا السينمائية.",
        "ما هو sora": "Sora هو الذكاء الاصطناعي الثوري لتحويل النص إلى فيديو من OpenAI الذي ينشئ فيديوهات مذهلة عالية الجودة من الأوصاف النصية. إنه يتفوق في محاكاة الفيزياء الواقعية.",
        "ما هو runway": "Runway ML هو مجموعة إبداعية احترافية مدعومة بالذكاء الاصطناعي للمخرجين ومنشئي المحتوى. يجمع بين أدوات تحرير الفيديو المتقدمة وقدرات الذكاء الاصطناعي المتطورة.",
        "ما هو kling": "Kling AI هو منصة مبتكرة لتوليد الفيديو تتخصص في الأنماط الفنية الفريدة والتأثيرات الإبداعية.",
        "كيفية استخدام veo3": "لاستخدام Veo 3: 1) الوصول عبر منصة جوجل، 2) كتابة وصف مفصل للمشهد، 3) اختيار حركات الكاميرا، 4) توليد ومراجعة الفيديو، 5) التصدير بالتنسيق المفضل.",
        "أفضل أداة فيديو ذكاء اصطناعي": "أفضل أداة فيديو ذكاء اصطناعي تعتمد على احتياجاتك: Veo 3 للجودة السينمائية، Sora للفيزياء الواقعية، Runway ML للتحرير الاحترافي، Kling AI للأنماط الفنية.",
        "مساعدة": "يمكنني مساعدتك في تعلم أدوات الفيديو بالذكاء الاصطناعي مثل Veo 3 و Sora و Runway ML و Kling AI. اسألني عن الميزات أو الاستخدام أو المقارنات!",
        "مرحبا": "مرحباً! أنا مساعدك الذكي. يمكنني مساعدتك في تعلم أدوات توليد الفيديو بالذكاء الاصطناعي. ماذا تريد أن تعرف؟",
        "أهلا": "أهلاً وسهلاً! أنا هنا لمساعدتك في استكشاف أدوات الفيديو بالذكاء الاصطناعي. لا تتردد في طرح أسئلة علي حول Veo 3 أو Sora أو Runway ML أو Kling AI!",
        "شكرا": "على الرحب والسعة! هل هناك شيء آخر تريد معرفته عن أدوات الفيديو بالذكاء الاصطناعي؟",
        "وداعا": "وداعاً! لا تتردد في العودة إذا كان لديك المزيد من الأسئلة حول أدوات الفيديو بالذكاء الاصطناعي."
    }
};

// Assistant state
let assistantState = {
    isOpen: false,
    isTyping: false,
    currentLanguage: 'en'
};

// Initialize assistant
function initAssistant() {
    const bubble = document.getElementById('assistantBubble');
    const panel = document.getElementById('assistantPanel');
    const closeBtn = document.getElementById('assistantClose');
    const input = document.getElementById('assistantInput');
    const sendBtn = document.getElementById('assistantSend');
    
    // Event listeners
    bubble.addEventListener('click', toggleAssistant);
    closeBtn.addEventListener('click', closeAssistant);
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Set initial language
    assistantState.currentLanguage = window.currentLanguage || 'en';
}

// Toggle assistant panel
function toggleAssistant() {
    const panel = document.getElementById('assistantPanel');
    const bubble = document.getElementById('assistantBubble');
    
    if (assistantState.isOpen) {
        closeAssistant();
    } else {
        openAssistant();
    }
}

// Open assistant panel
function openAssistant() {
    const panel = document.getElementById('assistantPanel');
    const bubble = document.getElementById('assistantBubble');
    
    panel.classList.add('active');
    assistantState.isOpen = true;
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('assistantInput').focus();
    }, 300);
}

// Close assistant panel
function closeAssistant() {
    const panel = document.getElementById('assistantPanel');
    panel.classList.remove('active');
    assistantState.isOpen = false;
}

// Send message
function sendMessage() {
    const input = document.getElementById('assistantInput');
    const message = input.value.trim();
    
    if (!message || assistantState.isTyping) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate processing delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = getAssistantResponse(message);
        addMessage(response, 'assistant');
    }, 1000 + Math.random() * 2000);
}

// Add message to chat
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('assistantMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const p = document.createElement('p');
    p.textContent = text;
    messageDiv.appendChild(p);
    
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messagesContainer = document.getElementById('assistantMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    const p = document.createElement('p');
    p.textContent = getTranslation('assistant.typing') || 'Typing...';
    typingDiv.appendChild(p);
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    assistantState.isTyping = true;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    assistantState.isTyping = false;
}

// Get assistant response
function getAssistantResponse(message) {
    const lang = assistantState.currentLanguage;
    const qa = assistantQA[lang] || assistantQA.en;
    
    // Convert message to lowercase for matching
    const lowerMessage = message.toLowerCase();
    
    // Find best match
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, answer] of Object.entries(qa)) {
        const score = calculateSimilarity(lowerMessage, key);
        if (score > bestScore && score > 0.3) {
            bestScore = score;
            bestMatch = answer;
        }
    }
    
    // If no good match found, return default response
    if (!bestMatch) {
        const defaultResponses = {
            en: "I'm not sure about that. Could you ask me about Veo 3, Sora, Runway ML, or Kling AI?",
            fr: "Je ne suis pas sûr de cela. Pouvez-vous me poser des questions sur Veo 3, Sora, Runway ML ou Kling AI ?",
            ar: "لست متأكداً من ذلك. هل يمكنك أن تسألني عن Veo 3 أو Sora أو Runway ML أو Kling AI؟"
        };
        return defaultResponses[lang] || defaultResponses.en;
    }
    
    return bestMatch;
}

// Calculate similarity between two strings
function calculateSimilarity(str1, str2) {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    
    let matches = 0;
    for (const word1 of words1) {
        for (const word2 of words2) {
            if (word1.includes(word2) || word2.includes(word1)) {
                matches++;
            }
        }
    }
    
    return matches / Math.max(words1.length, words2.length);
}

// Update assistant language
function updateAssistantLanguage(language) {
    assistantState.currentLanguage = language;
}

// Export functions
window.initAssistant = initAssistant;
window.toggleAssistant = toggleAssistant;
window.openAssistant = openAssistant;
window.closeAssistant = closeAssistant;
window.sendMessage = sendMessage;
window.updateAssistantLanguage = updateAssistantLanguage; 