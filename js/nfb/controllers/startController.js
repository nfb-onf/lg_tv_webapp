accedo.define("nfb.controllers.startController",["accedo.utils.object","nfb.views.startView","accedo.ui.controller","nfb.controllers.featureSubcontroller","nfb.videoplayCtrl.progressbarSubcontroller","nfb.controllers.loadingSubcontroller"],function(){return function(a){return accedo.utils.object.extend(accedo.ui.controller(a),{onCreate:function(){var q=this;q.setView(nfb.views.startView);var f,b,m,h;function e(){var p=new XMLHttpRequest();p.onreadystatechange=function(){if(p.readyState==4&&p.status==200){if(localStorage.getItem("zlang")==null||localStorage.getItem("zlang")==""){localStorage.setItem("zlang",p.responseText);}}};p.open("GET","php/header.php",true);p.send();}function n(r){for(var s=0;s<m.length;s++){m[s].setOption("nextRight",r);}}function o(r){nfb.config.selected=r;nfb.config.selected_item=r;for(var p=0;p<m.length;p++){m[p].root.getHTMLElement().removeAttribute("style");}m[r].root.getHTMLElement().setAttribute("style",f);}function i(){if(nfb.config.currentSubcontroller==1||nfb.config.currentSubcontroller==4||nfb.config.currentSubcontroller==8||nfb.config.currentSubcontroller==10||nfb.config.currentSubcontroller==9){n("list1");}else{if(nfb.config.currentSubcontroller==5){n("search_all");}else{if(nfb.config.currentSubcontroller==3){n("ch1");}else{if(nfb.config.currentSubcontroller==7){n("detail_video");}else{if(nfb.config.currentSubcontroller==2){var p=localStorage.getItem("fav");if(p==null||p==""||p=="[]"){n("");}else{n("list1");}}else{if(nfb.config.currentSubcontroller==0){}else{if(nfb.config.currentSubcontroller==6){n("english");}}}}}}}}window.onmousemove=function(){if(nfb.config.first==false){accedo.focus.manager.getCurrentFocus().blur();nfb.config.first=true;nfb.config.usingmouse=true;}};nfb.config.selected_item=0;f="background:orange";m=[this.get("cat1"),this.get("cat2"),this.get("cat3"),this.get("cat4"),this.get("cat5"),this.get("cat6"),this.get("cat7")];h=accedo.app.getCurrentController().get("layer");e();nfb.config.lang_set(localStorage.getItem("zlang"));var d=accedo.ui.controllerProxy({controller:nfb.controllers.featureSubcontroller,id:"subcontroller",htmlid:"subcontroller"});var l=accedo.ui.controllerProxy({controller:nfb.videoplayCtrl.progressbarSubcontroller,id:"progress_bar_subcontroller",htmlid:"progress_bar_subcontroller"});var k=accedo.ui.controllerProxy({controller:nfb.controllers.loadingSubcontroller,id:"loading_subcontroller",htmlid:"loading_subcontroller"});q.get("app_bkg").append(d);q.get("app_bkg").append(l);q.get("app_bkg").append(k);q.get("progress_bar_subcontroller").root.setStyle({display:"block"});q.get("progress_bar_subcontroller").root.setStyle({visibility:"hidden",position:"absolute"});q.get("loading_subcontroller").root.setStyle({display:"block"});m[0].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==0){m[0].root.getHTMLElement().removeAttribute("style");m[0].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[1].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==1){m[1].root.getHTMLElement().removeAttribute("style");m[1].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[2].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==2){m[2].root.getHTMLElement().removeAttribute("style");m[2].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[3].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==3){m[3].root.getHTMLElement().removeAttribute("style");m[3].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[4].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==4){m[4].root.getHTMLElement().removeAttribute("style");m[4].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[5].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==5){m[5].root.getHTMLElement().removeAttribute("style");m[5].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[6].onFocus=function(){i();accedo.device.manager.unregisterKey("up");accedo.device.manager.unregisterKey("down");accedo.device.manager.unregisterKey("left");accedo.device.manager.unregisterKey("right");accedo.device.manager.unregisterKey("enter");if(nfb.config.selected_item==6){m[6].root.getHTMLElement().removeAttribute("style");m[6].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');}};m[0].onBlur=function(){if(nfb.config.selected_item==0){m[0].root.getHTMLElement().removeAttribute("style");m[0].root.getHTMLElement().setAttribute("style",f);}};m[1].onBlur=function(){if(nfb.config.selected_item==1){m[1].root.getHTMLElement().removeAttribute("style");m[1].root.getHTMLElement().setAttribute("style",f);}};m[2].onBlur=function(){if(nfb.config.selected_item==2){m[2].root.getHTMLElement().removeAttribute("style");m[2].root.getHTMLElement().setAttribute("style",f);}};m[3].onBlur=function(){if(nfb.config.selected_item==3){m[3].root.getHTMLElement().removeAttribute("style");m[3].root.getHTMLElement().setAttribute("style",f);}};m[4].onBlur=function(){if(nfb.config.selected_item==4){m[4].root.getHTMLElement().removeAttribute("style");m[4].root.getHTMLElement().setAttribute("style",f);}};m[5].onBlur=function(){if(nfb.config.selected_item==5){m[5].root.getHTMLElement().removeAttribute("style");m[5].root.getHTMLElement().setAttribute("style",f);}};m[6].onBlur=function(){if(nfb.config.selected_item==6){m[6].root.getHTMLElement().removeAttribute("style");m[6].root.getHTMLElement().setAttribute("style",f);}};o(0);m[0].root.getHTMLElement().removeAttribute("style");m[0].root.getHTMLElement().setAttribute("style",'background-image:url("image/menu_selected.png");height:65px;width: 300px;');accedo.focus.manager.requestFocus(m[0]);m[0].addEventListener("click",function(){if(nfb.config.currentSubcontroller!=0){accedo.app.getCurrentController().get("loading_subcontroller").root.setStyle({display:"block"});h.show();nfb.config.history=[];o(0);nfb.config.currentSubcontroller=0;nfb.config.feature_current_id=0;nfb.config.history.push(0);accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.featureSubcontroller);}if(nfb.config.usingmouse==false){accedo.focus.manager.requestFocus(q.get("feature_thumb"));}accedo.app.getCurrentController().get("loading_subcontroller").root.setStyle({display:"none"});});m[1].addEventListener("click",function(){if(nfb.config.currentSubcontroller!=1){o(1);nfb.config.history=[];nfb.config.feature_current_id=0;h.show();nfb.config.currentSubcontroller=1;nfb.config.history.push(0);nfb.config.mostview_start_id.push(0);nfb.config.mostview_focus_id.push(0);accedo.define(null,["nfb.controllers.mostviewedSubcontroller"],function(){accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.mostviewedSubcontroller);if(nfb.config.usingmouse==false){accedo.focus.manager.requestFocus(q.get("list1"));}});b="background-image:url(image/bg.jpg); background-repeat: no-repeat;background-size: 1280px 622px";document.body.setAttribute("style",b);h.hide();}});m[2].addEventListener("click",function(){o(2);nfb.config.history=[];nfb.config.feature_current_id=0;nfb.config.currentSubcontroller=2;nfb.config.history.push(0);nfb.config.fav_start_id.push(0);nfb.config.fav_focus_id.push(0);accedo.define(null,["nfb.controllers.mostviewedSubcontroller"],function(){accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.mostviewedSubcontroller);if(nfb.config.usingmouse==false){accedo.focus.manager.requestFocus(q.get("list1"));}});b="background-image:url(image/bg_fav.jpg); background-repeat: no-repeat;background-size: 1280px 622px";document.body.setAttribute("style",b);h.hide();});m[3].addEventListener("click",function(){if(nfb.config.currentSubcontroller!=3){h.show();nfb.config.history=[];nfb.config.feature_current_id=0;o(3);nfb.config.currentSubcontroller=3;nfb.config.history.push(0);nfb.config.channel_start_id.push(0);accedo.define(null,["nfb.controllers.channelSubcontroller"],function(){accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.channelSubcontroller);if(nfb.config.usingmouse==false){accedo.focus.manager.requestFocus(q.get("ch1"));}});}b="background-image:url(image/bg.jpg); background-repeat: no-repeat;background-size: 1280px 622px";document.body.setAttribute("style",b);h.hide();});m[4].addEventListener("click",function(){if(nfb.config.currentSubcontroller!=4){nfb.config.history=[];nfb.config.feature_current_id=0;o(4);nfb.config.currentSubcontroller=4;nfb.config.history.push(0);nfb.config.kid_start_id.push(0);nfb.config.kid_focus_id.push(0);accedo.define(null,["nfb.controllers.mostviewedSubcontroller"],function(){accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.mostviewedSubcontroller);if(nfb.config.usingmouse==false){accedo.focus.manager.requestFocus(q.get("list1"));}});}h.hide();});m[5].addEventListener("click",function(){if(nfb.config.currentSubcontroller!=5){nfb.config.history=[];nfb.config.feature_current_id=0;o(5);nfb.config.history.push(0);nfb.config.currentSubcontroller=5;accedo.define(null,["nfb.controllers.searchSubcontroller"],function(){accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.searchSubcontroller);});}b="background-image:url(image/bg.jpg); background-repeat: no-repeat;background-size: 1280px 622px";document.body.setAttribute("style",b);h.hide();});m[6].addEventListener("click",function(){if(nfb.config.currentSubcontroller!=6){nfb.config.history=[];nfb.config.feature_current_id=0;h.hide();o(6);nfb.config.history.push(0);nfb.config.currentSubcontroller=6;accedo.define(null,["nfb.controllers.aboutSubcontroller"],function(){accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.aboutSubcontroller);if(nfb.config.usingmouse==false){if(localStorage.getItem("zlang")=="fr"){accedo.focus.manager.requestFocus(q.get("french"));}else{accedo.focus.manager.requestFocus(q.get("english"));}}});}b="background-image:url(image/bg.jpg); background-repeat: no-repeat;background-size: 1280px 622px";document.body.setAttribute("style",b);h.hide();});m[0].root.addEventListener("mouseout",function(){m[0].blur();});m[1].root.addEventListener("mouseout",function(){m[1].blur();});m[2].root.addEventListener("mouseout",function(){m[2].blur();});m[3].root.addEventListener("mouseout",function(){m[3].blur();});m[4].root.addEventListener("mouseout",function(){m[4].blur();});m[5].root.addEventListener("mouseout",function(){m[5].blur();});m[6].root.addEventListener("mouseout",function(){m[6].blur();});accedo.define(null,["nfb.controllers.aboutSubcontroller","nfb.controllers.searchSubcontroller","nfb.controllers.mostviewedSubcontroller","nfb.controllers.channelSubcontroller","nfb.controllers.detailviewSubcontroller"],function(){});var j=[];j[0]="image/upbtn.png";j[1]="image/upbtn_focus.png";j[2]="image/up_focus.png";j[3]="image/up.png";j[4]="image/unfav_focus.png";j[5]="image/unfav.png";j[6]="image/star.png";j[7]="image/scroll_bar.jpg";j[8]="image/right_focus.png";j[9]="image/right.png";j[10]="image/related.png";j[11]="image/rel_focus.png";j[12]="image/play_focus.png";j[13]="image/play.png";j[14]="image/navbar.jpg";j[15]="image/menu_selected.png";j[16]="image/menu_focus.png";j[17]="image/loading_ani.gif";j[18]="image/list_focus.png";j[19]="image/line.png";j[20]="image/left.png";j[21]="image/left_focus.png";j[22]="image/fav_selected_focused.png";j[23]="image/fav_selected.png";j[24]="image/fav_focused.png";j[25]="image/fav_focus.png";j[26]="image/fav.png";j[27]="image/downbtn_focus.png";j[28]="image/downbtn.png";j[29]="image/circle_focused.png";j[30]="image/circle.png";j[31]="image/checked_focused.png";j[32]="image/checked.png";j[33]="image/circle_focused.png";j[34]="image/ch_focus.png";j[35]="image/bg_kids.jpg";j[36]="image/bg_fav.jpg";j[37]="image/bg.jpg";j[38]="image/btn_rel_fr_focus.png";j[39]="image/btn_rel_fr_default.png";j[40]="image/bg.jpg";j[41]="image/keybd/btn_search_default.png";j[42]="image/keybd/keybd_default.png";j[43]="image/keybd/keybd_12;)_default.png";j[44]="image/keybd/keybd_abc_default.png";j[45]="image/keybd/keybd_aa_default.png";j[46]="image/keybd/keybd_shift_default.png";j[47]="image/keybd/keybd_left_default.png";j[48]="image/keybd/keybd_right_default.png";j[49]="image/keybd/keybd_del_default.png";j[50]="image/keybd/keybd_space_default.png";j[51]="image/keybd/keybd_focus.png";j[52]="image/keybd/btn_search_focus.png";j[53]="image/keybd/keybd_inactive.png";for(var c=0;c<j.length;c++){var g=new Image();g.src=j[c];}accedo.app.getCurrentController().get("lg_lang").addEventListener("click",function(){accedo.app.getCurrentController().get("loading_subcontroller").root.setStyle({display:"block"});if(localStorage.getItem("zlang")=="en"){localStorage.setItem("zlang","fr");nfb.config.lang_set("fr");}else{localStorage.setItem("zlang","en");nfb.config.lang_set("en");}nfb.config.history=[];accedo.app.getCurrentController().get("lg_lang").setOption("nextUp","cat7");accedo.app.getCurrentController().get("exit").setOption("nextUp","cat7");accedo.app.getCurrentController().get("back").setOption("nextUp","cat7");nfb.config.selected_item=0;accedo.app.getCurrentController().get("layer").show();accedo.app.getCurrentController().get("cat1").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat2").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat3").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat4").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat5").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat6").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat7").root.getHTMLElement().removeAttribute("style");accedo.app.getCurrentController().get("cat1").root.getHTMLElement().setAttribute("style","background:orange");nfb.config.history.push(0);nfb.config.feature_current_id=0;nfb.config.currentSubcontroller=0;accedo.app.getCurrentController().get("subcontroller").changeToController(nfb.controllers.featureSubcontroller);if(nfb.config.usingmouse==false){accedo.focus.manager.requestFocus(accedo.app.getCurrentController().get("feature_thumb"));}accedo.app.getCurrentController().get("loading_subcontroller").root.setStyle({display:"none"});});this.addEventListener("attach",function(){q.get("loading_subcontroller").root.setStyle({display:"none"});var p=document.getElementById("preload");document.getElementsByTagName("body")[0].removeChild(p);});this.addEventListener("detach",function(){});}});};});