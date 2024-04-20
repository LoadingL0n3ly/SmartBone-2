"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2},o="SmartBone",l={unversionedId:"smartbone",id:"smartbone",title:"SmartBone",description:"Setup",source:"@site/docs/smartbone.md",sourceDirName:".",slug:"/smartbone",permalink:"/docs/smartbone",draft:!1,editUrl:"https://github.com/smartbone-org/SmartBone-2/edit/jakey/docs/smartbone.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"SmartCollider",permalink:"/docs/smartcollider"}},p={},s=[{value:"Setup",id:"setup",level:3},{value:"Friction",id:"friction",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Wind",id:"wind",level:3},{value:"Attributes",id:"attributes",level:3}],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smartbone"},"SmartBone"),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select any MeshPart with Bones under it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the tag \u201cSmartBone\u201d to the MeshPart.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a string attribute called \u201cRoots\u201d to the MeshPart and fill it with the name(s) of the bone(s) you want to be root(s).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Separate each bone name with \u201c,\u201d and the Module will automatically sort your bone(s) into a list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An example of a SmartBone object with multiple roots would have a Roots attribute that looks like this: \u201cRoot1,Root2,Root3\u201d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure you don\u2019t add any spaces or characters unless they are part of the name of the bone(s) you want to be included"))),(0,r.kt)("p",null,"Note: Re parenting a SmartBone object might cause a lag spike and if you parent to nil and then re-parent the object will no longer have SmartBone acting on it.\nThis is due to Roblox not adding a .Destroying signal or something similar, if you'd like for the object to continue simulating you would have to remove the SmartBone tag and add it again."),(0,r.kt)("h3",{id:"friction"},"Friction"),(0,r.kt)("p",null,"Friction is controlled by the root part and the colliding objects physical properties."),(0,r.kt)("h3",{id:"constraints"},"Constraints"),(0,r.kt)("p",null,"Each constraint has it's own purpose,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spring will return the bone to its rest position sort of like jelly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Distance will keep the bones at a fixed distance from each other and is always pulled downwards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rope will keep the bones distance between 0 and their rest length and is always pulled downwards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rotation, details can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/bone"},"here")))),(0,r.kt)("h3",{id:"wind"},"Wind"),(0,r.kt)("p",null,"Wind can be controlled via GlobalWind (MatchWorkspaceWind must be true) or through attributes in Lighting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]",' WindStrength - The "density" of the air, this is used regardless of MatchWorkspaceWind.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," WindSpeed - The speed which wind travels at, only important if MatchWorkspaceWind is false.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Vector3"),"]"," WindDirection - The direction in which the wind travels, only important if MatchWorkspaceWind is false."))),(0,r.kt)("p",null,"WindStrength controls the frequency of the wind,\nWindSpeed controls the amplitude of the wind,"),(0,r.kt)("p",null,"For example if you wanted more flowy wind you would have a medium wind speed with a lower wind strength."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All attributes listed here are optional and not required to get a SmartBone object working.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Any"),"]"," Debug - If this attribute exists in a SmartBone object then the SmartBone Runtime Editor will appear allowing you to change attributes and visualise certain things in real time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," Damping \u2013 How slowed down the calculated motion of the SmartBone(s) will be.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," Stiffness \u2013 How much of the bone(s) original CFrame is preserved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," Inertia \u2013 How much the of the movement of the object is ignored.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," Elasticity \u2013 How much force is applied to return each bone to its original CFrame.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Vector3"),"]"," Gravity \u2013 Direction and Magnitude of Gravity in World Space.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Vector3"),"]"," Force \u2013 Additional Force applied to Bones in World Space. Supplementary to Gravity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"String"),"]"," Constraint - Option between Spring, Distance and Rope.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"String"),"]"," WindType - Option between Sine, Noise and Hybrid.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Boolean"),"]"," MatchWorkspaceWind - If true then wind is dependent on workspace.GlobalWind.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," WindInfluence \u2013 How much influence wind has on the SmartBone object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"String"),"]"," ColliderKey - If this attribute is set then the object will only collide with colliders that have the same collider key.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," AnchorDepth \u2013 This will determine how far down in hierarchy from the Root that bones will be Anchored.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Boolean"),"]"," AnchorsRotate \u2013 If true, the root bone(s) will rotate along with the rest of the bone(s), but remain in static position. If false, the root bone(s) will remain completely static in both Position and Orientation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," UpdateRate \u2013 The rate in frames-per-second at which SmartBone will simulate.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," ActivationDistance \u2013 The distance in studs at which the SmartBone stops simulation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("em",{parentName:"p"},"Number"),"]"," ThrottleDistance \u2013 The distance in studs at which the SmartBone begins to throttle simulation rates based on distance. Scales based on UpdateRate."))))}c.isMDXComponent=!0}}]);