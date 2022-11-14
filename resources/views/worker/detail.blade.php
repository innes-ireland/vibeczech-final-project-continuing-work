@extends('layouts.main')
@include('layouts.footer')

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>VibeCzech | Login</title>
  <link rel="stylesheet" href="{{ asset('css/universal-index.css')}}">

</head>

@section('content')

<div class="worker-detail">

  <h1>worker detail content goes here</h1>

  <div class="graph-container"></div>
  
  <div class="exposure-record"></div>

</div>

@endsection

{{-- DoD: Page loads when URL(VibeCzech/worker) is entered.
Recommended HTML structure:
-Overall container
-Graph section
-Record detail section --}}