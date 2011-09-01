accedo.define("accedo.ui.htmlComponent",["accedo.utils.object","accedo.utils.dom","accedo.utils.array","accedo.ui.container","accedo.ui.component","accedo.focus.manager"],function(){return function(c){c.content=c.content||"";var b=function(){var e=accedo.utils.dom.element("div");e.addClass("accedo-ui-html");return e;};c.root=b(c);c.focusable=false;var a=function(e,f){var f=f||[];if(e.attributes&&e.attributes.focusable&&e.attributes.focusable.nodeValue=="true"){e.removeAttribute("focusable");f.push(e);}else{accedo.utils.array.each(e.childNodes,function(g){if(g.nodeType!=1){return;}f=a(g,f);},this);}return f;};var d=accedo.utils.object.extend(accedo.ui.container(c),{setHTMLData:function(e){c.root.setText(e||"");var f=c.root.getHTMLElement();var g=a(f);accedo.utils.array.each(g,function(l){try{var k={focusable:true};var h=l.attributes;accedo.utils.array.each(["nextUp","nextDown","nextRight","nextLeft"],function(m){if(h[m]){k[m]=h[m].nodeValue;}},this);if(h.xdkId){k.id=h.xdkId.nodeValue;}k.root=accedo.utils.dom.element(l);var i=new accedo.ui.component(k);this.append(i);i.parent=this;i.registerWithFocusManager();}catch(j){throw new Error(j);}},this);accedo.focus.manager.updateFocusMap();}});d.setHTMLData(c.content);return d;};});