import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'
import css from '../../node_modules/slick-carousel/slick/slick.scss';


// Replace string
let p = document.getElementsByTagName('p');

Array.prototype.forEach.call(p, function(el) {
  el.innerHTML = el.innerHTML.replace(/#;/gi, ' ');
});

// Remove style attribute from ul tags
let ul = document.getElementsByTagName('ul');

for (let i = 0; i < ul.length; i ++) {
    ul[i].removeAttribute('style');
}

$(document).ready(function() {


    $("#related_posts .viewport ul").slick({
        autoplay: true,
        slidesToShow: 3,
        infinite: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }]
    });



/*


    $("#header .navigation > li").each(function(z){
        $(this).mouseenter(function() {
            $("#header .headerh").attr('id','logo_'+$(this).prevUntil().size());
        });
        $(this).mouseleave(function() {
            $("#header .headerh").attr('id','');
        });
    });


    var liNum = $("#related_posts ul li").size();
    var ulWidth = 292*liNum;
    $("#related_posts ul")[0].style.width= ulWidth+'px';
    

    $("#related_posts").append('<a class=\'previous\' href=\'#\' title=\'Wstecz\'>Wstecz</a>');
    $("#related_posts").append('<a class=\'next\' href=\'#\' title=\'Naprzód\'>Naprzód</a>');

    $("#related_posts ul li").first().addClass('first-item active');
    if ( $("#related_posts ul li").first().hasClass('active') ){
	$("#related_posts a.previous").css('visibility','hidden');
    }
    var d = $("#related_posts ul li").size();
    if( d <=3 ){
	$("#related_posts a.next").css('visibility','hidden');
    }
    $("#related_posts ul li").last().addClass('last-item');

    $("#related_posts a.previous").click(function() {
        $("#related_posts ul li.active").each(function(z){
            if($(this).hasClass('first-item')) {
                
            } else {
                $(this).removeClass('active');
                $(this).prev().addClass('active');

                $("#related_posts ul").animate(
                {
                    left: '-'+ ($("#related_posts ul li.active").prevUntil().size())*292

                }, 800, function() {
                    
                });

                if ($("#related_posts ul li").first().hasClass('active') ){
                    $("#related_posts a.previous").first().css('visibility','hidden');
                }
                $("#related_posts a.next").first().css('visibility','visible');
            }
            
        });
    });

   $("#related_posts a.next").click(function() {
        $("#related_posts ul li.active").each(function(z){
            if($(this).hasClass('last-item')) {

            } else {
                $(this).removeClass('active');
                $(this).next().addClass('active');

                $("#related_posts ul").animate(
                {
                    left: '-'+ ($("#related_posts ul li.active").prevUntil().size())*292

                }, 800, function() {
                    
                });

                if ($("#related_posts ul li").eq(d-3).hasClass('active') ){
                    $("#related_posts a.next").first().css('visibility','hidden');
                }
                $("#related_posts a.previous").first().css('visibility','visible');

            }

        });
   });
   
   
*/
});

function tx_ratings_submit(id, rating, ajaxData, check) {
	$('#tx-ratings-display-' + id).css("visible", "hidden");
	$('#tx-ratings-wait-' + id).css("visible", "visible");
	$.ajax({url: 'index.php?eID=tx_ratings_ajax',
		async: true,
		type: 'post',
		data: 'ref=' + id + '&rating=' + rating + '&data=' + ajaxData + '&check=' + check,
		success: function(data) {
			$('#tx-ratings-' + id).html(data);
		}
	});
}


function tx_comments_pi1_readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return unescape(c.substring(nameEQ.length,c.length)).replace(/\+/, ' ');
		}
	}
	return false;
}

function tx_comments_pi1_setUserDataField(name) {
	var	field = document.getElementById('tx_comments_pi1_' + name);
	try {
		if (field && field.value == '') {
			var	value = tx_comments_pi1_readCookie('tx_comments_pi1_' + name);
			if (typeof value == 'string') {
				field.value = value;
			}
		}
	}
	catch (e) {
	}
}

function tx_comments_pi1_setUserData() {
	tx_comments_pi1_setUserDataField('firstname');
	tx_comments_pi1_setUserDataField('email');
}


