//USEUNIT
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : VerjfyRadioButtonChecked
//Description : Verjfy is Radio Button Checked
//Parameter1 : strlocName  :Object Name where text to enter
//Author : Pawan Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function DragObject(strLocName,strCord){
  uiObj = eval(strLocName);
  if(uiObj.visible)
  {
    uiObj.Drag(strCord);
  }
}

function DragObj(strLocName,strCord)
{
  uiObj = eval(strLocName); 
  if (!uiObj) {
    Log.Error("Invalid UI object reference: " + strLocName);
    return;
  }  
  if (uiObj.visible)
  {
    var coords = strCord.split(",").map(Number);
    uiObj.Drag(coords[0], coords[1], coords[2], coords[3]);
  }
  else 
  {
    Log.Error("Object is not visible: " + strLocName);
  }
}