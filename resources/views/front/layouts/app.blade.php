<!DOCTYPE html>

<!-- Add landing-2 to html element -->
<html lang="en" class="landing-2 light-style">
<head>
    <title>{{ config('app.name') }}</title>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <!-- <meta property="og:title" content="nac nac自然愛最有型，秀出你家的甜蜜時光"/>
    <meta property="og:description" content="萬元禮包等你拿！慶祝nac nac 30歲，官方IG開站啦！秀出你的nacstyle抽好禮" />
    <meta property="og:image" content="{{ asset('images/og-image.jpg') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">
    <meta name="description" content="萬元禮包等你拿！慶祝nac nac 30歲，官方IG開站啦！秀出你的nacstyle抽好禮">
    <meta name="keywords" content="nac nac,nacnac30,nac style">
    <link rel="icon" type="image/png" href="{{ asset('images/logo.png') }}"> -->

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Barlow:300,400,500,600,700" rel="stylesheet">

    <!-- Icon fonts -->
    <link rel="stylesheet" href="{{ asset('/theme/vendor/fonts/fontawesome.css') }}">
    <link rel="stylesheet" href="{{ asset('/theme/vendor/fonts/ionicons.css') }}">
    <link rel="stylesheet" href="{{ asset('/theme/vendor/fonts/linearicons.css') }}">
    <link rel="stylesheet" href="{{ asset('/theme/vendor/fonts/open-iconic.css') }}">
    <link rel="stylesheet" href="{{ asset('/theme/vendor/fonts/pe-icon-7-stroke.css') }}">

    <!-- Core stylesheets -->
    <link rel="stylesheet" href="{{ asset('theme/vendor/css/rtl/bootstrap.css') }}" class="theme-settings-bootstrap-css">
    <link rel="stylesheet" href="{{ asset('theme/vendor/css/rtl/appwork.css') }}" class="theme-settings-appwork-css">
    <link rel="stylesheet" href="{{ asset('theme/vendor/css/rtl/theme-corporate.css') }}" class="theme-settings-theme-css">
    <link rel="stylesheet" href="{{ asset('theme/vendor/css/rtl/colors.css') }}" class="theme-settings-colors-css">
    <link rel="stylesheet" href="{{ asset('theme/vendor/css/rtl/uikit.css') }}">

    <script src="{{ asset('theme/vendor/js/material-ripple.js') }}"></script>
    <script src="{{ asset('theme/vendor/js/layout-helpers.js') }}"></script>

    <!-- Core scripts -->
    <script src="{{ asset('theme/vendor/js/pace.js') }}"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Libs -->
    <link rel="stylesheet" href="{{ asset('theme/vendor/libs/swiper/swiper.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/vendor/libs/plyr/plyr.css') }}">

    <link rel="stylesheet" href="{{ asset(mix('css/front.css')) }}">

    <!-- @yield('styles') -->

<!--
    Global site tag (gtag.js) - Google Analytics
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111294008-29"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-111294008-29');
    </script>

    Global site tag (gtag.js) - Google Analytics
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CKYP43TXT5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CKYP43TXT5');
    </script>
     -->
</head>

<body>
<!-- <div class="page-loader">
    <div class="bg-primary"></div>
</div> -->

<!-- @yield('content') -->

<!-- Core scripts -->
<!-- Core scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="{{ asset('/theme/vendor/libs/popper/popper.js') }}"></script>
<script src="{{ asset('/theme/vendor/js/bootstrap.js') }}"></script>

<!-- Libs -->
<script src="{{ asset('theme/vendor/libs/swiper/swiper.js') }}"></script>
<script src="{{ asset('theme/vendor/libs/plyr/plyr.js') }}"></script>

<!-- Page -->
<script src="{{ asset(mix('js/front.js')) }}"></script>

<!-- @yield('scripts') -->

</body>
</html>
