@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Exposure Calculator</title>
  @vite('resources/css/admin.scss')
  @vite('resources/css/modal.css')
  @vite('resources/css/calculator.scss')

@endsection


{{-- Content section --}}
@section('content')
<div class="admin-index">
  


  <div class="exposure-calculator">
    <div id='exposure_calculator'>
    @viteReactRefresh
    @vite('resources/js/exposure-calculator.jsx')
    </div>
  </div>

</div>

@endsection