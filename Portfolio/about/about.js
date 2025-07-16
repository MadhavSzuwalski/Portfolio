//📌 Simple function for displaying text
function aboutChoice(e, element) {
  let contextTitle = document.getElementById("aboutTitle");
  let contextContent = document.getElementById("aboutTextContent");
  let options = document.querySelectorAll(".sideButton");
  options.forEach((option) => option.classList.remove("active"));
  element.classList.add("active");

  switch (e) {
    case "1":
      document.getElementById("aboutTextContent").classList = null;
      document.getElementById("aboutTextContent").classList = "about1 active";
      if (settings.language == "en") {
        contextTitle.innerText = "About me";
        contextContent.innerHTML = `<div>Recent graduate in Business Psychology now completing a Programming Technician qualification. I bridge human-centric insight with technical know-how. My background in customer service and B2B sales means I'm comfortable translating complex requirements into clear, actionable tasks and documentation that will help the development team deliver value efficiently.</div>

        <div>I have built small web projects end-to-end using HTML5, CSS3, JavaScript, PHP 8.3, and SQL, and I'm comfortable administering relational databases with MySQL. I'm eager to deepen these skills in a professional setting – learning modern frameworks, mastering real-world workflows, and expanding into new languages.
        </div>

        <div>I'm now eager to launch my IT career, applying my mix of behavioural science, programming skills and commercial awareness to build products that solve real user problems and drive measurable business results.</div>
        <div><b>Let's create something great together!</b></div>`;
      } else if (settings.language == "pl") {
        contextTitle.innerText = "O mnie";
        contextContent.innerHTML = `<div>Niedawno ukończyłem studia Psychologii w Biznesie, a obecnie kształcę się na Technika Programistę i potrafię połączyć głębsze zrozumienie ludzkich potrzeb z wiedzą techniczną. Moje doświadczenie w obsłudze klienta oraz sprzedaży B2B sprawia, że swobodnie przekładam złożone wymagania na jasne, konkretne zadania i dokumentację, które wesprą zespół w efektywnym realizowaniu celów biznesowych.</div>

        <div>Realizowałem małe projekty webowe z wykorzystaniem HTML5, CSS3, JavaScript, PHP 8.3 i SQL. Potrafię administrować relacyjnymi bazami danych w MySQL. Z chęcią rozwinę te umiejętności w środowisku zawodowym. Chcę poznać nowoczesne frameworki, opanować praktyczne procesy pracy wykorzystywane w profesjonalnym środowisku i rozwijać się w nowych językach programowania.</div>

        <div>Obecnie jestem gotów rozpocząć karierę w branży IT, łącząc swoją wiedzę psychologiczną, umiejętności programistyczne i świadomość biznesową, aby tworzyć produkty rozwiązujące realne problemy użytkowników i przynoszące mierzalne korzyści biznesowe.</div>

        <div><b>Stwórzmy razem coś wyjątkowego!</b></div>`;
      }
      currentTab = "1";
      break;
    case "2":
      document.getElementById("aboutTextContent").classList = null;
      document.getElementById("aboutTextContent").classList = "about2";
      if (settings.language == "en") {
        contextTitle.innerText = "Education";
        contextContent.innerHTML = `<article class="educationEntry">
      <div class="educationDates">09.2024 - Present</div>
      <h2 class="educationTitle">Programming Technician</h2>
      <div class="educationInstitution">Plus Edukacja Centrum Kształcenia Poznań</div>
      </article>

    <article class="educationEntry">
      <div class="educationDates">03.2021 - 07.2024</div>
      <h2 class="educationTitle">Psychology in Business</h2>
      <div class="educationInstitution">WSB Merito University in Poznań</div>
    </article>`;
      } else if (settings.language == "pl") {
        contextTitle.innerText = "Edukacja";
        contextContent.innerHTML = `<article class="educationEntry">
      <div class="educationDates">09.2024 - Obecnie</div>
      <h2 class="educationTitle">Technik Programista</h2>
      <div class="educationInstitution">Plus Edukacja Centrum Kształcenia Poznań</div>
      </article>

    <article class="educationEntry">
      <div class="educationDates">03.2021 - 07.2024</div>
      <h2 class="educationTitle">Psychologia w Biznesie</h2>
      <div class="educationInstitution">Uniwersytet WSB Merito Poznań</div>
    </article>`;
      }
      currentTab = "2";
      break;
    case "3":
      document.getElementById("aboutTextContent").classList = null;
      document.getElementById("aboutTextContent").classList = "about3";
      if (settings.language == "en") {
        contextTitle.innerText = "Job experience";
        contextContent.innerHTML = `<article class="job">
      <h2>Account Manager</h2>
      <div class="meta"><span class="company">OLX Group</span><span class="dates">07.2024 - 07.2025</span></div>
      <ul>
        <li>Managed a portfolio of over 600 automotive-industry clients, acting as their primary commercial point of contact.</li>
        <li>Cultivated strong, trust-based business relationships that improved satisfaction and retention.</li>
        <li>Represented the company at industry events, showcasing solutions, strengthening brand presence, and generating qualified leads.</li>
        <li>Drove both customer-acquisition campaigns and win-back initiatives, expanding the active client base.</li>
        <li>Represented the Sales team in meetings with Product, conveying market feedback and aligning roadmap priorities.</li>
      </ul>
    </article>

    <article class="job">
      <h2>Recruiter</h2>
      <div class="meta"><span class="company">The Adecco Group</span><span class="dates">09.2023 - 03.2024</span></div>
      <ul>
        <li>Ran nationwide recruitment campaigns, sourcing candidates across multiple Polish cities.</li>
        <li>Coordinated hiring efforts with regional branches throughout Poland.</li>
        <li>Partnered closely with cross-functional departments to meet staffing targets.</li>
        <li>Managed all email and phone correspondence with clients, medical clinics, wholesalers, and OHS specialists, completing required formalities and hitting agreed deadlines.</li>
        <li>Updated and expanded knowledge bases on clients and recruitment workflows, including requirements and site locations, accelerating order fulfillment.</li>
        <li>Maintained meticulous, audit-ready documentation of recruitment activities, enabling compliance checks and in-depth process-efficiency analysis.</li>
      </ul>
    </article>

    <article class="job">
      <h2>Business Partner Support Specialist</h2>
      <div class="meta"><span class="company">Booking Holdings Inc.</span><span class="dates">06.2022 - 09.2023</span></div>
      <ul>
        <li>Assisted business partners over the phone and through email in managing their properties on Booking.com portal in English and Polish.</li>
        <li>Maintained a positive image of the company and strengthened relations with business partners.</li>
        <li>Coached new hires in side-by-side sessions to accelerate their performance.</li>
        <li>Delivered floor-walking support to colleagues from the foreign branch.</li>
        <li>Co-authored an internal knowledge base that streamlined onboarding for new agents.</li>
      </ul>
    </article>

    <article class="job">
      <h2>Back Office Specialist</h2>
      <div class="meta"><span class="company">PayPal Holdings Inc.</span><span class="dates">04.2021 - 09.2021</span></div>
      <ul>
        <li>Verified identity documents for clients worldwide.</li>
        <li>Reviewed and approved financial transactions for compliance.</li>
        <li>Identified indicators of illegal or fraudulent activity.</li>
        <li>Escalated suspicious cases for in-depth investigation.</li>
        <li>Corresponded with clients via email to resolve verification issues.</li>
        <li>Upheld the company's reputation through diligent, customer-focused service.</li>
      </ul>
    </article>`;
      } else if (settings.language == "pl") {
        contextTitle.innerText = "Doświadczenie zawodowe";
        contextContent.innerHTML = `<article class="job">
      <h2>Opiekun Handlowy</h2>
      <div class="meta"><span class="company">OLX Group</span><span class="dates">07.2024 - 07.2025</span></div>
      <ul>
        <li>Zarządzanie portfolio ponad 600 klientów z branży motoryzacyjnej, pełniąc rolę głównego kontaktu.</li>
        <li>Budowanie trwałych, opartych na zaufaniu relacji biznesowych w celu zwiększenia satysfakcji i lojalności klientów.</li>
        <li>Reprezentowanie firmy na wydarzeniach branżowych – prezentacja rozwiązań, wzmacnianie obecności marki, pozyskiwanie leadów.</li>
        <li>Realizacja działań ukierunkowanych na pozyskiwanie nowych oraz reaktywację utraconych klientów, w celu poszerzenia bazy aktywnych kontrahentów.</li>
        <li>Reprezentowanie zespołu sprzedaży w spotkaniach produktowych, przekazywanie informacji rynkowych, bieżących potrzeb oraz współtworzenie kierunków rozwoju produktu.</li>
      </ul>
    </article>

    <article class="job">
      <h2>Rekruter</h2>
      <div class="meta"><span class="company">The Adecco Group</span><span class="dates">09.2023 - 03.2024</span></div>
      <ul>
        <li>Prowadzenie ogólnokrajowych kampanii rekrutacyjnych i pozyskiwanie kandydatów w wielu miastach Polski.</li>
        <li>Koordynowanie procesów rekrutacyjnych z oddziałami regionalnymi w całym kraju.</li>
        <li>Współpraca z zespołami międzyfunkcyjnymi w celu realizacji celów kadrowych.</li>
        <li>Obsługa korespondencji mailowej i telefonicznej z klientami, przychodniami, hurtowniami oraz specjalistami BHP, w celu dopełnienia wszystkich formalności i dotrzymania ustalonych terminów.</li>
        <li>Aktualizowanie i rozwijanie baz wiedzy dotyczących klientów i procesów rekrutacyjnych, z uwzględnieniem wymagań i lokalizacji, co przyspieszało obsługę zleceń.</li>
        <li>Prowadzenie szczegółowej dokumentacji działań rekrutacyjnych, zapewniając zgodność z wymogami audytowymi i umożliwiając analizę efektywności procesów.</li>
      </ul>
    </article>

    <article class="job">
      <h2>Specjalista ds. Wsparcia Partnerów Biznesowych</h2>
      <div class="meta"><span class="company">Booking Holdings Inc.</span><span class="dates">06.2022 - 09.2023</span></div>
      <ul>
        <li>Telefoniczne i mailowe wspieranie Partnerów biznesowych w zarządzaniu obiektami na portalu rezerwacyjnym w języku polskim i angielskim.</li>
        <li>Dbanie o wizerunek firmy i utrzymywanie dobrych relacji z partnerami biznesowymi.</li>
        <li>Prowadzenie spotkań 1 na 1 z nowymi pracownikami w formie side by side w celu poprawy jakości i efektywności ich pracy.</li>
        <li>Wsparcie w formie floorwalkingu dla nowych pracowników z zagranicznego oddziału.</li>
        <li>Współtworzenie wewnętrznej bazy wiedzy usprawniającej onboarding nowych agentów.</li>
      </ul>
    </article>

    <article class="job">
      <h2>Specjalista Działu Back Office</h2>
      <div class="meta"><span class="company">PayPal Holdings Inc.</span><span class="dates">04.2021 - 09.2021</span></div>
      <ul>
        <li>Weryfikowanie dokumentów tożsamości klientów z całego świata.</li>
        <li>Przeglądanie i zatwierdzanie transakcji finansowych pod kątem zgodności.</li>
        <li>Identyfikowanie wskaźników nielegalnej działalności.</li>
        <li>Eskalowanie podejrzanych przypadków do pogłębionej analizy.</li>
        <li>Prowadzenie korespondencji e-mailowej z klientami w celu rozwiązania problemów z weryfikacją.</li>
        <li>Podtrzymywanie reputacji firmy poprzez rzetelną, zorientowaną na klienta obsługę.</li>
      </ul>
    </article>`;
      }
      currentTab = "3";
      break;
    case "4":
      document.getElementById("aboutTextContent").classList = null;
      document.getElementById("aboutTextContent").classList = "about4";
      if (settings.language == "en") {
        contextTitle.innerText = "Competencies";
        contextContent.innerHTML = `<article class="competencies">
      <h2>Languages</h2>
      <ul>
        <li>Polish<p>Native</p></li>
        <li>English<p>Fluent</p></li>
      </ul>
    </article>
    
    <article class="competencies">
      <h2>Hard skills</h2>
      <ul>
        <li>Visual Studio Code<p>Proficient in using VS Code as my primary IDE. I regularly push changes to Git and manage GitHub repositories directly from the editor. Comfortable working with extensions like Prettier - Code formatter to maintain clean and consistent code formatting.</p></li>
        <li>HTML5<p>Skilled in writing semantic, well-structured HTML5 for building accessible and responsive web pages. Familiar with key elements and best practices, including forms, multimedia integration (audio/video), and modern layout techniques using &ltsection&gt, &ltarticle&gt, and other semantic tags.</p></li>
        <li>CSS3<p>Proficient in using CSS3 to design responsive and visually engaging user interfaces. Skilled with Flexbox, Grid, media queries, and modern CSS features for layout and interactivity. My background in psychology in business enhances my ability to create user-friendly, intuitive designs that align with UX/UI best practices, focusing on usability, clarity, and user behavior.</p></li>
        <li>JavaScript<p>Familiar with the basics of JavaScript, including variables, functions, and simple DOM manipulation. Currently expanding my skills to better understand dynamic web functionality. Motivated to learn popular libraries and frameworks such as jQuery and React to build more interactive and responsive applications.</p></li>
        <li>PHP 8.3<p>Familiar with PHP syntax and structure, and able to perform basic server-side scripting tasks. I can connect to a MySQL database and perform common database operations.</p></li>
        <li>SQL<p>Familiar with writing SQL queries to manage and interact with relational databases. Able to perform key operations such as selecting, inserting, updating, and deleting data, along with using WHERE clauses, ORDER BY, LIMIT, and aggregate functions like COUNT, AVG, and SUM. Comfortable filtering and grouping results with GROUP BY and HAVING, and working with basic joins to combine data from multiple tables.</p></li>
        <li>MySQL<p>Experienced in using MySQL to create and manage databases and tables, run SQL queries, and connect with PHP. Able to perform key operations like inserting, updating, and deleting data, as well as managing user accounts and permissions. Familiar with tools like phpMyAdmin for easier database administration.</p></li>
      </ul>
    </article>

    <article class="competencies">
      <h2>Soft skills</h2>
      <ul>
        <li>Learning attitude<p>Demonstrates a proactive approach to acquiring new skills and knowledge. Adapts quickly to evolving technologies, embraces feedback, and consistently seeks opportunities for personal and professional growth.</li>
        <li>Ownership<p>Takes full responsibility for tasks and outcomes, proactively identifies and solves problems, and holds oneself accountable to high standards of performance.</p></li> 
        <li>Information searching<p>Proficient at efficiently locating, verifying, and synthesizing relevant information from diverse sources. This skill is reinforced by academic training in business psychology, which focused on research methods, critical evaluation, and drawing conclusions based on evidence.</p></li>
        <li>Analytical thinking<p>Built a strong analytical foundation through a math-physics-chemistry focused high school education. In previous roles, applied logical reasoning and problem-solving skills to investigate and resolve customer issues efficiently, often identifying root causes and proposing process improvements.</p></li>
        <li>Creative thinking<p>Applies imaginative yet structured approaches to develop non-trivial solutions for complex challenges. Balances innovation with practicality to resolve issues, and add unique value.</p></li>
        <li>Effective communication<p>Built a strong foundation through hands-on experience in customer service and sales, complemented by academic studies in business psychology. Skilled at conveying ideas clearly, adapting messaging to diverse audiences, and fostering positive interpersonal relationships.</p></li>
      </ul>
    </article>`;
      } else if (settings.language == "pl") {
        contextTitle.innerText = "Kompetencje";
        contextContent.innerHTML = `<article class="competencies">
      <h2>Języki</h2>
      <ul>
        <li>Polski<p>Ojczysty</p></li>
        <li>Angielski<p>Płynny</p></li>
      </ul>
    </article>
    
    <article class="competencies">
      <h2>Umiejętności twarde</h2>
      <ul>
        <li>Visual Studio Code<p>Jestem biegły w obsłudze Visual Studio Code jako głównego IDE, regularnie wypycham zmiany do Git i prowadzę repozytoria GitHub bez opuszczania edytora. Rozszerzenia takie jak Prettier dbają o czysty wygląd kodu.</p></li>
        <li>HTML5<p>Swobodnie posługuję się HTML5, pisząc logicznie uporządkowany, semantyczny kod z myślą o dostępności i responsywności. Nie są mi obce formularze, multimedia (audio i wideo) oraz nowoczesne techniki layoutu z użyciem znaczników &ltsection&gt, &ltarticle&gt i pokrewnych.</p></li>
        <li>CSS3<p>Swobodnie projektuję responsywne i atrakcyjne interfejsy użytkownika w CSS3, wykorzystując Flexbox, Grid, media queries oraz inne nowoczesne możliwości języka. Moje wykształcenie z psychologii w biznesie pomaga mi tworzyć intuicyjne rozwiązania zgodne z najlepszymi praktykami UX/UI, koncentrujące się na użyteczności, przejrzystości i zachowaniach użytkowników.</p></li>
        <li>JavaScript<p>Jestem zaznajomiony z kluczowymi elementami JavaScript, takimi jak deklaracja zmiennych, pisanie funkcji czy proste modyfikacje DOM. Ciągle rozwijam swoje umiejętności, by lepiej zrozumieć dynamikę stron internetowych. Jestem zmotywowany do nauki popularnych bibliotek i frameworków, takich jak jQuery czy React, aby tworzyć bardziej interaktywne aplikacje.</p></li>
        <li>PHP 8.3<p>Znam składnię i strukturę PHP oraz potrafię wykonywać podstawowe skrypty po stronie serwera. Bez problemu łączę się z bazą MySQL i realizuję typowe operacje na danych.</p></li>
        <li>SQL<p>Posiadam praktyczne umiejętności w pisaniu zapytań SQL, dzięki którym efektywnie zarządzam danymi w relacyjnych bazach. Potrafię wykonywać podstawowe operacje jak wybieranie, wstawianie, updatowanie i usuwanie danych, jak i nieco bardziej zaawansowane jak WHERE, ORDER BY, LIMIT, funkcje agregujące COUNT, AVG, SUM. Radzę sobie też z GROUP BY, HAVING i podstawowymi joinami do łączenia danych z wielu tabel.</p></li>
        <li>MySQL<p>Posiadam doświadczenie w MySQL. Tworzę i utrzymuję bazy danych, piszę zapytania SQL i łączę je z kodem PHP. Sprawnie wykonuję kluczowe operacje jak wstawianie, updatowanie i usuwanie rekordów, konfiguruję konta oraz nadaję uprawnienia użytkownikom. Wspomagam się phpMyAdmin dla wygodniejszego zarządzania bazami i dostępami.</p></li>
      </ul>
    </article>

    <article class="competencies">
      <h2>Umiejętności miękkie</h2>
      <ul>
        <li>Nastawienie na rozwój<p>Wykazuję proaktywne podejście do zdobywania nowych umiejętności i wiedzy. Szybko dostosowuję się do zmieniających się technologii. Przyjmuję feedback i konsekwentnie poszukuję możliwości rozwoju osobistego i zawodowego.</li>
        <li>Ownership<p>Biorę pełną odpowiedzialność za powierzone zadania i ich rezultaty, proaktywnie identyfikuję i rozwiązuję problemy oraz stawiam sobie wysokie standardy wydajności.</p></li> 
        <li>Wyszukiwanie informacji<p>Potrafię szybko i skutecznie znajdować, sprawdzać oraz łączyć informacje z różnych źródeł. Wzmocniłem tę umiejętność podczas studiów z psychologii w biznesie, gdzie dużą wagę przykładano do badań, analizy danych i wyciąganie wniosków opartych o rzetelne dane.</p></li>
        <li>Myślenie analityczne<p>Zbudowałem solidne podstawy analityczne dzięki profilowi matematyczno-fizyczno-chemicznemu w liceum. W poprzednich pracach wykorzystywałem logiczne rozumowanie i umiejętność rozwiązywania problemów do badania i rozwiązywania problemów klientów, często proponując usprawnienia procesów.</p></li>
        <li>Myślenie kreatywne<p>Stosuję pomysłowe i uporządkowane podejścia, aby wymyślać nietrywialne rozwiązania złożonych problemów. Łączę innowacyjność z praktycznym podejściem, aby radzić sobie z wyzwaniami i wnosić unikalną wartość.</p></li>
        <li>Efektywna komunikacja<p>Zbudowałem solidne podstawy dzięki praktycznemu doświadczeniu w obsłudze klienta i sprzedaży, uzupełnionemu studiami z psychologii biznesu. Umiejętnie przekazuję swoje myśli, dopasowuję sposób komunikacji do rozmówcy i dbam o dobre relacje interpersonalne.</p></li>
      </ul>
    </article>`;
      }
      currentTab = "4";
      break;
    case "5":
      document.getElementById("aboutTextContent").classList = null;
      document.getElementById("aboutTextContent").classList = "about5";
      if (settings.language == "en") {
        contextTitle.innerText = "Hobby";
        contextContent.innerHTML = `<div>
      <h2>Path of Exile</h2>
      <div>Passionate about exploring the game's complex systems, including character builds, crafting mechanics, and its dynamic player-driven economy. This requires strategic planning, data analysis, and continuous adaptation –  skills directly applicable to IT roles involving problem-solving, systems thinking, and working with evolving technologies.</div>
    </div>
    <div>
      <h2>Climbing</h2>
      <div>In my free time, besides gaming, I go climbing, which allows me to practice logical thinking in a different environment (especially bouldering) and build determination. It’s also a great way to balance the sedentary nature of computer-based work.</div>
    </div>`;
      } else if (settings.language == "pl") {
        contextTitle.innerText = "Hobby";
        contextContent.innerHTML = `<div>
      <h2>Path of Exile</h2>
      <div>Uwielbiam zgłębiać złożone systemy gry – od tworzenia buildów, przez craft, aż po ekonomię sterowaną przez graczy. Wymaga to strategicznego planowania, analizy danych i ciągłego dostosowywania się – umiejętności te znajdują bezpośrednie zastosowanie w branży IT, szczególnie w obszarach związanych z rozwiązywaniem problemów, myśleniem systemowym i pracą z rozwijającymi się technologiami.</div>
    </div>
    <div>
      <h2>Wspinaczka</h2>
      <div>W wolnym czasie poza graniem chodzę na wspinaczkę, która pozwala mi ćwiczyć logiczne myślenie w innym środowisku (szczególnie bouldering) i determinację. To też świetny sposób, aby zrównoważyć siedzący tryb pracy przy komputerze.</div>
    </div>`;
      }
      currentTab = "5";
      break;
  }
  document.getElementById("aboutTextContent").scrollTo(0, 0);
}
