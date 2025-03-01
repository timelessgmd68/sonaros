var User = "Sonar.Default/Authority";
var Users = ["Authority", "Admin"];
var CPUClock = 5800;
var ScalingFactor = 1;
var Version = "0.9.0.0";
var Build = 665;
var ScalingDivider = ScalingFactor / 1.618;
var SafeOSMessages = ["Resetting PC....", "Reverting update(s)..", "Updating... (", "Reverting system reset..", "Error 4: Couldn't find OS to reset!", "Error 5: You must be Authority to do this!", "Error 6: This update is not signed.", "Error 7: This update is signed with an expired certificate", "Error 8: You need at least 315MB of scratch disks to do this.", "Error 9: Cannot find the system component_store", "Restoring from point...", "Restore Point taken!"];
var originalSize = {w: 320, h: 450};
var CurrentAppElEx = [];
var GuestActive = 0;
var Apps = [];
var epassword = "";
var ThemeName = "Sonar Dark";
var BackgroundColour = "#00000088";
var ThemeNum = 0;
var BWidth =  0;
var TextColour = "#FFFFFF";
var BordColour = "#FFFFFF";
var CurrentAppIntName = null;
var resList = ["320 x 450"];
var resKeytoWidth = [320];
var resKeytoHight = [450];
appendItem(Apps, {"name": "Settings", "displayname":"Settings", "guestcan":false});
appendItem(Apps, {"name": "Notes", "displayname":"Notes", "guestcan":true});
appendItem(Apps, {"name": "Calc", "displayname":"Calc", "guestcan":true});
appendItem(Apps, {"name": "Music", "displayname":"Music", "guestcan":true});
appendItem(Apps, {"name": "Clock", "displayname":"Clock", "guestcan":true});
var RestorePoints = [];
var Themes = [];
appendItem(Themes, {"name": "Sonar Dark", "backgrnd":"#00000088", "txt":"#FFFFFF", "borderc":"#000000","borderw":0});
appendItem(Themes, {"name": "Sonar Light", "backgrnd":"#FFFFFF88", "txt":"#000000", "borderc":"#000000","borderw":0});
appendItem(Themes, {"name": "High Contrast Light", "backgrnd":"#FFFFFF", "txt":"#000000", "borderc":"#000000","borderw":2});
appendItem(Themes, {"name": "High Contrast Dark", "backgrnd":"#000000", "txt":"#FFFFFF", "borderc":"#FFFFFF","borderw":2});
timedLoop(1000, function() {
  if (GuestActive) {
    if (Users.length<2) {
      appendItem(Users, "Guest");
    }
  } else {
    if (Users.length>2) {
      removeItem(Users, 2);
    }
  }
});
function applyTheme(num) {
  ThemeName = Themes[num].name;
  BackgroundColour = Themes[num].backgrnd;
  ThemeNum = num;
  TextColour = Themes[num].txt;
  BordColour = Themes[num].borderc;
  BWidth = Themes[num].borderw;
  deleteElement("Sonar.Frontier.SB");
  deleteElement("Sonar.Frontier.TB");
  if (startMenuOpen) {
    openStartMenu();
    openStartMenu();
  }
  FrontierUI();
}
function CreateRestorePoint() {
  var UsersF = [];
  for (var y = 0; y < Users.length; y++) {
    appendItem(UsersF, Users[y]);
  }
  var AppsF = [];
  for (var c = 0; y < Apps.length; c++) {
    appendItem(AppsF, Apps[c]);
  }
  var ThemesF = [];
  for (var c = 0; y < Themes.length; c++) {
    appendItem(ThemesF, Themes[c]);
  }
  appendItem(RestorePoints, {"users": UsersF,themes:ThemesF,themename:ThemeName, "date":"delegate date later", "apps":AppsF, "wallpaper":(getProperty("OS", "image")), "userid":getUserId(), "appconf":Apps, "point":BWidth, BordColour:"", "edition":"", "ver":Version, "app":"", "ip":false, "":""});
}
function LoadRestorePoint(num) {
  for (var i = 0; i < Apps.length; i++) {
    setTimeout(function() {
      removeItem(Apps, 0);
    }, 0);
  }
  for (var i = 0; i < Users.length; i++) {
    setTimeout(function() {
      removeItem(Users, 0);
    }, 0);
  }
  User = "Default0";
  UserA = "Default0";
  Users = (RestorePoints[num]).users;
  UsersL = (RestorePoints[num]).users;
  Apps = (RestorePoints[num]).apps;
  Themes = (RestorePoints[num]).themes;
}
 
function registerUser(username) {
  appendItem(Users, username);
}
function SystemResetPC_() {
  if (UserA=="Authority1") {
    if (!InOS) {
      deleteElement("Sonar.RecoveryMode.Continue.img");
      deleteElement("Sonar.RecoveryMode.ResetPC.img");
      deleteElement("Sonar.RecoveryMode.RestorePoints.img");
      deleteElement("Sonar.RecoveryMode.ResetPC");
      deleteElement("Sonar.RecoveryMode.RestorePoints");
      deleteElement("Sonar.RecoveryMode.Continue");
    }
    BEMA.Element("TextArea", "Sonar.RecoveryMode.ResetPC.Loading", 0, 350, 320, 90, false, 0, BWidth, BordColour, "transparent", TextColour, SafeOSMessages[0], "Center", 14,"Lucida Console", true, "", "");
    for (var i = 0; i < Users.length; i++) {
      removeItem(Users, 0);
    }
    User = "Default0";
    GuestActive = false;
    UserA = "Default0";
    appendItem(Users, "Authority");
    appendItem(Users, "Admin");
    User = "Sonar.Default/Authority";
    UserA = "Sonar.Default/Authority";
    deleteElement("Sonar.RecoveryMode.ResetPC.Loading");
    removeItem(UsersL, 0);
    StartSystem0();
  } else {
    BEMA.Element("TextArea", "Sonar.RecoveryMode.ResetPC.Loading", 0, 350, 320, 90, false, 0, BWidth, BordColour, "transparent", TextColour, SafeOSMessages[5], "Center", 14,"Lucida Console", true, "", "");
  }
}
 
