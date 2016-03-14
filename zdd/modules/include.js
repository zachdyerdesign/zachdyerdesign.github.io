zdd.mods.include = {
  data: {
    footer: "<p>&copy; " + zdd.config.year + " " + zdd.config.title + " | Designed by <a href='http://" + zdd.config.website + "' target='_blank'>" + zdd.config.author + "</a></p>",
  },
  get: function() {
  	var
    	general = zdd.config,
    	html = "<p>&copy;" + zdd.config.year + " " + general.title + " | Designed by <a href='http://" + general.website + "' target='_blank'>" + general.author + "</a></p>";
  	document.write(html);
  }
};
