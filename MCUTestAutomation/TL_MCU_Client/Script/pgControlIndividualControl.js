//USEUNIT AppActions
//USEUNIT AppGeneric
//USEUNIT AppText
//USEUNIT AppString
//USEUNIT AppColor
//----------------------------------------------------------------------------------------------------------------------------------------

//var HierarchyPanel = Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.tabCtrlMain.Grid3.ListBox.ListBoxItem // adjust if needed (container of Bore tree)

var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.tabCtrlMain."
var Grid = BaseLanding + "Grid."
var Grid3 = BaseLanding + "Grid3.ListBox."
var ListBoxItem = Grid3 + "ListBoxItem."
var flagList = ListBoxItem + "Grid.flgListBox."

var HierarchyPanel = Grid3 + "ListBoxItem"

var Red1 = flagList + "ListBoxItem.StackPanel.ColorGroupListBox.Listboxitem1Ffcd0000.StackPanel.TextblockRed1"
var Green2 = flagList + "ListBoxItem2.StackPanel.ColorGroupListBox.Label.StackPanel.TextblockGreen2"
var Purple3 = flagList + "ListBoxItem3.StackPanel.ColorGroupListBox.StackPanel.Label.StackPanel.TextblockPurple3"
var Luminaire_B1P1_R01_L0001_Ent =  flagList + "ListBoxItem.StackPanel.ColorGroupListBox.Listboxitem1Ffcd0000.ListBox.ListBoxItem.TextblockB1p1R01L0001Ent"
var Luminaire_B1P1_R01_L0002_Ent =  flagList + "ListBoxItem2.TextblockB1p1R01L0002Ent"
var Luminaire_B1P1_R01_L0003_Ent =  flagList + "ListBoxItem3.TextblockB1p1R01L0003Ent"
var Luminaire_B1P1_R01_L0004_Ent =  flagList + "ListBoxItem.StackPanel.ColorGroupListBox.Listboxitem1Ffcd0000.ListBox.ListBoxItem2.TextblockB1p1R01L0004Ent"
var Luminaire_B1P1_R01_L0005_Ent =  flagList + "ListBoxItem2.StackPanel.ColorGroupListBox.Label.TextblockB1p1R01L0005Ent"
var Luminaire_B1P1_R01_L0006_Ent =  flagList + "ListBoxItem2.StackPanel.ColorGroupListBox.Label.TextblockB1p1R01L0006Ent"
var Luminaire_B1P1_R01_L0007_Ent =  flagList + "ListBoxItem2.StackPanel.ColorGroupListBox.Label.TextblockB1p1R01L0007Ent"
var Luminaire_B1P1_R01_L0008_Ent =  flagList + "ListBoxItem.TextblockB1p1R01L0008Ent"
var Luminaire_B1P1_R01_L0009_Ent =  flagList + "ListBoxItem2.TextblockB1p1R01L0009Ent"
var Luminaire_B1P1_R01_L00010_Ent = flagList + "ListBoxItem3.StackPanel.ColorGroupListBox.StackPanel.ListBox.TextblockB1p1R01L0010Ent"
var FlashBtn = Grid + "GenericButton";

var powerGrid = NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.Grid.PowerGrid;
//----------------------------------------------------------------------------------------------------------------------------------------

//var labelPath = Grid + "Bore1DGGColorBarList.Grid.DataContext.DGGGroupPercentage"
//var parentPanel = Grid + "StackPanel2"

//var ColorGroupPanel = 

//function test()
//{
//  var bore = 'Bore 1';
//  var flg = 'FLG 1';
//  var colorGroup = 'Red1';
//  var luminaire = 'B1P1_R01_L0001_Ent';
//  SelectBoreFLGColorAndLuminaire(bore, flg, colorGroup, luminaire);  
//}

function SelectBore(boreName) {
  return ClickItemByText(HierarchyPanel, boreName);
}

function SelectFLG(flgName) {
  return ClickItemByText(HierarchyPanel, flgName);
}

function SelectColorGroup(colorName) {
  //return ClickItemByTextCG(ColorObj, colorName);
  return ClickColorGroupPath(colorName);
}

function SelectLuminaire(luminaireName) {
  // toggle selection (1st click select, 2nd click unselect)
  return ClickLuminairePath(luminaireName);

}

//function SelectBoreFLGColorAndLuminaire(bore, flg, colorGroup, luminaire) {
//
//  if (!SelectBore(bore)) return;
//  Delay(300);
//
//  if (!SelectFLG(flg)) return;
//  Delay(300);
//
//  if (!SelectColorGroup(colorGroup)) return;
//  Delay(300);
//
//  SelectLuminaire(luminaire);
//}

