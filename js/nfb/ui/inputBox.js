accedo.define("nfb.ui.inputBox",["accedo.utils.object","accedo.utils.array","accedo.focus.manager","accedo.ui.controllerProxy","accedo.ui.component"],function(){return function(c){var a="",b=10;c.root=accedo.utils.dom.element("input");c.root.addClass("nfb-ui-inputBox");var e={type:"text"};if(c.maxlength){b=c.maxlength;}c.root.setAttributes(e);var d=accedo.utils.object.extend(accedo.ui.component(c),({maxlength:function(){return b;},setValue:function(f){if(f.length<=b){a=f||"";c.root.getHTMLElement().value=a;}},getValue:function(){return a;},setInputSize:function(f){c.root.setAttributes({size:f});},setInputMaxlength:function(f){b=f;}}));if(c.value){d.setValue(c.value);}return d;};});