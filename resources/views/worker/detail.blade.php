@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Worker</title>
  @vite('resources/css/worker-detail.scss')
@endsection

{{-- Content section --}}
@section('content')
<div class="worker_detail">

  <h1>Welcome, {{ $user->first_name }}</h1>

  <div class="exposure_record" id="admin_button"></div>
    @viteReactRefresh
    @vite('resources/js/Worker.jsx')
    
{{-- @if(Auth::user()->type == 'is_admin')
<a href="/" class="btn btn-default"> ADD</a>
@endif --}}


</div>
@endsection
