//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."

var FlowModeTab = tabCtrlMain + "tabItem12.TextblockFlowMode"
var StageOverrideTab = tabCtrlMain + "tabItem2.TextblockStageOverride"
var ColorOverrideTab = tabCtrlMain + "tabItem3.TextblockColorOverride"
var InteriorZoneSensorStatusTab = tabCtrlMain + "tabItem5.TextblockInteriorZoneSensorStatus"
var IndividualControlTab = tabCtrlMain + "tabItem6.TextblockIndividualControl"
var AdvancedControlTab = tabCtrlMain + "tabItem7.TextblockAdvancedControl"


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
  for (var i=1; i<7; i++)
  {
    if(i==1)
    {
      var text = "Flow Mode";
      ClickOnTabOnControlPage(text)
    }
    else if(i==2)
    {
      var text = "Stage Override";
      ClickOnTabOnControlPage(text)
    }
    else if(i==3)
    {
      var text = "Color Override";
      ClickOnTabOnControlPage(text)
    }
    else if(i==4)
    {
      var text = "Interior Zone Sensor Status";
      ClickOnTabOnControlPage(text)
    }
    else if(i==5)
    {
      var text = "Individual Control";
      ClickOnTabOnControlPage(text)
    }
    else if(i==6)
    {
      var text = "Advanced Control";
      ClickOnTabOnControlPage(text)
    }
    else 
    {
      Log.message("Nothing");
    }
  }
}

function ClickOnTabOnControlPage(TabName)
{
  switch (TabName) {
    case "Flow Mode":
      AppActions.click(FlowModeTab);
      Log.Message("Clicked on 'Flow Mode' tab");
      break;

    case "Stage Override":
      AppActions.click(StageOverrideTab);
      Log.Message("Clicked on 'Stage Override' tab");
      break;

    case "Color Override":
      AppActions.click(ColorOverrideTab);
      Log.Message("Clicked on 'Color Override' tab");
      break;
      
    case "Interior Zone Sensor Status":
      AppActions.click(InteriorZoneSensorStatusTab);
      Log.Message("Clicked on 'Interior Zone Sensor Status' tab");
      break;
      
    case "Individual Control":
      AppActions.click(IndividualControlTab);
      Log.Message("Clicked on 'Individual Control' tab");
      break;
      
    case "Advanced Control":
      AppActions.click(AdvancedControlTab);
      Log.Message("Clicked on 'Advanced Control' tab");
      break;
      
    default:
      Log.Error("Invalid Tab name Entered " + TabName +
        ". Expected: 'Flow Mode', 'Stage Override', 'Color Override', 'Interior Zone Sensor Status', 'Individual Control' or 'Advanced Control'");
      break;
  }
}