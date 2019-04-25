<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title> In My Feelings </title>
<link href="https://fonts.googleapis.com/css?family=Archivo+Black|Judson:400,700" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<body>
  <nav id="nav">
    <img id="logo" src="images/logo.png" alt="question mark logo" />
    <ul>
      <li><a href="#"> HOME </a></li>
      <li><a href="#"> ABOUT </a></li>
      <li><a href="#"> RANDOM </a></li>
    </ul>
  </nav>
  <main id="main">
    <div id="background">
      <h1> What are you feeling? </h1>
      <input type="text" id="feeling"/>
      <button id="submit" type="button"> Find my feeling! </button>
      <div id="results">
        <div id="emotionresult"></div>
        <div id="bookresult"></div>
        <div id="movieresult"></div>
      </div>
    </div>
  </main>
  <footer id="footer">
    <p>Copyright Jenna Greenberg 2019 </p>
  </footer>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.0.min.js" integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=" crossorigin="anonymous"></script>
  <script src="script/script.js"></script>
</body>

</html>
