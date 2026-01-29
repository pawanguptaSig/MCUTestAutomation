//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//USEUNIT pgDashboardPhotometerGeneral
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var LoggedUser = BaseLanding + "StackPanel"
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var Status = tabCtrlMain + "StackPanel2"

var StatusMenu = tabCtrlMain + "DockPanel.StackPanel2"

var MainPortalPhotometer1 = tabCtrlMain + "Button"
var MainPortalPhotometer2 = tabCtrlMain + "Button2"

var OnSlip1Photometer3 = tabCtrlMain + "Button3"
var OnSlip1Photometer4 = tabCtrlMain + "Button4"
var DisabledUnderPhotometer = tabCtrlMain + "TextblockDisabled"

var Grid = tabCtrlMain + "Grid2."
var BoreHealth = Grid + "Border.ButtonBoreHealth"
var BoreStageMainPortal = Grid + "Button"
var BoreStageOnSlip1Portal = Grid + "Button2"
var BoreStageOnSlip2Portal = Grid + "Button2"
var TrafficFlow = Grid + "Grid"
var EmergencyOverrideBtn = BaseLanding + "GenericButton"

var OKBtn = tabCtrlMain + "btnCancel"
var CancelBtn = tabCtrlMain + "btnOK"

var BaseLanding_Popup = "Aliases.TunneLogicMCUClient.HwndSource_PopupWindow.PopupWindow."
var Popup_OkBtn = BaseLanding_Popup + "btnOk"
var Popup_CancelBtn = BaseLanding_Popup + "btnCancel"
var BackbtnMain = BaseLanding + "Back"
//----------------------------------------------------------------------------------------------------------------------------------------
function VerifyLoggedUser()
{
  var uiObj = AppGeneric.getUIObject(LoggedUser);
  var LoggedUserValue = uiObj.DataContext.LoggedInUser;
  Log.Message(LoggedUserValue + " is Logged in");
}

function VerifyStatusMenu()
{
  var StatusMenuObject = AppGeneric.getUIObject(StatusMenu);
  if(!StatusMenuObject || !StatusMenuObject.Exists){
    Log.Message("There is no status menu available");
  }
  
  var NotificationButton = StatusMenuObject.FindChild("ClrClassName","Grid", 5);
  if(NotificationButton || NotificationButton.Exists){
    Log.Message("Notification Button is visible");
  }
  
  var RefreshButton = StatusMenuObject.FindChild("ClrClassName","GenericButton", 5);
  if(RefreshButton || RefreshButton.Exists){
    Log.Message("Refresh Button is visible");
  }
  
  var status = AppGeneric.getUIObject(Status);
  var uiObj = status.FindAllChildren("ClrClassName","StackPanel", 5);
  if (uiObj.length === 0) 
  {
    Log.Error("No other Status option is visible");
    return;
        
    var len_StatusIcon = uiObj.length;
    for (var i = 0; i < len_StatusIcon; i++) {
      var StatusIconIndex = uiObj[i];   
      if (StatusIconIndex.IsVisible)
      {
        if(i==1){
          Log.Message("Mode icon is visible");
        }     
        if(i==2){
          Log.Message("Setup icon is visible");
        }      
        if(i==3){
          Log.Message("Scada icon is visible");
        }      
        if(i==4){
          Log.Message("I/O icon is visible");
        }
      }
    }
  }
}

function ClickPhotometer(photometerName)
{
  switch (photometerName.toLowerCase()) {

    case "photometer 1":
      AppActions.click(MainPortalPhotometer1);
      Log.Message("Photometer1 On Main Portal is clicked");
      break;

    case "photometer 2":
      AppActions.click(MainPortalPhotometer2);
      Log.Message("Photometer2 On Main Portal is clicked");
      break;

    case "photometer 3":
      AppActions.click(OnSlip1Photometer3);
      Log.Message("Photometer3 On OnSlip1 Portal is clicked");
      break;

    case "photometer 4":
      AppActions.click(OnSlip1Photometer4);
      Log.Message("Photometer4 On OnSlip1 Portal is clicked");
      break;

    default:
      Log.Error("Invalid Photometer Name: " + photometerName);
  }
}
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

//function VerifyPhotometerStatus()

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

function TogglePhotometer1(strToggle, strPhotometer) 
{
  var StatusValue = VerifyPhotometerStatus(strPhotometer);
  if (StatusValue) {
    var isEnabled = StatusValue.isEnabled;
    if (isEnabled) {
      ClickPhotometer(strPhotometer);
      pgDashboardPhotometerGeneral.ClickOnTogglePhotometerBtn(strToggle)
      Log.Message(strPhotometer + " was Enabled, clicked Disable.");
    } else {
      Log.Message(strPhotometer + " is already Disabled");
    }
  }
}

function TogglePhotometer(strToggle, strPhotometer) 
{
  var StatusValue = VerifyPhotometerStatus(strPhotometer);

  if (!StatusValue) {
    Log.Error("Unable to fetch status for " + strPhotometer);
    return;
  }

  var isEnabled = StatusValue.isEnabled;

  // ---------------- ENABLE ----------------
  if (strToggle.toLowerCase() === "enable") {

    if (!isEnabled) {
      ClickPhotometer(strPhotometer);
      pgDashboardPhotometerGeneral.ClickOnTogglePhotometerBtn(strToggle);
      Log.Message(strPhotometer + " was Disabled, clicked Enable.");
    }
    else {
      Log.Message(strPhotometer + " is already Enabled.");
    }

  }

  // ---------------- DISABLE ----------------
  else if (strToggle.toLowerCase() === "disable") {

    if (isEnabled) {
      ClickPhotometer(strPhotometer);
      pgDashboardPhotometerGeneral.ClickOnTogglePhotometerBtn(strToggle);
      Log.Message(strPhotometer + " was Enabled, clicked Disable.");
    }
    else {
      Log.Message(strPhotometer + " is already Disabled.");
    }

  }

  // ---------------- INVALID ----------------
  else {
    Log.Error("Invalid Toggle value: " + strToggle + 
              ". Use 'Enable' or 'Disable'");
  }
}


