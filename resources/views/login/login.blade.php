@extends('layouts.main')

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>VibeCzech | Login</title>
  <link rel="stylesheet" href="{{ asset('css/universal-index.css')}}">
  <link rel="stylesheet" href="{{ asset('css/modal.css')}}">
  <link rel="stylesheet" href="{{ asset('css/login.scss')}}">

</head>

@section('content')
    <div id='root' class='container'>
        @viteReactRefresh
        @vite('resources/js/Login.jsx')
    </div>
@endsection

</html>