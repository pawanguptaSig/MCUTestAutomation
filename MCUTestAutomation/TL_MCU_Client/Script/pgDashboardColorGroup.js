//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var MainPortalPhotometer1 = tabCtrlMain + "Button"
var MainPortalPhotometer2 = tabCtrlMain + "Button2"

var OnSlip1Photometer3 = tabCtrlMain + "Button3"
var OnSlip1Photometer4 = tabCtrlMain + "Button4"
var DisabledUnderPhotometer = tabCtrlMain + "TextblockDisabled"

var Grid = tabCtrlMain + "Grid2."

var BoreStageMainPortal = Grid + "Button"
var BoreStageOnSlip1Portal = Grid + "Button2"
var BoreStageOnSlip2Portal = Grid + "Button2"

var EmergencyOverrideBtn = BaseLanding + "GenericButton"

var BoreOnSlipDgg = tabCtrlMain + "Grid32.Grid2";
//var BoreOnSlipDgg = tabCtrlMain + "Grid32.Grid2.OnSlipRLScrollViewerActive";
var BoreMainDgg = NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.OnSlip1Bore1detailsBottom.Grid2.Grid
//var BoreMainDgg = tabCtrlMain + "Grid32.Grid"
var BaseLanding_Popup = "Aliases.TunneLogicMCUClient.HwndSource_PopupWindow.PopupWindow."
var Popup_OkBtn = BaseLanding_Popup + "btnOk"
var Popup_CancelBtn = BaseLanding_Popup + "btnCancel"
//----------------------------------------------------------------------------------------------------------------------------------------
function ClickOnPhotometermeter1_In_MainPortal()
{
  AppActions.click(MainPortalPhotometer1);
  Log.Message("Photometermeter1 On Main Portal is clicked");
}

function ClickOnPhotometermeter2_In_MainPortal()
{
  AppActions.click(MainPortalPhotometer2);
  Log.Message("Photometermeter2 On Main Portal is clicked");
}

function ClickOnPhotometermeter3_In_OnSlip1Portal()
{
  AppActions.click(OnSlip1Photometer3);
  Log.Message("Photometermeter3 On OnSlip1  Portal is clicked");
}

function ClickOnPhotometermeter4_In_OnSlip1Portal()
{
  AppActions.click(OnSlip1Photometer4);
  Log.Message("Photometermeter4 On OnSlip1 Portal is clicked");
}

function VerifyDisabledVisible(expectedText) 
{  
  var uiObj = eval(DisabledUnderPhotometer);

  var actualText = uiObj.WPFControlText;
  var isVisible = uiObj.isVisible;
  if (isVisible && actualText === expectedText) {
    Log.Message(expectedText + " is visible on screen.");
    return true;
  }
  if (!isVisible && actualText === expectedText) {
    Log.Message(expectedText + " is not visible on screen.");
    return false;
  }
  Log.Warning("The expected message "+ expectedText +" is NOT displayed.");
  return false;
}

function ClickBoreStagePortal(portalName) {

  switch (portalName) {

    case "Main Portal":
      AppActions.click(BoreStageMainPortal);
      Log.Message("Clicked on Main Portal from Bore Stage Info");
      break;

    case "On Slip1":
      AppActions.click(BoreStageOnSlip1Portal);
      Log.Message("Clicked on On Slip1 from Bore Stage Info");
      break;

    case "On Slip2":
      AppActions.click(BoreStageOnSlip2Portal);
      Log.Message("Clicked on On Slip2 from Bore Stage Info");
      break;

    default:
      Log.Error("Invalid portal name passed: " + portalName +
        ". Expected: 'Main Portal', 'On Slip1', or 'On Slip2'");
      break;
  }
}

function ClickOnEmergencyOverride()
{
  AppActions.click(EmergencyOverrideBtn);
  Log.Message("Clicked on Emergency Override Button");
}

function ClickOnOK_Popup()
{
  AppActions.click(Popup_OkBtn);
  Log.Message("Clicked on Ok Button on popup");
}

function ClickOnCancel_Popup()
{
  AppActions.click(Popup_CancelBtn);
  Log.Message("Clicked on Cancel Button on popup");
}

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