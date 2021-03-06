var sellist = {
    "Percentage": ["dB"],
    "dB": ["Percentage"],
    "dBm": ["mW"],
    "mW": ["dBm"],
    "Celcius": ["Fahrenheit","Kelvin"],
    "Fahrenheit": ["Celcius","Kelvin"],
    "Kelvin": ["Celcius","Fahrenheit"],
    "Mile": ["Kilometer","Meter","Feet","Inch","Centimeter","Millimeter"],
    "Kilometer": ["Mile","Meter","Feet","Inch","Centimeter","Millimeter"],
    "Meter": ["Kilometer","Mile","Inch","Feet","Centimeter","Millimeter"],
    "Feet": ["Mile","Kilometer","Meter","Inch","Centimeter","Millimeter"],
    "Inch": ["Mile","Kilometer","Feet","Meter","Centimeter","Millimeter"],
    "Centimeter": ["Mile","Kilometer","Meter","Feet","Inch","Millimeter"],
    "Millimeter": ["Kilometer","Mile","Meter","Feet","Inch","Centimeter"],
    "Kg": ["Lbs","Gr","Mg"],
    "Lbs": ["Kg","Gr","Mg"],
    "Gr": ["Kg","Lbs","Mg"],
    "Mg": ["Kg","Lbs","Gr"],
    "Radians": ["Degrees"],
    "Degrees": ["Radians"],
    "Joule": ["kWh","kJ","Calorie"],
    "kJ": ["Joule","kWh","Calorie"],
    "kWh": ["Joule","kJ","Calorie"],
    "Calorie": ["Joule","kJ","kWh"]
};

function regex(){
    var inp = document.getElementById("input") ;
    inp.value = inp.value.replace(/[^0123456789.-]/g, '');
}

function compare(strA, strB) {
    var icmp = strA.toLowerCase().localeCompare(strB.toLowerCase());
    if (icmp != 0) {
        return icmp;
    }
    if (strA > strB) {
        return 1;
    } else if (strA < strB) {
        return -1;
    } else {
        return 0;
    }
}

var ordsel = {}

Object.keys(sellist).sort(compare).forEach(function(key) {
    ordsel[key] = sellist[key];
});

<!--Optics-->
function Percentage_dB(i) { return 10*Math.log10(1+(i/100)) ;}
function dB_Percentage(i) { return "%" + (Math.pow(10, (i / 10)) - 1) * 100 ;}
function dBm_mW(i) { return Math.pow(10, (i / 10)) ;}
function mW_dBm(i) { return 10*Math.log10(i) ;}

    <!--Temperature-->
function Celcius_Fahrenheit(i) { return (9 / 5) * (i + 32) ;}
function Fahrenheit_Celcius(i) { return (5 / 9) * (i - 32) ;}
function Cencius_Kelvin(i) { return i + 273 ;}
function Fahrenheit_Kelvin(i) { return Fahrenheit_Celcius(i) + 273 ;}
function Kelvin_Celcius(i) { return i - 273 ;}
function Kelvin_Fahrenheit(i) { return Celcius_Fahrenheit(i- 273) ;}

    <!--Length-->
function Mile_Kilometer(i) { return i * 1.609344 ;}
function Mile_Meter(i) { return Mile_Kilometer(i) * 1000 ;}
function Meter_Feet(i) { return i * 3.280839895 ;}
function Mile_Feet(i) { return Meter_Feet(Mile_Meter(i)) ;}
function Mile_Centimeter(i) { return Mile_Meter(i) * 100 ;}
function Mile_Inch(i) { return Mile_Centimeter(i) * 2.54 ;}
function Mile_Milimeter(i) { return Mile_Meter(i) * 1000 ;}
function Kilometer_Mile(i) { return i / 1.609344 ;}
function Kilometer_Meter(i) { return i * 1000 ;}
function Kilometer_Feet(i) { return Meter_Feet(Kilometer_Meter(i)) ;}
function Kilometer_Centimeter(i) { return i * 100000 ;}
function Kilometer_Inch(i) { return Kilometer_Centimeter(i) * 2.54 ;}
function Kilometer_Millimeter(i) { return i * 1000000 ;}
function Meter_Kilometer(i) { return i/1000 ;}
function Meter_Mile(i) { return Kilometer_Mile(i/1000) ;}
function Meter_Centimeter(i) { return i*100 ;}
function Meter_Inch(i) { return Meter_Centimeter(i) * 2.54 ;}
function Meter_Millimeter(i) { return i * 1000 ;}
function Feet_Meter(i) { return i / 3.280839895 ;}
function Feet_Mile(i) { return Meter_Mile(Feet_Meter(i)) ;}
function Feet_Kilometer(i) { return Feet_Meter(i) / 1000 ;}
function Feet_Inch(i) { return Meter_Inch(Feet_Meter(i)) ;}
function Feet_Centimeter(i) { return Feet_Meter(i) * 100 ;}
function Feet_Millimeter(i) { return Feet_Meter(i) * 1000 ;}
function Inch_Meter(i) { return i * 0.0254 ;}
function Inch_Kilometer(i) { return Inch_Meter(i) / 1000 ;}
function Inch_Mile(i) { return Kilometer_Mile(Inch_Kilometer(i)) ;}
function Inch_Feet(i) { return Meter_Feet(Inch_Meter(i)) ;}
function Inch_Centimeter(i) { return i * 2.54 ;}
function Inch_Millimeter(i) { return i * 25.4 ;}
function Centimeter_Mile(i) { return Meter_Mile( i / 100 ) ;}
function Centimeter_Kilometer(i) { return i / 100000 ;}
function Centimeter_Meter(i) { return i / 100 ;}
function Centimeter_Feet(i) { return Meter_Feet(Centimeter_Meter(i)) ;}
function Centimeter_Inch(i) { return i / 2.54 ;}
function Centimeter_Millimeter(i) { return i * 10 ;}
function Millimeter_Kilometer(i) { return i / 1000000 ;}
function Millimeter_Mile(i) { return Meter_Mile( i/1000 ) ;}
function Millimeter_Meter(i) { return i / 1000 ;}
function Millimeter_Feet(i) { return Meter_Feet(Millimeter_Meter(i)) ;}
function Millimeter_Centimeter(i) { return i / 10 ;}
function Millimeter_Inch(i) { return Millimeter_Centimeter(i) * 2.54 ;}

    <!--Mass-->
