"use strict";
//ui vars
var slcAutos;
var txtMerk, txtType;
var divControls, divMotor, divOpties, divCarInfo;
var btnSlaOp;
var imgAuto;
//var voor JSON data
var jsonAutos;

window.addEventListener('load', Initieer);

/**
 * MAIN PROGRAM
 */
function Initieer()
{
  //parse the json data
  jsonAutos = JSON.parse(catalogus);
  //bind the elements
  BindElements();
  //vul de lijst met autos
  FillListAutos();
  //voeg de events toe
  AddEvents();
}
/**
 * Bind the html elements
 */

function BindElements()
 {
    slcAutos = document.getElementById("slcAutos");
    txtMerk = document.getElementById("txtMerk");
    txtType = document.getElementById("txtType");
    divControls = document.getElementById("divControls");
    divMotor = document.getElementById("divMotor");
    divOpties = document.getElementById("divOpties");
    divCarInfo = document.getElementById("divCarInfo");
    btnSlaOp = document.getElementById("btnSlaOp");
    //bind img element
    imgAuto = document.querySelector("#imgAuto");
}
/**
 * Bind the events
 */
function AddEvents()
{
    //voeg event listener toe
    //vul de form elementen
    slcAutos.addEventListener("change",FillFormElements);
}
/**
 * Fills the select list
 */
function FillListAutos()
{
    //vul de select list met de autos
    jsonAutos.Autos.forEach(auto => 
    {
        //voeg toe aan de lijst
        slcAutos.options.add(new Option(auto.Merk,auto.Merk));
    });
    //roep de FillformElements function de eerste keer aan
    FillFormElements();
}
/**
 * fills the form elements
 */
function FillFormElements()
{
    //haal de selectedIndex op
    let selectedAuto = slcAutos.options[slcAutos.selectedIndex].value;
    //haal het autoobject uit de array
    let auto = jsonAutos.Autos.find(auto => auto.Merk == selectedAuto);
    
    //vul de txtvakken op
    FillTxtInfo(auto);
    //vul de img op van de auto
    FillAutoImg(auto.Img);
    //vul de motor div op
    FillMotorDiv(auto.Motor);
    //vul de optie div
    FillOptions(auto.Opties)
    //vul de carInfo op
    FillCarInfo(auto.Info);
}
/**
 * fills the motor info
 * @param {*} motor 
 */
function FillMotorDiv(motor)
{

}
/**
 * Fills the textboxes
 * @param {*} auto 
 */
function FillTxtInfo(auto)
{
    txtMerk.value = auto.Merk;
    txtType.value = auto.Type;
}

/**
 * Fills the img 
 * @param {} img 
 */
function FillAutoImg(img)
{
    
}
/**
 * Fills the options 
 * @param {} options 
 */
function FillOptions(options)
{
    
}
/**
 * Fills the car description
 * @param {*} info 
 */
function FillCarInfo(info)
{
    
}