/**
 * SWFObject v2.0: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2006 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept == "undefined") var deconcept = new Object();
if(typeof deconcept.util == "undefined") deconcept.util = new Object();
if(typeof deconcept.SWFObjectUtil == "undefined") deconcept.SWFObjectUtil = new Object();
deconcept.SWFObject = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey) {
	if (!document.getElementById) { return; }
	this.DETECT_KEY = detectKey ? detectKey : 'detectflash';
	this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }
	if(w) { this.setAttribute('width', w); }
	if(h) { this.setAttribute('height', h); }
	if(ver) { this.setAttribute('version', new deconcept.PlayerVersion(ver.toString().split("."))); }
	this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
	if (!window.opera && document.all && this.installedVer.major > 7) {
		// only add the onunload cleanup if the Flash Player version supports External Interface and we are in IE
		deconcept.SWFObject.doPrepUnload = true;
	}
	if(c) { this.addParam('bgcolor', c); }
	var q = quality ? quality : 'high';
	this.addParam('quality', q);
	this.setAttribute('useExpressInstall', false);
	this.setAttribute('doExpressInstall', false);
	var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;
	this.setAttribute('xiRedirectUrl', xir);
	this.setAttribute('redirectUrl', '');
	if(redirectUrl) { this.setAttribute('redirectUrl', redirectUrl); }
}
deconcept.SWFObject.prototype = {
	useExpressInstall: function(path) {
		this.xiSWFPath = !path ? "expressinstall.swf" : path;
		this.setAttribute('useExpressInstall', true);
	},
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},
	getAttribute: function(name){
		return this.attributes[name];
	},
	addParam: function(name, value){
		this.params[name] = value;
	},
	getParams: function(){
		return this.params;
	},
	addVariable: function(name, value){
		this.variables[name] = value;
	},
	getVariable: function(name){
		return this.variables[name];
	},
	getVariables: function(){
		return this.variables;
	},
	getVariablePairs: function(){
		var variablePairs = new Array();
		var key;
		var variables = this.getVariables();
		for(key in variables){
			variablePairs.push(key +"="+ variables[key]);
		}
		return variablePairs;
	},
	getSWFHTML: function() {
		var swfNode = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { // netscape plugin architecture
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "PlugIn");
				this.setAttribute('swf', this.xiSWFPath);
			}
			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'"';
			swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
			var params = this.getParams();
			 for(var key in params){ swfNode += [key] +'="'+ params[key] +'" '; }
			var pairs = this.getVariablePairs().join("&");
			 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			swfNode += '/>';
		} else { // PC IE
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "ActiveX");
				this.setAttribute('swf', this.xiSWFPath);
			}
			swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'">';
			swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
			var params = this.getParams();
			for(var key in params) {
			 swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
			}
			var pairs = this.getVariablePairs().join("&");
			if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			swfNode += "</object>";
		}
		return swfNode;
	},
	write: function(elementId){
		if(this.getAttribute('useExpressInstall')) {
			// check to see if we need to do an express install
			var expressInstallReqVer = new deconcept.PlayerVersion([6,0,65]);
			if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
				this.setAttribute('doExpressInstall', true);
				this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
				document.title = document.title.slice(0, 47) + " - Flash Player Installation";
				this.addVariable("MMdoctitle", document.title);
			}
		}
		if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))){
			var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
			n.innerHTML = this.getSWFHTML();
			return true;
		}else{
			if(this.getAttribute('redirectUrl') != "") {
				document.location.replace(this.getAttribute('redirectUrl'));
			}
		}
		return false;
	}
}

/* ---- detection functions ---- */
deconcept.SWFObjectUtil.getPlayerVersion = function(){
	var PlayerVersion = new deconcept.PlayerVersion([0,0,0]);
	if(navigator.plugins && navigator.mimeTypes.length){
		var x = navigator.plugins["Shockwave Flash"];
		if(x && x.description) {
			PlayerVersion = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	}else{
		// do minor version lookup in IE, but avoid fp6 crashing issues
		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
		try{
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}catch(e){
			try {
				var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				PlayerVersion = new deconcept.PlayerVersion([6,0,21]);
				axo.AllowScriptAccess = "always"; // throws if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			} catch(e) {
				if (PlayerVersion.major == 6) {
					return PlayerVersion;
				}
			}
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			} catch(e) {}
		}
		if (axo != null) {
			PlayerVersion = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
		}
	}
	return PlayerVersion;
}
deconcept.PlayerVersion = function(arrVersion){
	this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
	this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
	this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0;
}
deconcept.PlayerVersion.prototype.versionIsValid = function(fv){
	if(this.major < fv.major) return false;
	if(this.major > fv.major) return true;
	if(this.minor < fv.minor) return false;
	if(this.minor > fv.minor) return true;
	if(this.rev < fv.rev) return false;
	return true;
}
/* ---- get value of query string param ---- */
deconcept.util = {
	getRequestParameter: function(param) {
		var q = document.location.search || document.location.hash;
		if(q) {
			var pairs = q.substring(1).split("&");
			for (var i=0; i < pairs.length; i++) {
				if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
					return pairs[i].substring((pairs[i].indexOf("=")+1));
				}
			}
		}
		return "";
	}
}
/* fix for video streaming bug */
deconcept.SWFObjectUtil.cleanupSWFs = function() {
	var objects = document.getElementsByTagName("OBJECT");
	for (var i=0; i < objects.length; i++) {
		objects[i].style.display = 'none';
		for (var x in objects[i]) {
			if (typeof objects[i][x] == 'function') {
				objects[i][x] = function(){};
			}
		}
	}
}
// fixes bug in fp9 see http://blog.deconcept.com/2006/07/28/swfobject-143-released/
if (deconcept.SWFObject.doPrepUnload) {
	deconcept.SWFObjectUtil.prepUnload = function() {
		__flash_unloadHandler = function(){};
		__flash_savedUnloadHandler = function(){};
		window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs);
	}
	window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
}
/* add Array.push if needed (ie5) */
if (Array.prototype.push == null) { Array.prototype.push = function(item) { this[this.length] = item; return this.length; }}

