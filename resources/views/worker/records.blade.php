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

  <h1>Exposure Records</h1>

  {{-- something like {{ $user->first_name }} {{ $user->first_name }} to personalize the header --}}

  <div class="view_records" id="view_records"></div>
    @viteReactRefresh
    @vite('resources/js/ViewExposureRecords.jsx')


</div>
@endsection
