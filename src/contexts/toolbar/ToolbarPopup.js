
var ToolbarPopup = function( properties ) {
  
  OPromise.call( this );
  
  this.properties = {};
  
  // Set provided properties through object prototype setter functions
  this.properties.href = properties.href || "";
  this.properties.width = properties.width;
  this.properties.height = properties.height;
  
  this.enqueue('apply');

};

ToolbarPopup.prototype = Object.create( OPromise.prototype );

ToolbarPopup.prototype.apply = function() {
  
  chrome.browserAction.setPopup({ "popup": this.href });
  
};

// API

ToolbarPopup.prototype.__defineGetter__("href", function() {
  return this.properties.href;
});

ToolbarPopup.prototype.__defineSetter__("href", function( val ) {
  this.properties.href = "" + val;
  if( this.resolved ) {
    chrome.browserAction.setPopup({ "popup": ("" + val) });
  }
});

ToolbarPopup.prototype.__defineGetter__("width", function() {
  return this.properties.width;
});

ToolbarPopup.prototype.__defineSetter__("width", function( val ) {
  this.properties.width = val;
  // not implemented in chromium
  //
  // will need to pass this message to the popup process itself
  // to resize the popup window
});

ToolbarPopup.prototype.__defineGetter__("height", function() {
  return this.properties.height;
});

ToolbarPopup.prototype.__defineSetter__("height", function( val ) {
  this.properties.height = val;
  // not implemented in chromium
  //
  // will need to pass this message to the popup process itself
  // to resize the popup window
});
