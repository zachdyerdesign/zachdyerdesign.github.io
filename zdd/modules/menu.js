zdd.mods.menu = {
  config: [
  	{
  		"id" : "main-menu",
  		"items" : [
  			{"name" : "Company", "link" : "index.html", "target" : "_self", "class" : ""},
  			{"name" : "Services", "link" : "about.html", "target" : "_self", "class" : ""},
  			{"name" : "Clients", "link" : "clown-prayer.html", "target" : "_self", "class" : ""},
  			{"name" : "Portfolio", "link" : "donate.html", "target" : "_self", "class" : ""},
  			{"name" : "Blog", "link" : "contact.html", "target" : "_self", "class" : ""},
  			{"name" : "Contact", "link" : "contact.html", "target" : "_self", "class" : ""}
  		]
  	} , {
  		"id":    "footer-menu",
  		"items": [
  			{"name" : "Privacy Policy", "link": "/privacy-policy", "target" : "_self", "class" : ""}
  		]
  	}
  ],
  get: function(id, menu_class) {
  	var
    	menu,
    	html = "",
    	menus = this.config,
    	config = zdd.config;

  	for(var i = 0; i < menus.length; i++) {
  		if(menus[i].id === id) {
  			menu = menus[i];
  		}
  	}

    if(!menu) {
      console.error("Could not find Menu ID for zdd.menu.get() in zdd.menu.data");
    }

  	html += "<ul id='" + id + "' class='" + menu_class + "'>";

  	for(var i = 0; i < menu.items.length; i++) {
  		var item = menu.items[i];
  		html += "<li><a href='" + config.baseurl + item.link + "' target='" + item.target + "' class='"+item.class+"'>" + item.name + "</a></li>";
  	}

  	html += "</ul>";

  	document.write(html);
  }
};
