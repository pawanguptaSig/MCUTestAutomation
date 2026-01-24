//USEUNIT AppGeneric
//USEUNIT AppSettings1

var appName= "TunneLogicConfigurationWizard" 
var appPath= "C:\\Program Files\\Philips\\TunneLogic\\MCU"
var appProcess= "TunneLogicMCUClient"
var appServer = "TunneLogicServer"

//var AppGeneric = require("AppGeneric");
//var AppSettings = require("AppSettings");


/* ******************************************************************
@@ Function Name :LaunchApplication
@  Description : Launches the Application
@  Parameter1 : path :application to be launched 
@  Author : Pawan.Gupta
@ note   : 
******************************************************************  */

function terminateAllProcessesInstance(){
  AppGeneric.terminateAllProcessesInstance(appProcess,0);
}

function launchApplication(){
  AppGeneric.terminateAllProcessesInstance(appProcess,0);
  AppGeneric.launchApp(appPath + "\\" + appProcess + ".exe","",true);
}

function verifyMainWindowIsOpened(){
  verifyMainWindowIsOpened();
}

function controlService(appServer, action){
  var cmd = 'cmd /c net ' + action + ' "' + appServer + '"';  
  Sys.OleObject("WScript.Shell").Run(cmd, 0, true);
  Log.Message("Service '" + appServer + "' " + action + " command executed.");
}

function closeApplication(){
  AppGeneric.closeApplication();
}

/*
function BrowserEvents_OnStopTestCase(Sender, StopTestCaseParams)
{
  Log.AppendFolder("Closes the Browser")
   closebrowser()
  Log.PopLogFolder() 
}
*/