//AppDropDown
//USEUNIT AppText
//USEUNIT AppActions
//USEUNIT AppDropDown
//USEUNIT AppGeneric
//---------------------------------------------------------------------------------------------------------------------------------------------------
//Function Name : Click
//Description: It clicks on the object in the application
//Parameter1 : strlocName  :Locator Name 
//---------------------------------------------------------------------------------------------------------------------------------------------------
//**********************UIobjects********************************
function Open_enterFilename(Open_TxtFileName, Filename){
  AppText.EnterText(Open_TxtFileName, Filename);
}
//****************************************************************

//**********************UIobjects********************************
function Open_selectFileType(fileType,FilesTypeName){
  AppDropDown.SelectItem();
}
//****************************************************************

//**********************UIobjects********************************
function Open_clickOpenButton(OpenButton){
  AppActions.clickbtn(OpenButton);
}
//****************************************************************

//**********************UIobjects********************************
function Open_clickCancelButton(){
  AppActions.clickbtn(CancelButton);
}
//****************************************************************

//**********************UIobjects********************************
function DeleteFolder(folderPath) {
  // Example: "C:\\Temp\\OldConfig"

  if (aqFileSystem.Exists(folderPath)) {
    var res = aqFileSystem.DeleteFolder(folderPath, true); // true = delete subfolders & files
    if (res) {
      Log.Message("Folder deleted: " + folderPath);
    } else {
      Log.Error("Failed to delete folder: " + folderPath);
    }
  } else {
    Log.Warning("Folder does not exist: " + folderPath);
  }
}
//****************************************************************

//**********************UIobjects********************************
function RenameFolder(oldFolderPath, newFolderPath) {
  // Example:
  // oldFolderPath = "C:\\Temp\\Config_Old"
  // newFolderPath = "C:\\Temp\\Config_New"

  if (!aqFileSystem.Exists(oldFolderPath)) {
    Log.Error("Source folder does not exist: " + oldFolderPath);
    return;
  }

  if (aqFileSystem.Exists(newFolderPath)) {
    Log.Warning("Target folder already exists, deleting it: " + newFolderPath);
    aqFileSystem.DeleteFolder(newFolderPath, true);
  }

  var res = aqFileSystem.MoveFolder(oldFolderPath, newFolderPath);
  if (res) {
    Log.Message("Folder renamed/moved from '" + oldFolderPath + "' to '" + newFolderPath + "'");
  } else {
    Log.Error("Failed to rename/move folder.");
  }
}
//****************************************************************

//**********************UIobjects********************************
function renameFolder(folderPath, newName) {
  var folderInfo = aqFileSystem.GetFolderInfo(folderPath);
  var parent = folderInfo.ParentFolder.Path;
  var newPath = parent + "\\" + newName;

  if (!aqFileSystem.Exists(folderPath)) {
    Log.Error("Source folder does not exist: " + folderPath);
    return;
  }

  if (aqFileSystem.Exists(newPath)) {
    Log.Warning("Target folder already exists, deleting: " + newPath);
    aqFileSystem.DeleteFolder(newPath, true);
  }

  var ok = aqFileSystem.MoveFolder(folderPath, newPath);
  if (ok)
    Log.Message("Folder renamed from '" + folderPath + "' to '" + newPath + "'");
  else
    Log.Error("Failed to rename folder from '" + folderPath + "' to '" + newPath + "'");
}
//****************************************************************
