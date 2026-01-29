//USEUNIT AppGeneric
//USEUNIT AppLaunch
//USEUNIT AppSettings1
//USEUNIT AppWindowsFile
//USEUNIT pgDashboard
//USEUNIT pgDashboardColorGroup
//USEUNIT pgDashboardPhotometerGeneral
//USEUNIT pgDashboardBoreStageInfo
//USEUNIT pgControlStageOverride
//USEUNIT pgMainNavigation
//USEUNIT pgControlNavigation
//USEUNIT pgControlColorOverride
//USEUNIT pgControlIndividualControl
//USEUNIT pgDashboardNavigation
//USEUNIT pgDashboardFLG
//USEUNIT pgDashboardSectionGroup


//Done
Given("Terminate any existing {arg} application instance", function (param1){
  AppGeneric.terminateAllProcessesInstance(param1,0);
});
//Done
Given("{arg} Service is {arg}", function (param1, param2){
  AppLaunch.controlService(param1, param2);
});

//Done
When("TunneLogic application is launched", function (){
  AppGeneric.launchApp(appPath + "\\" + appProcess + ".exe","",true);
});

//Done
When("{arg} Service is {arg}", function (param1, param2){
  AppLaunch.controlService(param1, param2);
});

//When("Service is {arg}", function (param1){
//  AppLaunch.controlService(param1);
//});

// DONE: 
Then("validate that MCU application is launched", function (){
  verifyMainWindowIsOpened();
});

//Done
Then("Verify and validate that TunneLogic MCU application is launched", function (){
  verifyMainWindowIsOpened();
});

Given("The application in the MCU main screen", function (){
  verifyMainWindowIsOpened();
});

When("login into MCU main menu", function (){
  throw new NotImplementedError();
});

When("check Login as super user\\/Maintenance user\\/View only user on MCU Client", function (){
  throw new NotImplementedError();
});

When("check to access the Dashboard tab", function (){
  throw new NotImplementedError();
});

When("check to access the control tab", function (){
  throw new NotImplementedError();
});

When("check to access the Settings tab", function (){
  throw new NotImplementedError();
});

When("check to access the Eventlog tab", function (){
  throw new NotImplementedError();
});

Then("validate each of these {arg} tabs are clickable and take user to the correct screen successfully", function (param1){
  throw new NotImplementedError();
});

//done
Given("Delete folder {arg}", function (param1){
  AppWindowsFile.DeleteFolder(param1);
});

//Done
Then("Delete folder {arg}", function (param1){
  AppWindowsFile.DeleteFolder(param1);
});

//Done
Then("Rename folder {arg} to {arg}", function (param1, param2){
  AppWindowsFile.renameFolder(param1, param2);
});

Given("TunneLogic MCU application is on Dashboard Page", function (){
  verifyMainWindowIsOpened();
});

When("Clicked on Photometer1 on Main Portal", function (){
  pgDashboard.ClickOnPhotometermeter1_In_MainPortal();
});

When("Clicked on Photometer2 on Main Portal", function (){
  pgDashboard.ClickOnPhotometermeter2_In_MainPortal();
});

When("Clicked on Photometer3 on On slip Portal", function (){
  pgDashboard.ClickOnPhotometermeter3_In_OnSlip1Portal();
});

When("Clicked on Photometer4 on On slip Portal", function (){
  pgDashboard.ClickOnPhotometermeter4_In_OnSlip1Portal();
});

When("Clicked on {arg} button", function (param1){
  pgDashboardPhotometerGeneral.ClickOnTogglePhotometerBtn1(param1);
});

Then("{arg} is written next to the enable\\/disable button", function (param1){
  pgDashboardPhotometerGeneral.VerifyDisabledByMCUVisible(param1);
});

When("{arg} {arg}", function (param1, param2){
  pgDashboard.TogglePhotometer(param1, param2);
});

