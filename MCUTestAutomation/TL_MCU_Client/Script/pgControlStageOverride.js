//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
 
var tabCtrlMain = BaseLanding + "tabCtrlMain."
var tabItem = tabCtrlMain + "tabItem2."

var Grid3 = tabCtrlMain + "Grid3."
var B1MP_StageOff = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem.ToggleImageButton"
var B1MP_Stage1 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem2.ToggleImageButton"
var B1MP_Stage2 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem3.ToggleImageButton"
var B1MP_Stage3 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem4.ToggleImageButton"
var B1MP_Stage4 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem5.ToggleImageButton"
var B1MP_Stage5 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem6.ToggleImageButton"
var B1MP_Stage6 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem7.ToggleImageButton"
var B1MP_Stage7 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem8.ToggleImageButton"
var B1MP_Stage8 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem9.ToggleImageButton"
var B1MP_Stage9 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem10.ToggleImageButton"
var B1MP_Stage10 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem11.ToggleImageButton"
var B1MP_Stage11 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem12.ToggleImageButton"
var B1MP_Stage12 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem13.ToggleImageButton"
var B1MP_Stage13 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem14.ToggleImageButton"
var B1MP_Stage14 = Grid3 + "scrollViewerMainRightPortal.StackPanel.ListStagesMainRightP.ListBoxItem15.ToggleImageButton"
//----------------------------------------------------------------------------------------------------------------------------------------
var B1OSP_StageOff = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem.ToggleImageButton"
var B1OSP_Stage1 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem2.ToggleImageButton"
var B1OSP_Stage2 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem3.ToggleImageButton"
var B1OSP_Stage3 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem4.ToggleImageButton"
var B1OSP_Stage4 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem5.ToggleImageButton"
var B1OSP_Stage5 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem6.ToggleImageButton"
var B1OSP_Stage6 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem7.ToggleImageButton"
var B1OSP_Stage7 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem8.ToggleImageButton"
var B1OSP_Stage8 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem9.ToggleImageButton"
var B1OSP_Stage9 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem10.ToggleImageButton"
var B1OSP_Stage10 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem11.ToggleImageButton"
var B1OSP_Stage11 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem12.ToggleImageButton"
var B1OSP_Stage12 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem13.ToggleImageButton"
var B1OSP_Stage13 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem14.ToggleImageButton"
var B1OSP_Stage14 = Grid3 + "StackPanel.ListStagesOnSlipP.ListBoxItem15.ToggleImageButton"

//----------------------------------------------------------------------------------------------------------------------------------------
function test(){
  for (var i=1; i<15; i++)
  {
    var stageNm = "Stage " + i;
    ClickOnBore1OnSlipPortalStage(stageNm);
  }
}

function ClickOnBore1MainPortalStage(StageName)
{
  switch (StageName) {

    case "Stage Off":
      AppActions.click(B1MP_StageOff);
      Log.Message("Clicked on 'Off' on Bore 1 Main Portal");
      break;
      
    case "Stage 1":
      AppActions.click(B1MP_Stage1);
      Log.Message("Clicked on 'Stage 1' on Bore 1 Main Portal");
      break;

    case "Stage 2":
      AppActions.click(B1MP_Stage2);
      Log.Message("Clicked on 'Stage 2' on Bore 1 Main Portal");
      break;

    case "Stage 3":
      AppActions.click(B1MP_Stage3);
      Log.Message("Clicked on 'Stage 3' on Bore 1 Main Portal");
      break;

    case "Stage 4":
      AppActions.click(B1MP_Stage4);
      Log.Message("Clicked on 'Stage 4' on Bore 1 Main Portal");
      break;
      
    case "Stage 5":
      AppActions.click(B1MP_Stage5);
      Log.Message("Clicked on 'Stage 1' on Bore 1 Main Portal");
      break;
      
    case "Stage 6":
      AppActions.click(B1MP_Stage6);
      Log.Message("Clicked on 'Stage 6' on Bore 1 Main Portal");
      break;
      
    case "Stage 7":
      AppActions.click(B1MP_Stage7);
      Log.Message("Clicked on 'Stage 7' on Bore 1 Main Portal");
      break;
      
    case "Stage 8":
      AppActions.click(B1MP_Stage8);
      Log.Message("Clicked on 'Stage 8' on Bore 1 Main Portal");
      break;
      
    case "Stage 9":
      AppActions.click(B1MP_Stage9);
      Log.Message("Clicked on 'Stage 9' on Bore 1 Main Portal");
      break;
      
    case "Stage 10":
      AppActions.click(B1MP_Stage10);
      Log.Message("Clicked on 'Stage 10' on Bore 1 Main Portal");
      break;
      
    case "Stage 11":
      AppActions.click(B1MP_Stage11);
      Log.Message("Clicked on 'Stage 11' on Bore 1 Main Portal");
      break;
      
    case "Stage 12":
      AppActions.click(B1MP_Stage12);
      Log.Message("Clicked on 'Stage 12' on Bore 1 Main Portal");
      break;
      
    case "Stage 13":
      AppActions.click(B1MP_Stage13);
      Log.Message("Clicked on 'Stage 13' on Bore 1 Main Portal");
      break;
      
    case "Stage 14":
      AppActions.click(B1MP_Stage14);
      Log.Message("Clicked on 'Stage 14' on Bore 1 Main Portal");
      break;
      
    default:
      Log.Error("Entered a invalid Stage name " + StageName);
      break;
  } 
}

function ClickOnBore1OnSlipPortalStage(StageName)
{
  switch (StageName) {

    case "Stage Off":
      AppActions.click(B1OSP_StageOff);
      Log.Message("Clicked on 'Off' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 1":
      AppActions.click(B1OSP_Stage1);
      Log.Message("Clicked on 'Stage 1' on Bore 1 On Slip Portal");
      break;

    case "Stage 2":
      AppActions.click(B1OSP_Stage2);
      Log.Message("Clicked on 'Stage 2' on Bore 1 On Slip Portal");
      break;

    case "Stage 3":
      AppActions.click(B1OSP_Stage3);
      Log.Message("Clicked on 'Stage 3' on Bore 1 On Slip Portal");
      break;

    case "Stage 4":
      AppActions.click(B1OSP_Stage4);
      Log.Message("Clicked on 'Stage 4' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 5":
      AppActions.click(B1OSP_Stage5);
      Log.Message("Clicked on 'Stage 1' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 6":
      AppActions.click(B1OSP_Stage6);
      Log.Message("Clicked on 'Stage 6' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 7":
      AppActions.click(B1OSP_Stage7);
      Log.Message("Clicked on 'Stage 7' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 8":
      AppActions.click(B1OSP_Stage8);
      Log.Message("Clicked on 'Stage 8' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 9":
      AppActions.click(B1OSP_Stage9);
      Log.Message("Clicked on 'Stage 9' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 10":
      AppActions.click(B1OSP_Stage10);
      Log.Message("Clicked on 'Stage 10' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 11":
      AppActions.click(B1OSP_Stage11);
      Log.Message("Clicked on 'Stage 11' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 12":
      AppActions.click(B1OSP_Stage12);
      Log.Message("Clicked on 'Stage 12' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 13":
      AppActions.click(B1OSP_Stage13);
      Log.Message("Clicked on 'Stage 13' on Bore 1 On Slip Portal");
      break;
      
    case "Stage 14":
      AppActions.click(B1OSP_Stage14);
      Log.Message("Clicked on 'Stage 14' on Bore 1 On Slip Portal");
      break;
      
    default:
      Log.Error("Entered a invalid Stage name " + StageName);
      break;
  } 
}