//zdd is the namespace to hold all of the modules
//Each module will have the data that goes with it
var zdd = {
  core: {
    get: function(config) {
      var html = zdd.config[config];
      document.write(html);
    },
    import: function(imports) {
      // Check just in case something weird was passed in or nothing at all
      imports = imports || [];
      //Load config
      var html = '<script type="text/javascript" language="javascript" src="zdd/zdd.config.js"></script>';
      for(var i = 0; i < imports.length; i++) {
        var imp = imports[i];
        html += '<script type="text/javascript" language="javascript" src="zdd/modules/' + imp + '.js"></script>';
      }
      document.write(html);
    },
    theme: function(theme) {
      // If theme is undefined use the one in the config file
      if(typeof theme == 'undefined') {
        theme = zdd.config.theme;
      }
      var html = '<link rel="stylesheet" type="text/css" href="zdd/themes/' + theme + '.css">';
      document.write(html);
    }
  },
  mods: {}
};
