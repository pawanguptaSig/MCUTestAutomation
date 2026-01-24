//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."

var DashboardTab = tabCtrlMain + "tabItem13"
var ControlTab = tabCtrlMain + "tabItem2"
var SetupTab = tabCtrlMain + "tabItem3"
var EventLogTab = tabCtrlMain + "tabItem4"

//TextblockDashboard
//TextblockControl
//TextblockSetup
//TextblockEventLog
//----------------------------------------------------------------------------------------------------------------------------------------
function test(){
  for (var i=1; i<5; i++)
  {
    if(i==1)
    {
      var text = "Dashboard";
      ClickOnMainTab(text)
    }
    else if(i==2)
    {
      var text = "Control";
      ClickOnMainTab(text)
    }
    else if(i==3)
    {
      var text = "Setup";
      ClickOnMainTab(text)
    }
    else if(i==4)
    {
      var text = "EventLog";
      ClickOnMainTab(text)
    }
    else 
    {
      Log.message("Nothing");
    }
  }
}

function ClickOnMainTab(TabName)
{
  switch (TabName) {
    case "Dashboard":
      AppActions.click(DashboardTab);
      Log.Message("Clicked on Dashboard Portal tab");
      break;

    case "Control":
      AppActions.click(ControlTab);
      Log.Message("Clicked on Control tab");
      break;

    case "Setup":
      AppActions.click(SetupTab);
      Log.Message("Clicked on Setup tab");
      break;
      
    case "EventLog":
      AppActions.click(EventLogTab);
      Log.Message("Clicked on EventLog tab");
      break;
      
    default:
      Log.Error("Invalid Tab name Entered " + TabName +
        ". Expected: 'Dashboard', 'Control', 'Setup' or 'EventLog'");
      break;
  }
}