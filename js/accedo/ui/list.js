accedo.define("accedo.ui.list",["accedo.utils.object","accedo.ui.component","accedo.ui.controllerProxy"],function(){var a=function(g){var e,h,b,f=g.maxDisplay,c=this;e=[];var d=function(){var i=accedo.utils.dom.element("div");if(g.orientation==accedo.ui.list.HORIZONTAL){i.addClass("accedo-ui-layout-linear-h");}else{i.addClass("accedo-ui-layout-linear-v");}return i;};g.root=d(g);if(!g.orientation){g.orientation=accedo.ui.list.VERTICAL;}h=accedo.utils.object.extend(accedo.ui.component(g),({getById:function(m){var k,j,l;if(g.id===m){return this;}k=0;j=e.length;for(;k<j;k++){if(accedo.utils.object.isFunction(e[k].get)){l=e[k].get(m);if(l){return l;}}if(accedo.utils.object.isFunction(e[k].getById)){l=e[k].getById(m);if(l){return l;}}}return null;},getChildren:function(){return e;},getMaxDisplay:function(){return f;},getDataSource:function(){return b;},append:function(i){e.push(i);if(accedo.utils.object.isFunction(this.onAppend)){this.onAppend(i);}},remove:function(m){var k=0,l=false,j=e.length;for(;k<j;k++){if(e[k]==m){e.splice(k,1);l=true;break;}}if(l&&accedo.utils.object.isFunction(this.onRemove)){this.onRemove(m);}if(l){m.detach();}},removeAll:function(){var j=e.length;while(j--){if(accedo.utils.object.isFunction(this.onRemove)){this.onRemove(e[j]);}e[j].detach();}e=[];},registerWithFocusManager:function(){if(this.isFocusable()){accedo.focus.manager.registerComponent(this);}else{var i=this.getChildren();accedo.utils.array.each(i,function(j){j.registerWithFocusManager();},this);}},unregisterFromFocusManager:function(){if(this.isFocusable()){accedo.focus.manager.unregisterComponent(this);}else{var i=this.getChildren();accedo.utils.array.each(i,function(j){j.unregisterFromFocusManager();},this);}},listInit:function(){var n,j,k,m;n=0;j=g.maxDisplay;for(;n<j;n++){m=accedo.utils.object.extend({id:"accedo-ui-list-sub"+n,htmlid:"accedo-ui-list-sub"+n},g.childTemplate);if(accedo.utils.object.isPlainObject(m)){k=m.type;if(accedo.utils.object.isFunction(k)){this.append(k(m));}}}return this;},getOrientation:function(){return g.orientation;},setCallback:function(i){this.callback=i;},createChild:function(l,j){var k=accedo.utils.object.extend(g.childTemplate,l,true);var m=g.childTemplate.type(k);var i=j||false;if(i){m.hide();}this.append(m);return m;},onAppend:function(p){var o=accedo.utils.dom.element("div");o.addClass("accedo-ui-layout-linear-element");var j=accedo.utils.dom.element("div");j.addClass("accedo-ui-layout-linear-element-nested");o.appendChild(j);g.root.appendChild(o);var l={};var m={};var i=p.getOption("height");if(i){l.height=i;}var k=p.getOption("width");if(k){l.width=k;}var n=p.getOption("gravity");if(this.getOrientation()==accedo.ui.list.HORIZONTAL){l.textAlign="center";}if(this.getOrientation()==accedo.ui.list.VERTICAL){m.verticalAlign="middle";}else{l.verticalAlign="middle";}o.setStyle(l);j.setStyle(m);p.attachTo(j);},onRemove:function(i){i.getParent().getParent().remove();},displayMoveNext:function(){console.info("displayMoveNext: unimplemented yet");},displayMovePrev:function(){console.info("displayMovePrev: unimplemented yet");},setDataSource:function(i){b=i;b.addEventListener("accedo:data:ds:appendData",(function(j){return function(){var l=j.getChildren();var p=l.length,q=j.getDataSource().getData(),n=q.length,k=Math.min(n,f),m=0;if(n===0){m=p;while(m--){l[m].hide();}return;}if(p>n){for(m=p;m>k;m--){l[m].hide();}for(m=n;m--;){j.callback(l[m],q[m]);}}else{if(p<n){for(m=p;m<n;m++){var o=j.createChild(g.childTemplate,(m>=f));j.callback(o,q[m]);}for(m=p;m--;){j.callback(l[m],q[m]);}}else{for(m=p;m--;){j.callback(l[m],q[m]);}}}};}(this)));}}));return h.listInit();};a.VERTICAL=1;a.HORIZONTAL=2;return a;});