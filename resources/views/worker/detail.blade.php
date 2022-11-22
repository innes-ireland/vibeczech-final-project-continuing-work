@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Worker</title>
  @vite('resources/css/worker-detail.scss')
@endsection

{{-- Content section --}}
@section('content')
<div class="worker_detail">

  <h1>Detail page of user {{ $user->first_name }}</h1>

  <div class="graph_container"><p>placeholder gc</p></div>
  
  <div class="exposure_record"><p>placeholder er</p></div>

</div>
@endsection
