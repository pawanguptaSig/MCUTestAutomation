//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var Grid = tabCtrlMain + "Grid2."

var BoreOnSlipDgg = tabCtrlMain + "Grid32.Grid2";
//var BoreOnSlipDgg = tabCtrlMain + "Grid32.Grid2.OnSlipRLScrollViewerActive";
var BoreMainDgg = NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.OnSlip1Bore1detailsBottom.Grid2.Grid
//var BoreMainDgg = tabCtrlMain + "Grid32.Grid"
//----------------------------------------------------------------------------------------------------------------------------------------
function getDggOnBore(BoreName) {
  switch (BoreName.toLowerCase()) {
    case "main":
      VerifyDggsInBoreSection(BoreMainDgg);
      break;
    case "onslip":
      VerifyDggsInBoreSection(BoreOnSlipDgg);
      break;
    default:
      Log.Error("Invalid bore section: " + BoreName);
      return null;
  }
}

function VerifyDggsInBoreSection(BoreType) {
  var sectionContainer = AppGeneric.getUIObject(BoreType);
  var dggItems = sectionContainer.FindAllChildren("ClrClassName", "ListBoxItem", 10);

  if (dggItems.length === 0) {
    Log.Error("No DGGs found in the given bore section");
    return;
  }
  var len_DGG = dggItems.length;
  Log.Message("Total DGGs found in section: " + dggItems.length);

  for (var i = 0; i < len_DGG; i++) {

    var dggGrid = dggItems[i];
    
    
    if (dggGrid.IsVisible)
    {
    
      if (!dggGrid || !dggGrid.Exists) {
        Log.Error("DGG Grid not found for item index " + (i + 1));
        continue;
      }
    
      var dggBorderColor =
        dggItems[i]
          .FindChild("ClrClassName", "Button", 5)
          .FindChild("ClrClassName", "Border", 5)
          .FindChild("ClrClassName", "Grid", 5)
          .FindChild("ClrClassName", "Border", 5); 
      
      var dggColorName = AppColor.IdentifyColorGroup(dggBorderColor); 
    
      var vm = dggGrid.DataContext;
      var dggGroupHealth          = vm.DGGGroupHealth;
      var dggGroupHealthPercent   = vm.DGGGroupHealthPercent;
      var dggGroupLampHealth      = vm.DGGGroupLampHealth;    

      Log.Message(
        "DGG [" + (i + 1) + "]" +
        " | Color: " + dggColorName +
        " | GroupHealth: " + dggGroupHealth +
        " | Health%: " + dggGroupHealthPercent +
        " | LampHealth: " + dggGroupLampHealth
      );
    }
    

    if (dggGroupHealth === "" || dggGroupLampHealth === "")
      Log.Error("Invalid health data for DGG index " + (i + 1));
  }
}