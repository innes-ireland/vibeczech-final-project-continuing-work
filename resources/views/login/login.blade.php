<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>VibeCzech | Login</title>
  <!-- <link rel="stylesheet" href="{{ asset('css/registration-modal.css')}}"> -->
  <style>
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
    }

    .modal__content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
        height: 20%;

    }
  </style>
</head>

<body>
    <div id='root' class='container'>
        @viteReactRefresh
        @vite('resources/js/registration-modal.jsx')
    </div>
</body>

</html>