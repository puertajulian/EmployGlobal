/**
 * VERSION: beta 1.52
 * DATE: 2012-12-17
 * JavaScript 
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Copyright (c) 2008-2012, GreenSock. All rights reserved. 
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("plugins.ScrollToPlugin",["plugins.TweenPlugin"],function(d){var e=function(){d.call(this,"scrollTo");this._overwriteProps.pop()},b=e.prototype=new d("scrollTo"),f=document.documentElement,g=window,j=e.max=function(a,c){var h="x"===c?"Width":"Height",b="scroll"+h,e="client"+h,d=document.body;return a===g||a===f||a===d?Math.max(f[b],d[b])-Math.max(f[e],d[e]):a[b]-a["offset"+h]},k=d.prototype.setRatio;b.constructor=e;e.API=2;b._onInitTween=
function(a,c,b){this._wdw=a===g;this._target=a;this._tween=b;"object"!==typeof c&&(c={y:c});this._autoKill=c.autoKill;this.x=this.xPrev=this.getX();this.y=this.yPrev=this.getY();null!=c.x?this._addTween(this,"x",this.x,"max"===c.x?j(a,"x"):c.x,"scrollTo_x",!0):this.skipX=!0;null!=c.y?this._addTween(this,"y",this.y,"max"===c.y?j(a,"y"):c.y,"scrollTo_y",!0):this.skipY=!0;return!0};b.getX=function(){return!this._wdw?this._target.scrollLeft:null!=g.pageXOffset?g.pageXOffset:null!=f.scrollLeft?f.scrollLeft:
document.body.scrollLeft};b.getY=function(){return!this._wdw?this._target.scrollTop:null!=g.pageYOffset?g.pageYOffset:null!=f.scrollTop?f.scrollTop:document.body.scrollTop};b._kill=function(a){a.scrollTo_x&&(this.skipX=!0);a.scrollTo_y&&(this.skipY=!0);return d.prototype._kill.call(this,a)};b._checkAutoKill=function(){this._autoKill&&(this.skipX&&this.skipY)&&this._tween.kill()};b.setRatio=function(a){k.call(this,a);a=this._wdw||!this.skipX?this.getX():this.xPrev;var c=this._wdw||!this.skipY?this.getY():
this.yPrev,b=c-this.yPrev,d=a-this.xPrev;if(!this.skipX&&(7<d||-7>d))this.skipX=!0,this._checkAutoKill();if(!this.skipY&&(7<b||-7>b))this.skipY=!0,this._checkAutoKill();this._wdw?g.scrollTo(!this.skipX?this.x:a,!this.skipY?this.y:c):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x));this.xPrev=this.x;this.yPrev=this.y};d.activate([e]);return e},!0)});window._gsDefine&&_gsQueue.pop()();

