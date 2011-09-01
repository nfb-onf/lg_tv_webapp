accedo.define("accedo.utils.array",["accedo.utils.object","accedo.utils.fn"],function(){var b={clear:function(c){c.length=0;return c;},clone:function(c,d){if(d===true){var e=[];accedo.utils.object.extend(e,c,true);return e;}return Array.prototype.slice.call(c,0);},each:function(d,f,h){var g=0,c=d.length>>>0;for(;g<c;g++){if(g in d){try{f.call(h,d[g],g,d);}catch(j){if(j!=accedo.$break){throw j;}else{return;}}}}},every:function(d,e,f){e=e||function(g){return g;};var c=true;b.each(d,function(h,g){c=c&&!!e.call(f,h,g,d);if(!c){throw accedo.$break;}});return c;},filter:function(c,d,f){var e=[];b.each(c,function(h,g){if(d.call(f,h,g,c)){e.push(h);}});return e;},first:function(c){return c[0];},indexOf:function(d,f,e){e||(e=0);var c=d.length;if(e<0){e=c+e;}for(;e<c;e++){if(d[e]===f){return e;}}return -1;},last:function(c){return c[c.length-1];},lastIndexOf:function(c,e,d){d=isNaN(d)?c.length:(d<0?c.length+d:d)+1;var f=b.indexOf(c.slice(0,d).reverse(),e);return(f<0)?f:d-f-1;},map:function(c,d,f){d=d||function(g){return g;};var e=[];b.each(c,function(h,g){e.push(d.call(f,h,g));});return e;},size:function(c){return c.length;},some:function(d,e,f){e=e||function(g){return g;};var c=false;b.each(d,function(h,g){if(c=!!e.call(f,h,g)){throw accedo.$break;}});return c;},remove:function(c,f,e){var d=c.slice((e||f)+1||c.length);c.length=f<0?c.length+f:f;return c.push.apply(c,d);}};if(accedo.getConfigParameter("extendArray")){var a=accedo.utils.fn.methodize;accedo.utils.object.extend(Array.prototype,{each:Array.prototype.forEach?Array.prototype.forEach:a(b.each),forEach:Array.prototype.forEach?Array.prototype.forEach:a(b.each),every:Array.prototype.every?Array.prototype.every:a(b.every),filter:Array.prototype.filter?Array.prototype.filter:a(b.filter),indexOf:Array.prototype.indexOf?Array.prototype.indexOf:a(b.indexOf),lastIndexOf:Array.prototype.lastIndexOf?Array.prototype.lastIndexOf:a(b.lastIndexOf),map:Array.prototype.map?Array.prototype.map:a(b.map),some:Array.prototype.some?Array.prototype.some:a(b.some),size:a(b.size),clear:a(b.clear),clone:a(b.clone),first:a(b.first),last:a(b.last),toArray:a(b.clone),remove:a(b.remove)});}return b;});