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
        @vite('resources/css/documentation.scss')
        
        @yield('head')
    </head>


<body>
          @include('layouts.header')
      @yield('content') 
<div class = "documentation_container">
    <h1> External Resources </h1>
    <div class= "icon_top">
        <img src="{{ Vite::asset('public/icons/folder.png') }}" alt="work-list" class="folder-image">
    <div class = "eu_docs">
    <h2> For EU Employers and Workers </h2>
    <ul>
    <li><a href="https://osha.europa.eu/en/legislation/directives/19"> European Agency for health and safety at work guidelines </a></li>
    <li><a href="https://resource.isvr.soton.ac.uk/HRV/VIBGUIDE/HAV%20Good%20practice%20Guide%20V7.7%20English%20260506.pdf"> EU good practice guide </a></li>
    </ul>
    </div>
    <div class="uk_docs">
    <h2> For UK Employers and Workers </h2>
    <ul>
    <li><a href= "https://www.hse.gov.uk/vibration/hav/indg296.htm"> HSE guidance on Hand Arm Vibrations for employees </a></li>
    <li><a href= "https://www.hse.gov.uk/pubns/indg175.htm"> HSE guidance on Hand Arm Vibrations for employers </a></li>
    </ul>
    <div class="us_docs">
        <h2> For US Employers and Workers </h2>
        <ul>
            <li> <a href="https://resource.isvr.soton.ac.uk/HRV/VIBGUIDE/HAV%20Good%20practice%20Guide%20V7.7%20English%20260506.pdf"> NIOSH good practice guide </a>
    </div>
</div>
    <div class="footer_container">
      @include('layouts.footer')
    </div>
</body>
</html>