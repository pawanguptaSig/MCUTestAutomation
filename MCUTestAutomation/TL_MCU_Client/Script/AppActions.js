//USEUNIT AppSettings1
//var AppGeneric = require("AppGeneric");
//var AppSettings = require("AppSettings");

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : Click
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function click(strLocName){
      uiObj = eval(strLocName);
      if (uiObj.visible)
      {
        uiObj.Click();
      }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : clickbtn
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clickbtn(strLocName){
  
      uiObj = eval(strLocName);
      //uiObj = UIGeneric.getUIObject(strLocName)       
      //getPage().Wait()        
      if (uiObj.visible)
      //if (uiObj)
      {
        uiObj.ClickButton();
        //waits for the page to load  
        //Sys.        
        //getPage().Wait()
      }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : clicktab
//Description: It clicks on the tabs in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clickTab(strLocName, Value){
  
      uiObj = eval(strLocName);    
      if (uiObj.visible)
      {
        for(var i=0; i<Value; i++)
        {
          uiObj.ClickTab(i);
        }
      }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : clickCheckBox
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clickCheckBox(strLocName){
  
      uiObj = eval(strLocName);
      //uiObj = UIGeneric.getUIObject(strLocName)       
      //getPage().Wait()        
      if (uiObj)
      {
        uiObj.ClickButton(cbChecked);
        //waits for the page to load  
        //Sys.        
        //getPage().Wait()
      }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : Click
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function close(strLocName){
  
      uiObj = eval(strLocName);
      //uiObj = UIGeneric.getUIObject(strLocName)       
      //getPage().Wait()        
      if (uiObj.visible)
      //if (uiObj)
      {
        uiObj.Close();
        //waits for the page to load  
        //Sys.        
        //getPage().Wait()
      }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : Click
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clickBlock(strLocName,strCord){
  
      uiObj = eval(strLocName); 
      if (!uiObj) {
        Log.Error("Invalid UI object reference: " + strLocName);
        return;
      }  
      if (uiObj.visible)
      {
        var coords = strCord.split(",").map(Number);
        uiObj.Click(coords[0], coords[1]);
      }
      else 
      {
        Log.Error("Object is not visible: " + strLocName);
      }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function uiExists(objUI,state=true) {
  if ( objUI.Exists == state )
  {
    if (objUI.Exists)
    {
      objUI.scrollIntoViewIfNeeded() 
    }
    return true
  }
  else
  {
    logPic = Sys.Desktop.Picture()
    Log.Error("UI existance is not as expected :["+ logPic +"]")
    return false
    
  }
}
*/
/*
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Function Name: uiVisible
// Parameters: objUI: Object to check if it visiblity | state : expected state boolean
// Details: Checks visiblity of UI element
//--------------------------------------------------------------------------------------------------------------------------------------------------------------    
function uiVisible(objUI,state=true) {
  if (uiExists(objUI))
  {
    if (objUI.VisibleOnScreen == state)
    {
      return true
    }
    else
    {
      logPic = Sys.Desktop.Picture()
      Log.Error("UI existance is not as expected :["+ logPic +"]")
      return false    
    }
  }
}
*/
//----------------------------------------------------------------------------------------------------------------------------------------
// Function Name: uiEnabled
// Parameters: objUI: Object to check if it is enable | state : expected state boolean
// Details: Checks enable status of UI element
//---------------------------------------------------------------------------------------------------------------------------------------- 
/*
function uiEnabled(objUI,state=true) {
  if (uiVisible(objUI))
  {
    if ( objUI.Enabled == state )
    {
      return true
    }
    else
    {
      logPic = Sys.Desktop.Picture()
      Log.Error("UI existance is not as expected : ["+ logPic +"]")
      return false    
    }
  }
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------
//Function Name : dblClick
//Description: It double clicks on the object in the application
//Parameter1 : strlocName : Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function dblClick(strLocName) {   
    uiObj = UIGeneric.getUIObject(strLocName)       
    getPage().Wait()        
    if (uiEnabled(uiObj))
    {
      uiObj.DblClick()
      //waits for the page to load          
      getPage().Wait()         
    }
}
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : clickR
//Description: It right clicks on the object in the application
//Parameter1 : strlocName : Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function clickR(strLocName) { 
      uiObj = UIGeneric.getUIObject(strLocName)       
      getPage().Wait()        
      if (uiEnabled(uiObj))
      {
        uiObj.ClickR()
        //waits for the page to load          
        getPage().Wait()         
      }
}
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : getPage
//Description: used to get page
//Author : Arpitha U S
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function getPage(){
  return Sys.Browser(Project.Variables.browser).Page("*")   
}
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : getObjectsInAscendOrder
//Description: used to get obejcts displays in ascending order
//Author : Kiran HH
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function getObjectsInAscendOrder(objCollection){
  
 const ascObjList =  []
  
  objsCount = objCollection.length
  
  for (var i = objsCount-1 ; i>=0;i-- )
  {
  ascObjList.push(objCollection[i])
  }
    
  return ascObjList

}
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name :waitforLoaderCompletion
//Description : waits until the spin loader completion on the screen
//Parameter1 : locSpinLoader :locator of the spin loader
//Parameter2 : intWaitTime : maximum wait time for loading completion
//Author : Akhila Salanke
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function waitforLoaderCompletion(locSpinLoader,intWaitTime)
{
   objPage = UIGeneric.getPage()  
   objPage.Wait()
   aqUtils.Delay(2000)
   objSpinloader = objPage.FindChildByXPath(locSpinLoader)
   if ( objSpinloader != null)
   {
     if (objSpinloader.Exists == false)
      {
       return Log.Message("Required page already displayed")
     }
     else
     {
     objSpinloader.WaitProperty("Exists",false,intWaitTime)
     Log.Message("Loading completed")
     }
   }
}
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name :clickTextblock
//Description : To click a Text block on screen
//Parameter1 : oSearchArea : object in which search happens
//Parameter2 : strTextBlockToClick : Text block to click  
//Author : Akhila Salanke
//---------------------------------------------------------------------------------------------------------------------------------------------------
/*
function clickTextblock(oSearchArea,strTextBlockToClick)
{
  oPageObj = UIGeneric.getPage()  
  oPageObj.Wait()
  oRecognizedTextObj = OCR.Recognize(oSearchArea)
  oTextBlockObj = oRecognizedTextObj.BlockByText(strTextBlockToClick)
  if (oTextBlockObj.Text!= null)
  {
    oTextBlockObj.Click()
  }
  else
  {
    Log.Error("Search text" + strTextBlockToClick + "not found")
  }
}
*/
/*
//function UT_clickTextblock()
//{
//  oSearchArea = pgeRequest.getRowInTable(locViewProductsTableRows,"F202237797351")
//  clickTextblock(oSearchArea,"F202237797351")
//}
//}
*/