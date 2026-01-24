//USEUNIT  
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : EnterText
//Description : Function used to enter text into the textbox
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strText : value/data to enter inthe textbox
//Author : Pawan Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function EnterText(strLocName,strText) {
  
 Log.AppendFolder("Enter text < "+(strText)+" > in text field") 
     uiObj = eval(strLocName);
     //uiObj = UIGeneric.getUIObject(strlocName)    
     if (uiObj.visible)
      {
        if (aqObject.IsSupported(uiObj,"Clear"))
        {
         uiObj.Clear() }
        if (aqObject.IsSupported(uiObj,"SetText")) 
        {
          uiObj.Click()
          uiObj.SetText(strText) } 
        else 
        {
          uiObj.Click()
          uiObj.Keys("^a[Del]")
          uiObj.Keys(strText)  }           
      }
 Log.PopLogFolder()     
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : verifyValue
//Description : verifes the value by using property checkpoint
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strPropName : to verify - Passing Property Name  
//Parameter3 : strPropVal : to verify - Passing prperty value 
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function verifyValue(strLocName,strPropName,strPropVal) {
  
 Log.AppendFolder("Verify property < "+(strPropName)+" > has value < "+(strPropVal)+" > ")
  
    uiObj = eval(strLocName);            
    //uiObj = UIGeneric.getUIObject(strLocName)            
//    if (UIGeneric.uiEnabled(uiObj))
//     {       
       aqObject.CheckProperty(uiObj,strPropName,0,strPropVal,false)
       //aqObject.CheckProperty(Aliases.TunneLogicConfigurationWizard.HwndSource_CustomMessageBox.CustomMessageBox.txtBlkMessage, "Enabled", cmpEqual, true);
//     }  
 Log.PopLogFolder()         
} 

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : verifyLabelValue
//Description : verifes the value by using property checkpoint
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strPropName : to verify - Passing Property Name  
//Parameter3 : strPropVal : to verify - Passing prperty value 
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function verifyLabelValue(strlocName,strExpVal)
{
  objUI = eval(strlocName);
  strActVal = null
  prpName = ""
  if (UIGeneric.uiVisible(objUI))
  {
    if (aqObject.IsSupported(objUI,"contentText"))
    {
      if (objUI.contentText != null)
      {
        prpName = "contentText"
      }
    }
  return aqObject.CheckProperty(objUI,prpName,0,strExpVal,false) 
  }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : GetText
//Description : verifes the value by using property checkpoint
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strPropName : to verify - Passing Property Name  
//Parameter3 : strPropVal : to verify - Passing prperty value 
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function GetText(strLocName)
{
  strPropName = "Text";
  uiObj = eval(strLocName);
  var strPropVal = aqObject.GetPropertyValue(uiObj, strPropName);
  Log.AppendFolder("Verify property < "+(strPropName)+" > has value < "+(strPropVal)+" > ");
  aqObject.CheckProperty(uiObj,strPropName,0,strPropVal,false)
  Log.PopLogFolder()
  
}

function GetOleValue(strLocName)
{
  uiObj = eval(strLocName);
  var strPropVal = uiObj.OleValue;
  Log.AppendFolder("Verify property < "+(strPropName)+" > has value < "+(strPropVal)+" > ");
  aqObject.CheckProperty(uiObj,strPropName,0,strPropVal,false)
  Log.PopLogFolder();
  return strPropVal;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : VerifyTextOCR
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function VerifyTextOCR(strLocName,strExpVal)
{
  OCR.Recognize(strLocName).CheckText(strExpVa);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : GetTextOCR
//Description: used to get object name from locator
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
function GetTextOCR(strLocName)
{
  uiObj = eval(strLocName);
  if (uiObj != null) {
    var Text = OCR.Recognize(uiObj).FullText;
    Log.Message("Detected text: ");
  } else {
    Log.Error("OCR did not find any text in the specified region.");
  }
  return Text;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : GetTextValue
//Description : Read the value by using property
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strPropName : to verify - Passing Property Name  
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function GetTextValueInLog(strLocName) {
  strPropName = "WPFControlText";
  uiObj = eval(strLocName);
  var strPropVal = aqObject.GetPropertyValue(uiObj, strPropName);
  Log.AppendFolder("Verify property < "+(strPropName)+" > has value < "+(strPropVal)+" > ");
  aqObject.CheckProperty(uiObj,strPropName,0,strPropVal,false)
  Log.PopLogFolder()
} 

//------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : GetTextValue
//Description : Read the value by using property
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strPropName : to verify - Passing Property Name  
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function GetTextValue(strLocName) {
  strPropName = "WPFControlText";
  uiObj = eval(strLocName);
  var strPropVal = aqObject.GetPropertyValue(uiObj, strPropName);
  return strPropVal
} 
//------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : GetTextValue
//Description : Read the value by using property
//Parameter1 : strlocName  :Object Name where text to enter
//Parameter2 : strPropName : to verify - Passing Property Name  
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function GetEnteredValue(strLocName) {
  strPropName = "wText";
  //strPropName = 'SelectedItem';
  //strPropName = 'SelectedValue';
  uiObj = eval(strLocName);
  var strPropVal = aqObject.GetPropertyValue(uiObj, strPropName);
  return strPropVal
} 
//------------------------------------------------------------------------------------
function getAllTextFromApp(parentObj) {
  var collectedText = "";

  function traverse(obj) {
    if (!obj || !obj.Exists) return;

    // Try to read text from different possible properties
    if (obj.WndCaption)
      collectedText += obj.WndCaption + "\n";

    if (obj.Text)
      collectedText += obj.Text + "\n";

    if (obj.wText)
      collectedText += obj.wText + "\n";

    // Recursively check child objects
    for (var i = 0; i < obj.ChildCount; i++) {
      var child = obj.Child(i);
      traverse(child);
    }
  }

  traverse(parentObj);
  Log.Message("Collected Text:\n" + collectedText);
  return collectedText;
}

//------------------------------------------------------------------------------------
function getAllText()
{
  var app, rows, rowCount, i, objId, count=0 ;
  uiObj = eval(tablePath);
  strText = "20";
  //app = Sys.Process("TunneLogicConfigurationWizard");
  
  //tableContainer = app.tablePath;
  
  if(uiObj.Exists){
    //rows = uiObj.FindAll("WPFControlOrdinalNo", "*", 10);
    rows = uiObj.FindAll("ClrClassName", "TextBox", 5);
    rowCount = rows.length;
    Log.Message("Total Rows Found: " + rowCount);
  }
  
  for (i = 0; i < rowCount; i++) {
      //rows[i].Highlight();
      objId = rows[i].Id; // Get the dynamic ID
      objMappedName = rows[i].MappedName;
      objEnabled = rows[i].IsEnabled;
      objValue = rows[i].Text;
      Log.Message("Row " + (i + 1) + " ID: " + objId + " MappedName: " + objMappedName);
      Log.Message("Value " + objValue);
      //if(objId === 164|| objID === 161||155||152||146||143||137||134||128||125||119||224||219||214||209||204||199||194||189||184||179||116||55||50||45||40||35||30||25||20||110||107||101||98||92||89||83||80||65||60)
      //if([835, 833, 832, 830, 827, 829, 824, 826, 821, 823, 818, 817, 815, 814, 812, 811, 809, 808, 806, 791, 790, 789, 788, 787, 786, 785, 784, 783, 782, 820, 769, 768, 767, 766, 764, 763, 762, 761, 760].includes(objId))
      if(objEnabled)
      {
        count = count+1;
        Log.Message(" Count: " + count);
        if (uiObj.visible)
      {
        if (aqObject.IsSupported(uiObj,"Clear"))
        {
         uiObj.Clear() }
        if (aqObject.IsSupported(uiObj,"SetText")) 
        {
          uiObj.Click()
          uiObj.SetText(strText) }
        else 
        {
          uiObj.Click()
          uiObj.Keys("[Del]")
          uiObj.Keys("[Del]")
          uiObj.Keys("[Del]")
          uiObj.Keys("[Del]")
          uiObj.Keys(strText)  }           
      }
      }
      }
}
//------------------------------------------------------------------------------------
//Function Name : generateRandomString
//Description : To generate a string with random charecters 
//Parameter1 : lenString  :Length of the string
//Author : Pawan.Gupta
function generateRandomString(lenString)
{
  var characters =  "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
	var randomstring = ''
  for (var i=0; i<lenString; i++) {
		var rnum = Math.floor(Math.random() * characters.length);
		randomstring += characters.substring(rnum, rnum+1);
    }
  return randomstring
}

function UT_generateRandomString()
{
  generateRandomString(10)
}