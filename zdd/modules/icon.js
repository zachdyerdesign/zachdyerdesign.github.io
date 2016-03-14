// getIcon will display an icon using the bootstrap icon library
zdd.mods.icon = {
  get: function(icon, color, size) {
    size = size || "auto";
    color = color || "auto";
    var html = "<i class='fa fa-" + icon + "' style='font-size: " + size + "; color: " + color + "'></i>";
    document.write(html);
  }
};
