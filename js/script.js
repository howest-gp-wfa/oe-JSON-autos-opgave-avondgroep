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
    
}
/**
 * Fills the select list
 */
function FillListAutos()
{
    
}
/**
 * fills the form elements
 */
function FillFormElements()
{
    
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












