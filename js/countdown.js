/*
Author: Robert Hashemian
https://www.hashemian.com/

Use of this code is hereby granted to anyone. No attribution is required.
********************************************************
Usage Sample:

<script language="JavaScript">
TargetDate = "2031-12-31T05:00:00";
BackColor = "palegreen";
ForeColor = "navy";
CountActive = true;
CountStepper = -1;
LeadingZero = true;
DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
FinishMessage = "It is finally here!";
</script>
<script language="JavaScript" src="https:/rhashemian.github.io/js/countdown.js"></script>
*/

// <!-- 
//         <div class="container w-50 d-none d-lg-block">
//             <div class="row">

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%D%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Days</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-1">
//                     <div class="col" style="font-size: 73px">:</div>
//                 </div>

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%H%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Hours</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-1">
//                     <div class="col" style="font-size: 73px">:</div>
//                 </div>

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small"%%M%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Minutes</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-1">
//                     <div class="col" style="font-size: 73px">:</div>
//                 </div>

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%S%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Seconds</div>
//                         </div>
//                     </div>
//                 </div>  

//             </div>
//         </div>


//         <div class="container d-lg-none">
            
//             <div class="row">

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%D%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Days</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-1">
//                     <div class="col" style="font-size: 73px">:</div>
//                 </div>

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%H%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Hours</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-1">
//                     <div class="col" style="font-size: 73px">:</div>
//                 </div>

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%M%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Minutes</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-1">
//                     <div class="col" style="font-size: 73px">:</div>
//                 </div>

//                 <div class="col-2">
//                     <div class="container">
//                         <div class="row row-cols-1">
//                             <div class="col countdown-font-small">%%S%%</div>
//                             <div class="col countdown-font" style="font-size: 28px; font-family: Garamond;">Seconds</div>
//                         </div>
//                     </div>
//                 </div>  

//             </div>

//         </div> -->

//         </div> -->

// Calculating time
function calcage(secs, num1, num2) {
    s = ((Math.floor(secs / num1)) % num2).toString();
    if (LeadingZero && s.length < 2)
        s = "0" + s;
    return "<b>" + s + "</b>";
}


// Replacing Vars
function CountBack(secs) {
    if (secs < 0) {
        document.getElementById("cntdwn").innerHTML = FinishMessage;
        return;
    }
    DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs, 86400, 100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs, 3600, 24));
    DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs, 60, 60));
    DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs, 1, 60));
    DisplayStrDesk = DisplayStr.replace(/%%DB%%/g, "w-50 d-none d-lg-block mx-auto");
    DisplayStrMob = DisplayStr.replace(/%%DB%%/g, "d-lg-none mx-auto");
    DisplayStrMob = DisplayStrMob.replace(/countdown-font-small/g, "countdown-font-xsmall");
    document.getElementById("cntdwn").innerHTML = DisplayStrDesk;
    document.getElementById("cntdwn").innerHTML += DisplayStrMob;

    if (CountActive)
        setTimeout("CountBack(" + (secs + CountStepper) + ")", SetTimeOutPeriod);
}

// DOC WRITING
function putspan(backcolor, forecolor) {
    document.write("<span id='cntdwn' style='background-color:" +
        "; color:" + forecolor + "'></span>");
}

// DEFAULT STATES
if (typeof(BackColor) == "undefined")
    BackColor = "white";
if (typeof(ForeColor) == "undefined")
    ForeColor = "white";
if (typeof(TargetDate) == "undefined")
    TargetDate = "12/31/2020 5:00 AM";
if (typeof(DisplayFormat) == "undefined")
    DisplayFormat = "<div class=\"%%DB%%\"><div class=\"row\"><div class=\"col-2\"><div class=\"container\"><div class=\"row row-cols-1\"><div class=\"col countdown-font-small\">%%D%%</div><div class=\"col countdown-font\" style=\"font-size: 28px; font-family: Garamond;\">Days</div></div></div></div><div class=\"col-1\"><div class=\"col\" style=\"font-size: 73px\">:</div></div><div class=\"col-2\"><div class=\"container\"><div class=\"row row-cols-1\"><div class=\"col countdown-font-small\">%%H%%</div><div class=\"col countdown-font\" style=\"font-size: 28px; font-family: Garamond;\">Hours</div></div></div></div><div class=\"col-1\"><div class=\"col\" style=\"font-size: 73px\">:</div></div><div class=\"col-2\"><div class=\"container\"><div class=\"row row-cols-1\">    <div class=\"col countdown-font-small\"%%M%%</div><div class=\"col countdown-font\" style=\"font-size: 28px; font-family: Garamond;\">Minutes</div></div></div></div><div class=\"col-1\"><div class=\"col\" style=\"font-size: 73px\">:</div></div><div class=\"col-2\"><div class=\"container\"><div class=\"row row-cols-1\"><div class=\"col countdown-font-small\">%%S%%</div><div class=\"col countdown-font\" style=\"font-size: 28px; font-family: Garamond;\">Seconds</div></div></div></div>  </div></div>";
if (typeof(CountActive) == "undefined")
    CountActive = true;
if (typeof(FinishMessage) == "undefined")
    FinishMessage = "";
if (typeof(CountStepper) != "number")
    CountStepper = -1;
if (typeof(LeadingZero) == "undefined")
    LeadingZero = true;


CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
    CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper) - 1) * 1000 + 990;
putspan(BackColor, ForeColor);
var dthen = new Date(TargetDate);
var dnow = new Date();
if (CountStepper > 0)
    ddiff = new Date(dnow - dthen);
else
    ddiff = new Date(dthen - dnow);
gsecs = Math.floor(ddiff.valueOf() / 1000);
CountBack(gsecs);