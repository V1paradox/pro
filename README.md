# AI Tools Hub 🚀

A comprehensive, multi-page interactive website showcasing four cutting-edge AI video generation tools: **Veo 3**, **Sora**, **Runway ML**, and **Kling AI**. Built with modern web technologies and featuring an immersive educational experience.

## ✨ Features

### 🎨 Visual Design
- **Glassmorphism Effects**: Modern glass-like UI elements with backdrop blur
- **Glitch Animations**: Dynamic text effects on main titles
- **Water Ripple Effects**: Smooth animations on subheadings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent preferences

### 🌍 Multi-Language Support
- **English**: Primary language
- **French**: Complete translation
- **Arabic**: Full RTL support with translation
- **Persistent Preferences**: Language choice saved in localStorage

### 🤖 Smart AI Assistant
- **Interactive Chatbot**: Located in bottom-right corner
- **Tool-Specific Knowledge**: Contextual responses for each AI tool
- **Q&A Database**: Comprehensive knowledge base
- **Real-time Interaction**: Smooth chat experience

### 📱 Responsive & Interactive
- **Mobile-First Design**: Optimized for all screen sizes
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Cards**: Hover effects and click interactions
- **Progressive Enhancement**: Works without JavaScript

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Fonts**: Inter (UI) and JetBrains Mono (code)
- **Icons**: Emoji-based icons for cross-platform compatibility

## 📁 Project Structure

```
ai-tools-hub/
├── index.html              # Homepage with tool cards
├── veo3.html              # Veo 3 detailed page
├── sora.html              # Sora detailed page
├── runway.html            # Runway ML detailed page
├── kling.html             # Kling AI detailed page
├── styles/
│   ├── main.css           # Main stylesheet
│   ├── animations.css     # Animation definitions
│   └── tool-page.css      # Tool page specific styles
├── js/
│   ├── main.js            # Core functionality
│   ├── translations.js    # Multi-language support
│   ├── assistant.js       # AI assistant functionality
│   └── tool-page.js       # Tool page interactions
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 📖 Usage Guide

### Navigation
- **Homepage**: Overview of all four AI tools
- **Tool Pages**: Detailed guides for each tool
- **Header**: Language selector and theme toggle
- **Assistant**: AI chatbot for questions

### Features per Tool Page
Each tool page includes:
1. **Overview**: Introduction and key highlights
2. **Step-by-Step Guide**: Detailed usage instructions
3. **Core Features**: Key capabilities and strengths
4. **Comparison Table**: Tool comparison metrics
5. **Ready-to-Use Prompts**: Example prompts for each tool
6. **Limitations & Warnings**: Important considerations
7. **FAQ**: Common questions and answers
8. **Expert Tips**: Professional advice and use cases

### Interactive Elements
- **Theme Toggle**: Switch between dark and light modes
- **Language Selector**: Change interface language
- **Copy Buttons**: Copy prompts to clipboard
- **FAQ Accordion**: Expandable question sections
- **Smooth Scrolling**: Navigate between sections
- **Progress Indicator**: Visual scroll progress

## 🎯 AI Tools Covered

### 🎬 Veo 3 (Google)
- **4K Resolution** output
- **Native Audio Generation**
- **Cinematic Camera Controls**
- **Realistic Physics Simulation**
- **Advanced Prompt Adherence**

### ✨ Sora (OpenAI)
- **High-Quality Video Generation**
- **Realistic Physics Simulation**
- **Complex Scene Understanding**
- **Cinematic Quality Output**
- **60-second Maximum Duration**

### 🎭 Runway ML
- **Professional Video Editing**
- **AI-Powered Effects**
- **Motion Graphics Tools**
- **Collaborative Workflows**
- **Real-Time Rendering**

### 🎨 Kling AI
- **Unique Artistic Styles**
- **Creative Effects Library**
- **Custom Style Training**
- **Community Features**
- **Freemium Model**

## 🔧 Customization

### Adding New Tools
1. Create a new HTML file following the existing structure
2. Add tool data to `translations.js`
3. Update navigation and comparison tables
4. Add tool-specific assistant responses

### Modifying Styles
- **Colors**: Update CSS custom properties in `main.css`
- **Animations**: Modify keyframes in `animations.css`
- **Layout**: Adjust grid and flexbox properties

### Adding Languages
1. Add language data to `translations.js`
2. Update language selector in HTML
3. Test RTL support for appropriate languages

## 🌟 Key Features Implementation

### Glassmorphism Effect
```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Glitch Animation
```css
.glitch-text {
    position: relative;
    animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    /* Animation properties */
}
```

### Theme Switching
```javascript
function toggleTheme() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
}
```

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Google DeepMind** for Veo 3
- **OpenAI** for Sora
- **Runway ML** team
- **Kling AI** developers
- **Web development community** for inspiration

## 📞 Support

For questions, suggestions, or issues:
- Create an issue on GitHub
- Contact: developer@example.com
- Project URL: [GitHub Repository](https://github.com/yourusername/ai-tools-hub)

---

**Built with ❤️ for the AI community** 