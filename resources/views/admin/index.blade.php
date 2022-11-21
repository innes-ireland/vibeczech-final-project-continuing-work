@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Admin</title>
  @vite('resources/css/admin.scss')
  @vite('resources/css/modal.css')
@endsection


{{-- Content section --}}
@section('content')
<div class="admin-index">
  
  {{-- <h1>admin index content goes here</h1> --}}
  <div id='root'>
    @viteReactRefresh
    @vite('resources/js/Admin.jsx')
  </div>

  {{-- <h2>{{ \Auth::id() }}</h2> --}}

  <div id='add_tool_modal' >
    @viteReactRefresh
    @vite('resources/js/add-tool-modal.jsx')    
  </div>
  
  <div class="work-parties-container">
    <div id='work_party_modal' >
      @viteReactRefresh
      @vite('resources/js/work-party-modal.jsx')    
    </div>
    
    <div id='current_work_parties'>
      @viteReactRefresh
      @vite('resources/js/currentWorkTeams')
    </div>
  </div>

  <div class="exposure-calculator">
    <div id='exposure_calculator'>
    @viteReactRefresh
    @vite('resources/js/exposure-calculator.jsx')
    </div>
  </div>

</div>

@endsection

{{-- DoD: Page loads when URL (VibeCzech/admin) is entered.
Recommended HTML structure:
-Overall container
-"button" for Tool Adder Modal
-Container for work parties
-Container for graph/list of workers--}}