function ClickItemByText(StrLocName, itemText) {
  var parentObj = AppGeneric.getUIObject(StrLocName);

  var items = parentObj.FindAllChildren("ClrClassName", "TextBlock", 10);

  for (var i = 0; i < items.length; i++) {
    var txt = items[i].WPFControlText;

    if (txt === itemText) {
      items[i].Click();
      Log.Message("Clicked item: " + itemText);
      return true;
    }
  }

  Log.Error("Item not found: " + itemText);
  return false;
}

//
//function ClickItemByTextCG(parentObj, itemText) {
//
//  var items = parentObj.FindAllChildren("ClrClassName", "TextBlock", 10);
//
//  for (var i = 0; i < items.length; i++) {
//    var txt = items[i].WPFControlText;
//
//    if (txt === itemText) {
//      items[i].Click();
//      Log.Message("Clicked item: " + itemText);
//      return true;
//    }
//  }
//
//  Log.Error("Item not found: " + itemText);
//  return false;
//}

function ClickColorGroupPath(colorName) {

  var colorPath = "";

  switch (colorName) {

    case "Red1":
        AppActions.click(Red1);
      break;

    case "Green2":
        AppActions.click(Green2);
      break;

    case "Purple3":
        AppActions.click(Purple3);
      break;

    default:
      Log.Error("Invalid color group: " + colorName);
      return null;
  }

  return colorPath;
}


function ClickLuminairePath(LuminaireName) {

  var LuminairePath = "";

  switch (LuminaireName) {

    case "B1P1_R01_L0001_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0001_Ent);
      break;

    case "B1P1_R01_L0002_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0002_Ent);
      break;

    case "B1P1_R01_L0003_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0003_Ent);
      break;
      
    case "B1P1_R01_L0004_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0004_Ent);
      break;

    case "B1P1_R01_L0005_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0005_Ent);
      break;

    case "B1P1_R01_L0006_Ent":        
        AppActions.click(Luminaire_B1P1_R01_L0006_Ent);
      break;
      
    case "B1P1_R01_L0007_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0007_Ent);
      break;

    case "B1P1_R01_L0008_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0008_Ent);
      break;

    case "B1P1_R01_L0009_Ent":
        AppActions.click(Luminaire_B1P1_R01_L0009_Ent);
      break;
      
    case "B1P1_R01_L00010_Ent":
        AppActions.click(Luminaire_B1P1_R01_L00010_Ent);
      break;
      
    default:
      Log.Error("Invalid color group: " + colorName);
      return null;
  }

  return LuminairePath;
}

function ClickOnFlashBtn()
{
  AppActions.click(FlashBtn);
  Log.Message("Flash button is Clicked");
}


function GetCurrentPercentage() {
  var powerGrid = NameMapping.Sys.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_.DockPanel.StackPanel.tabCtrlMain.Grid.Grid.PowerGrid;
  var percent = powerGrid.DataContext.LightLevelForLuminaires; 
  Log.Message("Current Light % = " + percent);
  return percent;
}

function SetMainLightLevel(targetPercentStr) {
//  var targetPercentStr = "30%"
  var targetPercent = aqConvert.StrToInt(targetPercentStr.replace("%", ""));
  var powerBtn  = powerGrid.WPFObject("GenericButton", "", 1);
  var fullBtn   = powerGrid.WPFObject("GenericButton", "", 2);
  var leftArrow = powerGrid.WPFObject("RepeatButton", "", 1);
  var rightArrow= powerGrid.WPFObject("RepeatButton", "", 2);

  if (!powerBtn.Exists || !fullBtn.Exists ||
      !leftArrow.Exists || !rightArrow.Exists) {
    Log.Error("One or more PowerGrid controls not found");
    return;
  }

  if (targetPercent === 0) {
    powerBtn.Click();
    Log.Message("Main light set to 0%");
    return;
  }

  if (targetPercent === 100) {
    fullBtn.Click();
    Log.Message("Main light set to 100%");
    return;
  }

  var current = GetCurrentPercentage();
  var diff = targetPercent - current;

  Log.Message("Adjusting main light from " + current +
              "% to " + targetPercent + "%");

  if (diff > 0) {
    for (var i = 0; i < diff; i++) {
      rightArrow.Click();
    }
  }
  else if (diff < 0) {
    for (var j = 0; j < Math.abs(diff); j++) {
      leftArrow.Click();
    }
  }

  Log.Message("Main light adjustment completed");
}


