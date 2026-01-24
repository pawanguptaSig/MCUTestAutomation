//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var Grid = tabCtrlMain + "Grid3."
var labelPath = Grid + "Bore1DGGColorBarList.Grid.DataContext.DGGGroupPercentage"
var parentPanel = Grid + "StackPanel2"

//----------------------------------------------------------------------------------------------------------------------------------------
//Get all bar containers dynamically
function GetAllColorBars() {
  var parentPanelObj = AppGeneric.getUIObject(parentPanel);
  return parentPanelObj.FindAllChildren("ClrClassName", "ListBoxItem", 10);
}

//Read current percentage from bar
function GetCurrentPercentage(barGrid) {
  var percent = barGrid.DataContext.DGGGroupPercentage;
  Log.Message("Current % = " + percent);
  return percent;
}

//Click arrows to reach target %
function AdjustPercentage(barGrid, targetPercent) {

  var barGrid1 = barGrid + ".Grid";
  var barGrid2 = AppGeneric.getUIObject(barGrid1);

  var powerBtn  = barGrid2.WPFObject("GenericButton", "", 1);
  var fullBtn   = barGrid2.WPFObject("GenericButton", "", 2);
  var leftArrow = barGrid2.WPFObject("RepeatButton", "", 1);
  var rightArrow= barGrid2.WPFObject("RepeatButton", "", 2);

  if (!powerBtn.Exists || !fullBtn.Exists ||
      !leftArrow.Exists || !rightArrow.Exists) {
    Log.Error("One or more controls not found inside barGrid");
    return;
  }

  if (targetPercent === 0) {
    powerBtn.Click();
    Log.Message("Power button clicked → set to 0%");
    return;
  }

  if (targetPercent === 100) {
    fullBtn.Click();
    Log.Message("100% button clicked → set to 100%");
    return;
  }
  var current = GetCurrentPercentage(barGrid2);
  var diff = targetPercent - current;

  Log.Message("Adjusting from " + current + "% to " + targetPercent + "%");

  if (diff > 0) {
    for (var i = 0; i < diff; i++) {
      rightArrow.Click();
    }
  }
  else if (diff < 0) {
    for (var j = 0; j < Math.abs(diff); j++) {
      leftArrow.Click();
    }
  }
  Log.Message("Adjustment completed");
}

//MAIN FUNCTION — Set light level by color
function SetLightLevelForColorGroup(targetPercentStr, colorGroup) {
  var targetPercent = aqConvert.StrToInt(targetPercentStr.replace("%", ""));
  var bars = GetAllColorBars();
  for (var i = 0; i < bars.length; i++) {
    var barGrid = bars[i].MappedName;
    var borderPath = barGrid + ".Grid" + ".Border";
    var detectedColor = AppColor.IdentifyColorGroup(borderPath);
    if (detectedColor === colorGroup.toLowerCase()) {
      Log.Message("Matched color group: " + colorGroup);
      AdjustPercentage(barGrid, targetPercent);
      return;
    }
  }
  Log.Error("Color group not found: " + colorGroup);
}