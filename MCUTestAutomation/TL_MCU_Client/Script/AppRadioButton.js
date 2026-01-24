//USEUNIT
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : VerjfyRadioButtonChecked
//Description : Verjfy is Radio Button Checked
//Parameter1 : strlocName  :Object Name where text to enter
//Author : Pawan Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function VerifyRadioButtonChecked(strLocName){
  uiObj = eval(strLocName);
  var Photometermode = uiObj.IsChecked;
  var isChecked = (Photometermode == true);
  return isChecked;
}