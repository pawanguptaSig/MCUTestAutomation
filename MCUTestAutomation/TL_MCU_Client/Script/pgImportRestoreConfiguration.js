//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_PopupWindow.PopupWindow."
var ImportFromConfigurationFileRadioButton = BaseLanding + "rbChoice1"
var ImportFromZipFileRadioButton = BaseLanding + "rbChoice2"
var Okbtn = BaseLanding + "btnOk"
var Cancelbtn = BaseLanding + "btnCancel"
//----------------------------------------------------------------------------------------------------------------------------------------
function SelectImportFromConfigurationFile()
{
   AppActions.click(ImportFromConfigurationFileRadioButton);
   Log.Message("Import From Configuration File radio button is clicked");
}

function SelectImportFromZipFile()
{
   AppActions.click(ImportFromZipFileRadioButton);
   Log.Message("Import From Zip File radio button is clicked");
}

function ClickOkButton()
{
  AppActions.click(Okbtn);
  Log.Message("Ok button is clicked"); 
}

function ClickCancelButton()
{
   AppActions.click(Cancelbtn);
   Log.Message("Cancel button is clicked");
}