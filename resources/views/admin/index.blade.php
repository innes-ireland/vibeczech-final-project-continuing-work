@extends('layouts.main')
@include('layouts.header')
@include('layouts.footer')
{{-- @include('admin.modals') --}}

@section('content')

<div class="admin-index">
  {{-- styling needed for modals display, below. Potentially we can have this outside but for now its here --}}
    <style>
    /* .modal {
        display: none;
    } */

    .work-party-modal {
      display: none;
    }
  </style>

  <h1>admin index content goes here</h1>
  
  {{-- here comes add tool modal --}}

  {{-- @include('admin.modals') --}}
<div id='root' >
  {{-- @include('admin.modals') --}}
        @viteReactRefresh
        @vite('resources/js/add-tool-modal.jsx')
         @include('admin.modals')
           {{-- @yield('add-tool-modal')  --}}
          {{-- @include('admin.modals') --}}
        
  </div>
   {{-- @yield('add-tool-modal')  --}}


   
{{-- here comes work parties modal --}}
  {{-- <div id='root2' class="work-parties-container">
       @viteReactRefresh
        @vite('resources/js/work-party-modal.jsx')

  </div> --}}
    {{-- @yield('work-party-modal') --}}



  <div class="graph-container"></div>

</div>

@endsection

{{-- DoD: Page loads when URL (VibeCzech/admin) is entered.
Recommended HTML structure:
-Overall container
-"button" for Tool Adder Modal
-Container for work parties
-Container for graph/list of workers--}}