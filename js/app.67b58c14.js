(function(){"use strict";var e={5797:function(e,t,n){var a=n(9242),r=n(3396);const s={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},i={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function o(e,t,n,a,o,l){const c=(0,r.up)("TheHeaderChild"),d=(0,r.up)("TheFooterChild");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("header",null,[(0,r.Wm)(c)]),(0,r._)("canvas",i,null,512),(0,r._)("footer",null,[(0,r.Wm)(d)])])}const l=e=>((0,r.dD)("data-v-3c5d04c6"),e=e(),(0,r.Cn)(),e),c={class:"the-header-child el-center"},d={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},u=l((()=>(0,r._)("h1",{class:"the-header-child__brand"},"CGOL",-1))),h={class:"the-header-child__statuses el-cluster"};function p(e,t,n,a,s,i){const o=(0,r.up)("BaseStatus"),l=(0,r.up)("BaseSelect");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",d,[u,(0,r._)("div",h,[(0,r.Wm)(o,{title:"GEN",content:e.genContent},null,8,["content"]),(0,r.Wm)(l,{title:"PATTERN",optGroup:e.patternOptGroup,modelValue:e.patternSelected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.patternSelected=t)},null,8,["optGroup","modelValue"])])])])}var g=n(7139);const f={class:"base-status el-box el-box--invert el-box--padding:0 nes-text"},_={class:"el-center el-center--gutters:ms-1"};function v(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",_,[(0,r._)("div",null,(0,g.zw)(e.title),1),(0,r._)("div",null,(0,g.zw)(e.content),1)])])}var m=(0,r.aZ)({name:"BaseStatus",props:{title:{type:String,required:!0},content:{type:String,required:!0}}}),b=n(89);const y=(0,b.Z)(m,[["render",v],["__scopeId","data-v-2b2cd55e"]]);var w=y;const S={class:"base-select"},k={class:"nes-select is-dark"},P=["label"],G=["value","selected"];function O(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",k,[(0,r._)("select",{onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.optGroup,((t,n,a)=>((0,r.wg)(),(0,r.iD)("optgroup",{key:a,label:n},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((t,n)=>((0,r.wg)(),(0,r.iD)("option",{value:t,key:n,selected:t===e.modelValue},(0,g.zw)(t),9,G)))),128))],8,P)))),128))],32)])])}var T=(0,r.aZ)({name:"BaseSelect",emits:["update:modelValue"],props:{title:{type:String,required:!0},optGroup:{type:Object,required:!0},modelValue:{type:String,required:!0}}});const U=(0,b.Z)(T,[["render",O],["__scopeId","data-v-5d2612e9"]]);var Z=U,C=n(4870),I=n(65);const j=Symbol(),z={Gen:"Gen",Pattern:"Pattern",PlayState:"PlayState"},D={Initialize:"Initialize",Ready:"Ready",SelectPattern:"SelectPattern",Stop:"Stop",TogglePlayPause:"TogglePlayPause",UpdateGen:"UpdateGen"},B=(0,I.MT)({state:{gen:0,pattern:"random",playState:"stopped"},getters:{[z.Gen](e){return e.gen.toString()},[z.Pattern](e){return e.pattern},[z.PlayState](e){return e.playState}},mutations:{UpdateGen(e,t){e.gen=t},UpdatePattern(e,t){e.pattern=t},UpdatePlayState(e,t){e.playState=t}},actions:{[D.Initialize]({commit:e}){e("UpdatePlayState","initialized")},[D.Ready]({commit:e}){e("UpdatePlayState","readied")},[D.Stop]({commit:e}){e("UpdatePlayState","stopped")},[D.SelectPattern]({commit:e},t){e("UpdatePattern",t),e("UpdatePlayState","stopped")},[D.TogglePlayPause]({commit:e,state:t}){e("UpdatePlayState","started"!==t.playState?"started":"paused")},[D.UpdateGen]({commit:e},t){e("UpdateGen",t)}},modules:{}});var F=n(2482),R=(n(8675),n(3462),n(6505));const q={block:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"bee-hive":[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]],load:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]],boat:[[0,0,0,0,0],[0,1,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]],tub:[[0,0,0,0,0],[0,0,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]]},x=Object.keys(q),H={blinker:[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],toad:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],beacon:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]],pulsar:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},A=Object.keys(H),L={grider:[[0,0,0,0],[0,0,1,0],[0,0,0,1],[0,1,1,1]],"grider-gun":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],random:void 0},V=Object.keys(L);class E{constructor(e,t){(0,F.Z)(this,"_state",void 0),(0,F.Z)(this,"_height",void 0),(0,F.Z)(this,"_width",void 0),(0,F.Z)(this,"_gen",void 0),this._state=e,this._height=e.length,this._width=e[0].length,this._gen=t}north(e){return e>0?e-1:this._height-1}sorth(e){return(e+1)%this._height}west(e){return e>0?e-1:this._width-1}east(e){return(e+1)%this._width}generate(){const e=[];for(let t=0;t<this._height;t++){const n=new Int8Array(this._width);for(let e=0;e<this._width;e++){const a=this._state[this.north(t)][this.west(e)],r=this._state[this.north(t)][e],s=this._state[this.north(t)][this.east(e)],i=this._state[t][this.west(e)],o=this._state[t][e],l=this._state[t][this.east(e)],c=this._state[this.sorth(t)][this.west(e)],d=this._state[this.sorth(t)][e],u=this._state[this.sorth(t)][this.east(e)],h=a+r+s+i+l+c+d+u;n[e]=0===o&&3===h?1:1!==o||2!==h&&3!==h?0:1}e[t]=n}return this._state=e,this._gen++,new E(this._state,this._gen)}get state(){return this._state}get gen(){return this._gen}}const M=(e,t,n)=>{const a=[],r=t=>{for(let n=0;n<e;n++)t.push(Math.floor(2*Math.random()))},s=(t,n)=>{for(let a=0;a<e;a++)n.push(t&&t[a]?1:0)};for(let i=0;i<t;i++){const e=[];n?s(n[i],e):r(e),a.push(new Int8Array(e))}return a},W=(0,R._Qy)(["still-lifes","oscillators","others"],[x,A,V]),Y=(e,t,n)=>{let a;switch(!0){case x.includes(n):a=q[n];break;case A.includes(n):a=H[n];break;case V.includes(n):a=L[n];break;default:a=void 0;break}return new E(M(e,t,a),1)},K=16,N=.9*K,Q=200,{Pattern:$,PlayState:J}=z,{Initialize:X,Ready:ee,TogglePlayPause:te,UpdateGen:ne}=D;let ae,re,se,ie,oe,le,ce,de;const ue=e=>{ae.fillStyle="#00933B";for(let t=0;t<e.length;t++){const n=e[t],a=t*K;for(let e=0;e<n.length;e++){const t=e*K;1===n[e]?ae.fillRect(t,a,N,N):ae.clearRect(t,a,N,N)}}},he=()=>{const{dispatch:e,getters:t}=(0,I.oR)(j),n=(0,C.iH)(),a=(0,r.Fl)((()=>t[J])),s=()=>e(te),i=t=>{const{clientWidth:n,clientHeight:a}=t;ie=Math.floor(n/K),oe=Math.floor(a/K),re=ie*K,se=oe*K,t.width=re,t.height=se,e(X)},o=e=>{clearTimeout(ce),ce=setTimeout((()=>i(e)),Q)},l=()=>{le=le.generate(),ue(le.state),e(ne,le.gen),de=requestAnimationFrame(l)};return(0,r.bv)((()=>{(0,r.YP)(a,(n=>{switch(n){case"initialized":c.removeEventListener("click",s),cancelAnimationFrame(de),ae.clearRect(0,0,re,se),le=Y(ie,oe,t[$]),ue(le.state),e(ne,le.gen),c.addEventListener("click",s),e(ee);break;case"paused":cancelAnimationFrame(de);break;case"started":l();break;case"stopped":i(c);break}}));const c=n.value;ae=c.getContext("2d"),window.addEventListener("resize",(()=>o(c))),o(c)})),{sketchIn:n}};var pe=he;const{Gen:ge,Pattern:fe}=z,{SelectPattern:_e}=D,ve=()=>{const{dispatch:e,getters:t}=(0,I.oR)(j);return{genContent:(0,r.Fl)((()=>t[ge])),patternOptGroup:(0,C.qj)(W),patternSelected:(0,r.Fl)({get:()=>t[fe],set:t=>e(_e,t)})}};var me=ve,be=(0,r.aZ)({name:"TheHeaderChild",components:{BaseStatus:w,BaseSelect:Z},setup(){return me()}});const ye=(0,b.Z)(be,[["render",p],["__scopeId","data-v-3c5d04c6"]]);var we=ye;const Se={class:"the-footer-child el-center"},ke={class:"the-footer-child__container"},Pe=(0,r.Uk)(" / © 2022 l1ck0h");function Ge(e,t,n,a,s,i){const o=(0,r.up)("BaseLink");return(0,r.wg)(),(0,r.iD)("div",Se,[(0,r._)("small",ke,[(0,r.Wm)(o,{url:"https://github.com/l1ck0h/conways-game-of-life",label:"GitHub"}),Pe])])}const Oe=["href"];function Te(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("a",{class:"base-link",href:e.url,target:"_blank",rel:"noopener noreferrer"},(0,g.zw)(e.label),9,Oe)}var Ue=(0,r.aZ)({name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}});const Ze=(0,b.Z)(Ue,[["render",Te],["__scopeId","data-v-27d6b6ab"]]);var Ce=Ze,Ie=(0,r.aZ)({name:"TheFooterChild",components:{BaseLink:Ce}});const je=(0,b.Z)(Ie,[["render",Ge],["__scopeId","data-v-0c6a40e2"]]);var ze=je,De=(0,r.aZ)({name:"App",components:{TheHeaderChild:we,TheFooterChild:ze},setup(){return pe()}});const Be=(0,b.Z)(De,[["render",o]]);var Fe=Be;(0,a.ri)(Fe).use(B,j).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],s=e[d][2];for(var o=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,i=a[0],o=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(l)var d=l(n)}for(t&&t(a);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunkconways_game_of_life"]=self["webpackChunkconways_game_of_life"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5797)}));a=n.O(a)})();
//# sourceMappingURL=app.67b58c14.js.map