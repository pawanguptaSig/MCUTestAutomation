const settings = {
 appSettings: {
   appName: "TunneLogicConfigurationWizard", 
   appPath: "C:\\Program Files (x86)\\Philips\\TunneLogic\\Wizard",
   appProcess: "TunneLogicConfigurationWizard",
   //appPacsHostName: "vmnala",   
   //appVersion: "3.1.18.18",
   //appBuild: "0314",
 },
 testSettings: {
   testOutputPath: "C:\\_tests_output",
   testType: "SmokeTest",
   resourcesPath:"..\\..\\resources\\dataset",
   displayHighlightObject: false,
   capturingImageIntoLog: false,
   attachedMPLogToReport: false,
   createAnimationGif: false,   
   suiteDocId: "NA",
   timeoutFactor: 1.0,   
   logPackagesUpdate: {
   }        
 }
};
module.exports.settings = settings;