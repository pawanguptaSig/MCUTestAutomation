//AppDropDown
//USEUNIT AppGeneric

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : selectItem
//Description : Used to select valure from the dropdwon
//Parameter1 :strLocName : dropdown locator
//Parameter2 :itemNameOrIndex : value to select
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function SelectItem(strLocName,itemNameOrIndex){
  oDropDownObj = eval(strLocName);
  itemExists = 0
  var ccount = oDropDownObj.wItemCount;
    
      for (var i = 0; i <oDropDownObj.wItemCount;i++ )
      {
        var val = oDropDownObj.wItem(i);
        if (oDropDownObj.wItem(i)===(itemNameOrIndex))
        {
          
          itemExists = 1
          oDropDownObj.ClickItem(oDropDownObj.wItem(i))
          break        
        }
      }
      if (itemExists = 1)
      {
        Log.Message("["+itemNameOrIndex+"] Item Found")
      }
      else
      {
        Log.Error("["+itemNameOrIndex+"] Item Not Found")
      }

}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : verifySelectedItem
//Description : Used to verify selected valure from the dropdwon
//Parameter1 :strLocName : dropdown locator
//Parameter2 :itemNameOrIndex : value to select
//Author : Pawan.Gupta
//---------------------------------------------------------------------------------------------------------------------------------------------------
function verifySelectedItem(strLocName,itemNameOrIndex) {
   //oDropDownObj = UIGeneric.getUIObject(strLocName)
   oDropDownObj = eval(strLocName);
   if (oDropDownObj.exists)
   {
     if(oDropDownObj.wText === itemNameOrIndex)
       {
         Log.Message("["+itemNameOrIndex+"] Item Found")
       }
    else
      {
        Log.Error("["+itemNameOrIndex+"] Item Not Found")
      }
   }   
}

function tets(){
  selectItem("//select[contains(@kwp,'frmInternationalAddBeneficiary_unifiedAddBeneficiary_lbxState')]","Karnataka")
}




function SelectItemObj(strLocName,itemNameOrIndex){
  oDropDownObj = strLocName;
  itemExists = 0
  var ccount = oDropDownObj.wItemCount;
    
      for (var i = 0; i <oDropDownObj.wItemCount;i++ )
      {
        var val = oDropDownObj.wItem(i);
        if (oDropDownObj.wItem(i)===(itemNameOrIndex))
        {
          
          itemExists = 1
          oDropDownObj.ClickItem(oDropDownObj.wItem(i))
          break        
        }
      }
      if (itemExists = 1)
      {
        Log.Message("["+itemNameOrIndex+"] Item Found")
      }
      else
      {
        Log.Error("["+itemNameOrIndex+"] Item Not Found")
      }

}