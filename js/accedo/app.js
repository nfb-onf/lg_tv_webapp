accedo.define("accedo.app",["accedo.utils.object","accedo.utils.dom"],function(){var a=accedo.utils.dom.element("div",{id:"TVArea"});return{appDef:null,currentController:null,controllers:{},setApp:function(b){this.appDef=b;},getRoot:function(){return a;},getControllerById:function(b){return this.controllers[b].controller;},changeToController:function(b,c){if(this.currentController){this.currentController.detach();}if(accedo.utils.object.isString(b)){b=this.getControllerById(b);}this.currentController=b({root:accedo.utils.dom.element("div")});if(accedo.utils.object.isFunction(this.currentController.onCreate)){this.currentController.onCreate(c);}this.currentController.attachTo(a);},addController:function(c,b){this.controllers[c]=b;},getCurrentController:function(){return this.currentController;},main:function(){document.body.appendChild(a.getHTMLElement());if(accedo.utils.object.isPlainObject(this.appDef)){if(accedo.utils.object.isPlainObject(this.appDef.controllers)){var b,c,f,e=this.appDef.controllers;for(f in e){var d=this.appDef.controllers[f];if(accedo.utils.object.isFunction(d.controller)){this.controllers[f]=d;if(!c){c=f;}if(d.main===true){b=f;}}}if(!b&&c){b=c;}this.changeToController(b);}}}};});