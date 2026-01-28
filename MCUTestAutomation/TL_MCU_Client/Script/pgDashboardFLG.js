//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var Grid = tabCtrlMain + "Grid2."

var BoreOnSlipFLG = tabCtrlMain + "Grid32.Grid2";
var BoreMainFLG = NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.OnSlip1Bore1detailsBottom.Grid2.Grid;
//----------------------------------------------------------------------------------------------------------------------------------------

function getFLGOnBore(BoreName) {
  switch (BoreName.toLowerCase()) {
    case "main":
      VerifyFLGsInBoreSection(BoreMainFLG);
      break;
    case "onslip":
      VerifyFLGsInBoreSection(BoreOnSlipFLG);
      break;
    default:
      Log.Error("Invalid bore section: " + BoreName);
      return null;
  }
}

function VerifyFLGsInBoreSection(BoreType) {
  var sectionContainer = AppGeneric.getUIObject(BoreType);
  var FLGItems = sectionContainer.FindAllChildren("ClrClassName", "ListBoxItem", 10);

  if (FLGItems.length === 0) {
    Log.Error("No FLGs found in the given bore section");
    return;
  }
  var len_FLG = FLGItems.length;
  Log.Message("Total FLGs found in section: " + FLGItems.length);

  for (var i = 0; i < len_FLG; i++) {

    var FLGGrid = FLGItems[i];
    
    
    if (FLGGrid.IsVisible)
    {
    
      if (!FLGGrid || !FLGGrid.Exists) {
        Log.Error("FLG Grid not found for item index " + (i + 1));
        continue;
      }
      
      var FLGBorderColor = FLGItems[i].FindChild("ClrClassName", "Label", 25);
      
      var FLGColorName = AppColor.IdentifyColorGroup(FLGBorderColor);
       
      var vm = FLGGrid.DataContext;
      var FlgName                 = vm.FlgName;
      var FlgHealth               = vm.FlgHealth;
      var FlgLightHealth          = vm.FlgLightHealth; 
      var FlgHealthPercent        = vm.FlgHealthPercent;
      
      if (FlgName === "undefined")
      {
        Log.Message("Invalid health data for FLG index " + (i + 1));
        continue;
      }
      

      Log.Message(
        "FLG [" + (i + 1) + "]" +
        " | Color: " + FLGColorName +
        " | Name: " + FlgName +
        " | FLGHealth: " + FlgHealth +
        " | Health%: " + FlgHealthPercent +
        " | LightHealth: " + FlgLightHealth
      );
    }
    

    if (FlgHealth === "" || FlgLightHealth === "")
      Log.Error("Invalid health data for FLG index " + (i + 1));
  }
}