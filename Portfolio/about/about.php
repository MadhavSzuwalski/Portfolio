<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <!--📌 No need to remove ../ as it can't leave public_html but is useful when on localhost -->
  <link rel="stylesheet" href="../style/layout/root.css" />
  <link rel="stylesheet" href="../style/layout/header&nav.css" />
  <link rel="stylesheet" href="../style/layout/about.css" />
  <link rel="stylesheet" href="../style/layout/footer.css" />
  <link rel="icon" type="image/png" href="../Resources/logoDark.png">

  <!--📌 For local use
  <script src="about.js" defer></script> 
  -->
  <script src="about/about.js" defer></script>
</head>

<body>
  <?php include("../global/header&nav.html") ?>
  <main id="main">
    <div id="aboutSideBar">
      <button class="sideButton" page="1" onclick="aboutChoice('1', this)"></button>
      <button class="sideButton" page="2" onclick="aboutChoice('2', this)"></button>
      <button class="sideButton" page="3" onclick="aboutChoice('3', this)"></button>
      <button class="sideButton" page="4" onclick="aboutChoice('4', this)"></button>
      <button class="sideButton" page="5" onclick="aboutChoice('5', this)"></button>
    </div>
    <div id="aboutTextArea">
      <h2 id="aboutTitle"></h2>
      <div id="aboutTextContent"></div>
    </div>
  </main>
  <?php include("../global/footer.html") ?>
</body>

</html>