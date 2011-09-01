accedo.define("nfb.videoplayCtrl.playCtrlSubcontroller",["accedo.utils.object","accedo.ui.controller","nfb.videoplayViews.playCtrlSubview"],function(){return function(c){var b,a,f,d,e;return accedo.utils.object.extend(accedo.ui.controller(c),{onCreate:function(h){var g=this;g.setView(nfb.videoplayViews.playCtrlSubview);b=g.get("stopButton");a=g.get("playButton");f=g.get("pauseButton");d=g.get("rwButton");e=g.get("ffButton");b.root.addEventListener("mouseover",function(){b.root.setAttributes({src:"image/videoplayer/button_stop_focus.png"});});b.root.addEventListener("mouseout",function(){b.blur();b.root.setAttributes({src:"image/videoplayer/button_stop.png"});});b.root.addEventListener("click",function(){for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}lgVideoPlayer.stop();accedo.device.manager.unregisterKey("enter");accedo.device.manager.unregisterKey("back");accedo.device.manager.registerKey("back",function(){nfb.config.backto();});});b.addEventListener("click",function(){for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}lgVideoPlayer.stop();accedo.device.manager.unregisterKey("enter");accedo.device.manager.unregisterKey("back");accedo.device.manager.registerKey("back",function(){nfb.config.backto();});});a.root.addEventListener("mouseover",function(){a.root.setAttributes({src:"image/videoplayer/button_play_focus.png"});});a.root.addEventListener("mouseout",function(){a.blur();a.root.setAttributes({src:"image/videoplayer/button_play.png"});});a.root.addEventListener("click",function(){lgVideoPlayer.play(1);nfb.config.vp_click=true;nfb.config.showProgressBar();});a.addEventListener("click",function(){lgVideoPlayer.play(1);nfb.config.vp_click=true;nfb.config.showProgressBar();});f.root.addEventListener("mouseover",function(){f.root.setAttributes({src:"image/videoplayer/button_pause_focus.png"});});f.root.addEventListener("mouseout",function(){f.blur();f.root.setAttributes({src:"image/videoplayer/button_pause.png"});});f.root.addEventListener("click",function(){lgVideoPlayer.pause();nfb.config.vp_click=true;nfb.config.showProgressBar();});f.addEventListener("click",function(){lgVideoPlayer.pause();nfb.config.vp_click=true;nfb.config.showProgressBar();});d.root.addEventListener("mouseover",function(){d.root.setAttributes({src:"image/videoplayer/rbtnhl.png"});});d.root.addEventListener("mouseout",function(){d.blur();d.root.setAttributes({src:"image/videoplayer/rbtn.png"});});d.root.addEventListener("click",function(){nfb.config.vp_click=true;lgVideoPlayer.skip(-15);nfb.config.showProgressBar();for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}});d.addEventListener("click",function(){nfb.config.vp_click=true;lgVideoPlayer.skip(-15);nfb.config.showProgressBar();for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}});e.root.addEventListener("mouseover",function(){e.root.setAttributes({src:"image/videoplayer/fbtnhl.png"});});e.root.addEventListener("mouseout",function(){e.blur();e.root.setAttributes({src:"image/videoplayer/fbtn.png"});});e.root.addEventListener("click",function(){nfb.config.vp_click=true;lgVideoPlayer.skip(15);nfb.config.showProgressBar();for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}});e.addEventListener("click",function(){nfb.config.vp_click=true;lgVideoPlayer.skip(15);nfb.config.showProgressBar();for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}});accedo.device.manager.unregisterKey("stop");accedo.device.manager.registerKey("stop",function(){if(nfb.config.playingVideo){for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}lgVideoPlayer.stop();}nfb.config.vp_click=true;accedo.focus.manager.requestFocus(b);});accedo.device.manager.unregisterKey("play");accedo.device.manager.registerKey("play",function(){if(nfb.config.playingVideo){lgVideoPlayer.play(1);nfb.config.vp_click=true;accedo.focus.manager.requestFocus(a);nfb.config.showProgressBar();}});accedo.device.manager.unregisterKey("pause");accedo.device.manager.registerKey("pause",function(){if(nfb.config.playingVideo){lgVideoPlayer.pause();nfb.config.vp_click=true;accedo.focus.manager.requestFocus(f);nfb.config.showProgressBar();}});accedo.device.manager.unregisterKey("rw");accedo.device.manager.registerKey("rw",function(){if(nfb.config.playingVideo){lgVideoPlayer.skip(-15);nfb.config.vp_click=true;accedo.focus.manager.requestFocus(d);nfb.config.showProgressBar();for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}}});accedo.device.manager.unregisterKey("ff");accedo.device.manager.registerKey("ff",function(){if(nfb.config.playingVideo){lgVideoPlayer.skip(15);nfb.config.vp_click=true;nfb.config.showProgressBar();for(var i=0;i<4;i++){nfb.config.APICallFlag[i]=true;}}accedo.focus.manager.requestFocus(e);});}});};});