const video = document.getElementById('bg-video');
video.playbackRate = 0.6; // Réglez la vitesse de lecture à 60% de la vitesse normale

const currentLanguage = document.getElementById('current-language');
const languageList = document.getElementById('language-list');
const welcomeMessage = document.getElementById('welcome-message');
const profileTitle = document.querySelector('.profile-section h2');
const profileText = document.querySelector('.profile-section p');
const linksTitle = document.querySelector('.links-section h2');

const translations = {
    en: {
        welcome: "Welcome to my site",
        profileTitle: "Passionate Developer",
        profileText: "As a second-year student developer, I am deeply passionate about development and programming languages. I love exploring new technologies and tackling challenging problems. My goal is to continuously improve my skills and advance in my career. I am ready to bring my enthusiasm and commitment to every project, contributing with energy and creativity.",
        linksTitle: "LINKS",
        currentLang: "EN",
        otherLang: "FR"
    },
    fr: {
        welcome: "Bienvenue sur mon site",
        profileTitle: "Développeur Passionné",
        profileText: "En tant qu'étudiant développeur en deuxième année, je suis profondément passionné par le développement et les langages de programmation. J'aime explorer de nouvelles technologies et relever des défis complexes. Mon objectif est d'améliorer continuellement mes compétences et de progresser dans ma carrière. Je suis prêt à apporter mon enthousiasme et mon engagement à chaque projet, en contribuant avec énergie et créativité.",
        linksTitle: "LIENS",
        currentLang: "FR",
        otherLang: "EN"
    }
};

currentLanguage.addEventListener('click', () => {
    document.querySelector('.language-selector').classList.toggle('active');
});

languageList.addEventListener('click', (event) => {
    const selectedLang = event.target.getAttribute('data-lang');
    if (selectedLang) {
        setLanguage(selectedLang);
    }
});

function setLanguage(lang) {
    welcomeMessage.textContent = translations[lang].welcome;
    profileTitle.textContent = translations[lang].profileTitle;
    profileText.textContent = translations[lang].profileText;
    linksTitle.textContent = translations[lang].linksTitle;
    currentLanguage.textContent = translations[lang].currentLang;
    languageList.innerHTML = `<li data-lang="${translations[lang].otherLang.toLowerCase()}">${translations[lang].otherLang}</li>`;
    document.querySelector('.language-selector').classList.remove('active');
}

// Initial language setup
setLanguage('fr');