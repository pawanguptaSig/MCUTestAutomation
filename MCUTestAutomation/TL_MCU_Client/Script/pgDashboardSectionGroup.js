//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var Grid = tabCtrlMain + "Grid2."

var BoreOnSlipSectionGroup = tabCtrlMain + "Grid32.Grid2";
//var BoreOnSlipSectionGroup = tabCtrlMain + "Grid32.Grid2.OnSlipRLScrollViewerActive";
var BoreMainSectionGroup = NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.OnSlip1Bore1detailsBottom.Grid2.Grid
//var BoreMainSectionGroup = tabCtrlMain + "Grid32.Grid"
//----------------------------------------------------------------------------------------------------------------------------------------
function getSectionGroupOnBore(BoreName) {
  switch (BoreName.toLowerCase()) {
    case "main":
      VerifySectionGroupsInBoreSection(BoreMainSectionGroup);
      break;
    case "onslip":
      VerifySectionGroupsInBoreSection(BoreOnSlipSectionGroup);
      break;
    default:
      Log.Error("Invalid bore section: " + BoreName);
      return null;
  }
}

function VerifySectionGroupsInBoreSection(BoreType) {
  var sectionContainer = AppGeneric.getUIObject(BoreType);
  var SectionGroupItems = sectionContainer.FindAllChildren("ClrClassName", "ListBoxItem", 10);

  if (SectionGroupItems.length === 0) {
    Log.Error("No SectionGroups found in the given bore section");
    return;
  }
  var len_SectionGroup = SectionGroupItems.length;
  Log.Message("Total SectionGroups found in section: " + SectionGroupItems.length);

  for (var i = 0; i < len_SectionGroup; i++) {

    var SectionGroupGrid = SectionGroupItems[i];
    
    
    if (SectionGroupGrid.IsVisible)
    {
    
      if (!SectionGroupGrid || !SectionGroupGrid.Exists) {
        Log.Error("SectionGroup Grid not found for item index " + (i + 1));
        continue;
      }
    
      var SectionGroupBorderColor =
        SectionGroupItems[i]
          .FindChild("ClrClassName", "Button", 5)
          .FindChild("ClrClassName", "Border", 5)
          .FindChild("ClrClassName", "Grid", 5)
          .FindChild("ClrClassName", "Border", 5); 
      
      var SectionGroupColorName = AppColor.IdentifyColorGroup(SectionGroupBorderColor); 
    
      var vm = SectionGroupGrid.DataContext;
      var DGGGroupHealth       = vm.DGGGroupHealth;
      var DGGGroupLampHealth   = vm.DGGGroupLampHealth;
    

      Log.Message(
        "SectionGroup" +
        " | Color: " + SectionGroupColorName +
        " | DGG " + DGGGroupHealth +
        " | DALI: " + DGGGroupLampHealth
      );
    }
  }
}