function createWindow(title, af) {
  var fontSize = 15 * ScalingFactor;
  var buttonSize = 30 * ScalingFactor;


  // Title bar
  BEMA.Element("TextArea", af + ".title", 0, 0, originalSize.w, buttonSize, false, 1, BWidth, BordColour, BackgroundColour, TextColour, title, "L", fontSize,"Lucida Console", true, "", "");
  
  // Window contents
  BEMA.Element("TextArea", af + ".contents", 0, buttonSize, originalSize.w, originalSize.h-buttonSize*2+-5, false, 1, BWidth, BordColour, BackgroundColour, "rgb(255,255,255)", "", "L", fontSize,"Lucida Console", true, "", "");
  
  // Window controls
  BEMA.Element("Button", af + ".close", originalSize.w-buttonSize, 0, buttonSize, buttonSize, false, 1, BWidth, BordColour, BackgroundColour, TextColour, "⨉", "C", fontSize,"Lucida Console", true, "", "");


}
function createDialog(title, buttontype, contents, errorcode, type, af) {
  var fontSize = 15 * ScalingFactor;
  var buttonSize = 30 * ScalingFactor;
  /*Types:  0 is info
  1 is warning
  2 is error
  3 is verbose status
  4 is critical
  
  Button types
  0 = OK
  1 = Yes + No
  2 = Log out
  3 = Shut down
  */
  //
  // Title bar
  BEMA.Element("TextArea", af + ".title", 0, 0, originalSize.w, buttonSize, false, 1, BWidth, BordColour, BackgroundColour, TextColour, title, "L", fontSize,"Lucida Console", true, "", "");
  
  // Window contents
  BEMA.Element("TextArea", af + ".contents", 0, buttonSize, originalSize.w, originalSize.h-buttonSize*2+-5, false, 1, BWidth, BordColour, BackgroundColour, "rgb(255,255,255)", "", "L", fontSize,"Lucida Console", true, "", "");
  

  if (buttontype==0) {
    BEMA.Element("Button", af + ".b1",38,353, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "OK", "L", 26, "Lucida Console", true, "", "");
    onEvent(af + ".b1", "click", function( ) {
      deleteElement(af + ".close");
      deleteElement(af + ".b1");
      deleteElement(af + ".title");
      deleteElement(af + ".contents");
    });
  } else if (buttontype==1) {
    BEMA.Element("Button", af + ".b1",38,353, 120, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Yes", "L", 26, "Lucida Console", true, "", "");
    onEvent(af + ".b1", "click", function( ) {
      deleteElement(af + ".close");
      deleteElement(af + ".b1");
      deleteElement(af + ".b2");
      deleteElement(af + ".title");
      deleteElement(af + ".contents");
      return 1;
    });
    BEMA.Element("Button", af + ".b2",168,353, 120, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "No", "L", 26, "Lucida Console", true, "", "");
    onEvent(af + ".b2", "click", function( ) {
      deleteElement(af + ".close");
      deleteElement(af + ".b1");
      deleteElement(af + ".b2");
      deleteElement(af + ".title");
      deleteElement(af + ".contents");
      return 0;
    });
  } else if ((buttontype==2)) {
    BEMA.Element("Button", af + ".b1",38,353, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Log out", "L", 26, "Lucida Console", true, "", "");
    onEvent(af + ".b1", "click", function( ) {
      deleteElement(af + ".close");
      deleteElement(af + ".b1");
      deleteElement(af + ".title");
      deleteElement(af + ".contents");
      if (startMenuOpen==true) {
        openStartMenu();
      }
      deleteElement("Sonar.Frontier.TB");
      deleteElement("Sonar.Frontier.SB");
      if (CurrentAppIntName != null) {
        for (var i = 0; i <= CurrentAppElEx.length; i++) {
          i = 0;
          deleteElement(CurrentAppElEx[i]);
          removeItem(CurrentAppElEx, 0);
        }
        deleteElement(CurrentAppIntName + ".title");
        deleteElement(CurrentAppIntName + ".close");
        deleteElement(CurrentAppIntName + ".contents");
      }
      StartSystem0();
    });
  } else if ((buttontype==3)) {
    BEMA.Element("Button", af + ".b1",38,353, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Shut down", "L", 26, "Lucida Console", true, "", "");
    onEvent(af + ".b1", "click", function( ) {
      deleteElement(af + ".close");
      deleteElement(af + ".b1");
      deleteElement(af + ".title");
      deleteElement(af + ".contents");
      if (startMenuOpen==true) {
        openStartMenu();
      }
      deleteElement("Sonar.Frontier.TB");
      deleteElement("Sonar.Frontier.SB");
      if (CurrentAppIntName != null) {
        for (var i = 0; i <= CurrentAppElEx.length; i++) {
          i = 0;
          deleteElement(CurrentAppElEx[i]);
          removeItem(CurrentAppElEx, 0);
        }
        deleteElement(CurrentAppIntName + ".title");
        deleteElement(CurrentAppIntName + ".close");
        deleteElement(CurrentAppIntName + ".contents");
      }
      setProperty("OS", "image", "");
    });
  }

}

function themesMenu() {
  for (var i = 0; i <= CurrentAppElEx.length; i++) {
    i = 0;
    deleteElement(CurrentAppElEx[i]);
    removeItem(CurrentAppElEx, 0);
  }
  BEMA.Element("Button", "Sonar.Settings.Themes.Back", 30, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Back", "L", 26, "Lucida Console", "", "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Themes.Back");
  BEMA.Element("Button", "Sonar.Settings.Themes.Apply", 185, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Apply", "L", 26, "Lucida Console", "", "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Themes.Apply");
  BEMA.Element("TextArea", "Sonar.Settings.Themes.CTheme", 20, 60, 600, 50, false, 0, 0, "transparent", "transparent", TextColour, "Current Theme: " + ThemeName, "L", 17, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Themes.CTheme");
  BEMA.Element("TextArea", "Sonar.Settings.Themes.ATheme", 85, 100, 600, 50, false, 0, 0, "transparent", "transparent", TextColour, "Apply Theme:", "C", 17, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Themes.ATheme");
  BEMA.Element("Dropdown", "Sonar.Settings.Themes.LTheme", 50, 190, 225, 30, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "Log in", "", 18, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Themes.LTheme");
  var Themes1 = [];
  for (var i = 0; i < Themes.length; i++) {
    appendItem(Themes1, (Themes[i]).name);
  }
  setProperty("Sonar.Settings.Themes.LTheme", "options", Themes1);
  onEvent("Sonar.Settings.Themes.Back", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("options.title");
    deleteElement("options.close");
    deleteElement("options.contents");
    Sonar$Settings();
  });
  onEvent("Sonar.Settings.Themes.Apply", "click", function( ) {
    applyTheme(getProperty("Sonar.Settings.Themes.LTheme", "index"));
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("options.title");
    deleteElement("options.close");
    deleteElement("options.contents");
    Sonar$Settings();
    themesMenu();
  });
}
var startMenuOpen = false;
var UserA = "Authority";
function Sonar$Settings() {
  createWindow("Settings", "options", 100, 100, 10, BWidth, BordColour, "options", "options");
  CurrentAppIntName = "options";
  BEMA.Element("Button", "Sonar.Settings.Theme",38,293, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Themes", "L", 26, "Lucida Console", true, "", "");
  BEMA.Element("Button", "Sonar.Settings.About",38,353, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "About", "L", 26, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.About");
  BEMA.Element("Button", "Sonar.Settings.Password",38,233, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Users", "L", 26, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Password");
  BEMA.Element("Button", "Sonar.Settings.Wall",38,173, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Wallpapers", "L", 26, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Wall");
  BEMA.Element("Button", "Sonar.Settings.Dis",38,113, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Display", "L", 26, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Settings.Dis");
  appendItem(CurrentAppElEx,"Sonar.Settings.Theme");
  onEvent("options.close", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("options.title");
    deleteElement("options.close");
    deleteElement("options.contents");
    CurrentAppIntName = null;
  });
  onEvent("Sonar.Settings.About", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    BEMA.Element("Image", "Sonar.Settings.About.Logo", 45, 50, 240, 80, false, 0, 0, TextColour, "", "", "", "", "", "", "", "sonar_1.png", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.About.Logo");
    BEMA.Element("Button", "Sonar.Settings.About.Back", 30, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Back", "L", 26, "Lucida Console", "", "", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.About.Back");
    BEMA.Element("TextArea", "Sonar.Settings.About.Info", 10, 150, 600, 50, false, 0, 0, "transparent", "transparent", TextColour, ("SonarOS " + Version) + " (Build "+Build+")", "L", 17, "Lucida Console", true, "", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.About.Info");
    onEvent("Sonar.Settings.About.Back", "click", function( ) {
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      deleteElement("options.title");
      deleteElement("options.close");
      deleteElement("options.contents");
      Sonar$Settings();
    });
    onEvent("Sonar.Settings.About.Logo", "click", function( ) {
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      deleteElement("options.title");
      deleteElement("options.close");
      deleteElement("options.contents");
      Sonar$ExtraSettings();
    });
  });
  onEvent("Sonar.Settings.Wall", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    BEMA.Element("Image", "Sonar.Settings.Wall.Wall1", 45, 50, 80, 160, false, 0, 0, TextColour, "", "", "", "", "", "", "", "wall1.jpg", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.Wall.Wall1");
    BEMA.Element("Image", "Sonar.Settings.Wall.Wall2", 145, 50, 80, 160, false, 0, 0, TextColour, "", "", "", "", "", "", "", "wall2.jpg", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.Wall.Wall2");
    BEMA.Element("Button", "Sonar.Settings.Wall.Back", 30, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Back", "L", 26, "Lucida Console", "", "", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.Wall.Back");
    onEvent("Sonar.Settings.Wall.Wall2", "click", function( ) {
      setProperty("OS", "image", "wall2.jpg");
    });
    onEvent("Sonar.Settings.Wall.Wall1", "click", function( ) {
      setProperty("OS", "image", "wall1.jpg");
    });
    onEvent("Sonar.Settings.Wall.Back", "click", function( ) {
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      deleteElement("options.title");
      deleteElement("options.close");
      deleteElement("options.contents");
      Sonar$Settings();
    });
  });
  onEvent("Sonar.Settings.Dis", "click", function( ) {
    for (var i = 0; i <= (CurrentAppElEx.length); i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    BEMA.Element("TextArea", "Sonar.Settings.Dis.W", 10, 60, 350, 150, false, 0, 0, "transparent", "transparent", TextColour, "Screen res is under \n active testing and \n may fail.", "L", 17, "Lucida Console", true, "", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.Dis.W");
    BEMA.Element("Button", "Sonar.Settings.Dis.Back", 30, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Back", "L", 26, "Lucida Console", "", "", "");
    BEMA.Element("Button", "Sonar.Settings.Dis.Apply", 185, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Apply", "L", 26, "Lucida Console", "", "", "");
    BEMA.Element("Dropdown", "Sonar.Settings.Dis.R", 20, 130*ScalingFactor, 270, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "", "L", 20,"Lucida Console", false, "", "");
    setProperty("Sonar.Settings.Dis.R", "options", resList);
    appendItem(CurrentAppElEx,"Sonar.Settings.Dis.Apply");
    appendItem(CurrentAppElEx,"Sonar.Settings.Dis.R");
    appendItem(CurrentAppElEx,"Sonar.Settings.Dis.Back");
    onEvent("Sonar.Settings.Dis.Back", "click", function( ) {
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      deleteElement("options.title");
      deleteElement("options.close");
      deleteElement("options.contents");
      Sonar$Settings();
    });
    onEvent("Sonar.Settings.Dis.Apply", "click", function( ) {
      originalSize = {w:(resKeytoWidth[(getProperty("Sonar.Settings.Dis.R", "index"))]),h:(resKeytoHight[(getProperty("Sonar.Settings.Dis.R", "index"))])};
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      deleteElement("options.title");
      deleteElement("options.close");
      deleteElement("options.contents");
      Sonar$Settings();
      applyTheme(ThemeNum);
    });
  });
  onEvent("Sonar.Settings.Password", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    BEMA.Element("Button", "Sonar.Settings.Users.Password",38,143, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Passwords", "L", 26, "Lucida Console", true, "", "");
    BEMA.Switch("Sonar.Settings.Users.GuestActive", 60, 230, BackgroundColour, "#00FF00", !GuestActive);
    appendItem(CurrentAppElEx,"Sonar.Settings.Users.GuestActive.orb");
    appendItem(CurrentAppElEx,"Sonar.Settings.Users.GuestActive.bg");
    appendItem(CurrentAppElEx,"Sonar.Settings.Users.GuestActive");
    appendItem(CurrentAppElEx,"Sonar.Settings.Users.Password");
    BEMA.Element("TextArea", "Sonar.Settings.Users.GuestLabel", 130, 230, 350, 150, false, 0, 0, "transparent", "transparent", TextColour, "Show Guest", "L", 17, "Lucida Console", true, "", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.Users.GuestLabel");
    BEMA.Element("Button", "Sonar.Settings.Passwords.Back", 30, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Back", "L", 26, "Lucida Console", "", "", "");
    appendItem(CurrentAppElEx,"Sonar.Settings.Passwords.Back");
    onEvent("Sonar.Settings.Passwords.Back", "click", function( ) {
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      deleteElement("options.title");
      deleteElement("options.close");
      deleteElement("options.contents");
      Sonar$Settings();
    });
    onEvent("Sonar.Settings.Users.GuestActive", "click", function( ) {
      if (BEMA.getState("Sonar.Settings.Users.GuestActive")) {
        GuestActive = 0;
      } else {
        GuestActive = 1;
      }
    });
    onEvent("Sonar.Settings.Users.Password", "click", function( ) {
      for (var i = 0; i <= CurrentAppElEx.length; i++) {
        i = 0;
        deleteElement(CurrentAppElEx[i]);
        removeItem(CurrentAppElEx, 0);
      }
      BEMA.Element("TextArea", "Sonar.Settings.Passwords.CU", 15, 60, 600, 50, false, 0, 0, "transparent", "transparent", TextColour, "You are logged in as " + UserA, "L", 17, "Lucida Console", true, "", "");
      appendItem(CurrentAppElEx,"Sonar.Settings.Passwords.CU");
      BEMA.Element("Button", "Sonar.Settings.Passwords.Apply", 185, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Apply", "L", 26, "Lucida Console", "", "", "");
      appendItem(CurrentAppElEx,"Sonar.Settings.Passwords.Apply");
      BEMA.Element("Button", "Sonar.Settings.Passwords.Back", 30, 350, 100, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Back", "L", 26, "Lucida Console", "", "", "");
      appendItem(CurrentAppElEx,"Sonar.Settings.Passwords.Back");
      BEMA.Element("Input", "Sonar.Settings.Passwords.PW", 20, 130*ScalingFactor, 270, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "Input password", "L", 20,"Lucida Console", false, "", "");
      appendItem(CurrentAppElEx,"Sonar.Settings.Passwords.PW");
      onEvent("Sonar.Settings.Passwords.Back", "click", function( ) {
        for (var i = 0; i <= CurrentAppElEx.length; i++) {
          i = 0;
          deleteElement(CurrentAppElEx[i]);
          removeItem(CurrentAppElEx, 0);
        }
        deleteElement("options.title");
        deleteElement("options.close");
        deleteElement("options.contents");
        Sonar$Settings();
      });
      onEvent("Sonar.Settings.Passwords.Apply", "click", function( ) {
        epassword = MWK.sha256(getText("Sonar.Settings.Passwords.PW"));
        for (var i = 0; i <= CurrentAppElEx.length; i++) {
          i = 0;
          deleteElement(CurrentAppElEx[i]);
          removeItem(CurrentAppElEx, 0);
        }
        deleteElement("options.title");
        deleteElement("options.close");
        deleteElement("options.contents");
        Sonar$Settings();
      });
    });
  });
  onEvent("Sonar.Settings.Theme", "click", function( ) {
    themesMenu();
  });
}
function Sonar$ExtraSettings() {
  createWindow("Dev Menu", "dev", 100, 100, 10, BWidth, BordColour, "options", "options");
  CurrentAppIntName = "dev";
  appendItem(CurrentAppElEx,"Sonar.ExtraSettings.Exp1");
  BEMA.Element("Button", "Sonar.ExtraSettings.Exp1",38,353, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Reset this PC", "L", 26, "Lucida Console", true, "", "");
  onEvent("dev.close", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      deleteElement(CurrentAppElEx[i]);
      i = 0;
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("dev.title");
    deleteElement("dev.close");
    deleteElement("dev.contents");
    CurrentAppIntName = null;
  });
  onEvent("Sonar.ExtraSettings.Exp1", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("dev.title");
    deleteElement("dev.close");
    deleteElement("dev.contents");
    deleteElement("Sonar.Frontier.TB");
    deleteElement("Sonar.Frontier.SB");
    setProperty("OS", "image", "");
    UserA = "Authority1";
    SystemResetPC_();
  });
}
function Sonar$Notes() {
  createWindow("Notes", "notes");
  CurrentAppIntName = "notes";
  onEvent("notes.close", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("notes.title");
    deleteElement("notes.close");
    deleteElement("notes.contents");
    CurrentAppIntName = null;
  });
  BEMA.Element("TextArea", "Sonar.Notes.Note", 0, 30*ScalingFactor, originalSize.w, originalSize.h-60*ScalingFactor, false, 3, 0, "transparent", "transparent", TextColour, "The duck swims on the lake", "L", 15,"Lucida Console", false, "", "");
  appendItem(CurrentAppElEx,"Sonar.Notes.Note");
}
function Sonar$Music() {
  var MusicCurrentlyPlaying = false;
  var CMusic = null;
  createWindow("Music", "music");
  CurrentAppIntName = "music";
  BEMA.Element("Button", "Sonar.Music.Stop",38,353, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "Stop", "L", 25, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Music.Stop");
  BEMA.Element("Button", "Sonar.Music.000",38,293, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "2011", "L", 25, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Music.000");
  BEMA.Element("Button", "Sonar.Music.001",38,233, 250, 50, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "10 000", "L", 25, "Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Music.001");
  var Authors = ["ColBreakz"];
  var Songs = ["2011", "10 000"];
  var GenreKey = ["Dubstep", "House"];
  var ATS = [0, 0];
  var GTS = [0, 1];
  //Author search will be retro-active update to 0.5+ :p
  //Send to proper fair use policy will be in KB0019
  //SonarOS Demo will be a halcyon+tidal ra update
  onEvent("music.close", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("music.title");
    deleteElement("music.close");
    deleteElement("music.contents");
    CurrentAppIntName = null;
    CMusic = null;
    MusicCurrentlyPlaying = false;
    stopSound();
  });
  onEvent("Sonar.Music.Stop", "click", function( ) {
    CMusic = null;
    MusicCurrentlyPlaying = false;
    stopSound();
  });
  onEvent("Sonar.Music.000", "click", function( ) {
    CMusic = "2011";
    MusicCurrentlyPlaying = true;
    playSound("song0001.mp3");
  });
  onEvent("Sonar.Music.001", "click", function( ) {
    CMusic = "10 000";
    MusicCurrentlyPlaying = true;
    playSound("song0002.mp3");
  });
}
function Sonar$Calc() {
  createWindow("Calc", "calc");
  CurrentAppIntName = "calc";
  onEvent("calc.close", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("calc.title");
    deleteElement("calc.close");
    deleteElement("calc.contents");
    CurrentAppIntName = null;
  });
  BEMA.Element("TextArea", "Sonar.Calc.V1", 20, 75*ScalingFactor, 130, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "1", "L", 20,"Lucida Console", false, "", "");
  appendItem(CurrentAppElEx,"Sonar.Calc.V1");
  BEMA.Element("TextArea", "Sonar.Calc.V2", 160, 75*ScalingFactor, 130, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "2", "L", 20,"Lucida Console", false, "", "");
  BEMA.Element("Dropdown", "Sonar.Calc.O", 20, 130*ScalingFactor, 270, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "", "L", 20,"Lucida Console", false, "", "");
  setProperty("Sonar.Calc.O", "options", ["+","-","*","/", "sqrt", "pow", "rand", "IS greater than", "IS less than"]);
  BEMA.Element("TextArea", "Sonar.Calc.A", 20, 200*ScalingFactor, 270, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "Answer", "L", 20,"Lucida Console", true, "", "");
  BEMA.Element("Button", "Sonar.Calc.C", 20, 300*ScalingFactor, 270, 35, false, 3, 0, "transparent", BackgroundColour, TextColour, "Calculate", "L", 20,"Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Calc.V2");
  appendItem(CurrentAppElEx,"Sonar.Calc.O");
  appendItem(CurrentAppElEx,"Sonar.Calc.C");
  appendItem(CurrentAppElEx,"Sonar.Calc.A");
  onEvent("Sonar.Calc.C", "click", function( ) {
    if (getText("Sonar.Calc.O")=="+") {
      setText("Sonar.Calc.A", getNumber("Sonar.Calc.V1") + getNumber("Sonar.Calc.V2"));
    } else if (getText("Sonar.Calc.O")=="-") {
      setText("Sonar.Calc.A", getNumber("Sonar.Calc.V1") - getNumber("Sonar.Calc.V2"));
    } else if (getText("Sonar.Calc.O")=="*") {
      setText("Sonar.Calc.A", getNumber("Sonar.Calc.V1") * getNumber("Sonar.Calc.V2"));
    } else if (getText("Sonar.Calc.O")=="/") {
      setText("Sonar.Calc.A", getNumber("Sonar.Calc.V1") / getNumber("Sonar.Calc.V2"));
    } else if ((getText("Sonar.Calc.O")=="sqrt")) {
      setText("Sonar.Calc.A", Math.sqrt(getNumber("Sonar.Calc.V1")));
    } else if (getText("Sonar.Calc.O")=="pow") {
      setText("Sonar.Calc.A", Math.pow(getNumber("Sonar.Calc.V1"),getNumber("Sonar.Calc.V2")));
    } else if ((getText("Sonar.Calc.O")=="rand")) {
      var TEMP = Math.random();
      TEMP = TEMP * 10000;
      TEMP = Math.round(TEMP);
      TEMP = TEMP / 10000;
      setText("Sonar.Calc.A", TEMP);
    } else if (getText("Sonar.Calc.O")=="IS greater than") {
      setText("Sonar.Calc.A", getNumber("Sonar.Calc.V1") > getNumber("Sonar.Calc.V2"));
    } else {
      setText("Sonar.Calc.A", getNumber("Sonar.Calc.V1") < getNumber("Sonar.Calc.V2"));
    }
  });
}
function Sonar$Clock() {
  createWindow("Clock", "clock");
  CurrentAppIntName = "clock";
  onEvent("clock.close", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("clock.title");
    deleteElement("clock.close");
    deleteElement("clock.contents");
    CurrentAppIntName = null;
    stopTimedLoop();
  });
  BEMA.Element("TextArea", "Sonar.Clock.Time", 30, 75*ScalingFactor, 260, 70, false, 3, 0, "transparent", BackgroundColour, TextColour, "00:00:00", "L", 47,"Lucida Console", true, "", "");
  BEMA.Element("TextArea", "Sonar.Clock.Date", 30, 150*ScalingFactor, 260, 55, false, 3, 0, "transparent", BackgroundColour, TextColour, "1970-01-01", "L", 37,"Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Clock.Time");
  appendItem(CurrentAppElEx,"Sonar.Clock.Date");
  timedLoop(6, function() {
    setText("Sonar.Clock.Time", MWK.getTime("HH:mm:ss"));
    setText("Sonar.Clock.Date", MWK.getDate("yyyy-mm-dd"));
  });
}
var UsersL = Users;
removeItem(UsersL, 0);
function StartSystem0() {
  InOS = true;
  setProperty("OS", "image", "wall1.jpg");
  //BEMA.Element("TextArea", "Sonar.Login.Time", 6, 6, 999, 999, false, 0, BWidth, BordColour, "transparent", TextColour, "00:00:00", "L", 40,"Lucida Console", true, "", "");
  User = "code.org@" +"login";
  UserA = "login";
  BEMA.Element("TextArea", "Sonar.Login.Sheet", 30, 100, 265, 270, false, 10, 0, BackgroundColour, BackgroundColour, TextColour, "\n Log in", "L", 40, "Lucida Console", true, "", "");
  BEMA.Element("Dropdown", "Sonar.Login.Users", 50, 190, 225, 30, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "Log in", "", 18, "Lucida Console", true, "", "");
  setProperty("Sonar.Login.Users", "options", UsersL);
  if (epassword!="") {
    BEMA.Element("Input", "Sonar.Login.UserPW", 50, 260, 225, 25, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "Password", "", 18,"Lucida Console", true, "", "");
  }
  BEMA.Element("Button", "Sonar.Login.Login", 192, 330, 100, 35, false, 10, 0, BackgroundColour, BackgroundColour, TextColour, "Log in", "L", 20, "Lucida Console", true, "", "");
  onEvent("Sonar.Login.Login", "click", function( ) {
    if (epassword!="") {
      if (MWK.checkSha256(getText("Sonar.Login.UserPW"), epassword)) {
        User = "code.org@" +getText("Sonar.Login.Users");
        UserA = getText("Sonar.Login.Users");
        deleteElement("Sonar.Login.Login");
        deleteElement("Sonar.Login.Users");
        deleteElement("Sonar.Login.Sheet");
        if (epassword!="") {
          deleteElement("Sonar.Login.UserPW");
        }
        FrontierUI();
      }
    } else {
      User = "code.org@" +getText("Sonar.Login.Users");
      UserA = getText("Sonar.Login.Users");
      if (epassword!="") {
        deleteElement("Sonar.Login.UserPW");
      }
      deleteElement("Sonar.Login.Login");
      deleteElement("Sonar.Login.Users");
      deleteElement("Sonar.Login.Sheet");
      FrontierUI();
    }
  });
}
function getUserPerm_(user, code) {
  createWindow(user + " requests to:", "auth");
  CurrentAppIntName = "auth";
  //BEMA.Element("Input", "Sonar.Login.UserPW", 50, 260, 225, 25, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "Password", "", 18,"Lucida Console", true, "", "");
  BEMA.Element("Button", "Sonar.Auth.Allow", 20, 360, 100, 35, false, 10, 0, BackgroundColour, BackgroundColour, TextColour, "Allow", "L", 20,"Lucida Console", true, "", "");
  BEMA.Element("Button", "Sonar.Auth.Deny", 200, 360, 100, 35, false, 10, 0, BackgroundColour, BackgroundColour, TextColour, "Deny", "L", 20,"Lucida Console", true, "", "");
  appendItem(CurrentAppElEx,"Sonar.Auth.Allow");
  appendItem(CurrentAppElEx,"Sonar.Auth.Deny");
  onEvent("Sonar.Auth.Allow", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("auth.title");
    deleteElement("auth.close");
    deleteElement("auth.contents");
    CurrentAppIntName = null;
    eval(code);
    return 1;
  });
  onEvent("Sonar.Auth.Deny", "click", function( ) {
    for (var i = 0; i <= CurrentAppElEx.length; i++) {
      i = 0;
      deleteElement(CurrentAppElEx[i]);
      removeItem(CurrentAppElEx, 0);
    }
    deleteElement("auth.title");
    deleteElement("auth.close");
    deleteElement("auth.contents");
    CurrentAppIntName = null;
    return 0;
  });
}
var StartMenuAppTemp = null;
function openStartMenu() {
  if (startMenuOpen == true) {
    startMenuOpen = false;
    deleteElement("Sonar.Frontier.S");
    //deleteElement("Sonar.Frontier.Search");
    deleteElement("Sonar.Frontier.User");
    deleteElement("Sonar.Frontier.Logoff");
    deleteElement("Sonar.Frontier.Shutdown");
    for (var v = 0; v < Apps.length; v++) {
      deleteElement("Sonar.Frontier.App"+v);
    }
    } else {
    startMenuOpen = true;
    //BEMA.Element("TextArea", "Sonar.Frontier.S", 5, scaledY, scaledWidth, scaledHeight, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "", "L", 11 * ScalingFactor, "", true, "", "");
    BEMA.Element("TextArea", "Sonar.Frontier.S", 5, originalSize.h-((60+300)*ScalingFactor), 210*ScalingFactor, 320*ScalingFactor, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "", "L", 11 * ScalingFactor, "", true, "", "");
    //BEMA.Element("Input", "Sonar.Frontier.Search", 15, 100+(originalSize.h-450), 190, 30, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "Search for apps and files..", "L", 10,"Lucida Console", true, "", "");
    BEMA.Element("TextArea", "Sonar.Frontier.User", 5, 330+originalSize.h-407, 190, 30, false, 3, 0, "transparent", "transparent", TextColour, UserA, "L", 15,"Lucida Console", true, "", "");
    BEMA.Element("Button", "Sonar.Frontier.Logoff", 130, 333+originalSize.h-407, 25, 25, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "", "L", 12,"Lucida Console", true, "icon://fa-lock", TextColour);
    BEMA.Element("Button", "Sonar.Frontier.Shutdown", 160, 333+originalSize.h-407, 25, 25, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "", "L", 12,"Lucida Console", true, "icon://fa-power-off", TextColour);
        
    for (var i = 0; i < Apps.length; i++) {
      BEMA.Element("Button", "Sonar.Frontier.App"+i, 15, 100+originalSize.h-450 + 35*i, 190, 25, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, (Apps[i]).displayname, "L", 12,"Lucida Console", true, "", TextColour);
    }
    onEvent("Sonar.Frontier.App"+0, "click", function( ) {
        if (startMenuOpen==true) {
          openStartMenu();
        }
        if (Apps[0].guestcan) {
          ("Sonar$"+(Apps[0]).name)();
        } else {
          if (UserA != "Guest") {
            StartMenuAppTemp = ("Sonar$"+(Apps[0]).name);
            getUserPerm_("Settings", StartMenuAppTemp + "()");
          }
        }
      });
    onEvent("Sonar.Frontier.App"+1, "click", function( ) {
        if (startMenuOpen==true) {
          openStartMenu();
        }
        if ((Apps[1]).guestcan) {
          ("Sonar$"+(Apps[1]).name)();
        } else {
          if (UserA != "Guest") {
            StartMenuAppTemp = ("Sonar$"+(Apps[1]).name);
            getUserPerm_("Settings", StartMenuAppTemp + "()");
          }
        }
      });
    onEvent("Sonar.Frontier.App"+2, "click", function( ) {
        if (startMenuOpen==true) {
          openStartMenu();
        }
        if ((Apps[2]).guestcan) {
          ("Sonar$"+(Apps[2]).name)();
        } else {
          if (UserA != "Guest") {
            StartMenuAppTemp = ("Sonar$"+(Apps[2]).name);
            getUserPerm_("Settings", StartMenuAppTemp + "()");
          }
        }
      });
    onEvent("Sonar.Frontier.App"+3, "click", function( ) {
        if (startMenuOpen==true) {
          openStartMenu();
        }
        if ((Apps[3]).guestcan) {
          ("Sonar$"+(Apps[3]).name)();
        } else {
          if (UserA != "Guest") {
            StartMenuAppTemp = ("Sonar$"+(Apps[3]).name);
            getUserPerm_("Settings", StartMenuAppTemp + "()");
          }
        }
      });
    onEvent("Sonar.Frontier.App"+4, "click", function( ) {
        if (startMenuOpen==true) {
          openStartMenu();
        }
        if ((Apps[4]).guestcan) {
          ("Sonar$"+(Apps[4]).name)();
        } else {
          if (UserA != "Guest") {
            StartMenuAppTemp = ("Sonar$"+(Apps[4]).name);
            getUserPerm_("Settings", StartMenuAppTemp + "()");
          }
        }
      });
    onEvent("Sonar.Frontier.Logoff", "click", function( ) {
        if (startMenuOpen==true) {
          openStartMenu();
        }
        deleteElement("Sonar.Frontier.TB");
        deleteElement("Sonar.Frontier.SB");
        if (CurrentAppIntName != null) {
          for (var i = 0; i <= CurrentAppElEx.length; i++) {
            i = 0;
            deleteElement(CurrentAppElEx[i]);
            removeItem(CurrentAppElEx, 0);
          }
          deleteElement(CurrentAppIntName + ".title");
          deleteElement(CurrentAppIntName + ".close");
          deleteElement(CurrentAppIntName + ".contents");
        }
        StartSystem0();
      });
  }
  }
function FrontierUI() {
  BEMA.Element("TextArea", "Sonar.Frontier.TB", 0, originalSize.h-35*ScalingFactor, originalSize.w, 35*ScalingFactor, false, 0, 0, BackgroundColour, BackgroundColour, TextColour, "", "L", 20,"Lucida Console", true, "", "");
  BEMA.Element("Button", "Sonar.Frontier.SB", 5, originalSize.h-(31*ScalingFactor), 25*ScalingDivider, 25*ScalingFactor, false, 3, 0, BackgroundColour, BackgroundColour, TextColour, "", "L", 12,"Lucida Console", true, "icon://fa-times-circle-o", TextColour);
  onEvent("OS", "keypress", function(key) {
    if (key.key == "`") {
      if (UserA != "login") {
        openStartMenu();
      }
    }
  });
  onEvent("Sonar.Frontier.SB", "click", function( ) {
    openStartMenu();
  });
}
boot();
function boot() {
  var getinos = true;
  onEvent("OS", "keypress", function(ImIe) {
    if (ImIe.key == "r") {
      if (!InOS) {
        recMode();
      }
      getinos = false;
      }
  });
  setTimeout(function() {
    if (getinos) {
      StartSystem0();
    }
  }, 1000);
}
function recMode() {
  BEMA.Element("TextArea", "Sonar.tmp.01", 00, 00, 999, 999, false, 0, BWidth, BordColour, "transparent", TextColour, "", "L", 12,"Lucida Console", true, "", "");
  setText("Sonar.tmp.01", (("Recovery mode loading... \n " + RAMSize) + " megabytes of RAM  \n CPU Clock: ") + CPUClock + " MHz \n Loading system_kernel_resources \n Loading system_locale");
  setTimeout(function() {
          deleteElement("Sonar.tmp.01");
          User = "Sonar.Recovery/Authority";
          UserA = "Authority1";
          BEMA.Element("Image", "Sonar.RecoveryMode.Continue.img", 210, 86, 50, 50, false, 0, BWidth, BordColour, "transparent", TextColour, "", "L", 14,"Lucida Console", true, "icon://fa-arrow-right", TextColour);
          BEMA.Element("Image", "Sonar.RecoveryMode.ResetPC.img", 210, 146, 50, 50, false, 0, BWidth, BordColour, "transparent", TextColour, "", "L", 14,"Lucida Console", true, "icon://fa-refresh", TextColour);
          BEMA.Element("Image", "Sonar.RecoveryMode.RestorePoints.img", 210, 206, 50, 50, false, 0, BWidth, BordColour, "transparent", TextColour, "", "L", 14,"Lucida Console", true, "icon://fa-list-alt", TextColour);
          BEMA.Element("Button", "Sonar.RecoveryMode.ResetPC", 20, 160, 300, 30, false, 0, BWidth, BordColour, "transparent", TextColour, "Reset this PC", "Left", 14,"Lucida Console", true, "", "");
          BEMA.Element("Button", "Sonar.RecoveryMode.RestorePoints", 20, 220, 300, 30, false, 0, BWidth, BordColour, "transparent", TextColour, "Restore Points", "Left", 14,"Lucida Console", true, "", "");
          BEMA.Element("Button", "Sonar.RecoveryMode.Continue", 20, 100, 300, 30, false, 0, BWidth, BordColour, "transparent", TextColour, "Continue", "Left", 14,"Lucida Console", true, "", "");
          onEvent("Sonar.RecoveryMode.Continue", "click", function( ) {
            deleteElement("Sonar.RecoveryMode.Continue.img");
            deleteElement("Sonar.RecoveryMode.Continue");
            deleteElement("Sonar.RecoveryMode.ResetPC.img");
            deleteElement("Sonar.RecoveryMode.RestorePoints.img");
            deleteElement("Sonar.RecoveryMode.ResetPC");
            deleteElement("Sonar.RecoveryMode.RestorePoints");
            StartSystem0();
          });
          onEvent("Sonar.RecoveryMode.ResetPC", "click", function( ) {
            SystemResetPC_();
          });
          onEvent("Sonar.RecoveryMode.RestorePoints", "click", function( ) {
            CreateRestorePoint();
            BEMA.Element("TextArea", "Sonar.RecoveryMode.RestorePoint.Done", 0, 350, 320, 90, false, 0, BWidth, BordColour, "transparent", TextColour, SafeOSMessages[11], "Center", 14,"Lucida Console", true, "", "");
            setTimeout(function() {
              deleteElement("Sonar.RecoveryMode.RestorePoint.Done");
            }, 1000);
          });
        }, 40);
}
var RAMSize = 12266;
var InOS = false;
MWK.fog("loading..");
