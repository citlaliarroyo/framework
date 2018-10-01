var pilar3_1 = document.getElementById("pilar3_1");
var pilar3_2 = document.getElementById("pilar3_2");
var pilar3_3 = document.getElementById("pilar3_3");

var pilar1_1 = document.getElementById("pilar1_1");
var pilar2_1 = document.getElementById("pilar2_1");
var pilar4_1 = document.getElementById("pilar4_1");

var nav1 = document.getElementById("nav1");
var nav_mobile = document.getElementById("nav-mobile");
var nav_id = document.getElementById("navbarNav");
var logo = document.getElementById("logo");

var cuadro = document.getElementById("cuadro");

var linea1 = document.getElementById("linea1");
var linea2 = document.getElementById("linea2");
var linea3 = document.getElementById("linea3");
var linea4 = document.getElementById("linea4");
var contenedor = document.getElementById("contenedor");

var li = document.getElementsByTagName("li");
var enlace = document.getElementsByTagName("a");
var link = document.getElementsByTagName("link").item(0);
var script = document.getElementsByTagName("script").item(0);

var boton1 = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var boton3 = document.querySelector("#boton3");

boton1.addEventListener("click",materialize);
boton2.addEventListener("click",foundation);
boton3.addEventListener("click",bootstrapp);

function materialize(){
    link.href = "css/materialize.min.css";
    script.href = "js/materialize.min.js";

    contenedor.className = "container";
    linea1.className = "row";
    linea2.className = "row";
    linea3.className = "row";
    linea4.className = "row";

    pilar1_1.className = "col s12 m12 l12";
    pilar2_1.className = "col s12 m12 l12";
    pilar3_1.className = "col s12 m4 l3";
    pilar3_2.className = "col s12 m8 l6";
    pilar3_3.className = "col s12 m12 l3";
    pilar4_1.className = "col s12 m12 l12";

    nav1.className = "nav-extended";
    nav_id.className = "nav-wrapper";
    nav_mobile.className = "right hide-on-med-and-down";

    boton1.className = "btn";
    boton2.className = "btn";
    boton3.className = "btn";
    logo.className = "brand-logo left";
    cuadro.className = "responsive-table";

}

function foundation(){
    link.href = "css/foundation.min.css";
    script.href = "js/materialize.min.js";

    contenedor.className = "grid-container-padding full";
    linea1.className = "grid-x grid-margin-x";
    linea2.className = "grid-x grid-margin-x";
    linea3.className = "grid-x grid-margin-x";
    linea4.className = "grid-x grid-margin-x";

    pilar1_1.className = "cell small-12 medium-12 large-12 columns";
    pilar2_1.className = "cell small-12 medium-12 large-12 columns";
    pilar3_1.className = "cell small-12 medium-4 large-3 columns";
    pilar3_2.className = "cell small-12 medium-8 large-6 columns";
    pilar3_3.className = "cell small-12 medium-12 large-3 columns";
    pilar4_1.className = "cell small-12 medium-12 large-12 columns";

    boton1.className = "button";
    boton2.className = "success button";
    boton3.className = "button";

    nav1.className = "top-bar";
    nav_id.className = "top-bar-left";
    logo.className = "menu-text";
    nav_mobile.className = "dropdown menu";

}

function bootstrapp(){
    link.href = "css/bootstrap.min.css";
    script.href = "js/materialize.min.js";

    boton1.className = "btn btn-secondary";
    boton2.className = "btn btn-secondary";
    boton3.className = "btn btn-primary";

    cuadro.className = "table table-striped";

    nav1.className = "navbar navbar-expand-lg navbar-light bg-light";
    nav_id.className = "collapse navbar-collapse";
    nav_mobile.className = "navbar-nav";
    logo.className = "navbar-brand";

    li.className = "nav-item";
    enlace.item(1).className = "nav-link";
    enlace.item(2).className = "nav-link";
    enlace.item(3).className = "nav-link";

    contenedor.className = "container";
    linea1.className = "row";
    linea2.className = "row";
    linea3.className = "row";
    linea4.className = "row";

    pilar1_1.className = "col col-sm-12 col-md-12 col-lg-12";
    pilar2_1.className = "col col-sm-12 col-md-12 col-lg-12";
    pilar3_1.className = "col col-sm-12 col-md-4 col-lg-3";
    pilar3_2.className = "col col-sm-12 col-md-8 col-lg-6";
    pilar3_3.className = "col col-sm-12 col-md-12 col-lg-3";
    pilar4_1.className = "col col-sm-12 col-md-12 col-lg-12";

}