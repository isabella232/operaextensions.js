opera.isReady(function() {
    var mi; // Menu item
    var url; // widget:// URL of the widget's icon

    test(function() {
      mi = menu.createItem({})
      assert_equals(typeof mi.icon, "string", "The icon property should be a string.")
      assert_equals(mi.icon, "", "The icon property should default to an empty string.")
    }, "Default icon.");

    test(function() {
      mi = menu.createItem({icon: "icon.png"})
      menu.addItem(mi)
      assert_equals(typeof mi.icon, "string", "The icon property should be a string.")
      assert_equals(mi.icon.substring(mi.icon.lastIndexOf("/")), "/icon.png", "The icon should be as specified.")
    }, "Specified icon.");

    test(function() {
      mi = menu.createItem({icon: null})
      assert_equals(typeof mi.icon, "string", "The icon property should be a string.")
      assert_equals(mi.icon, "", "The icon property should be an empty string.") // This knowingly violates WebIDL.
    }, "Specified icon: null.");

    test(function() {
      mi = menu.createItem({icon: undefined})
      assert_equals(typeof mi.icon, "string", "The icon property should be a string.")
      assert_equals(mi.icon, "", "The icon property should be an empty string.") // This knowingly violates WebIDL.
    }, "Specified icon: undefined.");

    test(function() {
      mi = menu.createItem({})
      mi.icon = "icon.png"
      assert_equals(mi.icon.substring(mi.icon.lastIndexOf("/")), "/icon.png", "The icon should be as specified.")
      url = mi.icon
    }, "Setting the icon property.");

    test(function() {
      mi = menu.createItem({})
      mi.icon = url
      assert_equals(mi.icon, url, "The icon should be as specified.")
    }, "Setting the icon property to an absolute widget URL.");

    test(function() {
      mi = menu.createItem({})
      mi.icon = "http://t/resources/images/16x16-navy.png"
      assert_equals(mi.icon, "http://t/resources/images/16x16-navy.png", "The icon should be as specified.")
    }, "Setting the icon property to an absolute http URL.");
});