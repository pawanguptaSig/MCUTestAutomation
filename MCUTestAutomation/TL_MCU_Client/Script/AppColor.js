//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : IdentifyColor
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function IdentifyColorGroup(strLocName) {
  var color = GetBarColorRGB(strLocName);

  if (color.R > 200 && color.G < 55 && color.B < 55)
    return "red";

  if (color.G > 100 && color.R < 50 && color.B < 50)
    return "green";

  if (color.R > 100 && color.B > 100 && color.G < 50)
    return "purple";

  return "unknown";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function GetBarColorRGB(barGridPath) {

  var uiObj = eval(barGridPath);

  // WPF Color object
  var color = uiObj.Background.Color;  

  return {
    R: color.R,
    G: color.G,
    B: color.B
  };
}