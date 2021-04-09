let MinskAbout = document.getElementById("MinskAbout");
let VitebskAbout = document.getElementById("VitebskAbout");
let ChasnikiAbout = document.getElementById("ChashnikiAbout");
let MoscowAbout = document.getElementById("MoscowAbout");
let SlyckAbout = document.getElementById("SlyckAbout");
let SchoolAbout = document.getElementById("SchoolAbout");


function MinskShow() {

    MinskAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");
    SchoolAbout.classList.add('hide');

}

function VitebskShow() {

    VitebskAbout.classList.remove("hide");
    MinskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");
    SchoolAbout.classList.add('hide');

}

function ChashnikiShow() {


    ChasnikiAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    SchoolAbout.classList.add('hide');

}

function SlyckShow() {


    SlyckAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    MoscowAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SchoolAbout.classList.add('hide');

}

function MoscowShow() {


    MoscowAbout.classList.remove("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    SchoolAbout.classList.add('hide');

}

function SchoolShow(){
    MoscowAbout.classList.add("hide");
    VitebskAbout.classList.add("hide");
    MinskAbout.classList.add("hide");
    ChashnikiAbout.classList.add("hide");
    SlyckAbout.classList.add("hide");
    SchoolAbout.classList.remove('hide');
}