//📌 Simple function for language select, doesn't contain all translations
function applyLanguage() {
  // Nav language
  if (settings.language == "en") {
    document.querySelector("nav > a").innerText = "About me";
    document.querySelector("nav > div:nth-of-type(1)").innerHTML = `My projects
        <div id="snake" onclick="redirect('snake')" class="projectsList">Snake</div>

        <div id="todoList" onclick="redirect('todoList')" class="projectsList">
      To-Do List
    </div>`;
    ("My projects");
    document.querySelector("nav > div:nth-of-type(2)").innerText =
      "Contact me!";
  } else if (settings.language == "pl") {
    document.querySelector("nav > a").innerText = "O mnie";
    document.querySelector(
      "nav > div:nth-of-type(1)"
    ).innerHTML = `Moje projekty
        <div id="snake" onclick="redirect('snake')" class="projectsList">Wąż</div>

        <div id="todoList" onclick="redirect('todoList')" class="projectsList">
      Lista zadań
    </div>`;
    document.querySelector("nav > div:nth-of-type(2)").innerText =
      "Skontaktuj się!";
  }

  // Settings language
  if (settings.language == "en") {
    document.querySelector("#settingsWindow > div > h2").innerText = "Settings";
    document.querySelector(
      "#settingsWindow > div > div > label:nth-of-type(1)"
    ).innerText = "Language";
    document.querySelector(
      "#settingsWindow > div > div > label:nth-of-type(2)"
    ).innerText = "Colour theme";
  } else if (settings.language == "pl") {
    document.querySelector("#settingsWindow > div > h2").innerText =
      "Ustawienia";
    document.querySelector(
      "#settingsWindow > div > div > label:nth-of-type(1)"
    ).innerText = "Język";
    document.querySelector(
      "#settingsWindow > div > div > label:nth-of-type(2)"
    ).innerText = "Motyw kolorystyczny";
  }

  // Contact language
  if (settings.language == "en") {
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(1)"
    ).innerText = "Phone number:";
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(2)"
    ).innerText = "E-mail address:";
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(3)"
    ).innerText = "LinkedIn profile:";
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(4)"
    ).innerText = "GitHub profile:";
  } else if (settings.language == "pl") {
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(1)"
    ).innerText = "Numer telefonu:";
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(2)"
    ).innerText = "Adres e-mail:";
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(3)"
    ).innerText = "Profil LinkedIn:";
    document.querySelector(
      "#contactDetails > div > div > label:nth-of-type(4)"
    ).innerText = "Profil GitHub:";
  }

  // Snake language, more in snake.php
  if (
    settings.language == "en" &&
    ["snake.php", "snake"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    document.getElementById("infoBox").innerText = "Snake game";
    document.querySelector(".easy").innerText = "Easy";
    document.querySelector(".medium").innerText = "Medium";
    document.querySelector(".hard").innerText = "Hard";
  } else if (
    settings.language == "pl" &&
    ["snake.php", "snake"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    document.getElementById("infoBox").innerText = "Gra wąż";
    document.querySelector(".easy").innerText = "Łatwy";
    document.querySelector(".medium").innerText = "Średni";
    document.querySelector(".hard").innerText = "Trudny";
  }

  // To-Do language
  if (
    settings.language == "en" &&
    ["todoList.php", "todoList"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    document.querySelector(".todoList > h1").innerText = "To-Do List";
    document.getElementById("todoLabel").innerText = "Enter a task";
    if (document.getElementById("submitBtn").innerText == "Edytuj") {
      document.getElementById("submitBtn").innerText = "Edit";
    } else {
      document.getElementById("submitBtn").innerText = "Add a task";
    }
    document.querySelectorAll(".editBtn").forEach((button) => {
      button.textContent = "Edit";
    });
    document.querySelectorAll(".removeBtn").forEach((button) => {
      button.textContent = "Remove";
    });
  } else if (
    settings.language == "pl" &&
    ["todoList.php", "todoList"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    document.querySelector(".todoList > h1").innerText = "Lista zadań";
    document.getElementById("todoLabel").innerText = "Wprowadź zadanie";
    if (document.getElementById("submitBtn").innerText == "Edit") {
      document.getElementById("submitBtn").innerText = "Edytuj";
    } else {
      document.getElementById("submitBtn").innerText = "Dodaj zadanie";
    }
    document.querySelectorAll(".editBtn").forEach((button) => {
      button.textContent = "Edytuj";
    });
    document.querySelectorAll(".removeBtn").forEach((button) => {
      button.textContent = "Usuń";
    });
  }

  // About me buttons language, more in about.js
  if (
    settings.language == "en" &&
    ["about.php", "about"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    document.querySelector(".sideButton:nth-of-type(1)").innerText = "About me";
    document.querySelector(".sideButton:nth-of-type(2)").innerText =
      "Education";
    document.querySelector(".sideButton:nth-of-type(3)").innerText =
      "Job experience";
    document.querySelector(".sideButton:nth-of-type(4)").innerText =
      "Competencies";
    document.querySelector(".sideButton:nth-of-type(5)").innerText = "Hobby";
  } else if (
    settings.language === "pl" &&
    ["about.php", "about"].some((suffix) =>
      window.location.pathname.endsWith(suffix)
    )
  ) {
    document.querySelector(".sideButton:nth-of-type(1)").innerText = "O mnie";
    document.querySelector(".sideButton:nth-of-type(2)").innerText = "Edukacja";
    document.querySelector(".sideButton:nth-of-type(3)").innerText =
      "Doświadczenie zawodowe";
    document.querySelector(".sideButton:nth-of-type(4)").innerText =
      "Kompetencje";
    document.querySelector(".sideButton:nth-of-type(5)").innerText = "Hobby";
  }

  // Footer language
  footerTranslation();
}
