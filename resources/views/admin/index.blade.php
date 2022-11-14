@extends('layouts.main')
@include('layouts.header')
@include('layouts.footer')
{{-- @include('admin.modals') --}}

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



  <div class="graph-container"></div>

</div>

@endsection

{{-- DoD: Page loads when URL (VibeCzech/admin) is entered.
Recommended HTML structure:
-Overall container
-"button" for Tool Adder Modal
-Container for work parties
-Container for graph/list of workers--}}