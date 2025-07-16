// Settings variables
let settings;
let languageState = document.getElementById("settingsLanguage");
let themeState = document.getElementById("colourTheme");

// About page, default first tab, chosen tab, we put this here and call function aboutChoice() onload, because if added to about.js it won't make tab contents show
let currentTab = "1";
let aboutElement = document.querySelector(`.sideButton[page="${currentTab}"]`);

//📌 Getting saved setting from localStorage, if no - set default English and dark
window.onload = function () {
  if (localStorage.getItem("storageSettings") !== null) {
    settings = JSON.parse(localStorage.getItem("storageSettings"));
  } else {
    settings = { language: "en", theme: "dark" };
    let JSONstring = JSON.stringify(settings);
    localStorage.setItem("storageSettings", JSONstring);
  }

  if (settings.language == "en") {
    languageState.classList.add("english");
  } else if (settings.language == "pl") {
    languageState.classList.add("polish");
  }
  applyLanguage();

  if (
    ["about.php", "about"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    aboutChoice("1", aboutElement);
  }

  if (settings.theme == "dark") {
    themeState.classList.add("dark");
  } else if (settings.theme == "light") {
    themeState.classList.add("light");
  }

  themeChange(settings.theme);
};

//📌 When the chosen language is different than the current language of the page we save the chosen language in localStorage and apply the language to our page
function languageChange(languageChange) {
  if (languageChange == "en" && settings.language == "pl") {
    settings.language = "en";
    let JSONstringSettings = JSON.stringify(settings);
    localStorage.setItem("storageSettings", JSONstringSettings);
    languageState.classList.remove("polish");
    languageState.classList.add("english");
    applyLanguage();
    aboutElement = document.querySelector(`.sideButton[page="${currentTab}"]`);
    if (
      ["about.php", "about"].some((suffix) =>
        window.location.pathname.endsWith(suffix)
      )
    ) {
      aboutChoice(currentTab, aboutElement);
    }
  } else if (languageChange == "pl" && settings.language == "en") {
    settings.language = "pl";
    let JSONstringSettings = JSON.stringify(settings);
    localStorage.setItem("storageSettings", JSONstringSettings);
    languageState.classList.remove("english");
    languageState.classList.add("polish");
    applyLanguage();
    aboutElement = document.querySelector(`.sideButton[page="${currentTab}"]`);
    if (
      ["about.php", "about"].some((suffix) =>
        window.location.pathname.endsWith(suffix)
      )
    ) {
      aboutChoice(currentTab, aboutElement);
    }
  }
}

//📌 When the chosen theme is different than the current theme of the page we save the chosen theme in localStorage and replace logos, remove opposite theme CSS and apply chosen theme CSS
function themeChange(chosenTheme) {
  if (chosenTheme == "dark" && settings.theme == "light") {
    settings.theme = "dark";
    let JSONstringSettings = JSON.stringify(settings);
    localStorage.setItem("storageSettings", JSONstringSettings);
    themeState.classList.remove("light");
    themeState.classList.add("dark");
  } else if (chosenTheme == "light" && settings.theme == "dark") {
    settings.theme = "light";
    let JSONstringSettings = JSON.stringify(settings);
    localStorage.setItem("storageSettings", JSONstringSettings);
    themeState.classList.remove("dark");
    themeState.classList.add("light");
  }

  if (chosenTheme == "dark") {
    document.querySelector("header h1").innerHTML =
      '<img src="../Resources/logoDark.png" alt="Logo" />Madhav Szuwalski';
    document.getElementById("contactsLogo").src = "../Resources/logoDark.png";

    document
      .querySelectorAll('link[rel="stylesheet"][class="light"]')
      .forEach((del) => del.remove());

    const darkStyles = [
      "../style/dark/header&nav.css",
      "../style/dark/footer.css",
      "../style/dark/about.css",
      "../style/dark/snake.css",
      "../style/dark/todoList.css",
    ];
    darkStyles.forEach((link) => {
      const CSS = document.createElement("link");
      CSS.rel = "stylesheet";
      CSS.href = link;
      CSS.classList = chosenTheme;
      document.head.appendChild(CSS);
    });
  } else if (chosenTheme == "light") {
    document.querySelector("header h1").innerHTML =
      '<img src="../Resources/logoLight.png" alt="Logo" />Madhav Szuwalski';
    document.getElementById("contactsLogo").src = "../Resources/logoLight.png";

    document
      .querySelectorAll('link[rel="stylesheet"][class="dark"]')
      .forEach((del) => del.remove());

    const lightStyles = [
      "../style/light/header&nav.css",
      "../style/light/footer.css",
      "../style/light/about.css",
      "../style/light/snake.css",
      "../style/light/todoList.css",
    ];
    lightStyles.forEach((link) => {
      const CSS = document.createElement("link");
      CSS.rel = "stylesheet";
      CSS.href = link;
      CSS.classList = chosenTheme;
      document.head.appendChild(CSS);
    });
  }
}
