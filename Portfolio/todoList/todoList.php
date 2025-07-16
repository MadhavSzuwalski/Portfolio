<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <!--📌 No need to remove ../ as it can't leave public_html but is useful when on localhost -->
  <link rel="stylesheet" href="../style/layout/root.css" />
  <link rel="stylesheet" href="../style/layout/header&nav.css" />
  <link rel="stylesheet" href="../style/layout/todoList.css" />
  <link rel="stylesheet" href="../style/layout/footer.css" />
  <link rel="icon" type="image/png" href="../Resources/logoDark.png">

  <!--📌 For local use 
  <script src="todoList.js" defer></script> 
  -->
  <script src="todoList/todoList.js" defer></script>
</head>

<body>
  <?php include("../global/header&nav.html") ?>
  <main id="todoMain">
    <div class="todoList">
      <h1></h1>
      <form id="todoForm">
        <input type="text" id="todoInput" placeholder=" " maxlength="80" />
        <label for="todoInput" id="todoLabel"></label>
        <button id="submitBtn"></button>
      </form>
      <ul id="tasks">
      </ul>
    </div>
  </main>
  <?php include("../global/footer.html") ?>
</body>

</html>