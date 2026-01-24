//USEUNIT AppLaunch
//USEUNIT AppSettings1
//USEUNIT AppDrag
//----------------------------------------------------------------------------------------------------------------------------------------
var BaseLanding = "Aliases.TunneLogicMCUClient.HwndSource_mainWindow.mainWindow_."
var TunnelLogicSystemLogo = BaseLanding + ".Image"
var CreateNewProjectLinKHomePage =    BaseLanding + "btnCreateNew"
var OpenExistingProjectLinKHomePage = BaseLanding + "btnLoadPrevious"
var OpenBackUpProjectLinKHomePage =   BaseLanding + "btnLoadTemp"
//----------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------------------
//Function Name: uiExists
//Parameters: objUI: Object to check if it exists | state : expected state boolean
//Details: Checks existance of UI element
//----------------------------------------------------------------------------------------------------------------------------------------
function terminateAllProcessesInstance(szProcessName,nWaitBeforeTerminate,nWaitAfterTerminate=60000)
{
    
    szProcessNameEXE = szProcessName + ".exe";
    var oProcess = Sys.WaitProcess(szProcessName,0);
    if (oProcess.Exists) 
    {
      Log.Message("Application is already running. Closing it...");
      Sys.Process(szProcessName).Terminate();
      Delay(2000);
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------
function launchApp(strCommand,strParameters,bErrorAssert=false) {
    Log.Event("Launch app : >> " + strCommand);
    Log.Event("Parameters : >> " + strParameters);
    var objFSO = getActiveXObject("Scripting.FileSystemObject");
    if(objFSO.FileExists(strCommand)){ 
        Log.Event("File Exists");
        var objShell = getActiveXObject("Wscript.Shell");  
        var nRet = objShell.Run("\"" + strCommand + "\" " + strParameters +"",4,false);
        Log.Event("Exist code : >> " + nRet);
        if (nRet != 0){
            Log.Message("Launch fail!");
            if(bErrorAssert == true){
               Log.Error("Launch fail!");
            }
        }
        return nRet;
    }
    else{
        Log.Message("File " + strCommand + " NOT Exists");
        if(bErrorAssert == true){
            Log.Error("Launch fail!");
        }
        return -1;
    }
}



function verifyMainWindowIsOpened(){
    var CurrentProcess = null;
    var CurrentWindow = null;
    CurrentProcess = Sys.WaitProcess(appProcess, 5000,1);
    isProcessExists(CurrentProcess);
    CurrentWindow = TunnelLogicSystemLogo;
    isObjectsExists(CurrentWindow);
//    CurrentWindow = OpenExistingProjectLinKHomePage;
//    isObjectsExists(CurrentWindow);
//    CurrentWindow = OpenBackUpProjectLinKHomePage;
//    isObjectsExists(CurrentWindow);
}


function isProcessExists(oProcess,bErrorAssert=true){
    if (oProcess.Exists){
        Log.Checkpoint("The verification passed. The process exist : >> " + oProcess.Name);
        return true;
    }
    else{
        if(bErrorAssert){
            Log.Error("Process not exists : >> " + oProcess.Name);
            return false;
        }
        Log.Message("The process NOT exist : >> " + oProcess.Name,"",pmHighest,AppConfig.attrWarn);    
        return false;    
    }
}

/* ******************************************************************
@@ isObjectsExists()
@
@ does   : verify object exist
@ param  : {TestObj}
@ output : print in the log: verification passed(green checkpoint)/verification faild(red error)
@ note   : 
******************************************************************  */
function isObjectsExists(obj,bErrorAssert=true){
    if (obj == null){
        if(bErrorAssert){
            Log.Error("Object not exists : >> " + obj);
            return false;
        }
        Log.Message("Object not exists : >> " + obj,"",pmHighest,AppConfig.attrWarn);
        return false;
        
    }
    else{    
        Log.Checkpoint("The verification passed. The object exist : >> " + obj);
        return true;
    }
}

function waitUntilProcessFinish(szProcessName,nWaitBeforeTerminate)
{
  var oProcess = Sys.WaitProcess(szProcessName,0);
  if (oProcess.Exists) 
  {
    Log.Message("Application is already running. Closing it...");
    Sys.Process(szProcessName).Terminate();
    Delay(2000);
  }
}

function waitUntilProcessFinish1(szProcessName,nWaitBeforeTerminate){
    var oProcess = Sys.WaitProcess(szProcessName,0);
    aqPerformance.Start("Timer_waitUntilProcessFinish",false)
    var bWaitProperty = oProcess.WaitProperty("Exists", false, nWaitBeforeTerminate);
    //if(bWaitProperty == false){
      //  Log.Message("The process "+ szProcessName +" still exists. after waiting : >> " + (nWaitBeforeTerminate /1000) + " seconds","",pmHighest,setAttributesLog("black","yellow"));
    //}
    //else{
      //  Log.Checkpoint("The process "+ szProcessName +" does not exist as expected, timeout: >> " +nWaitBeforeTerminate )
    //}
    let nElapsed = aqPerformance.Value("Timer_waitUntilProcessFinish")/1000;
    //Log.Message("Actual waiting time was : >> " + nElapsed + " seconds");
    //if (nElapsed > 10){
      //  Log.Message("Warning: waiting more then 10 seconds for process to finished","",pmHighest,setAttributesLog("black","yellow"));
    //}
    return bWaitProperty;
}



/* ******************************************************************
@@ Function Name :clickUntilNotVisible
@  Description : click Until object Not Visible
@  Parameter1 : Obj-Object to check if it exists | state : expected state boolean
@  Author : Pawan.Gupta
@ note   : 
******************************************************************  */
function clickUntilNotVisible(strLocName) {
  uiObj = eval(strLocName);
//  var okButton = obj;

  // Loop until the object is no longer visible
  while (uiObj.Exists && uiObj.VisibleOnScreen) {
    uiObj.Click();
    Delay(1000); // Adding a small delay to avoid rapid clicking
  }

  Log.Message(uiObj + " is no longer visible, stopping clicks.");
}


/* ******************************************************************
@@ Function Name :closeApplication
@  Description : Closes the Application
@  Parameter1 :  Application to close
@  Author : Pawan.Gupta
@ note   : 
******************************************************************  */
function closeApplicationProcess(){

     browser = Project.Variables.browser
     if (Sys.WaitBrowser(browser).Exists)
     {
        Sys.Browser(browser).Close()
        aqUtils.Delay(3000)
      }
     else
     { 
      Log.Error("Error occurred while closing the browser")
     }

}

function setAttributesLog(szFontColor,szBackColor){
    var attrLog = Log.CreateNewAttributes();
    attrLog.FontColor = colorNameToRGB(szFontColor);
    attrLog.BackColor = colorNameToRGB(szBackColor);
    attrLog.Bold = true;
    return attrLog;
}

function closeApplication(strLocName){
  uiObj = eval(strLocName);
  if (uiObj.Exists && uiObj.VisibleOnScreen) {
    uiObj.Close();
    Delay(1000); // Adding a small delay to avoid rapid clicking
  }

  Log.Message(uiObj + " is clicked.");
}


//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : getUIObject
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------

function saveFileInExplorer(filePath) {
//  var dlgSaveAs = Sys.Desktop.WaitWindow("#32770", "Save As", 10);

  var dlgSaveAs = Sys.Process("TunneLogicConfigurationWizard").Window("#32770", "Save As", 1)  // "Save As" dialog
  if (dlgSaveAs.Exists) {
    
    var count = dlgSaveAs.ChildCount;
    
    for(var i=0; i<count; i++)
    {
      var child = dlgSaveAs.Child(i);
      Log.Message("Child " + i + ": " + child.FullName + " | Class: " + child.WndClass);
    }
    
    
    var editFileName = dlgSaveAs.Find("WndClass", "Edit", true);
    //var editFileName = dlgSaveAs.Window("Edit", "", 1); // File name input field
    var btnSave = dlgSaveAs.Find("WndClass", "Button", true);; // Save button
//    
    // Enter file name
    editFileName.SetText(filePath);
    Delay(500); // Short delay for stability

    // Click Save button
    btnSave.Click();
    Log.Message("File saved successfully: " + filePath);
  } else {
    Log.Error("Save As dialog not found!");
  }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : getUIObject
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function verifyFileExists(filePath) {
//  var filePath = "C:\\Users\\800011965\\Documents\\" + fileName; // Construct full file path
  //var filePath = file; // Construct full file path

  if (aqFileSystem.Exists(filePath)) {
    Log.Message("File exists: " + filePath);
    return true;
  } else {
    Log.Error("File not found: " + filePath);
    return false;
  }
}

// Example usage:
//verifyFileExists("Project.xml"); // Replace with actual file name

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : getUIObject
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function getAllTab(strLocName)
{
  uiObj = eval(strLocName);
  if (uiObj.Exists && uiObj.VisibleOnScreen) 
  {
    var n = uiObj.wTabCount;
    if(n>0)
    {
      Log.Message("Number of Tabs Exists = " + n);
      Delay(1000);
      return n;
    }
    else{
      Log.Error("No Tab Found")
    }
     // Adding a small delay to avoid rapid clicking
  } 
}


//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : Verify
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function DGGColorAssignment(strBoreType, strLocName)
{
  //var strBoreType = "Bore2";
  var DGGToBore1Cord =  "180, 20, 220, -5"
  var DGGToBore2Cord =  "210, 20, 450, -10"

  var Bore1ToBore2Cord = "180, 20, 220, -5"
  var Bore2ToBore1Cord = "120, 20, -250, 0"

  var Bore1ToDGGCord = "120, 20, -250, 0"
  var Bore2ToDGGCord = "130, 20, -650, 0"
  uiObj = eval(strLocName);
  var left =uiObj.Left;
  switch (strBoreType)
  {   
    case "Bore1" :
      if(left === 120)
      {
        var Cordinates = DGGToBore1Cord;
        AppDrag.DragObj(strLocName,Cordinates);
      }
      else if(left === 432)
      {
        Log.Message(+strLocName+" is in the "+strBoreType+" column ");
      }
      else if(left === 745)
      {
        var Cordinates = Bore2ToBore1Cord;
        AppDrag.DragObj(strLocName,Cordinates);
      }
      else
      {
        Log.Message(+strLocName+" is not available in any column");
      }
    break;
  
    case "Bore2" :
      if(left === 120)
      {
        var Cordinates = DGGToBore2Cord;
        AppDrag.DragObj(strLocName,Cordinates);
      }
      else if(left === 432)
      {
        var Cordinates = Bore1ToBore2Cord;
        AppDrag.DragObj(strLocName,Cordinates);
      }
      else if(left === 745)
      {
        Log.Message(+strLocName+" is in "+strBoreType+" column");
      }
      else
      {
        Log.Message(+strLocName+" is not available in any column");
      }
    break;
    default:
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : getUIObject
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function getUIObject(strLocName) 
{    
    var UIObj = eval(strLocName);
    return UIObj;
}
