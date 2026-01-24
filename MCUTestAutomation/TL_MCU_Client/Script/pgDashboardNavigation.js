//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
                   Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.tabCtrlMain.StackPanel.rdbColorGrpView
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var StackPanel = tabCtrlMain + "StackPanel."

var ColorGroupTab = StackPanel + "rdbColorGrpView"
var FLGTab = StackPanel + "flgView"
var SectionGroupTab = StackPanel + "sectionView" 
var FloorPlanTab = StackPanel + "floorPlanView"

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
      var text = "Color group";
      ClickOnTabOnDashboardPage(text)
    }
    else if(i==2)
    {
      var text = "FLG";
      ClickOnTabOnDashboardPage(text)
    }
    else if(i==3)
    {
      var text = "Section Group";
      ClickOnTabOnDashboardPage(text)
    }
    else if(i==4)
    {
      var text = "Floor Plan";
      ClickOnTabOnDashboardPage(text)
    }
    else 
    {
      Log.message("Nothing");
    }
  }
}

function ClickOnTabOnDashboardPage(TabName)
{
  switch (TabName) {
    case "Color group":
      AppActions.click(ColorGroupTab);
      Log.Message("Clicked on 'Color group' tab");
      break;

    case "FLG":
      AppActions.click(FLGTab);
      Log.Message("Clicked on 'FLG' tab");
      break;

    case "Section Group":
      AppActions.click(SectionGroupTab);
      Log.Message("Clicked on 'Section Group' tab");
      break;
      
    case "Floor Plan":
      AppActions.click(FloorPlanTab);
      Log.Message("Clicked on 'Floor Plan' tab");
      break;
      
    default:
      Log.Error("Invalid Tab name Entered " + TabName +
        ". Expected: 'Color group', 'FLG', 'Section Group', 'Floor Plan'");
      break;
  }
}