Then("Clicked on back button", function (){
  pgDashboardPhotometerGeneral.ClickOnBackButton();
});

Then("Verify {arg} is written under photometer icon", function (param1){
  pgDashboard.VerifyDisabledVisible(param1);
});

When("Clicked on back button", function (){
  pgDashboardPhotometerGeneral.ClickOnBackButton();
});

When("Clicked on {arg} from Bore Stage Info", function (param1){
  pgDashboard.ClickBoreStagePortal(param1);
});

Then("Verify Control Source is {arg}", function (param1){
  pgDashboardBoreStageInfo.VerifyControlSourceValue(param1);
});

When("Clicked on {arg} Tab", function (param1){
  pgMainNavigation.ClickOnMainTab(param1);
});

Then("Clicked on {arg} Tab", function (param1){
  pgMainNavigation.ClickOnMainTab(param1);
});

When("Clicked on {arg} Tab in Control Tab", function (param1){
  pgControlNavigation.ClickOnTabOnControlPage(param1);
});

When("Clicked on {arg} on Bore1 Main Portal", function (param1){
  pgControlStageOverride.ClickOnBore1MainPortalStage(param1);
});

When("Clicked on {arg} on Bore1 On Slip Portal", function (param1){
  pgControlStageOverride.ClickOnBore1OnSlipPortalStage(param1);
});

Then("Clicked on {arg} from Bore Stage Info", function (param1){
  pgDashboard.ClickBoreStagePortal(param1);
});

When("Clicked on Emergency override", function (){
  pgDashboard.ClickOnEmergencyOverride();
});

When("Clicked on OK", function (){
  pgDashboard.ClickOnOK_Popup();
});

Then("Set light level as {arg} for {arg} color group", function (param1, param2){
  pgControlColorOverride.SetLightLevelForColorGroup(param1, param2);
});

Then("Validate the status of {arg} on dashboard", function (param1){
  pgDashboard.VerifyPhotometerStatus(param1);
});

Then("{arg} is written next to the enable\\/disable button.", function (param1){
  throw new NotImplementedError();
});

When("Select Bore {arg}", function (param1){
  pgControlIndividualControl.SelectBore(param1);
});

When("Select FLG {arg}", function (param1){
  pgControlIndividualControl.SelectFLG(param1);
});

When("Select color group {arg}", function (param1){
  pgControlIndividualControl.SelectColorGroup(param1);
});

When("Select Luminaire {arg}", function (param1){
  pgControlIndividualControl.SelectLuminaire(param1);
});

Then("Click on flash button", function (){
  pgControlIndividualControl.ClickOnFlashBtn();
});

Then("Set light level as {arg}", function (param1){
  pgControlIndividualControl.SetMainLightLevel(param1);
});

When("Clicked on {arg} Tab in Dashboard Tab", function (param1){
  pgDashboardNavigation.ClickOnTabOnDashboardPage(param1);
});

Then("Verify logged in user", function (){
  pgDashboard.VerifyLoggedUser();
});

Then("Verify Status menu", function (){
  pgDashboard.VerifyStatusMenu();
});

Then("Verify {arg} Status", function (param1){
  pgDashboard.VerifyPhotometerStatus(param1);
});

Then("Verify Bore Health value", function (){
  pgDashboard.VerifyBoreHealth();
});

Then("Verify Bore Stage Info {arg} Portal", function (param1){
  pgDashboard.VerifyBoreStageInfo(param1);
});

Then("verify Traffic direction", function (){
  pgDashboard.VerifyTrafficDirection();
});

Then("Verify DGGs in Bore {arg}", function (param1){
  pgDashboardColorGroup.getDggOnBore(param1);
});

Then("Verify FLGs in Bore {arg}", function (param1){
  pgDashboardFLG.getFLGOnBore(param1);
});

Then("Verify Section Groups in Bore {arg}", function (param1){
  pgDashboardSectionGroup.getSectionGroupOnBore(param1);
});

