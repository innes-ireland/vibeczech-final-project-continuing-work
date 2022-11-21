@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Login</title>
  @vite('resources/css/modal.css')
  @vite('resources/css/login.scss')
  @vite('resources/css/register.scss')
@endsection


{{-- Content section --}}
@section('content')
    <div id='root' class='container'>
        @viteReactRefresh
        @vite('resources/js/Login.jsx')
    </div>
@endsection

</html>