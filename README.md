### Backbone Todo App

In order to run this, it is best to put it on some sort of web server. 
Accessing this through a file:// URL fails due to RequireJS and protocol relative URL's.

Handlebars (*.hbs) files need to be served as text.  If this is run in IIS, the included web.config file
takes care of this automatically. 