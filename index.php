<?php
    
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <title>ARWonderland</title>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Berkshire Swash">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/rabbit_hole.css">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <style>
        body{
        font-family: "Berkshire Swash";
        background-image:  url("ARWElements/Backdrop (4).png");
        background-repeat: no-repeat;
        background-size: cover;
        };
    </style>

</head>
<body>
    <div style = "overflow:hidden; position:relative;">
    <div class="moving_bg" id="bg-div" style = "background-image: url('./assets/arw_rabbit_hole/RABBIT HOLE/BG RABBIT HOLE.png')">
        <img src="./assets/arw_rabbit_hole/RABBIT HOLE/CORE.png" id="_fixed_layers" class="_bg_moving">
        <img src="./assets/arw_rabbit_hole/RABBIT HOLE/1STLAYER_MIDDLE.png" id="_moving_layer1" class="_bg_moving">
        <img src="./assets/arw_rabbit_hole/RABBIT HOLE/2NDLAYER_MIDDLE.png" id="_moving_layer2" class="_bg_moving">
        <img src="./assets/arw_rabbit_hole/RABBIT HOLE/3RDLAYER_MIDDLE.png" id="_moving_layer3" class="_bg_moving">
        <img src="./assets/arw_rabbit_hole/RABBIT HOLE/3RDLAYER_MIDDLE.png" id="_moving_layer4" class="_bg_moving">
        <img src="./assets/arw_rabbit_hole/RABBIT HOLE/Rabbit Hole Core.png" id="_core" class="_bg_moving">
    </div>

    <div class="container centered rounded bg-dark opacity-75 text-center text-white">
        <!-- TITLE -->
        <h1 class = "countdown-font d-none d-lg-block">ARW 2022</h1>

        <h1 class = "countdown-font d-lg-none p-2" style = "font-size: 64px">ARW 2022 </h1>
    
        <!-- TIMER -->
        <script language="JavaScript">
            TargetDate = "2022-09-31T11:59:59";
            CountActive = true;
            CountStepper = -1;
            LeadingZero = true;
            FinishMessage = "It is finally here!";
        </script>


       
        
        <!-- Timer javascript -->
        <script language="JavaScript" src="./js/countdown.js"></script>

    </div>
   

    <!-- LOGOS -->
    <div class="container d-none d-lg-block p-0 m-0 position-absolute" style = "z-index: 10; top: 80%; left: 75%; width: 390px;">
            <div class="row align-items-start g-2">
                <img class = "col m-0 p-0 arwlogo" src="./assets/logos/CSO_Logo.png" alt="">
                <img class = "col m-0 p-0 arwlogo" src="./assets/logos/ARW.png" alt="">
                <img class = "col m-0 p-0 arwlogo" src="./assets/logos/ARWonder.png" alt="">
            </div>
    </div>

    <div class="container d-lg-none p-2 p-0 m-0 position-absolute" style = "z-index: 10; top: 80%; left: 50%; width: 200px;">
            <div class="row align-items-start g-2">
                <img class = "col-sm m-0 p-0 arwlogo-sm" src="./assets/logos/CSO_Logo.png" alt="">
                <img class = "col-sm m-0 p-0 arwlogo-sm" src="./assets/logos/ARW.png" alt="">
                <img class = "col-sm m-0 p-0 arwlogo-sm" src="./assets/logos/ARWonder.png" alt="">
            </div>
    </div>
    


    </div>

    <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>