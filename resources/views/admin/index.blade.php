@extends('layouts.main')

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>VibeCzech | Admin</title>
  <link rel="stylesheet" href="{{ asset('css/universal-index.css')}}">
  <link rel="stylesheet" href="{{ asset('css/modal.css')}}">
</head>

@section('content')

<div class="admin-index">
  


  <h1>admin index content goes here</h1>
  
  {{-- here comes add tool modal --}}


<div id='add_tool_modal' >
 
        @viteReactRefresh
        @vite('resources/js/add-tool-modal.jsx')    
  </div>
 


   
{{-- here comes work parties modal --}}
<div id='work_party_modal' >
 
        @viteReactRefresh
        @vite('resources/js/work-party-modal.jsx')    
  </div>

  <div class="work-parties-container"></div>

  <div class="graph-container"></div>

</div>

@endsection

{{-- DoD: Page loads when URL (VibeCzech/admin) is entered.
Recommended HTML structure:
-Overall container
-"button" for Tool Adder Modal
-Container for work parties
-Container for graph/list of workers--}}