@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Login</title>
  <link rel="stylesheet" href="{{ asset('css/modal.css')}}">
  <link rel="stylesheet" href="{{ asset('css/login.scss')}}">
@endsection


{{-- Content section --}}
@section('content')
    <div id='root' class='container'>
        @viteReactRefresh
        @vite('resources/js/Login.jsx')
    </div>
@endsection

</html>