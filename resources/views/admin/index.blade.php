@extends('layouts.main')
@include('layouts.header')
@include('layouts.footer')

@section('content')

<div class="admin-index">

  <h1>admin index content goes here</h1>
  
  <a class="add-tool-button"> Tool Adder </a>

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