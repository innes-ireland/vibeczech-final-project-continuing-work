@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Admin</title>
  @vite('resources/css/admin.scss')
  @vite('resources/css/modal.css')
@endsection


{{-- Content section --}}
@section('content')
<div class='admin_index'>
  
  <div id='root'>
    @viteReactRefresh
    @vite('resources/js/Admin.jsx')
  </div>

  <div id='add_tool_modal' >
    @viteReactRefresh
    @vite('resources/js/add-tool-modal.jsx')    
  </div>
  
  <div class='work_parties_container'>
    <div id='work_party_modal' >
      @viteReactRefresh
      @vite('resources/js/work-party-modal.jsx')    
    </div>
    
    <div id='current_work_parties'>
      @viteReactRefresh
      @vite('resources/js/currentWorkTeams')
    </div>
  </div>

  <div class='graph_container'></div>

</div>

@endsection