function ClickBoreStagePortal(portalName) {

  switch (portalName.toLowerCase()) {

    case "main Portal":
      AppActions.click(BoreStageMainPortal);
      Log.Message("Clicked on Main Portal from Bore Stage Info");
      break;

    case "on Slip1":
      AppActions.click(BoreStageOnSlip1Portal);
      Log.Message("Clicked on On Slip1 from Bore Stage Info");
      break;

    case "on Slip2":
      AppActions.click(BoreStageOnSlip2Portal);
      Log.Message("Clicked on On Slip2 from Bore Stage Info");
      break;

    default:
      Log.Error("Invalid portal name passed: " + portalName +
        ". Expected: 'Main Portal', 'On Slip1', or 'On Slip2'");
      break;
  }
}

function VerifyPhotometerStatus(PhotometerName)
{
  var uiObj = null;

  switch (PhotometerName.toLowerCase()) {

    case "photometer 1":
      uiObj = eval(MainPortalPhotometer1);
      break;

    case "photometer 2":
      uiObj = eval(MainPortalPhotometer2);
      break;

    case "photometer 3":
      uiObj = eval(OnSlip1Photometer3);
      break;

    case "photometer 4":
      uiObj = eval(OnSlip1Photometer4);
      break;

    default:
      Log.Error("Invalid Photometer Name: " + PhotometerName);
      return;
  }

  if (!uiObj || !uiObj.Exists) {
    Log.Message(PhotometerName + " is not available.");
    return;
  }

  var status    = uiObj.DataContext.ConnStatus;
  var isEnabled = uiObj.DataContext.IsEnabled;

  Log.Message(PhotometerName + " is : " + status + ".");
  if(isEnabled)
  {
    Log.Message(PhotometerName + " is : Enabled");
  } else {
    Log.Message(PhotometerName + " is : Disabled");
  }
  ;

  // ✅ Return both values as object
  return {
    status: status,
    isEnabled: isEnabled
  };
}

function VerifyBoreHealth()
{
  var uiObj = AppGeneric.getUIObject(BoreHealth);
  var vm = uiObj.DataContext
  var DggHealthPercent = vm.DggHealthPercent
  var GatewayHealthPercent = vm.GatewayHealthPercent
  var LightHealthPercent = vm.LightHealthPercent
  var LightHealth = vm.LightHealth
  
  Log.Message(
        " | Dgg Health Percent: " + DggHealthPercent +
        " | Gateway Health Percent: " + GatewayHealthPercent +
        " | Light Health Percent: " + LightHealthPercent +
        " | Overall Health " + LightHealth
      );
}

function VerifyBoreStageInfo(BoreStage)
{
  var uiObj = null;
  switch (BoreStage.toLowerCase()) {
    
    case "main":
      uiObj = eval(BoreStageMainPortal);
      break;
      
    case "on slip":
      uiObj = eval(BoreStageOnSlip1Portal);
      break;
    }
    
    if (!uiObj || !uiObj.Exists) {
      Log.Message("Bore stage info "+ BoreStage + " Portal is not available.");
      return;
    }

    var ColorGroup = uiObj.FindAllChildren("ClrClassName", "ListBoxItem", 5);
    if (ColorGroup.length === 0) {
      Log.Error("No ColorGroup found in the given bore stage section");
      return;
    }
    
    var len_ColorGroup = ColorGroup.length;
    Log.Message("Total ColorGroup found in section: " + ColorGroup.length);

    for (var i = 0; i < len_ColorGroup; i++) {

      var ColorGroupIndex = ColorGroup[i];
    
    
    if (ColorGroupIndex.IsVisible)
    {
    
      if (!ColorGroupIndex || !ColorGroupIndex.Exists) {
        Log.Error("Color Group not found for item index " + (i + 1));
        continue;
      }
    
      var ColorGroupValue = ColorGroupIndex.FindChild("ClrClassName", "Label", 5);
      var ColorGroupName = AppColor.IdentifyColorGroup(ColorGroupValue); 
      var vm = uiObj.DataContext;
      var CurrentStage            = vm.CurrentStageDisplay
      var CurrentStagePercent     = vm.CurrentStagePercent;
      var ControlSource           = vm.StageController; 
      var ControlLuminance        = vm.ControlLuminanceDisp;
         

      Log.Message(
        " | Color Group Name: " + ColorGroupName +
        " | Current Stage: " + CurrentStage +
        " | Stage Percent: " + CurrentStagePercent +
        " | Control Source: " + ControlSource +
        " | Control Luminance: " + ControlLuminance
      );
      }
    }
}

function VerifyTrafficDirection()
{
  var uiObj = eval(TrafficFlow);
  var vm = uiObj.DataContext;
  var FlowModeString  = vm.FlowModeString
  var PrimaryFlow     = vm.PrimaryFlow;
  var SystemMode      = vm.SystemMode; 
      
  Log.Message(
    " | Traffic Mode: " + FlowModeString +
    " | Flow Direction: " + PrimaryFlow +
    " | Flow Mode: " + SystemMode
  );
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

function ClickOnBackButton()
{
  AppActions.click(BackbtnMain);
  Log.Message("Back button is clicked");
}