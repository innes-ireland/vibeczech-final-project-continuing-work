<div class="header">

  <div class="logo">
    logo goes here
  </div>

  {{-- TODO: make the logout button actually log out --}}

  <a class="logout-button" href="{{ route('logout') }}"> Log out</a>

</div>

{{-- DoD: Importable HTML template file. When imported, adds banner to top of the page with the logo and a logout option.

Clicking the logo brings you to either the login page or your user profile page. Clicking logout logs out and returns user to the login page. --}}

{{-- Note from Bri: not doing the logo click for now mostly bc I don't see why we're doing it in the first place, and the thing we're using (img, I guess) isn't there yet --}}