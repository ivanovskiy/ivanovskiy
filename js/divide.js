var MinskAbout = document.getElementById("MinskAbout"),
    VitebskAbout = document.getElementById("VitebskAbout"),
    ChasnikiAbout = document.getElementById("ChashnikiAbout");
    MoscowAbout = document.getElementById("MoscowAbout");
    SlyckAbout = document.getElementById("SlyckAbout");
function MinskShow() {

    MinskAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");

}

function VitebskShow() {

    VitebskAbout.classList.remove("hide");
    MinskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");

}

function ChashnikiShow() {

   
    ChasnikiAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");

}
function SlyckShow() {

   
    SlyckAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");

}
function MoscowShow() {

   
    MoscowAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");

}