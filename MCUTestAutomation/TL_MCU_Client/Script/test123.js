//Step 1: Get all bar containers dynamically
function GetAllColorBars() {
  var parentPanel =
    Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.tabCtrlMain.Grid3.StackPanel2;

  return parentPanel.FindAllChildren("ClrClassName", "Grid", 10);
}


//Step 2: Identify color group using RGB (your logic)
function IdentifyColorGroup(barBorderPath) {

  var color = eval(barBorderPath).Background.Color;

  if (color.R > 200 && color.G < 50 && color.B < 50)
    return "red";

  if (color.G > 100 && color.R < 50 && color.B < 50)
    return "green";

  if (color.R > 100 && color.B > 100 && color.G < 50)
    return "purple";

  return "unknown";
}

//Step 3: Read current percentage from bar
function GetCurrentPercentage(barGrid) {
  var percent = barGrid.DataContext.DGGGroupPercentage;
  Log.Message("Current % = " + percent);
  return percent;
}

//Step 4: Click arrows to reach target %

function AdjustPercentage(barGrid, targetPercent) {

  var leftArrow  = barGrid.FindChild("Name", "*Left*", 5);
  var rightArrow = barGrid.FindChild("Name", "*Right*", 5);
  var powerBtn   = barGrid.FindChild("Name", "*Power*", 5);
  var fullBtn    = barGrid.FindChild("Name", "*100*", 5);

  var current = GetCurrentPercentage(barGrid);
  var diff = targetPercent - current;

  if (targetPercent === 0) {
    powerBtn.Click();
    return;
  }

  if (targetPercent === 100) {
    fullBtn.Click();
    return;
  }

  if (diff > 0) {
    for (var i = 0; i < diff; i++)
      rightArrow.Click();
  } else {
    for (var j = 0; j < Math.abs(diff); j++)
      leftArrow.Click();
  }
}

//Step 5: MAIN FUNCTION — Set light level by color
function SetLightLevelForColorGroup() {
  var targetPercentStr = "56%";
  var colorGroup = "red";
  var targetPercent = aqConvert.StrToInt(targetPercentStr.replace("%", ""));

  var bars = GetAllColorBars();

  for (var i = 0; i < bars.length; i++) {

    var barGrid = bars[i];
    var borderPath = barGrid.NameMappingInfo.Path + ".Border";

    var detectedColor = IdentifyColorGroup(borderPath);

    if (detectedColor === colorGroup.toLowerCase()) {

      Log.Message("Matched color group: " + colorGroup);
      AdjustPercentage(barGrid, targetPercent);
      return;
    }
  }

  Log.Error("Color group not found: " + colorGroup);
}

//---------------------------------------------------------------------
function GetBarBorder(barGrid) {

  // Find the Border control inside this bar
  var border = barGrid.FindChild("ClrClassName", "Border", 5);

  if (!border || !border.Exists) {
    Log.Error("Border not found inside barGrid");
    return null;
  }

  return border;
}

function GetBarColorRGB(barGrid) {

  var border = GetBarBorder(barGrid);
  if (border == null) return null;

  var color = border.Background.Color;

  return {
    R: color.R,
    G: color.G,
    B: color.B
  };
}