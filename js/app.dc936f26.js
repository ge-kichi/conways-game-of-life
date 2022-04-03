(function(){"use strict";var t={9649:function(t,e,n){var r=n(9242),s=n(3396);const i={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},a={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function o(t,e,n,r,o,l){const c=(0,s.up)("TheHeaderChild"),h=(0,s.up)("TheFooterChild");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("header",null,[(0,s.Wm)(c)]),(0,s._)("canvas",a,null,512),(0,s._)("footer",null,[(0,s.Wm)(h)])])}const l=t=>((0,s.dD)("data-v-33093123"),t=t(),(0,s.Cn)(),t),c={class:"the-header-child el-center"},h={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},u=l((()=>(0,s._)("h1",{class:"the-header-child__brand"},"CGOL",-1))),d={class:"the-header-child__statuses el-cluster"};function p(t,e,n,r,i,a){const o=(0,s.up)("BaseStatus"),l=(0,s.up)("BaseSelect");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",h,[u,(0,s._)("div",d,[(0,s.Wm)(o,{title:"GEN",content:t.genContent},null,8,["content"]),(0,s.Wm)(l,{title:"PATTERN",options:t.patternOptions,modelValue:t.patternSelected,"onUpdate:modelValue":e[0]||(e[0]=e=>t.patternSelected=e)},null,8,["options","modelValue"])])])])}var g=n(7139);function f(t,e,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,g.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"app-util-highlight":t.highlight,"app-util-clickable":t.isClickable}])},[(0,s._)("div",{class:"el-center el-center--gutters:ms-1",onClick:e[0]||(e[0]=e=>t.$emit("onclick"))},[(0,s._)("div",null,(0,g.zw)(t.title),1),(0,s._)("div",null,(0,g.zw)(t.content),1)])],2)}var _=n(4870),v=(0,s.aZ)({name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup(t,e){return{isClickable:(0,_.iH)(e.attrs.onclick)}}}),m=n(89);const w=(0,m.Z)(v,[["render",f],["__scopeId","data-v-25a75edd"]]);var b=w;const k={class:"base-select"},y={class:"nes-select is-dark"},S=["value","selected"];function C(t,e,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",y,[(0,s._)("select",{onChange:e[0]||(e[0]=e=>t.$emit("update:modelValue",e.target.value))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.options,((e,n)=>((0,s.wg)(),(0,s.iD)("option",{value:e,key:n,selected:e===t.modelValue},(0,g.zw)(e),9,S)))),128))],32)])])}var Z=(0,s.aZ)({name:"BaseSelect",emits:["update:modelValue"],props:{title:{type:String,required:!0},options:{type:Array,required:!0},modelValue:{type:String,required:!0}}});const O=(0,m.Z)(Z,[["render",C],["__scopeId","data-v-c7fe9f38"]]);var T=O,I=n(65);const P=Symbol(),B={Pattern:"Pattern",Gen:"Gen"},G={UpdatePattern:"UpdatePattern",UpdateGen:"UpdateGen"},U=(0,I.MT)({state:{pattern:"random",gen:0},getters:{[B.Pattern](t){return t.pattern},[B.Gen](t){return t.gen.toString()}},mutations:{[G.UpdatePattern](t,e){t.pattern=e},[G.UpdateGen](t,e){t.gen=e}},actions:{},modules:{}});var q=n(2482);n(8675),n(3462);class x{constructor(t,e){(0,q.Z)(this,"_state",void 0),(0,q.Z)(this,"_height",void 0),(0,q.Z)(this,"_width",void 0),(0,q.Z)(this,"_gen",void 0),this._state=t,this._height=t.length,this._width=t[0].length,this._gen=e}north(t){return t>0?t-1:this._height-1}sorth(t){return(t+1)%this._height}west(t){return t>0?t-1:this._width-1}east(t){return(t+1)%this._width}generate(){const t=[];for(let e=0;e<this._height;e++){const n=new Int8Array(this._width);for(let t=0;t<this._width;t++){const r=this._state[this.north(e)][this.west(t)],s=this._state[this.north(e)][t],i=this._state[this.north(e)][this.east(t)],a=this._state[e][this.west(t)],o=this._state[e][t],l=this._state[e][this.east(t)],c=this._state[this.sorth(e)][this.west(t)],h=this._state[this.sorth(e)][t],u=this._state[this.sorth(e)][this.east(t)],d=r+s+i+a+l+c+h+u;n[t]=0===o&&3===d?1:1!==o||2!==d&&3!==d?0:1}t[e]=n}return this._state=t,this._gen++,new x(this._state,this._gen)}get state(){return this._state}get gen(){return this._gen}}const D=(t,e,n)=>{const r=[];for(let s=0;s<n;s++)r.push(new Int8Array(e));switch(t){case"random":for(let t=0;t<r.length;t++){const e=r[t];for(let t=0;t<e.length;t++)e[t]=Math.floor(2*Math.random())}break}return new x(r,1)},H=16,j=.95,A=H*j,V="#00933B",{Pattern:F}=B,{UpdateGen:L}=G;let M,R,W,z,E,N,$,K;const Y=()=>{const{commit:t,getters:e}=(0,I.oR)(P),n=(0,_.iH)();return(0,s.bv)((()=>{const r=n.value;M=r.getContext("2d");const s=()=>M.clearRect(0,0,R,W),i=()=>{clearInterval(K),s();const t=r.clientWidth,e=r.clientHeight;z=Math.floor(t/H),E=Math.floor(e/H)-1,R=z*H,W=E*H,r.setAttribute("width",R.toString()),r.setAttribute("height",W.toString())},a=t=>{for(let e=0;e<t.length;e++){const n=t[e],r=e*H;for(let t=0;t<n.length;t++){const e=t*H;1===n[t]?M.fillRect(e,r,A,A):M.clearRect(e,r,A,A)}}},o=()=>{s(),N=D(e[F],z,E),M.fillStyle=V,a(N.state),K=setInterval((()=>{N=N.generate(),a(N.state),t(L,N.gen)}))};i(),window.addEventListener("resize",(()=>{clearTimeout($),$=setTimeout(i,1e3)})),r.addEventListener("click",o)})),n};var J=Y;const{Gen:Q,Pattern:X}=B,{UpdatePattern:tt}=G,et=()=>{const{commit:t,getters:e}=(0,I.oR)(P),n=(0,s.Fl)((()=>e[Q])),r=(0,_.qj)(["random"]),i=(0,s.Fl)({get:()=>e[X],set:e=>t(tt,e)});return{genContent:n,patternOptions:r,patternSelected:i}};var nt=et,rt=(0,s.aZ)({name:"TheHeaderChild",components:{BaseStatus:b,BaseSelect:T},setup(){return nt()}});const st=(0,m.Z)(rt,[["render",p],["__scopeId","data-v-33093123"]]);var it=st;const at={class:"the-footer-child el-center"},ot={class:"the-footer-child__container"},lt=(0,s.Uk)(" / © 2022 l1ck0h");function ct(t,e,n,r,i,a){const o=(0,s.up)("BaseLink");return(0,s.wg)(),(0,s.iD)("div",at,[(0,s._)("small",ot,[(0,s.Wm)(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),lt])])}const ht=["href"];function ut(t,e,n,r,i,a){return(0,s.wg)(),(0,s.iD)("a",{class:"base-link",href:t.url,target:"_blank",rel:"noopener noreferrer"},(0,g.zw)(t.label),9,ht)}var dt=(0,s.aZ)({name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}});const pt=(0,m.Z)(dt,[["render",ut],["__scopeId","data-v-27d6b6ab"]]);var gt=pt,ft=(0,s.aZ)({name:"TheFooterChild",components:{BaseLink:gt}});const _t=(0,m.Z)(ft,[["render",ct],["__scopeId","data-v-3f4517d6"]]);var vt=_t,mt=(0,s.aZ)({name:"App",components:{TheHeaderChild:it,TheFooterChild:vt},setup(){const t=J();return{sketchIn:t}}});const wt=(0,m.Z)(mt,[["render",o]]);var bt=wt;(0,r.ri)(bt).use(U,P).mount("#app")}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,s,i){if(!r){var a=1/0;for(h=0;h<t.length;h++){r=t[h][0],s=t[h][1],i=t[h][2];for(var o=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(o=!1,i<a&&(a=i));if(o){t.splice(h--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var h=t.length;h>0&&t[h-1][2]>i;h--)t[h]=t[h-1];t[h]=[r,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,a=r[0],o=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(l)var h=l(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(h)},r=self["webpackChunkconways_game_of_life"]=self["webpackChunkconways_game_of_life"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9649)}));r=n.O(r)})();
//# sourceMappingURL=app.dc936f26.js.map