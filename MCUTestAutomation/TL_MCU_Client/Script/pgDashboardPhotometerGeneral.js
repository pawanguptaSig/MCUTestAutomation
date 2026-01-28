//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."

var tabCtrlMain = BaseLanding + "tabCtrlMain."
var PhotometerGeneralTab = tabCtrlMain + "tabItem1"
var PhotometerTimeBasedOverrideTab = tabCtrlMain + "tabItem2"

var Grid = tabCtrlMain + "Grid."
var EnableDisableToggleBtn = Grid + "DataBoundToggleTextBtn"
var TextDisabledByMcu =  Grid + "TextblockDisabledByMcu"

var OKBtn = tabCtrlMain + "btnCancel"
var CancelBtn = tabCtrlMain + "btnOK"
var BackbtnMain = BaseLanding + "Back"
//----------------------------------------------------------------------------------------------------------------------------------------
function ClickOnTimeBasedOverrideTab()
{
  AppActions.click(PhotometerTimeBasedOverrideTab);
  Log.Message("Time Based Override Tab is clicked");
}

function ClickOnTogglePhotometerBtn(strToggle) {
  var expectedText = "Disabled by MCU.";

  var uiObj = eval(TextDisabledByMcu);
  var actualText = uiObj.WPFControlText;
  var isVisible  = uiObj.isVisible;
  Log.Message("Actual text: " + actualText + ", VisibleOnScreen: " + isVisible);
  if (strToggle === "Enable") {
    if (isVisible && actualText === expectedText) {
      AppActions.click(EnableDisableToggleBtn);
      Log.Message("Photometer was Disabled, clicked Enable. Message: '" +
                  expectedText + "', Visible=" + isVisible);
    } else {
      Log.Message("Photometer is already Enabled. No action taken.");
    }
  }
  else if (strToggle === "Disable") {
    if (!isVisible) {
      AppActions.click(EnableDisableToggleBtn);
      Log.Message("Photometer was Enabled, clicked Disable.");
    } else {
      Log.Message("Photometer is already Disabled. Message visible: '" +
                  actualText + "'");
    }
  }
  else {
    Log.Error("Invalid strToggle value: " + strToggle +
              ". Use 'Enable' or 'Disable'.");
  }
}

function VerifyDisabledByMCUVisible(expectedText) 
{  
  var uiObj = eval(TextDisabledByMcu);

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

function ClickOnBackButton()
{
  AppActions.click(BackbtnMain);
  Log.Message("Back button is clicked");
}