/* add some aliases for ease of use/backwards compatibility */
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject; // for legacy support
var SWFObject = deconcept.SWFObject;



/*
	Slimbox v2.04 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2010 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(E){var N=E(window),A,h,O=-1,s,F,M,B,G,X,w,q=!window.XMLHttpRequest,x=[],p=document.documentElement,o={},y=new Image(),U=new Image(),Q,f,z,n,T,W,r,C,R,b,j,u,S,e,P,c,K,V;E(function(){E("body").append(E([R=E('<div id="sbOverlay" />')[0],b=E('<div id="sbCenter" />')[0],P=E('<div id="sbBottomContainer" />')[0]]).css("display","none"));j=E('<div id="sbImage" />').appendTo(b).append(u=E('<div style="position: relative;" />').append([S=E('<a id="prevLink" href="#" />').click(I)[0],e=E('<a id="nextLink" href="#" />').click(g)[0]])[0])[0];c=E('<div id="sbBottom" />').appendTo(P).append([E('<a id="closeLink" href="#" />').add(R).click(L)[0],W=E('<a id="playLink" href="#" />').click(D)[0],r=E('<a id="pauseLink" href="#" />').click(d)[0],C=E('<a id="saveLink" href="#" target="_blank" />')[0],K=E('<div id="sbCaption" />')[0],V=E('<div id="sbNumber" />')[0],Q=E('<div id="sbPresent" />')[0],E('<div style="clear: both;" />')[0]])[0]});E.slimbox=function(aa,Z,Y){A=E.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image ###x### of ###y###",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78],slideshowKeys:[83],allowSave:false,slideshowAutoplay:false,slideshowInterval:3000,slideshowAutoclose:true},Y);if(typeof aa=="string"){aa=[[aa,Z]];Z=0}G=N.scrollTop()+(N.height()/2);X=A.initialWidth;w=A.initialHeight;E(b).css({top:Math.max(0,G-(w/2)),width:X,height:w,marginLeft:-X/2}).show();B=q||(R.currentStyle&&(R.currentStyle.position!="fixed"));if(B){R.style.position="absolute"}E(R).css("opacity",A.overlayOpacity).fadeIn(A.overlayFadeDuration);J();m(1);h=aa;A.loop=A.loop&&(h.length>1);n=A.slideshowAutoplay&&z;return a(Z)};E.fn.slimbox=function(Y,ab,aa){ab=ab||function(ac){ac.rel.match(/present.+/)?f=true:f=false;ac.rel.match(/slideshow.+/)?z=true:z=false;return[ac.href,ac.title]};aa=aa||function(){return true};var Z=this;return Z.unbind("click").click(function(){var ae=this,ag=0,af,ac=0,ad;af=E.grep(Z,function(ai,ah){return aa.call(ae,ai,ah)});for(ad=af.length;ac<ad;++ac){if(af[ac]==ae){ag=ac}af[ac]=ab(af[ac],ac)}return E.slimbox(af,ag,Y)})};function J(){var Z=N.scrollLeft(),Y=N.width();E([b,P]).css("left",Z+(Y/2));if(B){E(R).css({left:Z,top:N.scrollTop(),width:Y,height:N.height()})}}function m(Y){if(Y){E("object").add(q?"select":"embed").each(function(aa,ab){x[aa]=[ab,ab.style.visibility];ab.style.visibility="hidden"})}else{E.each(x,function(aa,ab){ab[0].style.visibility=ab[1]});x=[]}var Z=Y?"bind":"unbind";N[Z]("scroll resize",J);E(document)[Z]("keydown",t)}function t(aa){var Z=aa.keyCode,Y=E.inArray;return(Y(Z,A.closeKeys)>=0)?L():(Y(Z,A.nextKeys)>=0)?g():(Y(Z,A.previousKeys)>=0)?I():(Y(Z,A.slideshowKeys)>=0)?H():false}function I(){return a(F)}function g(){return a(M)}function a(Y){if(Y>=0){O=Y;s=h[O][0];F=(O||(A.loop?h.length:0))-1;M=((O+1)%h.length)||(A.loop?0:-1);v();b.className="sbLoading";o=new Image();o.onload=l;o.src=s}return false}function l(){b.className="";E(j).css({backgroundImage:"url("+s+")",visibility:"hidden",display:""});E(u).width(o.width);E([u,S,e]).height(o.height);E(K).html(h[O][1]||"");E(V).html((((h.length>1)&&A.counterText)||"").replace(/###x###/,O+1).replace(/###y###/,h.length));if(f){E(V).css("display","none");E(Q).html("").css("display","");for(i=0;i<h.length;i++){var Z=O==i?"act":"no";var Y=E('<a id="pmi'+(i+1)+'" href="#" class="'+Z+'"></a>').click(function(){var ab=parseInt(E(this).text())-1;d();return a(ab)});i<9?Y.html("0"+(i+1)):Y.html(i+1);Y.appendTo(Q)}}else{E(V).css("display","");E(Q).html("").css("display","none")}if(F>=0){y.src=h[F][0]}if(M>=0){U.src=h[M][0]}X=j.offsetWidth;w=j.offsetHeight;var aa=Math.max(0,G-(w/2));if(b.offsetHeight!=w){E(b).animate({height:w,top:aa},A.resizeDuration,A.resizeEasing)}if(b.offsetWidth!=X){E(b).animate({width:X,marginLeft:-X/2},A.resizeDuration,A.resizeEasing)}E(b).queue(function(){E(P).css({width:X,top:aa+w,marginLeft:-X/2,visibility:"hidden",display:""});E(j).css({display:"none",visibility:"",opacity:""}).fadeIn(A.imageFadeDuration,k)})}function k(){if(F>=0){E(S).show()}if(M>=0){E(e).show()}E(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},A.captionAnimationDuration);P.style.visibility="";E(W).css("display","none");E(r).css("display","none");if(z){clearTimeout(T);if(n){E(r).css("display","");if(O!=(h.length-1)){T=setTimeout(g,A.slideshowInterval)}else{if(A.slideshowAutoclose){T=setTimeout(L,A.slideshowInterval)}else{if(A.loop){T=setTimeout(a,A.slideshowInterval,0)}else{d()}}}}else{E(W).css("display","")}}A.allowSave?E(C).attr("href",h[O][0]).css("display",""):E(C).css("display","none")}function H(){if(n){d()}else{D()}return false}function D(){n=true;if(O!=(h.length-1)){g()}else{if(A.slideshowAutoclose&&!A.loop){T=setTimeout(L,0)}else{if(A.loop){a(0)}else{}}}return false}function d(){n=false;clearTimeout(T);E(W).css("display","");E(r).css("display","none");return false}function v(){o.onload=null;o.src=y.src=U.src=s;E([b,j,c]).stop(true);E([S,e,j,P]).hide()}function L(){if(O>=0){d();v();O=F=M=-1;E(b).hide();E(R).stop().fadeOut(A.overlayFadeDuration,m);clearTimeout(T)}return false}})(jQuery);var SlimboxOptions=jQuery.extend({},window.SlimboxOptions||{});if(!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)){jQuery(function(a){a("a[rel^='lightbox']").slimbox(SlimboxOptions,null,function(b){return(this==b)||((this.rel.length>8)&&(this.rel==b.rel))})})};



SlimboxOptions.resizeSpeed = 400;
	SlimboxOptions.overlayOpacity = 0.8;
	SlimboxOptions.loop = true;
	SlimboxOptions.allowSave = false;
	SlimboxOptions.slideshowAutoplay = false;
	SlimboxOptions.slideshowInterval = 5000;
	SlimboxOptions.slideshowAutoclose = true;
	SlimboxOptions.counterText = 'Obraz ###x### z ###y###';
	
	

