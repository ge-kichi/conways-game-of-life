(function(){"use strict";var e={6854:function(e,t,n){var r=n(9242),a=n(3396);const s={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},i={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function o(e,t,n,r,o,l){const c=(0,a.up)("TheHeaderChild"),d=(0,a.up)("TheFooterChild");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("header",null,[(0,a.Wm)(c)]),(0,a._)("canvas",i,null,512),(0,a._)("footer",null,[(0,a.Wm)(d)])])}const l=e=>((0,a.dD)("data-v-3c5d04c6"),e=e(),(0,a.Cn)(),e),c={class:"the-header-child el-center"},d={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},u=l((()=>(0,a._)("h1",{class:"the-header-child__brand"},"CGOL",-1))),h={class:"the-header-child__statuses el-cluster"};function p(e,t,n,r,s,i){const o=(0,a.up)("BaseStatus"),l=(0,a.up)("BaseSelect");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[u,(0,a._)("div",h,[(0,a.Wm)(o,{title:"GEN",content:e.genContent},null,8,["content"]),(0,a.Wm)(l,{title:"PATTERN",optGroup:e.patternOptGroup,modelValue:e.patternSelected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.patternSelected=t)},null,8,["optGroup","modelValue"])])])])}var g=n(7139);const f={class:"base-status el-box el-box--invert el-box--padding:0 nes-text"},v={class:"el-center el-center--gutters:ms-1"};function _(e,t,n,r,s,i){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",v,[(0,a._)("div",null,(0,g.zw)(e.title),1),(0,a._)("div",null,(0,g.zw)(e.content),1)])])}var m=(0,a.aZ)({name:"BaseStatus",props:{title:{type:String,required:!0},content:{type:String,required:!0}}}),y=n(89);const b=(0,y.Z)(m,[["render",_],["__scopeId","data-v-2b2cd55e"]]);var w=b;const S={class:"base-select"},k={class:"nes-select is-dark"},P=["label"],O=["value","selected"];function G(e,t,n,r,s,i){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",k,[(0,a._)("select",{onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.optGroup,((t,n,r)=>((0,a.wg)(),(0,a.iD)("optgroup",{key:r,label:n},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((t,n)=>((0,a.wg)(),(0,a.iD)("option",{value:t,key:n,selected:t===e.modelValue},(0,g.zw)(t),9,O)))),128))],8,P)))),128))],32)])])}var I=(0,a.aZ)({name:"BaseSelect",emits:["update:modelValue"],props:{title:{type:String,required:!0},optGroup:{type:Object,required:!0},modelValue:{type:String,required:!0}}});const T=(0,y.Z)(I,[["render",G],["__scopeId","data-v-5d2612e9"]]);var U=T,Z=n(4870),j=n(65);const C=Symbol(),z={Gen:"Gen",Pattern:"Pattern",PlayState:"PlayState"},D={Initialize:"Initialize",Ready:"Ready",SelectPattern:"SelectPattern",Stop:"Stop",TogglePlayPause:"TogglePlayPause",UpdateGen:"UpdateGen"},x=(0,j.MT)({state:{gen:0,pattern:"random",playState:"stopped"},getters:{[z.Gen](e){return e.gen.toString()},[z.Pattern](e){return e.pattern},[z.PlayState](e){return e.playState}},mutations:{UpdateGen(e,t){e.gen=t},UpdatePattern(e,t){e.pattern=t},UpdatePlayState(e,t){e.playState=t}},actions:{[D.Initialize]({commit:e}){e("UpdatePlayState","initialized")},[D.Ready]({commit:e}){e("UpdatePlayState","readied")},[D.Stop]({commit:e}){e("UpdatePlayState","stopped")},[D.SelectPattern]({commit:e},t){e("UpdatePattern",t),e("UpdatePlayState","stopped")},[D.TogglePlayPause]({commit:e,state:t}){e("UpdatePlayState","started"!==t.playState?"started":"paused")},[D.UpdateGen]({commit:e},t){e("UpdateGen",t)}},modules:{}});var B=n(2482),R=(n(8675),n(3462),n(6505));const H={"grider-gun":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},q=Object.keys(H).sort(),F={"die-hard":[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,1,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0]],acorn:[[0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0]]},L=Object.keys(F).sort(),M={blinker:[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],toad:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],beacon:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]],clock:[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,0,1,0,1,0],[0,1,0,1,0,0],[0,0,0,1,0,0],[0,0,0,0,0,0]],octagon:[[0,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,0],[0,1,0,1,1,0,1,0],[0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,1,0,1,1,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0]],galaxy:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,0,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,0,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],pentadecathlon:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0],[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],pulsar:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},V=Object.keys(M).sort(),E={grider:[[0,0,0,0],[0,0,1,0],[0,0,0,1],[0,1,1,1]],lightweight:[[1,0,0,1,0],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1]],middleweight:[[0,0,1,0,0,0],[1,0,0,0,1,0],[0,0,0,0,0,1],[1,0,0,0,0,1],[0,1,1,1,1,1]],heavyweight:[[0,0,1,1,0,0,0],[1,0,0,0,0,1,0],[0,0,0,0,0,0,1],[1,0,0,0,0,0,1],[0,1,1,1,1,1,1]]},W=Object.keys(E).sort(),A={block:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"bee-hive":[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]],load:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]],boat:[[0,0,0,0,0],[0,1,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]],tub:[[0,0,0,0,0],[0,0,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]],ship:[[0,0,0,0,0],[0,0,1,1,0],[0,1,0,1,0],[0,1,1,0,0],[0,0,0,0,0]],pond:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]]},Y=Object.keys(A).sort(),K=(0,R._Qy)(["still-lifes","oscillators","space-ships","infinite-growthes","methuselahs","others"],[Y,V,W,q,L,["random"]]),N=e=>{const t=t=>t.includes(e);switch(!0){case t(Y):return A[e];case t(V):return M[e];case t(W):return E[e];case t(q):return H[e];case t(L):return F[e];default:return}};class Q{constructor(e,t){(0,B.Z)(this,"_state",void 0),(0,B.Z)(this,"_height",void 0),(0,B.Z)(this,"_width",void 0),(0,B.Z)(this,"_gen",void 0),this._state=e,this._height=e.length,this._width=e[0].length,this._gen=t}north(e){return e>0?e-1:this._height-1}sorth(e){return(e+1)%this._height}west(e){return e>0?e-1:this._width-1}east(e){return(e+1)%this._width}generate(){const e=[];for(let t=0;t<this._height;t++){const n=new Int8Array(this._width);for(let e=0;e<this._width;e++){const r=this._state[this.north(t)][this.west(e)],a=this._state[this.north(t)][e],s=this._state[this.north(t)][this.east(e)],i=this._state[t][this.west(e)],o=this._state[t][e],l=this._state[t][this.east(e)],c=this._state[this.sorth(t)][this.west(e)],d=this._state[this.sorth(t)][e],u=this._state[this.sorth(t)][this.east(e)],h=r+a+s+i+l+c+d+u;n[e]=0===o&&3===h?1:1!==o||2!==h&&3!==h?0:1}e[t]=n}return this._state=e,this._gen++,new Q(this._state,this._gen)}get state(){return this._state}get gen(){return this._gen}}const $=(e,t,n)=>{const r=[],a=t=>{for(let n=0;n<e;n++)t.push(Math.floor(2*Math.random()))},s=(t,n)=>{for(let r=0;r<e;r++)n.push(t&&t[r]?1:0)};for(let i=0;i<t;i++){const e=[];n?s(n[i],e):a(e),r.push(new Int8Array(e))}return r},J=(e,t,n)=>new Q($(e,t,N(n)),1),X=16,ee=Math.floor(.9*X),te=500,ne=12,{Pattern:re,PlayState:ae}=z,{Initialize:se,Ready:ie,TogglePlayPause:oe,UpdateGen:le}=D;let ce,de,ue,he,pe,ge,fe,ve;const _e=e=>e*X+(X-ee)/2,me=e=>{ce.fillStyle="#00933B";for(let t=0;t<e.length;t++){const n=e[t],r=_e(t);for(let e=0;e<n.length;e++){const t=_e(e);1===n[e]?ce.fillRect(t,r,ee,ee):ce.clearRect(t,r,ee,ee)}}},ye=()=>{const{dispatch:e,getters:t}=(0,j.oR)(C),n=(0,Z.iH)(),r=(0,a.Fl)((()=>t[ae])),s=()=>e(oe),i=t=>{const{clientWidth:n,clientHeight:r}=t;he=Math.floor(n/X),pe=Math.floor(r/X),de=he*X,ue=pe*X,t.width=de,t.height=ue,e(se)},o=e=>{clearTimeout(fe),fe=setTimeout((()=>i(e)),te)};return(0,a.bv)((()=>{(0,a.YP)(r,(n=>{switch(n){case"initialized":l.removeEventListener("click",s),clearInterval(ve),ce.clearRect(0,0,de,ue),ge=J(he,pe,t[re]),me(ge.state),e(le,ge.gen),l.addEventListener("click",s),e(ie);break;case"paused":clearInterval(ve);break;case"started":ve=setInterval((()=>{ge=ge.generate(),me(ge.state),e(le,ge.gen)}),1e3/ne);break;case"stopped":i(l);break}}));const l=n.value;ce=l.getContext("2d"),window.addEventListener("resize",(()=>o(l))),o(l)})),{sketchIn:n}};var be=ye;const{Gen:we,Pattern:Se}=z,{SelectPattern:ke}=D,Pe=()=>{const{dispatch:e,getters:t}=(0,j.oR)(C);return{genContent:(0,a.Fl)((()=>t[we])),patternOptGroup:(0,Z.qj)(K),patternSelected:(0,a.Fl)({get:()=>t[Se],set:t=>e(ke,t)})}};var Oe=Pe,Ge=(0,a.aZ)({name:"TheHeaderChild",components:{BaseStatus:w,BaseSelect:U},setup(){return Oe()}});const Ie=(0,y.Z)(Ge,[["render",p],["__scopeId","data-v-3c5d04c6"]]);var Te=Ie;const Ue={class:"the-footer-child el-center"},Ze={class:"the-footer-child__container"},je=(0,a.Uk)(" / © 2022 l1ck0h");function Ce(e,t,n,r,s,i){const o=(0,a.up)("BaseLink");return(0,a.wg)(),(0,a.iD)("div",Ue,[(0,a._)("small",Ze,[(0,a.Wm)(o,{url:"https://github.com/l1ck0h/conways-game-of-life",label:"GitHub"}),je])])}const ze=["href"];function De(e,t,n,r,s,i){return(0,a.wg)(),(0,a.iD)("a",{class:"base-link",href:e.url,target:"_blank",rel:"noopener noreferrer"},(0,g.zw)(e.label),9,ze)}var xe=(0,a.aZ)({name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}});const Be=(0,y.Z)(xe,[["render",De],["__scopeId","data-v-27d6b6ab"]]);var Re=Be,He=(0,a.aZ)({name:"TheFooterChild",components:{BaseLink:Re}});const qe=(0,y.Z)(He,[["render",Ce],["__scopeId","data-v-0c6a40e2"]]);var Fe=qe,Le=(0,a.aZ)({name:"App",components:{TheHeaderChild:Te,TheFooterChild:Fe},setup(){return be()}});const Me=(0,y.Z)(Le,[["render",o]]);var Ve=Me;(0,r.ri)(Ve).use(x,C).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self["webpackChunkconways_game_of_life"]=self["webpackChunkconways_game_of_life"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6854)}));r=n.O(r)})();
//# sourceMappingURL=app.bd7642f1.js.map