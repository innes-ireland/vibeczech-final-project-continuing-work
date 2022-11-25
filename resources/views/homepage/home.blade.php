<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon.png') }}">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Rubik+Mono+One&family=Saira:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet"> 
        <!-- Styles -->
        @vite('resources/css/universal-index.css')
        @vite('resources/css/home.scss')
        
        @yield('head')
    </head>


    <body>
      @include('layouts.header')
      @yield('content') 
  
    <h1 id="slide-in-text" class="animation-no">
                VibeCzech
</h1>
<h3 id="slide-in" class="animation">Designed to allow both management and operators to calculate, monitor and plan exposure to hand arm vibrations (HAV's) from power tool operation.</h3>
<div class="images-div">
<img src="{{ Vite::asset('public/icons/work-list.png') }}" alt="work-list" class="homepage-image">
<img src="{{ Vite::asset('public/icons/chain-saw.png') }}" alt="chain-saw" class="homepage-image">
<img src="{{ Vite::asset('public/icons/worker.png') }}" alt="worker" class="homepage-image">

</div>
  <div class="container">
    <div class="center">
      <button class="btn">
        <a href="/login">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>LOGIN/REGISTER</span>
        </a>
      </button>
    </div>
  </div>
    

</div>
      @include('layouts.footer')

    </body>
</html>

{{-- window.location.replace('/login') --}}

    

