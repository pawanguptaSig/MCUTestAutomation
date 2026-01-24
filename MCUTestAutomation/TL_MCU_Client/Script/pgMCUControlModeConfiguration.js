//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_PopupWindow.PopupWindow."
var StandaloneRadioButton = BaseLanding + "rbChoice1"
var DutyRadioButton =    BaseLanding + "rbChoice2"
var StandByRadioButton = BaseLanding + "rbChoice3"
var  Okbtn = BaseLanding + "btnOk"
//----------------------------------------------------------------------------------------------------------------------------------------
function SelectStandAloneRadioButton()
{
   AppActions.click(StandaloneRadioButton);
   Log.Message("Standalone MCU radio button is clicked");
}

function SelectDutyRadioButton()
{
   AppActions.click(DutyRadioButton);
   Log.Message("Duty MCU radio button is clicked");
}

function SelectStandByRadioButton()
{
   AppActions.click(StandByRadioButton);
   Log.Message("StandBy MCU radio button is clicked");
}

function ClickOkButton()
{
  AppActions.click(Okbtn);
  Log.Message("Ok button is clicked"); 
}