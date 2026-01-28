  Feature: Epic_01


  Background: 
      #Given Terminate any existing "TunneLogicMCUClient" application instance
      #And "TunneLogicServer" Service is "Stop"
      #And Delete folder "C:\\ProgramData\\Dynalite"
      #Then Rename folder "C:\\ProgramData\\Dynalite" to "Dynalite_new_27thNov"
      #When TunneLogic application is launched
      #And "TunneLogicServer" Service is "start"
      #Then validate that MCU application is launched

  Scenario: TL_MCU_001_AppLaunch - Verify application launch
      #Then Verify and validate that TunneLogic MCU application is launched
      
  Scenario: TL_MCU_Delete - Delete folder
      #Then Delete folder "C:\\ProgramData\\Dynalite"
  
  Scenario: TL_MCU_Rename - Rename folder
      #Then Rename folder "C:\\ProgramData\\Dynalite" to "Dynalite_new_27thNov"


  #Scenario:TL_MCU_002_Mainmenu tabs navigation -  Verify navigation for dashboardcontrolSettingsEventlog tabs
    #Given The application in the MCU main screen
    #When login into MCU main menu
    #And check Login as super user/Maintenance user/View only user on MCU Client
    #And check to access the Dashboard tab
    #And check to access the control tab
    #And check to access the Settings tab
    #And check to access the Eventlog tab
    #Then validate each of these 4 tabs are clickable and take user to the correct screen successfully

      
  Scenario: Disable photometer 1 from main portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer1 on Main Portal
      And Clicked on "Disable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Disable photometer 2 from main portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer2 on Main Portal
      And Clicked on "Disable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Disable photometer 3 from On slip portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer3 on On slip Portal
      And Clicked on "Disable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Disable photometer 4 from On slip portal
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer4 on On slip Portal
      And Clicked on "Disable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Enable photometer 1 from main portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer1 on Main Portal
      And Clicked on "Enable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Enable photometer 2 from main portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer2 on Main Portal
      And Clicked on "Enable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Enable photometer 3 from On slip portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer3 on On slip Portal
      And Clicked on "Enable" button
      Then "Disabled by MCU." is written next to the enable/disable button
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
  Scenario: Enable photometer 4 from On slip portal.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer4 on On slip Portal
      And Clicked on "Enable" button
      Then "Disabled by MCU." is written next to the enable/disable button.
      And Clicked on back button
      And Verify "Disabled" is written under photometer icon
      
   Scenario: Verify control source is Day Override after disabling photometer.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer1 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer2 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer3 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer4 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on "On Slip1" from Bore Stage Info
      Then Verify Control Source is "Day override"      
      And Clicked on back button
      
   Scenario: Verify control source is Night Override after disabling photometer.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer1 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer2 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer3 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer4 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on "On Slip1" from Bore Stage Info
      Then Verify Control Source is "Night override"
      And Clicked on back button

   Scenario: Verify control source is time-based Override after disabling photometer.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer1 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer2 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer3 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer4 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on "On Slip1" from Bore Stage Info
      Then Verify Control Source is "time-based override"      
      And Clicked on back button
      
   Scenario: Verify control source is time-based Override after disabling photometer.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Photometer1 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer2 on Main Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer3 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on Photometer4 on On slip Portal
      And Clicked on "Disable" button
      And Clicked on back button
      And Clicked on "On Slip1" from Bore Stage Info
      Then Verify Control Source is "off peak night"
      And Clicked on back button
      
   Scenario: Verify manual override of bore and FLG for all the portals.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Control" Tab
      And Clicked on "Stage Override" Tab in Control Tab
      And Clicked on "Stage 1" on Bore1 Main Portal
      And Clicked on "Stage 1" on Bore1 On Slip Portal
      Then Clicked on "Dashboard" Tab
      And Clicked on "Main Portal" from Bore Stage Info
      And Verify Control Source is "Manual"
      And Clicked on back button
      And Clicked on "On Slip1" from Bore Stage Info
      And Verify Control Source is "Manual"
      And Clicked on back button
      
   Scenario: Verify emergency override for all the portals.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on Emergency override
      And Clicked on OK
      And Clicked on OK
      Then Clicked on "Main Portal" from Bore Stage Info
      And Verify Control Source is "Emergency"
      And Clicked on back button
      And Clicked on "On Slip1" from Bore Stage Info
      And Verify Control Source is "Emergency"
      And Clicked on back button
      
   Scenario: Select low traffic mode from the Control tab.
   
   Scenario: Select color override tab and set different light levels for color group and check if the same is reflected on the luminaires
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Control" Tab
      And Clicked on "Color Override" Tab in Control Tab
      Then Set light level as "100%" for "green" color group
      
   Scenario: Select Individual control tab, Click on any one of the luminaires and flash the luminaire.       
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Control" Tab
      And Clicked on "Individual Control" Tab in Control Tab
      And Select Bore "Bore 1" 
      And Select FLG "FLG 1"
      And Select color group "Red1"
      And Select Luminaire "B1P1_R01_L0001_Ent"
      Then Click on flash button
      
      
   Scenario: In individual control tab, select a luminaire and change the light levels by putting it any where between 0 and 100 In individual control tab.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Control" Tab
      And Clicked on "Individual Control" Tab in Control Tab
      And Select Bore "Bore 1" 
      And Select FLG "FLG 1"
      And Select color group "Red1"
      And Select Luminaire "B1P1_R01_L0001_Ent"
      Then Set light level as "100%"

   Scenario: In individual control tab, select multiple luminaires and flash them.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Control" Tab
      And Clicked on "Individual Control" Tab in Control Tab
      And Select Bore "Bore 1" 
      And Select FLG "FLG 1"
      And Select color group "Red1"
      And Select Luminaire "B1P1_R01_L0001_Ent"
      And Select Luminaire "B1P1_R01_L0002_Ent"
      And Select Luminaire "B1P1_R01_L0003_Ent"
      And Select Luminaire "B1P1_R01_L0004_Ent"
      Then Click on flash button
      
   Scenario: In individual control tab, select multiple luminaires and change the light levels by putting it any where between 0 and 100.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Control" Tab
      And Clicked on "Individual Control" Tab in Control Tab
      And Select Bore "Bore 1"
      And Select FLG "FLG 1"
      And Select color group "Red1"
      And Select Luminaire "B1P1_R01_L0001_Ent"
      And Select Luminaire "B1P1_R01_L0002_Ent"
      And Select Luminaire "B1P1_R01_L0003_Ent"
      And Select Luminaire "B1P1_R01_L0004_Ent"
      Then Set light level as "50%"
      
   Scenario: Check Dashboard UI.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Dashboard" Tab
      Then Verify logged in user
      And Verify Status menu
      And Verify "Photometer 1" Status
      And Verify "Photometer 2" Status
      And Verify "Photometer 3" Status
      And Verify "Photometer 4" Status
      And Verify Bore Health value
      And Verify Bore Stage Info "Main" Portal
      And Verify Bore Stage Info "on slip" Portal
      And verify Traffic direction
      
   Scenario: Check color group details and UI.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Dashboard" Tab
      And Clicked on "Color group" Tab in Dashboard Tab
      Then Verify DGGs in Bore "onslip"
      
   Scenario: Check FLG screen details and UI.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Dashboard" Tab
      And Clicked on "FLG" Tab in Dashboard Tab
      Then Verify FLGs in Bore "onslip"
      
   Scenario: Check Section group screen details and UI.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Dashboard" Tab
      And Clicked on "Section Group" Tab in Dashboard Tab
      Then Verify Section Groups in Bore "onslip"
      
   Scenario: Check the Alternating section design and UI.
      Given TunneLogic MCU application is on Dashboard Page
      When Clicked on "Dashboard" Tab
      And Clicked on "" Tab in Dashboard Tab 
           
      Scenario: Click on floor plan radio button.
      
      Scenario: Click on Bore Health section.
      
      Scenario: Click on device details button.
      
      Scenario: On the dashboard click on the Portal details.