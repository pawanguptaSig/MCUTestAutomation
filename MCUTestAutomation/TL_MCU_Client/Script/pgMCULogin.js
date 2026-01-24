//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var Loginbtn = BaseLanding + "LogIn"

var tabCtrlMain = BaseLanding + "tabCtrlMain."
var SuperUserList =    BaseLanding + tabCtrlMain + "ListboxSuperUser.Button"
var MaintenanceUserList = BaseLanding + tabCtrlMain + "ListboxMaintenance.Button"
var ViewOnlyUserList = BaseLanding + tabCtrlMain + "ListboxViewOnly.Button"

var Grid = tabCtrlMain + "Grid."
var Pin0 = Grid + "btnPIN0"
var Pin1 = Grid + "btnPIN1"
var Pin2 = Grid + "btnPIN2"
var Pin3 = Grid + "btnPIN3"
var Pin4 = Grid + "btnPIN4"
var Pin5 = Grid + "btnPIN5"
var Pin6 = Grid + "btnPIN6"
var Pin7 = Grid + "btnPIN7"
var Pin8 = Grid + "btnPIN8"
var Pin9 = Grid + "btnPIN9"
var PinButtons = [Pin0, Pin1, Pin2, Pin3, Pin4, Pin5, Pin6, Pin7, Pin8, Pin9];
var ClearBtn = Grid + "btnClear"
var BackBtn = Grid + "btnBack"

var OKBtn = tabCtrlMain + "btnCancel"
var CancelBtn = tabCtrlMain + "btnOK"

var BackbtnMain = tabCtrlMain + "Back"
//----------------------------------------------------------------------------------------------------------------------------------------
function ClickLoginButton()
{
  AppActions.click(Loginbtn);
  Log.Message("Login button is clicked");
}

function SelectSuperUser()
{
  AppActions.clickbtn(SuperUserList);
  Log.Message("Super User is selected");
}

function SelectMaintenanceUser()
{
  AppActions.clickbtn(MaintenanceUserList);
  Log.Message("Maintenance User is selected");
}

function SelectViewOnlyUser()
{
  AppActions.clickbtn(ViewOnlyUserList);
  Log.Message("View Only User is selected");
}

function SelectUser() {
  userType = "SuperUser";
  var userMap = {
    "SuperUser": SuperUserList,
    "MaintenanceUser": MaintenanceUserList,
    "ViewOnlyUser": ViewOnlyUserList
  };

  var selectedUserPath = userMap[userType];  // get actual button path

  if (selectedUserPath == null) {
    Log.Error("Invalid user type passed: " + userType);
    return;
  }
  //Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.tabCtrlMain.ListboxSuperUser.Button;
  AppActions.clickCheckBox(selectedUserPath);   // click using your generic method
  Log.Message(userType + " is selected");
}


function EnterPin(pinString) {
  //var pinString = "111111";
  for (var i = 0; i < pinString.length; i++) {
    var ch = pinString.charAt(i);
    var digit = aqConvert.StrToInt(ch);
    ClickOnPin(digit);
  }
}

function ClickOnPin(number) {
  if (number < 0 || number > 9) {
    Log.Error("Invalid PIN digit: " + number);
    return;
  }
  var pinPath = PinButtons[number];
  AppActions.click(pinPath);
  Log.Message("Pin " + number + " button is clicked");
}

function ClickOnBackbtn()
{
 AppActions.click(BackBtn); 
 Log.Message("Back button is clicked");
}

function ClickOnClearbtn()
{
 AppActions.click(ClearBtn); 
 Log.Message("Clear button is clicked");
}

function ClickOnOKBtn()
{
  AppActions.click(OKBtn); 
  Log.Message("Ok button is clicked");
}

function ClickOnCancelBtn()
{
  AppActions.click(CancelBtn); 
  Log.Message("Cancel button is clicked"); 
}

function ClickOnBackbtnMain()
{
 AppActions.click(BackbtnMain); 
 Log.Message("Back button is clicked");
}



function Test1()
{
  //Clicks the 'Button' button.
  Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.tabCtrlMain.ListboxSuperUser.Button.ClickButton();
}