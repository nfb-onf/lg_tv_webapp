accedo.define("nfb.videoplayCtrl.progressSubcontroller",["accedo.utils.object","accedo.ui.controller","nfb.videoplayViews.progressSubview"],function(){return function(h){var n,l,i,b,o,q,r,p,t,d,s,f,g,m,a;var k;var c=20,j=828,e=144;return accedo.utils.object.extend(accedo.ui.controller(h),{playing:false,curTimeValue:0,durationValue:0,dragDealerCurrent:0,isDragging:false,reInit:function(){r.root.setStyle({left:"0px"});d.root.setStyle({display:"none",width:"0"});f.root.setStyle({display:"none",width:"0"});},dragToLocation:function(u){var v=this;if(u!=v.dragDealerCurrent){return;}else{for(var w=0;w<4;w++){nfb.config.APICallFlag[w]=true;}v.dragDealerCurrent=-1;lgVideoPlayer.seek(u);v.isDragging=false;}},updateRadar:function(v,u){var w=Math.min(Math.round(v/u*5),5);n.root.setStyle({background:"url(image/videoplayer/signal0"+w+".png)"});},updateStatus:function(v,y,z,A,w,B){var u=this;u.playing=v;if(v){u.curTimeValue=y;u.durationValue=z;if(A==-1){A=z-y;}var x=y+A;g.setText(w);m.setText("/"+B);d.root.setStyle({display:"block",width:(z==0)?"1px":Math.min((x*j/z),j)+"px"});f.root.setStyle({display:"block",width:Math.min((A)*j/z,(z-y)*j/z)+"px",left:(e+y*j/z)+"px"});if(!u.isDragging){r.root.setStyle({display:"block",left:(y*j/z)+"px"});}}else{d.root.setStyle({display:"none"});f.root.setStyle({display:"none"});}},onCreate:function(v){var u=this;u.setView(nfb.videoplayViews.progressSubview);s=u.get("progressBarTrack");d=u.get("progress");f=u.get("bufferMask");p=u.get("trackJumpSensor");t=u.get("jumpFocus");g=u.get("curTime");m=u.get("durTime");r=u.get("scrollbutton");n=u.get("radar");r.root.addEventListener("mouseover",function(){r.root.setStyle({background:"url(image/videoplayer/videoArrow_focus.png)"});});r.root.addEventListener("mouseout",function(){if(u.isDragging==false){r.root.setStyle({background:"url(image/videoplayer/videoArrow.png)"});}else{r.root.setStyle({background:"url(image/videoplayer/videoArrow_focus.png)"});}});p.root.addEventListener("mouseover",function(x){var y=(x.clientX?x.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft):x.pageX);var w=y-c;t.root.setStyle({display:"block",left:w+"px"});});p.root.addEventListener("mouseout",function(w){t.root.setStyle({display:"none"});});p.root.addEventListener("mousemove",function(x){var y=(x.clientX?x.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft):x.pageX);var w=y-c;t.root.setStyle({display:"block",left:w+"px"});});p.root.addEventListener("click",function(x){if(!u.playing){return;}var y=(x.clientX?x.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft):x.pageX);var w=Math.round(Math.max(0,Math.min((y-e)/j*u.durationValue,u.durationValue)));lgVideoPlayer.seek(w);});this.addEventListener("attach",function(){accedo.utils.fn.defer(function(){a=new Dragdealer("videoProgress-scroll-bar",{snap:false,speed:100,horizontal:true,slide:true,vertical:true,animationCallback:function(w,A){if(!u.playing){return;}u.isDragging=true;var z=Math.round(Math.max(0,Math.min(w*u.durationValue,u.durationValue)));u.dragDealerCurrent=z;accedo.utils.fn.delay(function(){u.dragToLocation(z);},0.5);}});});});}});};});