//APPString
var strFormattingCharactersR = "\r"
var strFormattingCharactersN = "\n"


//Function Name :getStringLength
//Description : To get the string length
//Parameter1 : URL :application to be launched 
//Author : Pawan.Gupta
function getStringLength(strName){
  strlen = strName.length
  return strlen
}

function stripAndReplaceSpace(strText)
{
  strText = strText.replace(" ","")
  strText = strText.trim()
  
  return strText
}


function stripAndLowerCase(strText)
{
  strText = removeFormattingCharacters(strText)
  strText = removeFormattingCharacters(strText)
  strText = stripAndReplaceSpace(strText) 
  strText = strText.toLowerCase()
  
  return strText
}
  
  
function removeFormattingCharacters(strText)
{
  strText = strText.replace(strFormattingCharactersR,"")
  strText = strText.replace(strFormattingCharactersN,"")
  
  return strText  
}
  
function UTTest()
{
    Log.Message("["+stripAndLowerCase("Automated\n\n\n\r\r Testing")+"]")
  
    Log.Message("["+stripAndLowerCase("There are neither eligible Suspect Case Groups nor eligible Segregation Zone Violations \r\nto output.")+"]")
}