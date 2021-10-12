export const getBrowser = () => {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return "opera";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return "safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return "ie";
  } else {
    return "unknown";
  }
};

export const getBrowserNotificationMessage = () => {
  let brw;

  brw = getBrowser();

  switch (brw) {
    case "firefox":
      return 'You need to give notification permission before booking, <ul><li>Go to the browser menu and select "Settings."</li> <li>On the left, click on "Privacy & Security."</li> <li>Scroll down to the "Permissions" window, and select "Notification."</li> <li>Next to each site, there is a dropdown menu where you can allow or block push notifications.</li> </ul>';
    case "<ul> <li> Choose Apple menu  > System Preferences, click Notifications , select Safari on the left, then change the Safari alert style and other settings on the right. </li> </ul>":
      return "";
    case "ie":
      return "";
    case "edge":
      return "";
    case "chrome":
      return 'You need to give notification permission before booking, <ul><li>At the top right, click More. Settings.</li> <li>Under "Privacy and security," click Site settings.</li> <li>Click Notifications.</li> <li> Choose the option you want as your default setting. Block a site: Next to "Not allowed to send notifications, click Add. </li> </ul>';
    case "chromium":
      return 'You need to give notification permission before booking, <ul><li>At the top right, click More. Settings.</li> <li>Under "Privacy and security," click Site settings.</li> <li>Click Notifications.</li> <li> Choose the option you want as your default setting. Block a site: Next to "Not allowed to send notifications, click Add. </li> </ul>';
    default:
      return "";
  }
};
