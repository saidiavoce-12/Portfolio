const translations = {
  en: {
    metaDescription: "Data Analyst portfolio: data analysis, SQL, Python, visualization, and storytelling.",
    pageTitle: "Portfolio | Avoce Saïdi",
    skipLink: "Skip to content",
    qualities: "Rigorous • Curious",
    logoHome: "Back to home",
    mainNavigation: "Main navigation",
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    languageLabel: "Page language",
    heroTitle: "I help businesses <span class=\"hero-keyword\">manage</span> their <span class=\"hero-keyword\">operations</span> with data, replacing intuition with <span class=\"hero-keyword\">strategic</span> and <span class=\"hero-keyword\">informed</span> decisions.",
    heroLead: "I create analyses, dashboards, and data explorations to help teams understand trends, risks, and opportunities.",
    viewProjects: "View my projects",
    contactMe: "Contact me",
    mainSkills: "Core skills",
    dashboards: "Dashboards",
    visualSummary: "Visual summary",
    focus: "Focus",
    focusTitle: "Exploratory analysis • Visualization • KPIs",
    focusItem1: "Data cleaning and structuring",
    focusItem2: "SQL queries and analytical exploration",
    focusItem3: "Data storytelling and dashboards",
    aboutEyebrow: "About",
    aboutTitle: "An analytical approach focused on decision-making.",
    aboutParagraph1: "I am passionate about understanding data and transforming it into useful insights for decision-making. My work is based on exploratory analysis, data quality, statistical modeling, and clear communication of results.",
    aboutParagraph2: "I enjoy working with varied datasets, identifying pain points, clarifying metrics, and presenting clear summaries to both business and technical audiences.",
    aboutCardTitle: "What I aim to bring",
    aboutItem1: "Reliable insight from data",
    aboutItem2: "Clear, actionable visualizations",
    aboutItem3: "Structured, business-focused analysis",
    skillsEyebrow: "Skills",
    skillsTitle: "The tools and skills that shape my work.",
    pythonDescription: "Pandas, NumPy, Matplotlib, Jupyter, data cleaning, and exploration.",
    sqlDescription: "Queries, joins, aggregations, filters, and analytical logic.",
    powerBiDescription: "Building dashboards, metrics, and visual reports.",
    statistics: "Statistics",
    statisticsDescription: "Descriptive analysis, trend interpretation, and business summaries.",
    dataVizDescription: "Choosing the right charts, visual clarity, and data storytelling.",
    excelDescription: "Data analysis, pivot tables, and report preparation.",
    projectsEyebrow: "Projects",
    projectsTitle: "Projects focused on understanding and communicating data.",
    project1Title: "Exploratory analysis of a public dataset",
    technologies: "Technologies",
    challenge: "Challenge",
    project1Challenge: "Identify influential variables and summarize trends to make the data easier to understand.",
    result: "Outcome",
    project1Result: "A structured notebook with visualizations and key findings to support interpretation.",
    githubRepo: "View GitHub repository",
    project2Title: "KPI tracking dashboard",
    project2Challenge: "Bring together multiple information sources to track KPIs and quickly identify variances.",
    project2Result: "A clear dashboard with metrics, filters, and summary views to support business monitoring.",
    project3Title: "Marketing data analysis",
    project3Challenge: "Find useful signals in a large dataset to better understand performance and segments.",
    project3Result: "An actionable summary of trends, segments, and performance, presented clearly.",
    educationEyebrow: "Education",
    educationTitle: "A background in applied mathematics, statistics, and data analysis.",
    inProgress: "In progress",
    masterTitle: "Master's Year 1 in Applied Mathematics and Statistics",
    masterDescription: "Currently studying at the University of Bordeaux.",
    bachelors: "Bachelor's",
    degree1Title: "Mathematics and Computer Science",
    degree1Description: "Bachelor's degree from the University of Bordeaux, Talence campus. ABien honors.",
    degree2Title: "Business Computing",
    degree2Description: "Undergraduate coursework in finance, accounting, and entrepreneurship. Bien honors.",
    contactEyebrow: "Contact",
    contactTitle: "Let's discuss your projects or an opportunity.",
    contactMessage: "I am available for assignments in data analysis, dashboard development, and strategic reporting.",
    emailLink: "emailLink",
    footer: "© 2026 Avoce Saïdi — Data Analyst Portfolio"
  }
};

const languageSelect = document.querySelector("#language-select");
const defaultText = new Map(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [element, element.textContent])
);
const defaultHtml = new Map(
  [...document.querySelectorAll("[data-i18n-html]")].map((element) => [element, element.innerHTML])
);
const defaultAriaLabels = new Map(
  [...document.querySelectorAll("[data-i18n-aria-label]")].map((element) => [element, element.getAttribute("aria-label")])
);
const defaultContent = new Map(
  [...document.querySelectorAll("[data-i18n-content]")].map((element) => [element, element.getAttribute("content")])
);

let storedLanguage = "fr";
try {
  storedLanguage = window.localStorage.getItem("portfolio-language") || "fr";
} catch (error) {
  console.warn("Could not read the saved language preference.", error);
}

function setLanguage(language) {
  const selectedLanguage = language === "en" ? "en" : "fr";
  const dictionary = translations[selectedLanguage] || {};

  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key] || defaultText.get(element);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = dictionary[key] || defaultHtml.get(element);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    element.setAttribute("aria-label", dictionary[key] || defaultAriaLabels.get(element));
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    element.setAttribute("content", dictionary[key] || defaultContent.get(element));
  });

  const emailLink = document.querySelector("[data-i18n-href='emailLink']");
  if (emailLink) {
    const subject = selectedLanguage === "en"
      ? "A%20Data%20Analysis%20Project"
      : "Un%20projet%20en%20Data%20Analyse";
    emailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=saidiavoce%40gmail.com&su=${subject}`;
  }

  languageSelect.setAttribute("aria-label", selectedLanguage === "en" ? "Page language" : "Langue de la page");
  languageSelect.value = selectedLanguage;
}

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
  try {
    window.localStorage.setItem("portfolio-language", languageSelect.value);
  } catch (error) {
    console.warn("Could not save the language preference.", error);
  }
});

setLanguage(storedLanguage || "fr");
