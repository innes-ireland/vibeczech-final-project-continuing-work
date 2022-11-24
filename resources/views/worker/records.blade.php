@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Worker Exposure Records</title>





  {{-- THE VITE MIGHT NEED TO BE CHANGED FOR THE CSS--}}




  @vite('resources/css/worker-detail.scss')
@endsection

{{-- Content section --}}
@section('content')
<div class="worker_records">

  <h1>Exposure Records for {{ $worker->first_name }} {{  $worker->last_name }}</h1>

  
  <div class="view_records" id="view_records"></div>
  @viteReactRefresh
  @vite('resources/js/ViewExposureRecords.jsx')
  

  {{-- This is an attempt to pass a variable from laravel to react --}}
  <div id="worker-id-var-for-react" name={{ $worker->id }}></div>

</div>
@endsection
