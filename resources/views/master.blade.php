<!DOCTYPE html>
<html lang="en">
<head>
    @include('includes.head')
    <title>@yield('title')</title>
</head>
<body>
    <div class="site">

    {{-- @include('includes.header') --}}

    @yield('header')
    @yield('hero')


    </div>
    <footer>@include('includes.footer')</footer>
</body>
</html>