function Kg_Lbs(i) { return i * 2.204622621849 ;}
function Kg_Gr(i) { return i * 1000 ;}
function Kg_Mg(i) { return i * 1000000 ;}
function Lbs_Kg(i) { return i / 2.204622621849 ;}
function Lbs_Gr(i) { return Lbs_Kg(i) * 1000 ;}
function Lbs_Mg(i) { return Lbs_Kg(i) * 1000000 ;}
function Gr_Kg(i) { return i / 1000 ; }
function Gr_Lbs(i) { return Kg_Lbs(i/1000) ;}
function Gr_mg(i) { return i * 1000 ;}
function Mg_Kg(i) { return i / 1000000 ;}
function Mg_Lbs(i) { return Kg_Lbs(i/1000000) ;}
function Mg_Gr(i) { return i / 1000 ;}

    <!--Angular-->
function Radians_Degrees(i) { return 180 / Math.PI * i ;}
function Degrees_Radians(i) { return Math.PI / 180 * i ;}

    <!--Energy-->
function Joule_kWh(i) { return i / 3600000 ;}
function Joule_kJ(i) { return i / 1000 ;}
function Joule_Calorie(i) { return i * 0.2390057361 ;}
function kJ_Joule(i) { return i * 1000 ;}
function kJ_kWh(i) { return i / 3600 ;}
function kJ_Calorie(i) { return Joule_Calorie( i * 1000 ) ;}
function kWh_Joule(i) { return i * 3600000 ;}
function kWh_kJ(i) { return Joule_kJ(kWh_Joule(i)) ;}
function kWh_Calorie(i) { return Joule_Calorie(kWh_Joule(i)) ;}
function Calorie_Joule(i) { return i / 0.2390057361 ;}
function Calorie_kJ(i) { return Calorie_Joule(i) / 1000 ;}
function Calorie_kWh(i) { return Joule_kWh(Calorie_Joule(i)) ;}

    <!--End of regions-->

window.onload = function () {
    groups1();
    optsel2();
};

function groups1() {
    var sel1 = document.getElementById("sel1");
    sel1.length = 0;
    for (var u1 in sellist) {
        sel1.options[sel1.options.length] = new Option(u1, u1);
    }
}

function alphas1() {
    var sel1 = document.getElementById("sel1");
    sel1.length = 0;
    for (var u1 in ordsel) {
        sel1.options[sel1.options.length] = new Option(u1, u1);
    }
}

function optsel2() {
    var sel1 = document.getElementById("sel1"),
        sel2 = document.getElementById("sel2");
    sel2.length = 0;
    var units = sellist[sel1.value];
    for (var i = 0; i < units.length; i++) {
        sel2.options[sel2.options.length] = new Option(units[i], units[i]);
    }
}

function groups12() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
    groups1();
    optsel2();
}

function alphas12() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
    alphas1();
    optsel2();
}

function main() {
    var s1 = document.getElementById("sel1").value;
    var s2 = document.getElementById("sel2").value;
    var res = document.getElementById("result");
    var i = document.getElementById("input").value;
    if(!i) {
        return False;
    }
    res.innerHTML = window[s1 + "_" + s2](parseFloat(i));
}
