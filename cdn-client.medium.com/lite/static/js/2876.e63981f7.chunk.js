(self.webpackChunklite=self.webpackChunklite||[]).push([[2876],{50093:(e,n,t)=>{"use strict";t.d(n,{oQ:()=>x,Pl:()=>y,qj:()=>E});var r=t(67154),i=t.n(r),o=t(67294),a=t(12291),c=t(85740),l=t(7530),u=t(64504),s=t(28309);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m=o.createElement("g",{opacity:.8,clipPath:"url(#trending-topic_svg__clip0)",stroke:"#000"},o.createElement("circle",{cx:10,cy:10,r:9.5}),o.createElement("path",{d:"M1.46 13.57l4.47-4.48m.04-.01l3.67 3.66m.03 0l5.1-5.1m-2.15-.83h3m0 0v3",strokeLinecap:"round"})),p=o.createElement("defs",null,o.createElement("clipPath",{id:"trending-topic_svg__clip0"},o.createElement("path",{fill:"#fff",d:"M0 0h20v20H0z"})));const f=function(e){return o.createElement("svg",d({width:20,height:20,fill:"none"},e),m,p)};var h=t(27952),g=function(){return{whiteSpace:"nowrap"}},v=function(){return{position:"absolute",left:"-10px",top:"-10px",borderRadius:"50%",backgroundColor:"white",border:"3px solid white"}},x="36px",y=function(e){var n=e.topic,t=e.isTrending,r=void 0!==t&&t,d=Boolean((0,c.P5)("enable_hot_topics")),m=(0,s.Iq)(),p=(0,a.v9)((function(e){return{authDomain:e.config.authDomain}})).authDomain,x=(0,h.KL)(p,n.slug),y=(0,h.Ih)(n.slug,p),E=n.slug?d?y:x:"#";return o.createElement(l.rU,{href:E},o.createElement(l.xu,i()({padding:"8px 16px",marginRight:"8px",backgroundColor:"BASE_NORMAL",borderRadius:"100px",position:"relative"},r&&{marginBottom:"10px"}),r&&o.createElement("div",{className:m(v)},o.createElement(f,null)),o.createElement(u.F,{scale:"M",color:"DARKER"},o.createElement("span",{className:m(g)},n.name))))},E=function(){return o.createElement(l.xu,{marginRight:"8px",height:x,width:"100px",backgroundColor:"BASE_NORMAL",borderRadius:"100px"})}},75670:(e,n,t)=>{"use strict";t.d(n,{F:()=>f});var r=t(28655),i=t.n(r),o=t(98913),a=t.n(o),c=t(71439),l=t(46829),u=t(67294),s=t(50093),d=t(7530);function m(){var e=i()(["\n  query HomepageTopicsQuery {\n    viewer {\n      id\n      followedTopics {\n        id\n        name\n        slug\n      }\n    }\n  }\n"]);return m=function(){return e},e}var p=(0,c.Ps)(m()),f=function(){var e,n=(0,l.useQuery)(p,{ssr:!1}),t=n.loading,r=n.error,i=n.data;return r||null!=i&&i.viewer&&!i.viewer.followedTopics.length?null:u.createElement(d.xu,{display:"flex",flexWrap:"wrap",marginBottom:"20px",sm:{padding:"0 16px"},overflow:"hidden",maxHeight:s.oQ},t?a()(8,(function(e){return u.createElement(s.qj,{key:"entity-placeholder-".concat(e)})})):null==i||null===(e=i.viewer)||void 0===e?void 0:e.followedTopics.map((function(e){return u.createElement(s.Pl,{topic:e,key:"followed-topic-".concat(e.id)})})))}},10963:(e,n,t)=>{"use strict";t.d(n,{P:()=>s,u:()=>d});var r=t(98913),i=t.n(r),o=t(67294),a=t(7530),c=t(28309),l=function(){return o.createElement(a.xu,{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"16px",width:"100%"},o.createElement(a.xu,{width:"100%"},o.createElement(a.xu,{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"20px"},o.createElement(a.xu,{height:"20px",width:"20px",backgroundColor:"BASE_NORMAL",borderRadius:"10px",marginRight:"8px"}),o.createElement(a.xu,{height:"8px",width:"82px",backgroundColor:"BASE_NORMAL"})),o.createElement(a.xu,{width:"80%",height:"16px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),o.createElement(a.xu,{width:"65%",height:"16px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"})),o.createElement(a.xu,{height:"133px",width:"200px",backgroundColor:"BASE_NORMAL"}))},u={"0%":{opacity:"0.8"},"50%":{opacity:"0.5"},"100%":{opacity:"0.8"}},s=function(){var e=(0,c.om)({shimmerKeyframesName:u}).shimmerKeyframesName;return{animation:"".concat(e," 1.2s ease-in-out infinite")}},d=function(e){var n=e.numPlaceholders,t=void 0===n?4:n,r=(0,c.Iq)(),a=s();return o.createElement("div",{className:r((function(){return a}))},i()(t,(function(e){return o.createElement(l,{key:"placeholder-".concat(e)})})))}},3383:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var r=t(67294),i=t(12291),o=t(73882),a=t(98281),c=t(22091),l=t(77714),u=t(83249),s=t(28309),d=t(27952),m=function(e){var n=e.clamp,t=e.children,i=e.rules,o=(0,s.Iq)(),a=(0,s.Fg)(),c=a.newFonts.detail,d=[{fontFamily:c.family,fontWeight:"500"},(0,u.M)({fontConfig:c,scale:"S"}),n?(0,l.V)({clamp:n,lineHeight:16}):void 0,{lineHeight:"16px",color:a.baseColor.text.normal},i];return r.createElement("h4",{className:o(d)},t)};function p(e){var n=e.post,t=n.creator,l=n.collection,u=(0,i.v9)((function(e){return{currentLocation:e.navigation.currentLocation,authDomain:e.config.authDomain}})),s=u.currentLocation,p=u.authDomain;if(!t)return null;var f,h,g=(0,d.AW)(t,p),v=t.name;return null!=l&&l.id&&(null==l?void 0:l.name)!==t.name&&(f=(0,d.WG)(l,s),h=l.name),r.createElement(c.xu,{display:"flex",flexDirection:"row",alignItems:"center"},null!=l&&l.id?r.createElement(o.v,{collection:l,size:20,link:!0}):r.createElement(a.ZP,{user:t,scale:"XXXS",link:!0}),r.createElement(c.xu,{marginLeft:"8px",display:"flex",flexWrap:"wrap",alignItems:"center"},r.createElement(c.rU,{href:g},r.createElement(m,{clamp:1,rules:{paddingRight:"2px"}},v)),h&&r.createElement(c.xu,{display:"flex"},r.createElement(m,{rules:{paddingRight:"2px",color:"#757575"}},"in"),r.createElement(c.rU,{href:f,display:"inline-block"},r.createElement(m,{clamp:1},h)))))}},83850:(e,n,t)=>{"use strict";t.d(n,{d:()=>s});var r=t(28655),i=t.n(r),o=t(71439),a=t(73882),c=t(98281),l=t(27952);function u(){var e=i()(["\n  fragment PostPreviewAvatar_post on Post {\n    __typename\n    id\n    collection {\n      id\n      name\n      ...CollectionAvatar_collection\n      ...collectionUrl_collection\n    }\n    creator {\n      id\n      username\n      name\n      ...UserAvatar_user\n      ...userUrl_user\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return u=function(){return e},e}var s=(0,o.Ps)(u(),a.d,l.nf,c.WQ,l.$m)},39393:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s,L:()=>d});var r=t(28655),i=t.n(r),o=t(71439),a=t(67294),c=t(64504),l=t(27390);function u(){var e=i()(["\n  fragment PostListingReadingTime_post on Post {\n    readingTime\n  }\n"]);return u=function(){return e},e}function s(e){var n=e.readingTime,t=e.scale,r=void 0===t?"S":t;return a.createElement(c.F,{scale:r,tag:"span"},"".concat((0,l.Vd)(n||0)," min read"))}var d=(0,o.Ps)(u())},88065:(e,n,t)=>{"use strict";t.d(n,{e:()=>r.Z,z:()=>r.z});var r=t(86753)},78820:(e,n,t)=>{"use strict";t.d(n,{Zu:()=>w,n_:()=>E,xt:()=>v,KQ:()=>x,In:()=>y,PB:()=>_});var r=t(63038),i=t.n(r),o=t(28655),a=t.n(o),c=t(46829),l=t(71439),u=t(67294);function s(){var e=a()(["\n  mutation postSetPinnedByCreatorAt($postId: ID!, $isPinned: Boolean!) {\n    postSetPinnedByCreatorAt(targetPostId: $postId, isPinned: $isPinned) {\n      __typename\n      ... on Post {\n        id\n        pinnedByCreatorAt\n      }\n    }\n  }\n"]);return s=function(){return e},e}function d(){var e=a()(["\n  mutation setPinnedAt($postId: ID!, $collectionId: ID!, $pinnedAt: Boolean!) {\n    __typename\n    setPinnedAt(targetPostId: $postId, targetCollectionId: $collectionId, pinnedAt: $pinnedAt) {\n      __typename\n      ... on Post {\n        id\n        collection {\n          id\n        }\n        pendingCollection {\n          id\n        }\n        pinnedAt\n      }\n    }\n  }\n"]);return d=function(){return e},e}var m=(0,l.Ps)(d()),p=(0,l.Ps)(s()),f=t(61250),h=t(27952);function g(){var e=a()(["\n  fragment useIsPinnedInContext_post on Post {\n    id\n    collection {\n      id\n    }\n    pendingCollection {\n      id\n    }\n    pinnedAt\n    pinnedByCreatorAt\n  }\n"]);return g=function(){return e},e}var v=(0,l.Ps)(g()),x=function(e){var n=e.id,t=e.collection,r=e.pendingCollection,o=e.pinnedAt,a=(t||r||{id:""}).id,l=(0,c.useMutation)(m,{optimisticResponse:{__typename:"Mutation",setPinnedAt:{__typename:"Post",id:n,collection:t,pendingCollection:r,pinnedAt:o?0:Date.now()}}}),s=i()(l,1)[0],d=u.useCallback((function(){return s({variables:{postId:n,collectionId:a,pinnedAt:!o}})}),[n,a,o,s]);return[o,d]},y=function(e){var n=e.id,t=e.pinnedByCreatorAt,r=(0,c.useMutation)(p,{optimisticResponse:{postSetPinnedByCreatorAt:{__typename:"Post",id:n,pinnedByCreatorAt:t?0:Date.now()}}}),o=i()(r,1)[0],a=u.useCallback((function(){return o({variables:{postId:n,isPinned:!t}})}),[n,o,t]);return[t,a]},E=function(e,n){var t=x(e),r=i()(t,2),o=r[0],a=r[1],c=y(e),l=i()(c,2),s=l[0],d=l[1],m=u.useCallback((function(){return"Collection"===n?a():d()}),[n,a,d]);return["Collection"===n?o:s,m]},_=function(e,n){var t="Collection"===e.__typename?e.slug:null,r=(0,f.GE)("ShowCollectionHome",t?{collectionSlug:t}:{collectionSlug:""});return"Collection"===e.__typename?r:"User"===e.__typename&&e.username?(0,h.AW)(e,n):""},w=function(e){switch(e.__typename){case"Collection":return"Publication";case"User":return"Author";default:return"Publisher"}}},25752:(e,n,t)=>{"use strict";t.d(n,{z:()=>r});var r=t(67294).createContext({isFetching:!1})},67900:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var r=t(34575),i=t.n(r),o=t(93913),a=t.n(o),c=t(81506),l=t.n(c),u=t(2205),s=t.n(u),d=t(78585),m=t.n(d),p=t(29754),f=t.n(p),h=t(67294),g=t(25752);const v=function(e){s()(o,e);var n,t,r=(n=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(n);if(t){var i=f()(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return m()(this,e)});function o(e){var n;return i()(this,o),(n=r.call(this,e)).bottomEdgeEl=void 0,n.maybeFetch=void 0,n.state={isFetching:!1},n.maybeFetch=n._maybeFetch.bind(l()(n)),n}return a()(o,[{key:"componentDidMount",value:function(){this.attachScrollListener(),this._maybeFetch()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener()}},{key:"_maybeFetch",value:function(){var e=this;if(this.bottomEdgeEl&&!this.state.isFetching){var n=this.props.fetchMore;if(n){var t=this.bottomEdgeEl.getBoundingClientRect(),r=window.innerHeight;t.top-r<3*r&&(this.setState({isFetching:!0}),n().then((function(){e.setState({isFetching:!1}),e._maybeFetch()})))}}}},{key:"attachScrollListener",value:function(){window.addEventListener("scroll",this.maybeFetch),window.addEventListener("resize",this.maybeFetch)}},{key:"detachScrollListener",value:function(){window.removeEventListener("scroll",this.maybeFetch),window.removeEventListener("resize",this.maybeFetch)}},{key:"render",value:function(){var e=this,n=this.props.children;return h.createElement(g.z.Provider,{value:{isFetching:this.state.isFetching}},h.createElement("div",null,n,h.createElement("div",{ref:function(n){e.bottomEdgeEl=n}})))}}]),o}(h.Component)},84530:(e,n,t)=>{"use strict";t.d(n,{y:()=>c});var r=t(67294),i=t(28309),o=t(7650),a=function(e){return{fill:e.baseColor.text.lighter,paddingLeft:"6px",height:"100%",position:"relative",transform:"translateY(-1.25px)",fontSize:"15px",lineHeight:"20px"}},c=function(){var e=(0,i.Fg)(),n=(0,i.Iq)();return r.createElement("span",{className:n(a(e))},r.createElement(o.Z,null))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2876.e63981f7.chunk.js.map