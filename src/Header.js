!(function( global ) {
  
  var Opera = function() {};

  Opera.prototype.REVISION = '1';

  Opera.prototype.version = function() {
    return this.REVISION;
  };

  Opera.prototype.buildNumber = function() {
    return this.REVISION;
  };

  Opera.prototype.postError = function( str ) {
    console.log( str );
  };

  var opera = global.opera || new Opera();
  
  var manifest = chrome.app.getDetails(); // null in injected scripts / popups
  
  navigator.browserLanguage=navigator.language; //Opera defines both, some extensions use the former

  var isReady = false;

  var _delayedExecuteEvents = [
    // Example:
    // { 'target': opera.extension, 'methodName': 'message', 'args': event }
  ];
  
  // Pick the right base URL for new tab generation based on the current user agent
  var newTab_BaseURL;
  if(/OPR/.test(navigator.userAgent)) {
    newTab_BaseURL = "opera://startpage";
  } else {
    newTab_BaseURL = "chrome://newtab";
  }

  function addDelayedEvent(target, methodName, args) {
    if(isReady) {
      target[methodName].apply(target, args);
    } else {
      _delayedExecuteEvents.push({
        "target": target,
        "methodName": methodName,
        "args": args
      });
    }
  };
