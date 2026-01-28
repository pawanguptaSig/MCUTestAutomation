//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------             
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."

var tabCtrlMain = BaseLanding + "tabCtrlMain."

var Grid = tabCtrlMain + "Grid."
var ControlSourceValue = "NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.StackPanel.DataContext.ControlSource"
var BackbtnMain = BaseLanding + "Back"
//----------------------------------------------------------------------------------------------------------------------------------------
function test()
{
  var expectedValue = "Manual";
  VerifyControlSourceValue(expectedValue);
}

function VerifyControlSourceValue(expectedValue) {
  var ObjVal = AppGeneric.getUIObject(ControlSourceValue);
  var Val = ObjVal.OleValue;
  var ControlSourceVal = aqString.Trim(Val.split(":")[1]);

  Log.Message("Control Source extracted: '" + ControlSourceVal + "'");

  if (ControlSourceVal === expectedValue) {
    Log.Message("Control Source matches expected value: " + expectedValue);
  }
  else {
    Log.Error("Control Source mismatch. Expected '" + expectedValue +
              "', but found '" + ControlSourceVal + "'");
  }
}

