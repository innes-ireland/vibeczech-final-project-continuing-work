<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>VibeCzech | Login</title>
  <style>
    .modal {
        display: none;
    }
  </style>
</head>

<body>
    <div id='root' class='login__form'>
        @viteReactRefresh
        @vite('resources/js/registration-modal.jsx')
    </div>

    
    @yield('registration-modal')


</body>

</html>