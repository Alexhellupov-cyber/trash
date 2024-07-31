(self.webpackChunklite=self.webpackChunklite||[]).push([[304],{6742:(e,n,t)=>{"use strict";t.d(n,{e0:()=>y,Rf:()=>C,Xw:()=>k});var r=t(59713),o=t.n(r),a=t(28655),i=t.n(a),u=t(71439),l=t(67294),c=t(12291),s=t(31429),d=t(55346),p=t(86280),m=t(7530),f=t(64504),v=t(62630),E=t(27572),h=t(28309),x=t(72955),g=t(14391),w=t(80637),b=t(27952);function T(){var e=i()(["\n  fragment NewsletterV3Promo_publisher on Publisher {\n    __typename\n    ... on User {\n      id\n      username\n      name\n      viewerIsUser\n      newsletterV3 {\n        id\n        ...NewsletterV3Promo_newsletterV3\n      }\n    }\n    ... on Collection {\n      id\n      slug\n      domain\n      name\n      viewerIsEditor\n      newsletterV3 {\n        id\n        ...NewsletterV3Promo_newsletterV3\n      }\n    }\n  }\n  ","\n"]);return T=function(){return e},e}function S(){var e=i()(["\n  fragment NewsletterV3Promo_newsletterV3 on NewsletterV3 {\n    slug\n    name\n    description\n    ...NewsletterV3SubscribeButton_newsletterV3\n    ...NewsletterV3SubscribeByEmail_newsletterV3\n  }\n  ","\n  ","\n"]);return S=function(){return e},e}var y=(0,u.Ps)(S(),s.B,d.Lh),C=(0,u.Ps)(T(),y),R=function(e){return o()({borderTop:"3px solid ".concat(e.accentColor.border.normal),padding:"32px 32px 26px 32px",marginTop:"8px",marginBottom:"25px",backgroundColor:e.baseColor.background.light},w.sm(e),{padding:"24px 24px 28px 24px"})},k=function(e){var n,t,r,o,a,i=e.postId,u=e.publisher,w=l.useRef(null),T=(0,c.v9)((function(e){return{authDomain:e.config.authDomain,isAmp:e.config.isAmp}})),S=T.authDomain,y=T.isAmp,C=(0,v.Av)(),k=(0,h.Iq)(),N=(0,p.YC)().value,I=u.newsletterV3,_=null==I?void 0:I.type,L=u.username,O=void 0===L?"":L,U=(0,b.iB)(null!==(n=null==I?void 0:I.slug)&&void 0!==n?n:"",S,_===g.Rr.NEWSLETTER_TYPE_COLLECTION?u:void 0,_===g.Rr.NEWSLETTER_TYPE_AUTHOR&&O?O:void 0);switch(_){case g.Rr.NEWSLETTER_TYPE_COLLECTION:t="Sign up for ".concat(null==I?void 0:I.name),r="0px",o="You're an editor of ".concat(null==I?void 0:I.name),a=u.viewerIsEditor;break;case g.Rr.NEWSLETTER_TYPE_AUTHOR:t="Get ".concat(u.name,"'s stories in your inbox"),r="6px",o="You cannot subscribe to yourself",a=u.viewerIsUser}var A=!1,P=function(){!A&&D()&&(C.event("newsletterV3.promoViewed",{newsletterV3Id:null==I?void 0:I.id,postId:i}),A=!0)},D=function(){var e;if(!w.current)return!1;var n=null===(e=w.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};return l.useEffect((function(){return P(),window&&x.V6.on("scroll",P),function(){x.V6.off("scroll",P)}}),[]),l.createElement(E.cW,{source:{name:"newsletter_v3_promo",susiEntry:"newsletter_v3_promo"}},l.createElement("div",{ref:w,className:k(R)},l.createElement(m.xu,{paddingBottom:r},l.createElement(f.X6,{scale:{xs:"S",sm:"S",md:"M",lg:"M",xl:"M"}},t)),_===g.Rr.NEWSLETTER_TYPE_COLLECTION&&l.createElement(l.Fragment,null,l.createElement(m.xu,{paddingTop:"4px"},l.createElement(f.F,{tag:"h3",scale:"S",color:"DARKER"},"By ".concat(u.name))),l.createElement(m.xu,{paddingTop:"8px",paddingBottom:"10px"},l.createElement(f.F,{scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},null==I?void 0:I.description," ",!y&&l.createElement(m.rU,{inline:!0,linkStyle:"OBVIOUS",href:U},"Take a look.")))),a?l.createElement(m.xu,{paddingTop:"10px"},l.createElement(f.F,{scale:"M",color:"DARKER"},o)):l.createElement(m.xu,{display:"flex",flexWrap:"wrap"},I&&(N||y?l.createElement(s.x,{newsletterV3:I,buttonLayout:"COMPACT",helperTextColor:"DARKER",redirectUrl:y?U:void 0}):l.createElement(d.QL,{newsletterV3:I})))))}},68387:(e,n,t)=>{"use strict";t.d(n,{Q:()=>h,c:()=>x});var r=t(28655),o=t.n(r),a=t(71439),i=t(67294),u=t(12291),l=t(53976),c=t(86280),s=t(22091),d=t(64504),p=t(62630),m=t(27572),f=t(28309),v=t(27952);function E(){var e=o()(["\n  fragment EntityDrivenSubscriptionCallToAction_post on Post {\n    __typename\n    id\n    creator {\n      __typename\n      id\n      name\n      isAllowEdsEnabled\n    }\n  }\n"]);return E=function(){return e},e}var h=function(e){var n,t,r,o,a,E=e.post,h=(0,p.Av)(),x=(0,f.Iq)(),g=(0,u.v9)((function(e){return e.config.authDomain})),w=(0,c.YC)().value,b=i.useCallback((function(){var e;h.event("entityDrivenSubCallToAction.clicked",{userId:null==w?void 0:w.id,entityId:null==E||null===(e=E.creator)||void 0===e?void 0:e.id})}),[E,w,g]);if(i.useEffect((function(){h.event("experiment.eligible",{experimentId:"65da28af5652"})}),[]),!(0,l.V)({name:"entity_driven_subscription_milestone_1",placeholder:!1})||null==E||null===(n=E.creator)||void 0===n||!n.isAllowEdsEnabled||null!=w&&w.mediumMemberAt)return null;var T=null!==(t=null==E||null===(r=E.creator)||void 0===r?void 0:r.name)&&void 0!==t?t:"",S=null!==(o=null==E||null===(a=E.creator)||void 0===a?void 0:a.id)&&void 0!==o?o:"";return i.createElement(m.cW,{source:{name:"entity_driven_subscription",postId:null==E?void 0:E.id}},i.createElement("div",{className:x((function(e){return{borderTop:"4px solid ".concat(e.accentColor.border.normal),padding:"38px",marginTop:"12px",marginBottom:"56px",backgroundColor:e.baseColor.background.light}}))},i.createElement(s.xu,null,i.createElement(d.X6,{scale:{xs:"S",sm:"S",md:"M",lg:"M",xl:"M"}},"Get every story by ",T)),i.createElement(s.xu,{paddingTop:"10px",paddingBottom:"30px"},i.createElement(d.F,{scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Become a member for unlimited access to ",T," and the rest of Medium.")),i.createElement(s.zx,{onClick:b,href:"".concat((0,v.c5)(g),"?subscribeToUserId=").concat(S),buttonStyle:"STRONG"},"Become a member for $5/month")))},x=(0,a.Ps)(E())},56365:(e,n,t)=>{"use strict";t.d(n,{f:()=>f,w:()=>v});var r=t(28655),o=t.n(r),a=t(67154),i=t.n(a),u=t(6479),l=t.n(u),c=t(71439),s=t(67294),d=t(85489),p=t(42933);function m(){var e=o()(["\n  fragment CustomBackgroundWrapper_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        background {\n          ...getHexFromColorValue_colorValue\n        }\n      }\n    }\n  }\n  ","\n"]);return m=function(){return e},e}var f=function(e){var n=e.children,t=e.customStyleSheet,r=l()(e,["children","customStyleSheet"]);return s.useMemo((function(){var e,n;return(0,d.eQ)(null==t||null===(e=t.global)||void 0===e||null===(n=e.colorPalette)||void 0===n?void 0:n.background)}),[t])?s.createElement(p.Z,i()({backgroundColor:"BACKGROUND"},r),n):s.createElement(p.Z,r,n)},v=(0,c.Ps)(m(),d.xW)},78221:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s,U:()=>d});var r=t(28655),o=t.n(r),a=t(71439),i=t(67294),u=t(8558),l=t(90038);function c(){var e=o()(["\n  fragment SequenceCoverImage_sequence on Sequence {\n    title\n    coverImage {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function s(e){var n=e.sequence,t=e.width,r=e.height,o=n.title,a=n.coverImage;return a?i.createElement("div",null,i.createElement(u.UV,{miroId:a.id,alt:o||"Collection on Medium",width:t,height:r,strategy:l._S.Resample,freezeGifs:!1})):null}var d=(0,a.Ps)(c())},93258:(e,n,t)=>{"use strict";t.d(n,{d:()=>m});var r=t(63038),o=t.n(r),a=t(67294),i=t(885),u=t(86280),l=t(324),c=t(7530),s=t(28309),d=t(51064),p=t(534),m=function(e){var n=e.buttonSize,t=e.targetUserId,r=(0,d.O)(!1),m=o()(r,3),f=m[0],v=m[1],E=m[2],h=(0,s.Fg)(),x=(0,l.Uo)().baseTheme,g=(0,p.q3)(h,x),w=(0,u.YC)().value;return w?a.createElement(s.f6,{theme:g},a.createElement(i.Z,{targetUserId:t,viewerId:w&&w.id},(function(e){var t=e.mutate;return a.createElement(c.zx,{buttonStyle:f?"SUBTLE":"ERROR",onClick:t,size:n||"REGULAR",onMouseEnter:v,onMouseLeave:E},f?"Unblock":"Blocked")}))):null}},79208:(e,n,t)=>{"use strict";t.d(n,{Dm:()=>r,JA:()=>w});var r,o=t(63038),a=t.n(o),i=t(87757),u=t.n(i),l=t(48926),c=t.n(l),s=t(94301),d=t.n(s),p=t(67294),m=t(61250);!function(e){e[e.NONE=0]="NONE",e[e.STARTING=1]="STARTING",e[e.UPLOADING=2]="UPLOADING",e[e.UPLOADED=3]="UPLOADED"}(r||(r={}));var f=new Set(["jpg","jpeg","png","gif"]),v=function(e){return new Promise((function(n){return setTimeout(n,e)}))},E=function(){var e=c()(u().mark((function e(n,t){var r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(n,{credentials:"same-origin",method:"POST",headers:{accept:"application/json","Content-Type":"application/json","x-xsrf-token":"1","X-Obvious-CID":"web"},body:JSON.stringify({url:t})});case 2:return r=e.sent,e.next=5,r.text();case 5:return o=e.sent,e.abrupt("return",JSON.parse(o.replace("])}while(1);</x>","")));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=c()(u().mark((function e(n,t){var r,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("uploadedFile",t),e.next=4,d()(n,{credentials:"same-origin",method:"POST",headers:{"x-xsrf-token":"1","X-Obvious-CID":"web"},body:r});case 4:return o=e.sent,e.next=7,o.text();case 7:return a=e.sent,e.abrupt("return",JSON.parse(a.replace("])}while(1);</x>","")));case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x="CreateUpload",g=new Error("Image upload failed. The URL you provided may be invalid."),w=function(e,n,t){var o=p.useState(r.NONE),i=a()(o,2),l=i[0],s=i[1],d=p.useRef(null),w=p.useCallback((function(){d.current&&d.current.click()}),[d.current]),b=(0,m.BS)(x),T=(0,m.BS)("CreateUploadUrl");function S(){return y.apply(this,arguments)}function y(){return(y=c()(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(r.STARTING),e.next=3,v(0);case 3:s(r.UPLOADING);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=c()(u().mark((function t(o){var a,i,l,c,d;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:if(t.prev=2,T){t.next=5;break}throw new Error("Expected ".concat(x," route to exist"));case 5:return t.next=7,E(T.pathPattern,o);case 7:i=t.sent,l=i.success,c=i.payload,l&&null!=c&&null!==(a=c.value)&&void 0!==a&&a.fileId?((d=new Image).onload=function(){s(r.UPLOADED),e(c,{url:o,height:d.height,width:d.width},(function(){return s(r.NONE)}))},d.onerror=function(){n(g)},d.src=o):n(g),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),n(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}function R(e){return k.apply(this,arguments)}function k(){return(k=c()(u().mark((function o(a){var i,l,c,d,p,m,v,E;return u().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(i=null==a?void 0:a[0]){o.next=3;break}return o.abrupt("return");case 3:if(l=i.name.split(".").pop(),f.has((null==l?void 0:l.toLowerCase())||"")){o.next=7;break}return t&&t(),o.abrupt("return");case 7:return o.next=9,S();case 9:if(o.prev=9,b){o.next=12;break}throw new Error("Expected ".concat(x," route to exist"));case 12:return o.next=14,h(b.pathPattern,i);case 14:d=o.sent,p=d.success,m=d.payload,p&&null!=m&&null!==(c=m.value)&&void 0!==c&&c.md5&&(v=URL.createObjectURL(i),(E=new Image).onload=function(){s(r.UPLOADED),e(m,{file:i,height:E.height,width:E.width},(function(){return s(r.NONE)}))},E.src=v),o.next=22;break;case 19:o.prev=19,o.t0=o.catch(9),n(o.t0);case 22:case"end":return o.stop()}}),o,null,[[9,19]])})))).apply(this,arguments)}function N(){R(this.files),this.value=""}return p.useEffect((function(){if(d.current)return d.current.addEventListener("change",N),function(){d.current&&d.current.removeEventListener("change",N)}}),[d.current]),{inputRef:d,fireClick:w,status:l,handleDropEvent:function(e){var n=e.dataTransfer;n&&R(n.files)},uploadUrl:function(e){return C.apply(this,arguments)}}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/304.ef18577c.chunk.js.map