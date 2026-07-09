import{$ as e,$n as t,$t as n,A as r,An as i,At as a,B as o,Bn as s,Bt as c,C as ee,Cn as te,Cr as ne,Ct as re,D as ie,Dn as l,Dt as ae,E as oe,En as u,Er as se,Et as d,F as f,Fn as ce,Ft as le,G as ue,Gn as de,Gt as fe,H as pe,Hn as me,Ht as he,I as p,In as ge,It as _e,J as ve,Jn as ye,Jt as be,K as xe,Kn as Se,Kt as Ce,L as we,Ln as Te,Lt as Ee,M as m,Mn as De,Mt as Oe,N as ke,Nn as Ae,Nt as je,O as Me,On as Ne,Ot as Pe,P as Fe,Pn as Ie,Pt as Le,Q as h,Qn as Re,Qt as ze,R as g,Rn as Be,Rt as Ve,S as _,Sn as He,Sr as Ue,St as We,T as Ge,Tn as Ke,Tr as qe,Tt as v,U as y,Un as Je,Ut as Ye,V as Xe,Vn as Ze,Vt as Qe,W as $e,Wn as et,Wt as tt,X as nt,Xn as b,Xt as rt,Y as it,Yn as x,Yt as S,Z as at,Zn as C,Zt as ot,_ as st,_n as w,_r as ct,_t as lt,a as ut,an as dt,ar as ft,at as pt,b as mt,bn as ht,br as gt,bt as T,c as _t,cn as vt,cr as yt,ct as bt,d as xt,dn as St,dr as Ct,dt as wt,en as Tt,er as Et,et as Dt,f as Ot,fn as kt,fr as At,ft as jt,g as Mt,gn as Nt,gr as Pt,gt as Ft,h as It,hn as Lt,hr as Rt,ht as zt,i as Bt,in as E,ir as Vt,it as Ht,j as Ut,jn as D,jt as Wt,k as Gt,kn as Kt,kt as O,l as qt,ln as Jt,lt as k,m as Yt,mn as Xt,mr as A,mt as j,n as Zt,nn as Qt,nr as $t,nt as en,o as tn,on as M,or as nn,ot as N,p as rn,pn as an,pr as on,pt as P,q as sn,qn as cn,qt as F,r as ln,rn as un,rr as dn,rt as fn,s as pn,sn as mn,sr as hn,st as gn,t as _n,tn as I,tr as vn,tt as yn,u as bn,un as xn,ur as Sn,ut as Cn,v as wn,vn as Tn,vr as L,vt as En,w as Dn,wn as On,wt as R,x as z,xn as kn,xr as B,xt as An,y as V,yn as jn,yr as Mn,yt as H,z as Nn,zn as Pn,zt as Fn}from"./runtime-Pmm6_YbK.js";var U=se(qe(),1),In=ne(),W=Ue(),Ln=class extends U.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?(0,W.jsxs)(`div`,{className:`gallery-preview-error`,role:`alert`,children:[(0,W.jsx)(`strong`,{children:`This preview failed to render.`}),(0,W.jsx)(`span`,{children:this.state.error.message})]}):this.props.children}};function Rn({children:e,title:t=`Master Controls`,variant:n=`panel`}){return n===`surface`?(0,W.jsx)(`div`,{className:`gallery-preview-surface`,children:e}):(0,W.jsx)(`div`,{className:`gallery-preview-stage`,children:n===`panel`?(0,W.jsx)(`div`,{className:`gallery-preview-panel`,children:(0,W.jsx)(pn,{title:t,children:e})}):(0,W.jsx)(`div`,{className:`gallery-preview-bare`,children:e})})}function zn({baseWidth:e=1024,baseHeight:t=640,children:n}){let r=U.useRef(null),[i,a]=U.useState(1);return U.useLayoutEffect(()=>{let t=r.current;if(!t)return;let n=()=>{let n=t.clientWidth;a(Math.min(1,n/e))};n();let i=new ResizeObserver(n);return i.observe(t),()=>i.disconnect()},[e]),(0,W.jsx)(`div`,{className:`gallery-scale-outer`,ref:r,style:{height:t*i},children:(0,W.jsx)(`div`,{className:`gallery-scale-inner`,style:{height:t,transform:`scale(${i})`,width:e},children:n})})}function Bn(){let[e,t]=U.useState(50);return(0,W.jsx)(V,{max:100,min:0,name:`Amount`,onValueChange:e=>t(e),step:1,unit:`%`,value:e})}function Vn(){let[e,t]=U.useState(70);return(0,W.jsx)(V,{markerCount:11,max:100,min:0,name:`Threshold`,onValueChange:e=>t(e),step:10,unit:`%`,value:e,variant:`discrete`})}function Hn(){let[e,t]=U.useState([25,70]);return(0,W.jsx)(xt,{max:100,min:0,name:`Input range`,onValueChange:e=>t(e),step:.1,unit:`%`,value:e})}function Un(){let[e,t]=U.useState(`#C1FF00`),[n,r]=U.useState(`#FF6A00`);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(z,{hex:e,name:`Fill`,onValueChange:e=>t(e.hex)}),(0,W.jsx)(z,{hex:n,name:`Stroke`,onValueChange:e=>r(e.hex)})]})}function Wn(){let[e,t]=U.useState({hex:`#C1FF00`,opacity:82}),[n,r]=U.useState({hex:`#FF6A00`,opacity:48});return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(_,{hex:e.hex,name:`Fill`,onValueChange:e=>t(e),opacity:e.opacity}),(0,W.jsx)(_,{hex:n.hex,name:`Stroke`,onValueChange:e=>r(e),opacity:n.opacity})]})}function Gn(){let[e,t]=U.useState({angle:90,gradientType:`linear`,stops:[{color:`#0A0A0A`,position:`0%`},{color:`#8EC5FF`,position:`61%`},{color:`#FAFAFA`,position:`100%`}]});return(0,W.jsx)(rn,{angle:e.angle,gradientType:e.gradientType,name:`Gradient`,onValueChange:e=>t(e),stops:e.stops})}var Kn={B:{B:100,G:0,R:0},G:{B:0,G:100,R:0},R:{B:0,G:0,R:100}};function qn(){let[e,t]=U.useState(Kn);return(0,W.jsx)(wn,{name:`Output mix`,onValueChange:e=>t(e.values),values:e})}var G=[{x:0,y:0},{x:.5,y:.5},{x:1,y:1}];function Jn(){let[e,t]=U.useState({B:G,G,R:G,RGB:G}),[n,r]=U.useState(`RGB`);return(0,W.jsx)(Mt,{activeChannel:n,name:`Curves`,onValueChange:e=>{t(e.points),r(e.activeChannel)},points:e})}var Yn={color:`#FFFFFF`,fontId:`inter`,fontSize:16,fontWeight:`400`,letterSpacing:`normal`,lineHeight:`normal`,opacity:100,textCase:`original`};function Xn(){let[e,t]=U.useState(Yn);return(0,W.jsx)(Yt,{name:`Font`,onValueChange:e=>t(e),value:e})}function Zn(){let[e,t]=U.useState(`g`);return(0,W.jsx)(mt,{name:`Channels`,onValueChange:e=>t(e),options:[{label:`R`,value:`r`},{label:`G`,value:`g`},{label:`B`,value:`b`}],value:e})}function Qn(){return(0,W.jsx)(Me,{actions:[`Reset`,`Apply`,`Export`],buttonColumns:3,name:`Actions`,showActionLabels:!0})}function $n(){let[e,t]=U.useState(`center`);return(0,W.jsx)(ie,{name:`Anchor`,onValueChange:e=>t(e),value:e})}function er(){let[e,t]=U.useState(!0);return(0,W.jsx)(Ge,{checked:e,name:`Snap to grid`,onCheckedChange:e=>t(e)})}function tr(){let[e,t]=U.useState(!0);return(0,W.jsx)(oe,{checked:e,name:`Auto preview`,onCheckedChange:e=>t(e)})}function nr(){let[e,t]=U.useState(`vec3 color = mix(a, b, t);
color *= exposure;`);return(0,W.jsx)(Dn,{name:`Shader`,onValueChange:e=>t(e),value:e})}function rr(){return(0,W.jsx)(It,{accept:`image/*`})}function K(e){return`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Crect width='72' height='72' fill='${encodeURIComponent(e)}'/%3E%3C/svg%3E`}var ir=[{alt:`Lime`,src:K(`#C1FF00`),value:`lime`},{alt:`Sky`,src:K(`#8EC5FF`),value:`sky`},{alt:`Ember`,src:K(`#FF6A00`),value:`ember`}];function ar(){let[e,t]=U.useState(`lime`);return(0,W.jsx)(Ot,{items:ir,name:`Texture`,onValueChange:e=>t(e),value:e})}function or(){let[e,t]=U.useState({end:`100`,start:`0`});return(0,W.jsx)(bn,{end:e.end,name:`Bounds`,onValueChange:e=>t(e),start:e.start})}function sr(){let[e,t]=U.useState(`cubic`);return(0,W.jsx)(ee,{name:`Easing`,onValueChange:e=>t(e),options:[{label:`Linear`,value:`linear`},{label:`Cubic`,value:`cubic`},{label:`Bounce`,value:`bounce`}],value:e})}function cr(){let[e,t]=U.useState(`Editable text`);return(0,W.jsx)(qt,{name:`Label`,onValueChange:e=>t(e),value:e})}function lr(){let[e,t]=U.useState({x:`0.5`,y:`0.5`});return(0,W.jsx)(_t,{name:`Offset`,onValueChange:e=>t(e),x:e.x,y:e.y})}function ur(){return(0,W.jsxs)(`div`,{className:`gallery-row`,children:[(0,W.jsx)(B,{children:`Default`}),(0,W.jsx)(B,{variant:`secondary`,children:`Secondary`}),(0,W.jsx)(B,{variant:`outline`,children:`Outline`}),(0,W.jsx)(B,{variant:`ghost`,children:`Ghost`}),(0,W.jsx)(B,{variant:`destructive`,children:`Destructive`})]})}function dr(){let[e,t]=U.useState(!0);return(0,W.jsx)(vn,{pressed:e,onPressedChange:e=>t(e),children:`Snap`})}function fr(){return(0,W.jsx)(A,{defaultValue:``,placeholder:`Search components…`})}function pr(){return(0,W.jsx)(on,{placeholder:`Notes…`,rows:3})}function mr(){return(0,W.jsxs)(`div`,{className:`gallery-stack`,children:[(0,W.jsx)(L,{htmlFor:`gallery-label-demo`,children:`Layer name`}),(0,W.jsx)(A,{defaultValue:`Background`,id:`gallery-label-demo`})]})}function hr(){return(0,W.jsxs)(`div`,{className:`gallery-stack`,children:[(0,W.jsx)(`span`,{children:`Fill`}),(0,W.jsx)(gt,{}),(0,W.jsx)(`span`,{children:`Stroke`})]})}function gr(){return(0,W.jsxs)(ye,{defaultValue:[`colors`],children:[(0,W.jsxs)(b,{value:`colors`,children:[(0,W.jsx)(C,{children:`Colors`}),(0,W.jsx)(x,{children:`Fill, stroke, and gradient stops for the active layer.`})]}),(0,W.jsxs)(b,{value:`effects`,children:[(0,W.jsx)(C,{children:`Effects`}),(0,W.jsx)(x,{children:`Blur, noise, and grain applied after compositing.`})]})]})}function _r(){return(0,W.jsxs)(de,{children:[(0,W.jsx)(cn,{children:`Render queued`}),(0,W.jsx)(Se,{children:`Your export will be ready in a few seconds.`})]})}function vr(){return(0,W.jsxs)(De,{children:[(0,W.jsx)(Ie,{alt:`NS`,src:``}),(0,W.jsx)(Ae,{children:`NS`})]})}function yr(){return(0,W.jsxs)(`div`,{className:`gallery-row`,children:[(0,W.jsx)(D,{children:`Default`}),(0,W.jsx)(D,{variant:`secondary`,children:`Secondary`}),(0,W.jsx)(D,{variant:`warning`,children:`Warning`}),(0,W.jsx)(D,{variant:`destructive`,children:`Destructive`}),(0,W.jsx)(D,{variant:`outline`,children:`Outline`})]})}function br(){return(0,W.jsx)(Ke,{children:(0,W.jsxs)(Ne,{children:[(0,W.jsx)(u,{children:(0,W.jsx)(l,{href:`#`,children:`Project`})}),(0,W.jsx)(i,{}),(0,W.jsx)(u,{children:(0,W.jsx)(l,{href:`#`,children:`Scene`})}),(0,W.jsx)(i,{}),(0,W.jsx)(u,{children:(0,W.jsx)(Kt,{children:`Layer 3`})})]})})}function xr(){return(0,W.jsxs)(jn,{children:[(0,W.jsxs)(te,{children:[(0,W.jsx)(On,{children:`Export preset`}),(0,W.jsx)(kn,{children:`1080p · 8s loop · WebM`})]}),(0,W.jsx)(ht,{children:`Reuse this preset across scenes to keep exports consistent.`}),(0,W.jsx)(He,{children:(0,W.jsx)(B,{variant:`secondary`,children:`Apply`})})]})}function Sr(){return(0,W.jsx)(Cn,{value:64})}function Cr(){return(0,W.jsxs)(bt,{defaultValue:`comfortable`,children:[(0,W.jsxs)(L,{className:`gallery-inline`,children:[(0,W.jsx)(k,{value:`compact`}),`Compact`]}),(0,W.jsxs)(L,{className:`gallery-inline`,children:[(0,W.jsx)(k,{value:`comfortable`}),`Comfortable`]}),(0,W.jsxs)(L,{className:`gallery-inline`,children:[(0,W.jsx)(k,{value:`spacious`}),`Spacious`]})]})}function wr(){return(0,W.jsx)(o,{})}function Tr(){return(0,W.jsxs)(ke,{children:[(0,W.jsx)(we,{children:(0,W.jsxs)(g,{children:[(0,W.jsx)(p,{children:`Layer`}),(0,W.jsx)(p,{children:`Blend`}),(0,W.jsx)(p,{children:`Opacity`})]})}),(0,W.jsx)(Fe,{children:[{blend:`Normal`,layer:`Background`,opacity:`100%`},{blend:`Screen`,layer:`Glow`,opacity:`82%`},{blend:`Multiply`,layer:`Shadow`,opacity:`48%`}].map(e=>(0,W.jsxs)(g,{children:[(0,W.jsx)(f,{children:e.layer}),(0,W.jsx)(f,{children:e.blend}),(0,W.jsx)(f,{children:e.opacity})]},e.layer))})]})}function Er(){return(0,W.jsxs)(Gt,{defaultValue:`fill`,children:[(0,W.jsxs)(Ut,{children:[(0,W.jsx)(m,{value:`fill`,children:`Fill`}),(0,W.jsx)(m,{value:`stroke`,children:`Stroke`}),(0,W.jsx)(m,{value:`effects`,children:`Effects`})]}),(0,W.jsx)(r,{value:`fill`,children:`Solid, gradient, or image fill.`}),(0,W.jsx)(r,{value:`stroke`,children:`Stroke width, color, and dash.`}),(0,W.jsx)(r,{value:`effects`,children:`Blur, noise, and grain.`})]})}function Dr(){return(0,W.jsxs)(dt,{children:[(0,W.jsx)(kt,{render:(0,W.jsx)(B,{variant:`outline`,children:`Open dialog`})}),(0,W.jsxs)(mn,{children:[(0,W.jsxs)(xn,{children:[(0,W.jsx)(St,{children:`Rename layer`}),(0,W.jsx)(vt,{children:`Give this layer a clear name.`})]}),(0,W.jsx)(A,{defaultValue:`Background`}),(0,W.jsxs)(Jt,{children:[(0,W.jsx)(M,{render:(0,W.jsx)(B,{variant:`secondary`,children:`Cancel`})}),(0,W.jsx)(M,{render:(0,W.jsx)(B,{children:`Save`})})]})]})]})}function Or(){return(0,W.jsxs)(ge,{children:[(0,W.jsx)(et,{render:(0,W.jsx)(B,{variant:`destructive`,children:`Delete layer`})}),(0,W.jsxs)(Pn,{children:[(0,W.jsxs)(me,{children:[(0,W.jsx)(Je,{children:`Delete this layer?`}),(0,W.jsx)(s,{children:`This action can't be undone.`})]}),(0,W.jsxs)(Ze,{children:[(0,W.jsx)(Be,{children:`Cancel`}),(0,W.jsx)(Te,{children:`Delete`})]})]})]})}function kr(){return(0,W.jsxs)(Ve,{children:[(0,W.jsx)(tt,{render:(0,W.jsx)(B,{variant:`outline`,children:`Layer options`})}),(0,W.jsxs)(Fn,{children:[(0,W.jsx)(Qe,{children:`Layer`}),(0,W.jsxs)(c,{children:[`Duplicate`,(0,W.jsx)(Ye,{children:`⌘D`})]}),(0,W.jsx)(c,{children:`Rename`}),(0,W.jsx)(he,{}),(0,W.jsx)(c,{children:`Delete`})]})]})}function Ar(){return(0,W.jsxs)(fe,{children:[(0,W.jsx)(rt,{className:`gallery-contextmenu-target`,children:`Right-click here`}),(0,W.jsxs)(Ce,{children:[(0,W.jsxs)(F,{children:[`Cut`,(0,W.jsx)(S,{children:`⌘X`})]}),(0,W.jsxs)(F,{children:[`Copy`,(0,W.jsx)(S,{children:`⌘C`})]}),(0,W.jsx)(be,{}),(0,W.jsx)(F,{children:`Delete`})]})]})}function jr(){return(0,W.jsxs)(e,{children:[(0,W.jsx)(Ht,{render:(0,W.jsx)(B,{variant:`outline`,children:`Open sheet`})}),(0,W.jsx)(Dt,{children:(0,W.jsxs)(en,{children:[(0,W.jsx)(fn,{children:`Export settings`}),(0,W.jsx)(yn,{children:`Configure the export for this scene.`})]})})]})}function Mr(){return(0,W.jsxs)(nn,{children:[(0,W.jsx)(yt,{render:(0,W.jsx)(B,{variant:`outline`,children:`Open popover`})}),(0,W.jsx)(hn,{children:`Adjust quick settings for the layer.`})]})}function Nr(){return(0,W.jsx)(Vt,{children:(0,W.jsxs)($t,{children:[(0,W.jsx)(ft,{render:(0,W.jsx)(B,{variant:`outline`,children:`Hover me`})}),(0,W.jsx)(dn,{children:`Resets the panel`})]})})}function Pr(){return(0,W.jsxs)(a,{children:[(0,W.jsx)(Oe,{render:(0,W.jsx)(B,{variant:`link`,children:`@toolcraft`})}),(0,W.jsx)(Wt,{children:`The component toolkit for Toolcraft apps.`})]})}function Fr(){return(0,W.jsx)(wt,{children:(0,W.jsxs)(jt,{children:[(0,W.jsx)(P,{children:(0,W.jsx)(Ft,{href:`#`})}),(0,W.jsx)(P,{children:(0,W.jsx)(j,{href:`#`,children:`1`})}),(0,W.jsx)(P,{children:(0,W.jsx)(j,{href:`#`,children:`2`})}),(0,W.jsx)(P,{children:(0,W.jsx)(j,{href:`#`,children:`3`})}),(0,W.jsx)(P,{children:(0,W.jsx)(zt,{href:`#`})})]})})}function Ir(){return(0,W.jsxs)(je,{children:[(0,W.jsxs)(_e,{children:[(0,W.jsx)(Ee,{children:`No layers yet`}),(0,W.jsx)(le,{children:`Add a layer to start compositing.`})]}),(0,W.jsx)(Le,{children:(0,W.jsx)(B,{children:`Add layer`})})]})}function Lr(){return(0,W.jsx)(ce,{ratio:16/9,children:(0,W.jsx)(`div`,{className:`gallery-aspect-fill`,children:`16 : 9`})})}var q=_n({canvas:{enabled:!0,upload:!0},panels:{controls:{sections:[],title:`Settings`},layers:!0,timeline:{defaultDurationSeconds:8,enabled:!0,mode:`keyframes`}},toolbar:{history:!0,radar:!0,theme:!0,zoom:!0}});function Rr(){return(0,W.jsx)(zn,{children:(0,W.jsx)(Zt,{className:`gallery-surface-app`,schema:q})})}function zr(){return(0,W.jsx)(`div`,{className:`gallery-panel-frame`,children:(0,W.jsx)(t,{schema:q,children:(0,W.jsx)(tn,{})})})}function Br(){return(0,W.jsx)(`div`,{className:`gallery-panel-frame`,children:(0,W.jsx)(t,{schema:q,children:(0,W.jsx)(ut,{groupCreation:!0})})})}function Vr(){return(0,W.jsx)(`div`,{className:`gallery-panel-frame gallery-panel-frame--wide`,children:(0,W.jsx)(t,{schema:q,children:(0,W.jsx)(ln,{})})})}function Hr(){return(0,W.jsx)(`div`,{className:`gallery-panel-frame gallery-panel-frame--wide`,children:(0,W.jsx)(t,{schema:q,children:(0,W.jsx)(Bt,{})})})}function Ur(){return(0,W.jsx)(`div`,{className:`gallery-canvas-frame`,children:(0,W.jsx)(t,{schema:q,children:(0,W.jsx)(Re,{})})})}function Wr(){return(0,W.jsx)(st,{addLabel:`Add layer`,canAdd:!0,canRemove:!0,name:`Layers`,removeLabel:`Remove layer`})}function Gr(){return(0,W.jsxs)(Mn,{children:[(0,W.jsx)(B,{variant:`outline`,children:`Left`}),(0,W.jsx)(B,{variant:`outline`,children:`Center`}),(0,W.jsx)(B,{variant:`outline`,children:`Right`})]})}function Kr(){return(0,W.jsxs)(Rt,{children:[(0,W.jsx)(ct,{htmlFor:`gallery-field-demo`,children:`Project name`}),(0,W.jsx)(A,{defaultValue:`Untitled`,id:`gallery-field-demo`}),(0,W.jsx)(Pt,{children:`Shown in the export filename.`})]})}function qr(){return(0,W.jsxs)(Sn,{children:[(0,W.jsx)(Ct,{children:`@`}),(0,W.jsx)(At,{placeholder:`username`})]})}function Jr(){return(0,W.jsxs)(an,{children:[(0,W.jsx)(Nt,{placeholder:`Search framework…`}),(0,W.jsxs)(Xt,{children:[(0,W.jsx)(Lt,{children:`No results.`}),(0,W.jsxs)(Tn,{children:[(0,W.jsx)(w,{value:`react`,children:`React`}),(0,W.jsx)(w,{value:`svelte`,children:`Svelte`}),(0,W.jsx)(w,{value:`vue`,children:`Vue`})]})]})]})}function Yr(){return(0,W.jsx)(`div`,{className:`gallery-command-frame`,children:(0,W.jsxs)(ot,{children:[(0,W.jsx)(Tt,{placeholder:`Type a command…`}),(0,W.jsxs)(Qt,{children:[(0,W.jsx)(ze,{children:`No results found.`}),(0,W.jsxs)(n,{heading:`Actions`,children:[(0,W.jsxs)(I,{children:[`New layer`,(0,W.jsx)(E,{children:`⌘N`})]}),(0,W.jsxs)(I,{children:[`Duplicate`,(0,W.jsx)(E,{children:`⌘D`})]}),(0,W.jsx)(un,{}),(0,W.jsx)(I,{children:`Export`})]})]})]})})}function Xr(){return(0,W.jsxs)(re,{children:[(0,W.jsxs)(d,{children:[(0,W.jsx)(O,{children:`File`}),(0,W.jsxs)(R,{children:[(0,W.jsxs)(v,{children:[`New`,(0,W.jsx)(Pe,{children:`⌘N`})]}),(0,W.jsx)(v,{children:`Open`}),(0,W.jsx)(ae,{}),(0,W.jsx)(v,{children:`Export`})]})]}),(0,W.jsxs)(d,{children:[(0,W.jsx)(O,{children:`Edit`}),(0,W.jsxs)(R,{children:[(0,W.jsx)(v,{children:`Undo`}),(0,W.jsx)(v,{children:`Redo`})]})]})]})}function Zr(){return(0,W.jsx)(lt,{children:(0,W.jsxs)(An,{children:[(0,W.jsxs)(H,{children:[(0,W.jsx)(We,{children:`Product`}),(0,W.jsx)(En,{children:(0,W.jsxs)(`div`,{className:`gallery-navmenu-content`,children:[(0,W.jsx)(T,{href:`#`,children:`Overview`}),(0,W.jsx)(T,{href:`#`,children:`Features`}),(0,W.jsx)(T,{href:`#`,children:`Pricing`})]})})]}),(0,W.jsx)(H,{children:(0,W.jsx)(T,{href:`#`,children:`Docs`})})]})})}function Qr(){return(0,W.jsx)(`div`,{className:`gallery-resizable-frame`,children:(0,W.jsxs)(gn,{children:[(0,W.jsx)(N,{defaultSize:40,children:(0,W.jsx)(`div`,{className:`gallery-resizable-pane`,children:`Canvas`})}),(0,W.jsx)(pt,{withHandle:!0}),(0,W.jsx)(N,{defaultSize:60,children:(0,W.jsx)(`div`,{className:`gallery-resizable-pane`,children:`Preview`})})]})})}function $r(){return(0,W.jsx)(`div`,{className:`gallery-sidebar-frame`,children:(0,W.jsx)($e,{children:(0,W.jsxs)(pe,{collapsible:`none`,children:[(0,W.jsx)(nt,{children:`Toolcraft`}),(0,W.jsx)(ue,{children:(0,W.jsxs)(sn,{children:[(0,W.jsx)(it,{children:`Project`}),(0,W.jsx)(ve,{children:(0,W.jsxs)(at,{children:[(0,W.jsx)(h,{children:(0,W.jsx)(y,{children:`Canvas`})}),(0,W.jsx)(h,{children:(0,W.jsx)(y,{children:`Layers`})}),(0,W.jsx)(h,{children:(0,W.jsx)(y,{children:`Export`})})]})})]})}),(0,W.jsx)(xe,{children:`v0.0.13`})]})})})}function ei(){return(0,W.jsxs)(`div`,{className:`gallery-stack`,children:[(0,W.jsx)(B,{onClick:()=>Xe(`Layer exported`,{description:`1080p · WebM`}),variant:`outline`,children:`Show toast`}),(0,W.jsx)(Nn,{})]})}var J=`Control Components`,Y=`Primitives`,X=`Composites`,Z=`Overlays`,Q=`Surfaces`,$=[{description:`A stacked group of action buttons for triggering commands such as reset, apply, or export.`,group:J,id:`actions`,name:`Actions`,stories:[{code:`<Actions name="Actions" actions={["Reset", "Apply", "Export"]} buttonColumns={3} />`,id:`default`,label:`Default`,render:Qn}]},{description:`A nine-point anchor selector for choosing an alignment origin.`,group:J,id:`anchor-grid`,name:`Anchor Grid`,stories:[{code:`<AnchorGrid name="Anchor" value="center" onValueChange={setValue} />`,id:`default`,label:`Default`,render:$n}]},{description:`Per-channel RGB output mixing with R/G/B channel selection and contribution sliders.`,group:J,id:`channel-mixer`,name:`Channel Mixer`,stories:[{code:`<ChannelMixer name="Output mix" values={values} onValueChange={setValues} />`,id:`default`,label:`Default`,render:qn}]},{description:`A labelled boolean checkbox control.`,group:J,id:`checkbox`,name:`Checkbox`,stories:[{code:`<Checkbox name="Snap to grid" checked onCheckedChange={setChecked} />`,id:`default`,label:`Default`,render:er}]},{description:`A multi-line code input for shader snippets and expressions.`,group:J,id:`code`,name:`Code`,stories:[{code:`<CodeTextarea name="Shader" value={value} onValueChange={setValue} />`,id:`default`,label:`Default`,render:nr}]},{description:`A hex color control with an eyedropper, swatch, and optional opacity, usable singly or as a labelled pair.`,group:J,id:`color`,name:`Color`,stories:[{code:`<Color name="Fill" hex="#C1FF00" onValueChange={setFill} />
<Color name="Stroke" hex="#FF6A00" onValueChange={setStroke} />`,id:`pair`,label:`Pair`,render:Un},{code:`<ColorOpacity name="Fill" hex="#C1FF00" opacity={82} onValueChange={setFill} />
<ColorOpacity name="Stroke" hex="#FF6A00" opacity={48} onValueChange={setStroke} />`,id:`opacity`,label:`Opacity`,render:Wn}]},{description:`An RGB tone-curve editor with per-channel points for color grading.`,group:J,id:`curves`,name:`Curves`,stories:[{code:`<Curves name="Curves" points={points} activeChannel="RGB" onValueChange={setValue} />`,id:`default`,label:`Default`,render:Jn}]},{description:`A drag-and-drop file dropzone with click-to-browse for images and assets.`,group:J,id:`file`,name:`File`,stories:[{code:`<FileDrop accept="image/*" onFileSelect={handleFile} />`,id:`default`,label:`Default`,render:rr}]},{description:`A font select with live font previews, virtualized search, category filters, weight, size, text case, color, letter spacing, and line height.`,group:J,id:`font-picker`,name:`Font Picker`,stories:[{code:`<FontPicker name="Font" value={fontValue} onValueChange={setFontValue} />`,id:`default`,label:`Default`,render:Xn}]},{description:`An adjustable gradient editor with draggable stops, type, and angle.`,group:J,id:`gradient`,name:`Gradient`,stories:[{code:`<Gradient
  name="Gradient"
  gradientType="linear"
  angle={90}
  stops={[
    { color: "#0A0A0A", position: "0%" },
    { color: "#8EC5FF", position: "61%" },
    { color: "#FAFAFA", position: "100%" },
  ]}
/>`,id:`default`,label:`Default`,render:Gn}]},{description:`A swatch grid for picking a preset image or texture, with backing item data.`,group:J,id:`image-picker`,name:`Image Picker`,stories:[{code:`<ImagePicker
  name="Texture"
  value="lime"
  items={[
    { value: "lime", src: limeSrc, alt: "Lime" },
    { value: "sky", src: skySrc, alt: "Sky" },
    { value: "ember", src: emberSrc, alt: "Ember" },
  ]}
  onValueChange={setValue}
/>`,id:`default`,label:`Default`,render:ar}]},{description:`A paired start/end numeric input for entering an explicit range.`,group:J,id:`range`,name:`Range`,stories:[{code:`<RangeInput name="Bounds" start="0" end="100" onValueChange={setRange} />`,id:`default`,label:`Default`,render:or}]},{description:`A compact segmented switch for choosing one option from a small labelled set.`,group:J,id:`segmented`,name:`Segmented`,stories:[{code:`<Segmented
  name="Channels"
  value="g"
  options={[
    { label: "R", value: "r" },
    { label: "G", value: "g" },
    { label: "B", value: "b" },
  ]}
/>`,id:`default`,label:`Default`,render:Zn}]},{description:`A dropdown select for choosing one option from a list.`,group:J,id:`select`,name:`Select`,stories:[{code:`<Select
  name="Easing"
  value="cubic"
  options={[
    { label: "Linear", value: "linear" },
    { label: "Cubic", value: "cubic" },
    { label: "Bounce", value: "bounce" },
  ]}
/>`,id:`default`,label:`Default`,render:sr}]},{description:`A numeric value control for continuous, stepped, range, and visually discrete Toolcraft inputs.`,group:J,id:`slider`,name:`Slider`,stories:[{code:`<Slider name="Amount" min={0} max={100} step={1} unit="%" value={50} />`,id:`default`,label:`Default`,render:Bn},{code:`<Slider name="Threshold" min={0} max={100} step={10} unit="%" value={70} variant="discrete" markerCount={11} />`,id:`discrete`,label:`Discrete`,render:Vn},{code:`<RangeSlider name="Input range" min={0} max={100} step={0.1} unit="%" value={[25, 70]} />`,id:`range`,label:`Input range`,render:Hn}]},{description:`A labelled boolean toggle switch.`,group:J,id:`switch`,name:`Switch`,stories:[{code:`<Switch name="Auto preview" checked onCheckedChange={setChecked} />`,id:`default`,label:`Default`,render:tr}]},{description:`A single-line text input for editable labels and values.`,group:J,id:`text`,name:`Text`,stories:[{code:`<TextInput name="Label" value="Editable text" onValueChange={setValue} />`,id:`default`,label:`Default`,render:cr}]},{description:`A two-axis vector control with an interactive pad plus X and Y inputs.`,group:J,id:`vector`,name:`Vector`,stories:[{code:`<Vector name="Offset" x="0.5" y="0.5" onValueChange={setValue} />`,id:`default`,label:`Default`,render:lr}]},{description:`The base button primitive with default, secondary, outline, ghost, and destructive variants.`,group:Y,id:`button`,name:`Button`,stories:[{code:`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,id:`variants`,label:`Variants`,render:ur}]},{description:`A single-line text input primitive.`,group:Y,id:`input`,name:`Input`,stories:[{code:`<Input placeholder="Search components…" />`,id:`default`,label:`Default`,render:fr}]},{description:`A form label primitive, paired with an input.`,group:Y,id:`label`,name:`Label`,stories:[{code:`<Label htmlFor="name">Layer name</Label>
<Input id="name" defaultValue="Background" />`,id:`default`,label:`Default`,render:mr}]},{description:`A horizontal or vertical divider primitive.`,group:Y,id:`separator`,name:`Separator`,stories:[{code:`<span>Fill</span>
<Separator />
<span>Stroke</span>`,id:`default`,label:`Default`,render:hr}]},{description:`A multi-line text input primitive.`,group:Y,id:`textarea`,name:`Textarea`,stories:[{code:`<Textarea placeholder="Notes…" rows={3} />`,id:`default`,label:`Default`,render:pr}]},{description:`A two-state pressed toggle primitive.`,group:Y,id:`toggle`,name:`Toggle`,stories:[{code:`<Toggle pressed={pressed} onPressedChange={setPressed}>Snap</Toggle>`,id:`default`,label:`Default`,render:dr}]},{description:`A vertically stacked set of collapsible sections.`,group:X,id:`accordion`,name:`Accordion`,stories:[{code:`<Accordion defaultValue={["colors"]}>
  <AccordionItem value="colors">
    <AccordionTrigger>Colors</AccordionTrigger>
    <AccordionContent>…</AccordionContent>
  </AccordionItem>
</Accordion>`,id:`default`,label:`Default`,render:gr}]},{description:`A callout for surfacing status or contextual messages.`,group:X,id:`alert`,name:`Alert`,stories:[{code:`<Alert>
  <AlertTitle>Render queued</AlertTitle>
  <AlertDescription>…</AlertDescription>
</Alert>`,id:`default`,label:`Default`,render:_r}]},{description:`A user or entity avatar with image and fallback.`,group:X,id:`avatar`,name:`Avatar`,stories:[{code:`<Avatar>
  <AvatarImage src={url} alt="NS" />
  <AvatarFallback>NS</AvatarFallback>
</Avatar>`,id:`default`,label:`Default`,render:vr}]},{description:`A small status or category label with several variants.`,group:X,id:`badge`,name:`Badge`,stories:[{code:`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>`,id:`variants`,label:`Variants`,render:yr}]},{description:`A navigation trail showing the current location in a hierarchy.`,group:X,id:`breadcrumb`,name:`Breadcrumb`,stories:[{code:`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">Project</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Layer 3</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,id:`default`,label:`Default`,render:br}]},{description:`A surface for grouping related content with header, body, and footer.`,group:X,id:`card`,name:`Card`,stories:[{code:`<Card>
  <CardHeader>
    <CardTitle>Export preset</CardTitle>
    <CardDescription>1080p · 8s loop · WebM</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter><Button>Apply</Button></CardFooter>
</Card>`,id:`default`,label:`Default`,render:xr}]},{description:`A determinate progress bar.`,group:X,id:`progress`,name:`Progress`,stories:[{code:`<Progress value={64} />`,id:`default`,label:`Default`,render:Sr}]},{description:`A set of mutually exclusive radio options.`,group:X,id:`radio-group`,name:`Radio Group`,stories:[{code:`<RadioGroup defaultValue="comfortable">
  <Label><RadioGroupItem value="compact" /> Compact</Label>
  <Label><RadioGroupItem value="comfortable" /> Comfortable</Label>
</RadioGroup>`,id:`default`,label:`Default`,render:Cr}]},{description:`An indeterminate loading spinner.`,group:X,id:`spinner`,name:`Spinner`,stories:[{code:`<Spinner />`,id:`default`,label:`Default`,render:wr}]},{description:`A data table with header and body rows.`,group:X,id:`table`,name:`Table`,stories:[{code:`<Table>
  <TableHeader>
    <TableRow><TableHead>Layer</TableHead>…</TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Background</TableCell>…</TableRow>
  </TableBody>
</Table>`,id:`default`,label:`Default`,render:Tr}]},{description:`A tabbed interface for switching between related panels.`,group:X,id:`tabs`,name:`Tabs`,stories:[{code:`<Tabs defaultValue="fill">
  <TabsList>
    <TabsTrigger value="fill">Fill</TabsTrigger>
    <TabsTrigger value="stroke">Stroke</TabsTrigger>
  </TabsList>
  <TabsContent value="fill">…</TabsContent>
</Tabs>`,id:`default`,label:`Default`,render:Er}]},{description:`Constrains content to a fixed width-to-height ratio.`,group:X,id:`aspect-ratio`,name:`Aspect Ratio`,stories:[{code:`<AspectRatio ratio={16 / 9}>
  <img src={url} alt="" />
</AspectRatio>`,id:`default`,label:`Default`,render:Lr}]},{description:`An empty-state placeholder with a title, description, and action.`,group:X,id:`empty`,name:`Empty`,stories:[{code:`<Empty>
  <EmptyHeader>
    <EmptyTitle>No layers yet</EmptyTitle>
    <EmptyDescription>…</EmptyDescription>
  </EmptyHeader>
  <EmptyContent><Button>Add layer</Button></EmptyContent>
</Empty>`,id:`default`,label:`Default`,render:Ir}]},{description:`Page navigation with previous/next and numbered links.`,group:X,id:`pagination`,name:`Pagination`,stories:[{code:`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,id:`default`,label:`Default`,render:Fr}]},{description:`A confirmation dialog for destructive actions, with cancel and confirm.`,group:Z,id:`alert-dialog`,name:`Alert Dialog`,stories:[{code:`<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive">Delete</Button>} />
  <AlertDialogContent>…</AlertDialogContent>
</AlertDialog>`,id:`default`,label:`Default`,render:Or}]},{description:`A right-click menu of contextual actions anchored to a target area.`,group:Z,id:`context-menu`,name:`Context Menu`,stories:[{code:`<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Cut</ContextMenuItem>
    …
  </ContextMenuContent>
</ContextMenu>`,id:`default`,label:`Default`,render:Ar}]},{description:`A modal dialog opened from a trigger, with header and footer.`,group:Z,id:`dialog`,name:`Dialog`,stories:[{code:`<Dialog>
  <DialogTrigger render={<Button>Open dialog</Button>} />
  <DialogContent>
    <DialogHeader><DialogTitle>Rename layer</DialogTitle></DialogHeader>
    …
  </DialogContent>
</Dialog>`,id:`default`,label:`Default`,render:Dr}]},{description:`A menu of actions opened from a trigger button.`,group:Z,id:`dropdown-menu`,name:`Dropdown Menu`,stories:[{code:`<DropdownMenu>
  <DropdownMenuTrigger render={<Button>Layer options</Button>} />
  <DropdownMenuContent>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    …
  </DropdownMenuContent>
</DropdownMenu>`,id:`default`,label:`Default`,render:kr}]},{description:`A card of rich preview content shown on hover.`,group:Z,id:`hover-card`,name:`Hover Card`,stories:[{code:`<HoverCard>
  <HoverCardTrigger render={<Button variant="link">@toolcraft</Button>} />
  <HoverCardContent>…</HoverCardContent>
</HoverCard>`,id:`default`,label:`Default`,render:Pr}]},{description:`A floating panel of secondary controls anchored to a trigger.`,group:Z,id:`popover`,name:`Popover`,stories:[{code:`<Popover>
  <PopoverTrigger render={<Button>Open popover</Button>} />
  <PopoverContent>…</PopoverContent>
</Popover>`,id:`default`,label:`Default`,render:Mr}]},{description:`A side panel that slides in from the edge of the viewport.`,group:Z,id:`sheet`,name:`Sheet`,stories:[{code:`<Sheet>
  <SheetTrigger render={<Button>Open sheet</Button>} />
  <SheetContent>
    <SheetHeader><SheetTitle>Export settings</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`,id:`default`,label:`Default`,render:jr}]},{description:`A small hint shown on hover or focus of a trigger.`,group:Z,id:`tooltip`,name:`Tooltip`,stories:[{code:`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button>Hover me</Button>} />
    <TooltipContent>Resets the panel</TooltipContent>
  </Tooltip>
</TooltipProvider>`,id:`default`,label:`Default`,render:Nr}]},{description:`The complete Toolcraft app composed from a schema: app bar, canvas, settings panel, layers, and timeline.`,group:Q,id:`app`,name:`App`,stories:[{code:`const schema = defineToolcraft({
  canvas: { enabled: true, upload: true },
  panels: {
    controls: { sections: [], title: "Settings" },
    layers: true,
    timeline: { defaultDurationSeconds: 8, enabled: true, mode: "keyframes" },
  },
  toolbar: { history: true, radar: true, theme: true, zoom: true },
});

<ToolcraftApp schema={schema} />`,id:`default`,label:`Default`,render:Rr}]},{description:`The canvas surface with upload, panning, and zoom, driven by the app schema.`,group:Q,id:`canvas`,name:`Canvas`,stories:[{code:`<ToolcraftRoot schema={schema}>
  <CanvasShell />
</ToolcraftRoot>`,id:`default`,label:`Default`,render:Ur}]},{description:`The layers panel with grouping, selection, and visibility toggles.`,group:Q,id:`layers-panel`,name:`Layers Panel`,stories:[{code:`<ToolcraftRoot schema={schema}>
  <LayersPanel groupCreation />
</ToolcraftRoot>`,id:`default`,label:`Default`,render:Br}]},{description:`The settings panel (ControlsPanel) that hosts control sections defined in the schema.`,group:Q,id:`settings-panel`,name:`Settings Panel`,stories:[{code:`<ToolcraftRoot schema={schema}>
  <ControlsPanel />
</ToolcraftRoot>`,id:`default`,label:`Default`,render:zr}]},{description:`The timeline surface for keyframes and playback.`,group:Q,id:`timeline`,name:`Timeline`,stories:[{code:`<ToolcraftRoot schema={schema}>
  <TimelinePanel />
</ToolcraftRoot>`,id:`default`,label:`Default`,render:Hr}]},{description:`The app bar (ToolbarPanel) with history, radar, zoom, and theme controls.`,group:Q,id:`toolbar`,name:`Toolbar`,stories:[{code:`<ToolcraftRoot schema={schema}>
  <ToolbarPanel />
</ToolcraftRoot>`,id:`default`,label:`Default`,render:Vr}]},{description:`A control header with add/remove actions for managing a collection of items.`,group:J,id:`collection-actions`,name:`Collection Actions`,stories:[{code:`<CollectionActions
  name="Layers"
  addLabel="Add layer"
  removeLabel="Remove layer"
  canAdd
  canRemove
  onAdd={handleAdd}
  onRemove={handleRemove}
/>`,id:`default`,label:`Default`,render:Wr}]},{description:`Groups related buttons into a single connected control.`,group:Y,id:`button-group`,name:`Button Group`,stories:[{code:`<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`,id:`default`,label:`Default`,render:Gr}]},{description:`A form field wrapper pairing a label, control, and description.`,group:Y,id:`field`,name:`Field`,stories:[{code:`<Field>
  <FieldLabel htmlFor="name">Project name</FieldLabel>
  <Input id="name" defaultValue="Untitled" />
  <FieldDescription>Shown in the export filename.</FieldDescription>
</Field>`,id:`default`,label:`Default`,render:Kr}]},{description:`An input with attached addons such as prefixes or buttons.`,group:Y,id:`input-group`,name:`Input Group`,stories:[{code:`<InputGroup>
  <InputGroupAddon>@</InputGroupAddon>
  <InputGroupInput placeholder="username" />
</InputGroup>`,id:`default`,label:`Default`,render:qr}]},{description:`An autocomplete input that filters a list of options as you type.`,group:Z,id:`combobox`,name:`Combobox`,stories:[{code:`<Combobox>
  <ComboboxInput placeholder="Search framework…" />
  <ComboboxContent>
    <ComboboxEmpty>No results.</ComboboxEmpty>
    <ComboboxList>
      <ComboboxItem value="react">React</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,id:`default`,label:`Default`,render:Jr}]},{description:`A command palette with searchable, grouped actions.`,group:Z,id:`command`,name:`Command`,stories:[{code:`<Command>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>New layer</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,id:`default`,label:`Default`,render:Yr}]},{description:`A horizontal application menu bar (File, Edit, …) with dropdowns.`,group:Z,id:`menubar`,name:`Menubar`,stories:[{code:`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      …
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,id:`default`,label:`Default`,render:Xr}]},{description:`A site navigation menu with hoverable dropdown panels.`,group:Z,id:`navigation-menu`,name:`Navigation Menu`,stories:[{code:`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>…</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,id:`default`,label:`Default`,render:Zr}]},{description:`Resizable, draggable panel splits for building layouts.`,group:X,id:`resizable`,name:`Resizable`,stories:[{code:`<ResizablePanelGroup>
  <ResizablePanel defaultSize={40}>Canvas</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={60}>Preview</ResizablePanel>
</ResizablePanelGroup>`,id:`default`,label:`Default`,render:Qr}]},{description:`A composable application sidebar with grouped, collapsible navigation.`,group:X,id:`sidebar`,name:`Sidebar`,stories:[{code:`<SidebarProvider>
  <Sidebar collapsible="none">
    <SidebarHeader>Toolcraft</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>…</SidebarGroup>
    </SidebarContent>
    <SidebarFooter>v0.0.13</SidebarFooter>
  </Sidebar>
</SidebarProvider>`,id:`default`,label:`Default`,render:$r}]},{description:`Toast notifications rendered from a global Toaster.`,group:X,id:`sonner`,name:`Sonner`,stories:[{code:`<Toaster />

<Button onClick={() => toast("Layer exported")}>
  Show toast
</Button>`,id:`default`,label:`Default`,render:ei}]}];function ti(){let e=[],t=new Map;for(let n of $)t.has(n.group)||(t.set(n.group,[]),e.push(n.group)),t.get(n.group)?.push(n);return e.map(e=>({group:e,items:[...t.get(e)??[]].sort((e,t)=>e.name.localeCompare(t.name))}))}function ni(){let e=U.useMemo(ti,[]),[t,n]=U.useState($[0]?.id??``),r=$.find(e=>e.id===t)??$[0],[i,a]=U.useState(r?.stories[0]?.id??``),o=r?.stories.find(e=>e.id===i)??r?.stories[0];function s(e){let t=$.find(t=>t.id===e);n(e),a(t?.stories[0]?.id??``)}if(!r||!o)return(0,W.jsx)(`div`,{className:`gallery-empty`,children:`No components registered.`});let c=o.render;return(0,W.jsxs)(`div`,{className:`gallery-shell`,children:[(0,W.jsxs)(`aside`,{className:`gallery-nav`,children:[(0,W.jsxs)(`div`,{className:`gallery-brand`,children:[(0,W.jsx)(`span`,{className:`gallery-brand-mark`}),`Toolcraft`]}),e.map(({group:e,items:t})=>(0,W.jsxs)(`div`,{className:`gallery-nav-group`,children:[(0,W.jsx)(`div`,{className:`gallery-nav-heading`,children:e}),(0,W.jsx)(`ul`,{children:t.map(e=>(0,W.jsx)(`li`,{children:(0,W.jsx)(`button`,{className:e.id===r.id?`gallery-nav-link is-active`:`gallery-nav-link`,onClick:()=>s(e.id),type:`button`,children:e.name})},e.id))})]},e))]}),(0,W.jsxs)(`main`,{className:`gallery-main`,children:[(0,W.jsxs)(`div`,{className:`gallery-breadcrumb`,children:[(0,W.jsx)(`span`,{children:`Components`}),(0,W.jsx)(`span`,{className:`gallery-breadcrumb-sep`,children:`/`}),(0,W.jsx)(`span`,{className:`gallery-breadcrumb-current`,children:r.name})]}),(0,W.jsx)(`h1`,{className:`gallery-title`,children:r.name}),(0,W.jsx)(`p`,{className:`gallery-description`,children:r.description}),r.stories.length>1?(0,W.jsx)(`div`,{className:`gallery-tabs`,role:`tablist`,children:r.stories.map(e=>(0,W.jsx)(`button`,{"aria-selected":e.id===o.id,className:e.id===o.id?`gallery-tab is-active`:`gallery-tab`,onClick:()=>a(e.id),role:`tab`,type:`button`,children:e.label},e.id))}):null,(0,W.jsx)(`div`,{className:`gallery-preview-card`,children:(0,W.jsx)(Rn,{variant:r.group===`Control Components`?`panel`:r.group===`Surfaces`?`surface`:`bare`,children:(0,W.jsx)(Ln,{children:(0,W.jsx)(c,{})},`${r.id}:${o.id}`)})}),(0,W.jsx)(`pre`,{className:`gallery-code`,children:(0,W.jsx)(`code`,{children:o.code})})]}),(0,W.jsxs)(`aside`,{className:`gallery-toc`,children:[(0,W.jsx)(`div`,{className:`gallery-toc-heading`,children:`On this page`}),(0,W.jsxs)(`ul`,{children:[(0,W.jsx)(`li`,{className:`is-active`,children:`Preview`}),(0,W.jsx)(`li`,{children:`Props`})]}),(0,W.jsx)(`a`,{className:`gallery-suggest`,href:`https://github.com/NSDesign/toolcraft`,rel:`noreferrer`,target:`_blank`,children:`Suggest edits`})]})]})}var ri=document.getElementById(`gallery-root`);if(!ri)throw Error(`Gallery root element #gallery-root was not found.`);(0,In.createRoot)(ri).render((0,W.jsx)(U.StrictMode,{children:(0,W.jsx)(Et,{children:(0,W.jsx)(ni,{})})}));