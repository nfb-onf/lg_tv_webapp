accedo.define("nfb.views.aboutSubview",["accedo.ui.container","nfb.ui.container","accedo.ui.image","accedo.ui.label","nfb.ui.imagebutton1"],function(){return{type:nfb.ui.container,id:"aboutSubview",htmlid:"aboutSubview",children:[{type:accedo.ui.label,id:"about_lang",htmlid:"about_lang",text:"Interface language"},{type:accedo.ui.label,id:"en_label",htmlid:"en_label",text:"English"},{type:accedo.ui.label,id:"french_label",htmlid:"french_label",text:"Fran&ccedil;ais"},{type:nfb.ui.container,id:"about_screen",htmlid:"about_screen",children:[{type:accedo.ui.label,id:"about_text",htmlid:"about_text",text:""}]},{type:accedo.ui.image,id:"about_scroll_bg",htmlid:"about_scroll_bg"},{type:nfb.ui.container,id:"about_scroll_container",htmlid:"about_scroll_container",children:[{type:accedo.ui.label,id:"about_scroll",htmlid:"about_scroll",text:""}]},{type:nfb.ui.imagebutton1,id:"english",htmlid:"english",src:"image/checked.png",nextLeft:"cat7",nextRight:"french",nextUp:"",nextDown:"up"},{type:nfb.ui.imagebutton1,id:"french",htmlid:"french",src:"image/circle.png",nextLeft:"english",nextRight:"",nextUp:"",nextDown:"up"},{type:nfb.ui.imagebutton1,id:"about_upbtn",htmlid:"about_upbtn",src:"image/upbtn.png",nextDown:"",nextUp:"",nextLeft:"",nextRight:""},{type:nfb.ui.imagebutton1,id:"about_downbtn",htmlid:"about_downbtn",src:"image/downbtn.png",nextUp:"",nextLeft:"",nextRight:"",nextDown:""},{type:accedo.ui.image,id:"about_layer",htmlid:"about_layer"}]};});