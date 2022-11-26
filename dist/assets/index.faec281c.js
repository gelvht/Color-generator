(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();var O={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const m="a-f\\d",A=`#?[${m}]{3}[${m}]?`,j=`#?[${m}]{6}([${m}]{2})?`,U=new RegExp(`[^#${m}]`,"gi"),z=new RegExp(`^${A}$|^${j}$`,"i");var W=(r,e={})=>{if(typeof r!="string"||U.test(r)||!z.test(r))throw new TypeError("Expected a valid hex string");r=r.replace(/^#/,"");let n=1;r.length===8&&(n=Number.parseInt(r.slice(6,8),16)/255,r=r.slice(0,6)),r.length===4&&(n=Number.parseInt(r.slice(3,4).repeat(2),16)/255,r=r.slice(0,3)),r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const a=Number.parseInt(r,16),t=a>>16,s=a>>8&255,l=a&255,o=typeof e.alpha=="number"?e.alpha:n;if(e.format==="array")return[t,s,l,o];if(e.format==="css"){const i=o===1?"":` / ${Number((o*100).toFixed(2))}%`;return`rgb(${t} ${s} ${l}${i})`}return{red:t,green:s,blue:l,alpha:o}};const V=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var X=new RegExp(V,"i");const F="-?\\d*(?:\\.\\d+)",g=`(${F}?)`,c=`(${F}?%)`,d=`(${F}?%?)`,K=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${c}\\s*,
    \\s*${c}\\s*
    (?:,\\s*${d}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var D=new RegExp(K);const J=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${c}
    \\s+${c}
    \\s*(?:\\s*\\/\\s*${d}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var Q=new RegExp(J);const Y=`^
  rgba?\\(
    \\s*${g}\\s*,
    \\s*${g}\\s*,
    \\s*${g}\\s*
    (?:,\\s*${d}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var Z=new RegExp(Y);const ee=`^
  rgba?\\(
    \\s*${c}\\s*,
    \\s*${c}\\s*,
    \\s*${c}\\s*
    (?:,\\s*${d}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var re=new RegExp(ee);const te=`^
  rgba?\\(
    \\s*${g}
    \\s+${g}
    \\s+${g}
    \\s*(?:\\s*\\/\\s*${d}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var ne=new RegExp(te);const ae=`^
  rgba?\\(
    \\s*${c}
    \\s+${c}
    \\s+${c}
    \\s*(?:\\s*\\/\\s*${d}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var se=new RegExp(ae);const le=/^transparent$/;var oe=new RegExp(le,"i");const S=(r,e,n)=>Math.min(Math.max(e,r),n),ie=r=>{let e=r;return typeof e!="number"&&(e=e.endsWith("%")?parseFloat(e)*255/100:parseFloat(e)),S(Math.round(e),0,255)},q=r=>S(parseFloat(r),0,100);function _(r){let e=r;return typeof e!="number"&&(e=e.endsWith("%")?parseFloat(e)/100:parseFloat(e)),S(e,0,1)}function ue(r){const[e,n,a,t]=W(r,{format:"array"});return R([null,e,n,a,t])}function ce([,r,e,n,a=1]){let t=r;return t.endsWith("turn")?t=parseFloat(t)*360/1:t.endsWith("rad")?t=Math.round(parseFloat(t)*180/Math.PI):t=parseFloat(t),{type:"hsl",values:[t,q(e),q(n)],alpha:_(a===null?1:a)}}function R([,r,e,n,a=1]){return{type:"rgb",values:[r,e,n].map(ie),alpha:_(a===null?1:a)}}/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const pe=r=>{if(typeof r!="string")return null;const e=X.exec(r);if(e)return ue(e[0]);const n=Q.exec(r)||D.exec(r);if(n)return ce(n);const a=ne.exec(r)||se.exec(r)||Z.exec(r)||re.exec(r);if(a)return R(a);if(oe.exec(r))return R([null,0,0,0,0]);const t=O[r.toLowerCase()];return t?R([null,t[0],t[1],t[2],1]):null};function ge(r){var e=r[0]/360,n=r[1]/100,a=r[2]/100,t,s,l,o,i;if(n==0)return i=a*255,[i,i,i];a<.5?s=a*(1+n):s=a+n-a*n,t=2*a-s,o=[0,0,0];for(var u=0;u<3;u++)l=e+1/3*-(u-1),l<0&&l++,l>1&&l--,6*l<1?i=t+(s-t)*6*l:2*l<1?i=s:3*l<2?i=t+(s-t)*(2/3-l)*6:i=t,o[u]=i*255;return o}var T=ge;function he(r,e,n){return Math.min(Math.max(r,e),n)}var de=he,$e=de;function w(r){var e=Math.round($e(r,0,255)),n=e.toString(16);return n.length==1?"0"+n:n}function me(r){var e=r.length===4?w(r[3]*255):"";return"#"+w(r[0])+w(r[1])+w(r[2])+e}var M=me;function fe(r){var e=r[0]/255,n=r[1]/255,a=r[2]/255,t=Math.min(e,n,a),s=Math.max(e,n,a),l=s-t,o,i,u;return s==t?o=0:e==s?o=(n-a)/l:n==s?o=2+(a-e)/l:a==s&&(o=4+(e-n)/l),o=Math.min(o*60,360),o<0&&(o+=360),u=(t+s)/2,s==t?i=0:u<=.5?i=l/(s+t):i=l/(2-s-t),[o,i*100,u*100]}var be=fe;/**
 * mix-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */function C(r){const e=pe(r);return e===null?null:(e.type==="hsl"&&(e.values=T(e.values)),e)}function P(r,e,n=50){const a=C(r),t=C(e);if(!a||!t)return null;const s=Math.min(Math.max(0,n),100)/100,l=s*2-1,o=a.alpha-t.alpha,i=((l*o===-1?l:(l+o)/(1+l*o))+1)/2,u=1-i,[b,y,v]=a.values.map((Te,L)=>Math.round(a.values[L]*i+t.values[L]*u)),E=parseFloat((a.alpha*s+t.alpha*(1-s)).toFixed(8));return{hex:M([b,y,v]),hexa:M([b,y,v,E]),rgba:[b,y,v,E],hsla:[...be([b,y,v]).map(Math.round),E]}}const ye=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var ve=new RegExp(ye,"i");const H="-?\\d*(?:\\.\\d+)",h=`(${H}?)`,p=`(${H}?%)`,$=`(${H}?%?)`,we=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${p}\\s*,
    \\s*${p}\\s*
    (?:,\\s*${$}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var xe=new RegExp(we);const Re=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${p}
    \\s+${p}
    \\s*(?:\\s*\\/\\s*${$}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var ke=new RegExp(Re);const Ee=`^
  rgba?\\(
    \\s*${h}\\s*,
    \\s*${h}\\s*,
    \\s*${h}\\s*
    (?:,\\s*${$}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var Me=new RegExp(Ee);const Fe=`^
  rgba?\\(
    \\s*${p}\\s*,
    \\s*${p}\\s*,
    \\s*${p}\\s*
    (?:,\\s*${$}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var Se=new RegExp(Fe);const He=`^
  rgba?\\(
    \\s*${h}
    \\s+${h}
    \\s+${h}
    \\s*(?:\\s*\\/\\s*${$}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var Ne=new RegExp(He);const Le=`^
  rgba?\\(
    \\s*${p}
    \\s+${p}
    \\s+${p}
    \\s*(?:\\s*\\/\\s*${$}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var qe=new RegExp(Le);const Ce=/^transparent$/;var Pe=new RegExp(Ce,"i");const N=(r,e,n)=>Math.min(Math.max(e,r),n),Be=r=>{let e=r;return typeof e!="number"&&(e=e.endsWith("%")?parseFloat(e)*255/100:parseFloat(e)),N(Math.round(e),0,255)},B=r=>N(parseFloat(r),0,100);function G(r){let e=r;return typeof e!="number"&&(e=e.endsWith("%")?parseFloat(e)/100:parseFloat(e)),N(e,0,1)}function Ie(r){const[e,n,a,t]=W(r,{format:"array"});return k([null,e,n,a,t])}function Oe([,r,e,n,a=1]){let t=r;return t.endsWith("turn")?t=parseFloat(t)*360/1:t.endsWith("rad")?t=Math.round(parseFloat(t)*180/Math.PI):t=parseFloat(t),{type:"hsl",values:[t,B(e),B(n)],alpha:G(a===null?1:a)}}function k([,r,e,n,a=1]){return{type:"rgb",values:[r,e,n].map(Be),alpha:G(a===null?1:a)}}/**
 * parse-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const I=r=>{if(typeof r!="string")return null;const e=ve.exec(r);if(e)return Ie(e[0]);const n=ke.exec(r)||xe.exec(r);if(n)return Oe(n);const a=Ne.exec(r)||qe.exec(r)||Me.exec(r)||Se.exec(r);if(a)return k(a);if(Pe.exec(r))return k([null,0,0,0,0]);const t=O[r.toLowerCase()];return t?k([null,t[0],t[1],t[2],1]):null};/**
 * values.js - Get the tints and shades of a color
 * @version v2.1.1
 * @link http://noeldelgado.github.io/values.js/
 * @license MIT
 */const x=(r,e)=>r===null||isNaN(r)||typeof r=="string"?e:r;class f{constructor(e="#000",n="base",a=0){[this.rgb,this.alpha,this.type,this.weight]=[[0,0,0],1,n,a];const t=e===null?"#000":e;if(typeof t!="string")throw new TypeError(`Input should be a string: ${t}`);const s=I(t);if(!s)throw new Error(`Unable to parse color from string: ${t}`);return this[`_setFrom${s.type.toUpperCase()}`]([...s.values,s.alpha])}get hex(){return this.hexString().replace(/^#/,"")}setColor(e){const n=I(e);return n?this[`_setFrom${n.type.toUpperCase()}`]([...n.values,n.alpha]):null}tint(e,n=x(e,50)){return new f(`rgb(${P("#fff",this.rgbString(),n).rgba})`,"tint",n)}shade(e,n=x(e,50)){return new f(`rgb(${P("#000",this.rgbString(),n).rgba})`,"shade",n)}tints(e,n=x(e,10)){return Array.from({length:100/n},(a,t)=>this.tint((t+1)*n))}shades(e,n=x(e,10)){return Array.from({length:100/n},(a,t)=>this.shade((t+1)*n))}all(e=10){return[...this.tints(e).reverse(),Object.assign(this),...this.shades(e)]}hexString(){return M(this.alpha>=1?this.rgb:[...this.rgb,this.alpha])}rgbString(){const e=(this.alpha>=1?this.rgb:[...this.rgb,this.alpha]).join(", ");return`${this.alpha>=1?"rgb":"rgba"}(${e})`}getBrightness(){return Math.round(this.rgb.reduce((e,n)=>e+n)/(255*3)*100)}_setFromRGB([e,n,a,t]){return[this.rgb,this.alpha]=[[e,n,a],t],this}_setFromHSL([e,n,a,t]){return[this.rgb,this.alpha]=[T([e,n,a]).map(Math.round),t],this}}f.VERSION="v2.1.1";const We=f;function _e(r,e,n){const a=()=>{const t=new We(e.value).all(10);n.innerHTML="",t.map(s=>{const l=`
      <div class="col-lg-1 col-sm-4  pt-3 px-4 palette" style="background-color:#${s.hex}">
        <p class="${s.type} mb-0 ms-2">${s.weight}%</p>
        <p class="${s.type} ms-2">#${s.hex}</p>
      </div>`;return n.innerHTML+=l})};a(),r.addEventListener("click",a)}document.querySelector("#app").innerHTML=`
  <div>
    <header class="p-4 d-flex align-items-center">
      <label for="colorHex" class="font-weight-bold me-4 inputLabel">Color Generator</label>
      <input type="text" placeholder="#333" id="colorHex" value="#333" class="ps-2 border-0 h-75 rounded">
      <button type="submit" id="submitBtn"  class="btn btn-primary h-75">Submit</button>
    </header>
    <section id="palette" class="row seven-cols"></section>
  </div>
`;_e(document.querySelector("#submitBtn"),document.querySelector("#colorHex"),document.querySelector("#palette"));
