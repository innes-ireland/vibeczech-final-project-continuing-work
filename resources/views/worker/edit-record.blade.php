@extends('layouts.main')

{{-- Head section --}}
@section('head')
  <title>VibeCzech | Edit Exposure Record</title>





  {{-- THE VITE MIGHT NEED TO BE CHANGED FOR THE CSS--}}




  @vite('resources/css/worker-detail.scss')
@endsection

{{-- Content section --}}
@section('content')


{{-- COULD PROBABLY USE A BETTER CLASS NAME FOR THIS DIV --}}
<div class="worker_edit_record">

  <h1>Edit Record</h1>

  <form action = "/edit/<?php echo $users[0]->id; ?>" method = "post">
      <input type = "hidden" name = "_token" value = "<?php echo csrf_token(); ?>">
  
      <table>
        <tr>
            <td>Name</td>
            <td>
              <input type = 'text' name = 'stud_name' 
                  value = '<?php echo$users[0]->name; ?>'/>
            </td>
        </tr>
        <tr>
            <td colspan = '2'>
              <input type = 'submit' value = "Update student" />
            </td>
        </tr>
      </table>
  </form>

  {{-- <div class="edit_records" id="edit_records"></div>
    @viteReactRefresh
    @vite('resources/js/EditExposureRecords.jsx') --}}


</div>
@endsection
