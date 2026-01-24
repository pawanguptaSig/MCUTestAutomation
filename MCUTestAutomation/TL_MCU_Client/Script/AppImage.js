//----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------------------
//Function Name: ImageComparison
//Parameters: objUI: Object to check if it exists | state : expected state boolean
//Details: Checks existance of UI element
//----------------------------------------------------------------------------------------------------------------------------------------
function RegionImageComparison(imageName, strLocName) {
  let uiObj = null;
    uiObj = eval(strLocName);
    if (!uiObj.Exists || !uiObj.Visible) {
      Log.Warning(`UI object specified by '${strLocName}' does not exist or is not visible.`);
      return false;
    }

    var isValid = Regions[imageName].Compare(uiObj);
    //Regions[imageName].Check(uiObj);
    if(isValid == true)
    {
      Log.Message(`Image checkpoint '${imageName}' PASSED.`);
      return true;
    }
    else {
      Log.Error(`Image checkpoint '${imageName}' FAILED.`);
      return false;
    }
}