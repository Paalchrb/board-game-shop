(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),s=t.n(c),l=(t(94),t(30)),o=t(35),i=t(4),m=t.n(i),u=t(18),d=t(19),p=t(21),h=t(20),g=t(22),E=t(141),v=t(37),f=t.n(v),y=t(143),b=t(144),O=t(146),w=t(58),k=t(138),C=t(147),N=t(145),S=t(142),x=["KUBCKBkGxV","a8NM5cugJX","MWoxgHrOJD","PinhJrhnxU","eX8uuNlQkQ","ODWOjWAJj3","bCBXJy9qDw","mavSOM8vjH","N0TkEGfEsF","v4SfYtS2Lr","yq6hVlbM2R","7rV11PKqME","ZTneo8TaIO","upXZ8vNfNO","TYnxiuiI3X","rrvd68LjOR","QAYkTHK1Dd","X8J7RM6dxX","3B3QpKvXD3","O0ogzwLUe8","jX8asGGR6o"],_="https://www.boardgameatlas.com/api";function T(e){var a,t,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(fetch("".concat(_,"/search?ids=").concat(e,"&client_id=").concat("SB1VGnDv7M"),{method:"GET"}));case 2:return a=r.sent,r.next=5,m.a.awrap(a.json());case 5:return t=r.sent,n=t.games[0],r.abrupt("return",n);case 8:case"end":return r.stop()}}))}function G(){var e,a,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(fetch("".concat(_,"/game/categories?client_id=").concat("SB1VGnDv7M"),{method:"GET",headers:{"Content-Type":"application/json"}}));case 2:return e=n.sent,n.next=5,m.a.awrap(e.json());case 5:return a=n.sent,t=a.categories.filter((function(e){return x.includes(e.id)})),n.abrupt("return",t);case 8:case"end":return n.stop()}}))}function j(e,a,t,n,r){var c,s,l,o;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return c="".concat(_,"/search?name=").concat(a,"&fuzzy_match=true&limit=").concat(32,"&categories=").concat(e,"&skip=").concat(32*r,"&ascending=false&gt_min_players=").concat(t-1,"&lt_max_players=").concat(n+1,"&order_by=popularity&client_id=").concat("SB1VGnDv7M","&gt_price=").concat(.01),i.next=3,m.a.awrap(fetch(c,{method:"GET"}));case 3:return s=i.sent,i.next=6,m.a.awrap(s.json());case 6:return l=i.sent,o=l.games,i.abrupt("return",o);case 9:case"end":return i.stop()}}))}var R=function(e){return function(a){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(T(e));case 3:if(t=n.sent){n.next=6;break}return n.abrupt("return",a({type:"ADD_TO_CART_ERROR",payload:{msg:"Could not find any matching games"}}));case 6:a({type:"ADD_TO_CART",payload:t}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a({type:"ADD_TO_CART_ERROR",payload:n.t0});case 12:case"end":return n.stop()}}),null,null,[[0,9]])}},A=function(e){return function(a){var t,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=JSON.parse(localStorage.getItem("cart-items"))||[],r.prev=1,r.next=4,m.a.awrap(T(e));case 4:if(n=r.sent){r.next=7;break}return r.abrupt("return",a({type:"ADD_TO_CART_ERROR",payload:{msg:"Could not find any matching games"}}));case 7:return a({type:"ADD_TO_CART",payload:n}),t.push(n),localStorage.setItem("cart-items",JSON.stringify(t)),r.abrupt("return",n);case 13:r.prev=13,r.t0=r.catch(1),a({type:"ADD_TO_CART_ERROR",payload:r.t0});case 16:case"end":return r.stop()}}),null,null,[[1,13]])}},F=function(e){return function(a){var t=JSON.parse(localStorage.getItem("cart-items"))||[],n=t.findIndex((function(a){return a.id===e}));a({type:"REMOVE_FROM_CART",payload:e}),-1!==n&&t.splice(n,1),localStorage.setItem("cart-items",JSON.stringify(t))}},L=function(){return function(e){e({type:"TOGGLE_SHOW_CART"})}},D=t(78),I=t.n(D),B=function(e){return function(a){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(T(e));case 3:return t=n.sent,a({type:"GET_GAME_DETAILS",payload:t}),n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),a({type:"GAME_DETAILS_ERROR",payload:n.t0});case 11:case"end":return n.stop()}}),null,null,[[0,8]])}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(c){var s;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,m.a.awrap(j(e,a,t,n,r));case 3:return s=l.sent,c({type:"GET_GAMES_BY_CATEGORIES",payload:s}),l.abrupt("return",s);case 8:l.prev=8,l.t0=l.catch(0),c({type:"GET_GAMES_BY_CATEGORIES_ERROR",payload:l.t0});case 11:case"end":return l.stop()}}),null,null,[[0,8]])}},M=function(){return function(e){e({type:"START_LOADING"})}},J=function(){return function(e){e({type:"UNLOAD"})}},K=function(){return function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(G());case 3:return a=t.sent,e({type:"GET_CATEGORIES",payload:a}),t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),e({type:"GET_CATEGORIES_ERROR",payload:t.t0});case 11:case"end":return t.stop()}}),null,null,[[0,8]])}},H=function(e){return function(a){a({type:"SET_PAGE",payload:e})}},U=t(12),W=t(148),Y=t(149),V=t(46),X=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).handleChangePage=function(e,a){var n,r,c,s,l,o,i,u,d,p;return m.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:return a.preventDefault(),n=t.props,r=n.categories.page,(0,n.setPage)((c=r+e)<0?0:r+e),s=t.props,l=s.getGamesByFilter,o=s.setLoader,i=s.stopLoader,u=s.searchText,t.topOfPage(),h.next=8,m.a.awrap(o());case 8:return(d=JSON.parse(localStorage.getItem("checked-cats"))||"")&&(d=d.join(",")),p=u||void 0,h.next=13,m.a.awrap(l(d,p,void 0,void 0,c));case 13:return h.next=15,m.a.awrap(i());case 15:case"end":return h.stop()}}))},t.state={showScrollButton:"hideScrollButton",page:0,discountPrice:"noOverline"},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e,a,t,n,r,c,s,l,o;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=this.props,a=e.setLoader,t=e.stopLoader,n=e.getGamesByFilter,r=e.searchText,c=e.categories,s=c.players,l=c.page,i.next=3,m.a.awrap(a());case 3:return o=JSON.parse(localStorage.getItem("checked-cats"))||[],i.next=6,m.a.awrap(n(o.join(","),r,s[0],s[1],l));case 6:return i.next=8,m.a.awrap(t());case 8:window.addEventListener("scroll",this.handleScroll.bind(this));case 9:case"end":return i.stop()}}),null,this)}},{key:"componentWillUnmount",value:function(){this.setState({showScrollButton:"hideScrollButton"}),window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"handleDetailsClick",value:function(e){this.props.history.push("details/".concat(e))}},{key:"handleScrollTopClick",value:function(){return window.scrollTo({top:0,behavior:"smooth",block:"center"})}},{key:"handleScroll",value:function(){var e=window.scrollY;e>540?this.setState({showScrollButton:"showScrollButton"}):e<=539&&this.setState({showScrollButton:"hideScrollButton"})}},{key:"topOfPage",value:function(){return window.scrollTo({top:0})}},{key:"handleCartClick",value:function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.addToCart,t.next=3,m.a.awrap(a(e));case 3:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state.showScrollButton,t=this.props.games,c=t.games,s=t.error,l=this.props,o=l.loading,i=l.categories.page;if(!c)return r.a.createElement("div",null,"No games found");if(s)return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Something went wrong!"));if(o){var m=Array.from(new Array(30)).map((function(e,a){return r.a.createElement(k.a,{item:!0,xs:12,sm:6,md:3,lg:3,className:"overviewGrid",key:a},r.a.createElement(E.a,{className:"skeleton-card"},r.a.createElement(S.a,{className:"skeleton-image",variant:"rect"}),r.a.createElement(S.a,{className:"skeleton-text",width:"83%"}),r.a.createElement(S.a,{className:"skeleton-text",width:"38%"}),r.a.createElement(S.a,{className:"skeleton-button",variant:"rect"})))}));return r.a.createElement(k.a,{container:!0,spacing:3,className:"overviewGridContainer"},m)}var u=c.map((function(a,t){return r.a.createElement(k.a,{item:!0,xs:12,sm:6,md:3,lg:3,className:"overviewGrid",key:t},r.a.createElement(E.a,{className:"game-card"},r.a.createElement(y.a,{className:"gameOverview",onClick:function(){return e.handleDetailsClick(a.id)}},r.a.createElement(b.a,{image:a.images.small,title:a.name}),r.a.createElement("img",{src:a.images.small,alt:a.name}),r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h2"},a.name),r.a.createElement(w.a,{variant:"body2",component:"p",className:"price"},a.discount>.3?r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"originalPrice"},V.format((9.18*a.price).toFixed(0),{precision:0,thousand:".",code:"NOK"})),r.a.createElement("span",{className:"salePrice"},V.format((a.price*(1-a.discount)*9.18).toFixed(0),{precision:0,thousand:".",code:"NOK"})),r.a.createElement(N.a,{className:"sale",badgeContent:(100*a.discount).toFixed(0)+"%",color:"secondary"})):r.a.createElement("span",null,V.format((9.18*a.price).toFixed(0),{precision:0,thousand:".",code:"NOK"})))),r.a.createElement(O.a,{variant:"contained",color:"primary",className:"add-to-cart-btn",onClick:function(){return e.handleCartClick(a.id)}},r.a.createElement(f.a,null),"Legg i kurv")))}));return r.a.createElement("div",null,r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{container:!0,spacing:3,className:"overviewGridContainer"},u),r.a.createElement(C.a,{color:"secondary",className:a,onClick:this.handleScrollTopClick.bind(this),size:"small","aria-label":"scroll back to top"},r.a.createElement(I.a,null))),r.a.createElement("div",{className:"pagenation"},0!==i&&r.a.createElement("button",{onClick:this.handleChangePage.bind(this,-1)},r.a.createElement(W.a,null)),r.a.createElement(w.a,{variant:"body2"},"Page ",i+1),32===c.length&&r.a.createElement("button",{onClick:this.handleChangePage.bind(this,1)},r.a.createElement(Y.a,null))))}}]),a}(r.a.Component);var z={setLoader:M,stopLoader:J,addToCart:A,getGamesByFilter:P,setPage:H},Q=Object(U.b)((function(e){return{games:e.games,loading:e.loading.isLoading,searchText:e.search.searchText,categories:e.categories}}),z)(X),q=t(46),Z=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={relatedGames:[],error:null},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e,a,t,n,r,c,s,l,o,i;return m.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,e=this.props,a=e.getAllCategories,t=e.getGamesByFilter,n=e.getGameDetails,r=e.setLoader,c=e.stopLoader,u.next=4,m.a.awrap(r());case 4:return u.next=6,m.a.awrap(a());case 6:return u.next=8,m.a.awrap(n(this.props.match.params.id));case 8:return s=u.sent,u.next=11,m.a.awrap(s.categories.map((function(e){return e.id})));case 11:return l=u.sent,u.next=14,m.a.awrap(l[0]);case 14:return o=u.sent,u.next=17,m.a.awrap(t(o));case 17:return i=u.sent,this.setState({relatedGames:i}),u.next=21,m.a.awrap(c());case 21:u.next=26;break;case 23:u.prev=23,u.t0=u.catch(0),this.setState({error:u.t0});case 26:case"end":return u.stop()}}),null,this,[[0,23]])}},{key:"componentDidUpdate",value:function(e,a){var t,n,r;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=this.props,n=t.getGameDetails,r=t.stopLoader,this.props.match.params.id===e.match.params.id){a.next=5;break}return a.next=4,m.a.awrap(n(this.props.match.params.id));case 4:r();case 5:case"end":return a.stop()}}),null,this)}},{key:"handleCartClick",value:function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.addToCart,t.next=3,m.a.awrap(a(e));case 3:case"end":return t.stop()}}),null,this)}},{key:"handleDetailsClick",value:function(e,a){var t,n,r,c;return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.history,r=t.getGameDetails,(0,t.setLoader)(),e.next=4,m.a.awrap(r(a));case 4:c=e.sent,this.setState({chosenGame:c}),n.push("/details/".concat(a));case 7:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(!this.props.games.chosenGame.name)return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Something went wrong!"));var a=this.state,t=a.relatedGames,c=a.error,s=this.props.games.chosenGame,o=s.id,i=s.name,m=s.min_players,u=s.max_players,d=s.min_playtime,p=s.max_playtime,h=s.min_age,g=s.categories,v=s.description_preview,b=s.images.medium,k=s.price,C=s.discount,x=s.primary_publisher,_=s.average_user_rating,T=s.rules_url,G=this.props.loading,j=this.props.categories.categories;if(c)return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,c.message));if(G)return r.a.createElement("div",{className:"details-container"},r.a.createElement(S.a,{className:"title",height:"70px",width:"300px"}),r.a.createElement(S.a,{className:"img",height:"90%",width:"300px",margin:"0"}),r.a.createElement(S.a,{className:"VIPDetails"}),r.a.createElement(S.a,{className:"add-to-cart-btn",height:"40px"}),r.a.createElement(S.a,{className:"description",height:"400px"}),r.a.createElement(S.a,{className:"price",width:"80px"}),r.a.createElement(S.a,{className:"extra-details"}));var R=g.map((function(e){return j.find((function(a){return a.id===e.id}))})).filter((function(e){return e})),A=t.filter((function(e){return e.id!==o})).map((function(a){return r.a.createElement(E.a,{className:"game-card",key:a.id},r.a.createElement(y.a,{className:"gameOverview",onClick:function(t){return e.handleDetailsClick(t,a.id)}},r.a.createElement("img",{src:a.images.small,alt:a.name}),r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h2"},a.name),r.a.createElement(w.a,{variant:"body2",component:"p",className:"price"},q.format((9.18*a.price).toFixed(0),{precision:0,thousand:".",code:"NOK"}))),r.a.createElement(O.a,{variant:"contained",color:"primary",className:"add-to-cart-btn",onClick:function(){return e.handleCartClick(a.id)}},r.a.createElement(f.a,null),"Legg i kurv"))})).slice(0,10);return r.a.createElement(n.Fragment,null,r.a.createElement(l.b,{to:"/",id:"home"},r.a.createElement(w.a,{variant:"overline"},"Home")),r.a.createElement(l.b,{to:"/overview",id:"overview"},r.a.createElement(w.a,{variant:"overline"},"Game Overview")),r.a.createElement("div",{className:"details-container"},r.a.createElement(w.a,{variant:"h3",className:"title"},i),r.a.createElement("img",{src:b,className:"img",alt:i}),r.a.createElement("ul",{className:"VIPDetails"},r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1",className:"bold"},"Players:")," ",m?m+"-"+u:"Unknown"),r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1",className:"bold"}," Categories:")," "+R.map((function(e){return e.name})).join(", ")),r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1",className:"bold"},"Playtime:")," ",d?d+"-"+p:"Unknown"," min."),r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1",className:"bold"},"Minimum age:")," ",h||"Unknown")),r.a.createElement(O.a,{variant:"contained",color:"primary",className:"add-to-cart-btn",onClick:function(){return e.handleCartClick(o)}},r.a.createElement(f.a,null),"Legg i kurv"),r.a.createElement(w.a,{variant:"body1",className:"description"},v),r.a.createElement(w.a,{variant:"h6",className:"price"},C>.3?r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"originalPrice"},q.format((9.18*k).toFixed(0),{precision:0,thousand:".",code:"NOK"})),r.a.createElement("span",{className:"salePrice-details"},q.format((k*(1-C)*9.18).toFixed(0),{precision:0,thousand:".",code:"NOK"})),r.a.createElement(N.a,{className:"sale",badgeContent:(100*C).toFixed(0)+"%",color:"secondary"})):r.a.createElement("span",null,q.format((9.18*k).toFixed(0),{precision:0,thousand:".",code:"NOK"}))),r.a.createElement("ul",{className:"extra-details"},r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1",className:"bold"},"Publisher:")," ",x),r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1",className:"bold"},"Rating:")," ",_?_.toFixed(1):0),r.a.createElement("li",null,r.a.createElement(w.a,{variant:"body1"},r.a.createElement("a",{href:T,target:"blank"},T?"Rules":"No rules found"))))),r.a.createElement(w.a,{variant:"h4",component:"h4",id:"related-title"},"Related games:"),r.a.createElement("div",{className:"relatedGames"},A))}}]),a}(n.Component),$={getGameDetails:B,getAllCategories:K,addToCart:A,getGamesByFilter:P,setLoader:M,stopLoader:J},ee=Object(U.b)((function(e){return{games:e.games,categories:e.categories,loading:e.loading.isLoading}}),$)(Z),ae=t(85),te=t(164),ne=t(150),re=t(80),ce=t.n(re),se=t(84),le=t(151),oe=Object(se.a)({overrides:{MuiSlider:{thumb:{color:"rgb(142, 61, 81)"},track:{color:"rgb(80, 19, 0)"}}}}),ie=Object(ne.a)({root:{width:250,padding:"1rem",marginTop:"2rem",marginLeft:"1.4rem",color:"red"}}),me={setPlayerRange:function(e){return function(a){a({type:"SET_PLAYER_RANGE",payload:e})}},getGamesByFilter:P,setPage:H},ue=Object(U.b)((function(e){return{categories:e.categories,searchText:e.search.searchText}}),me)(Object(o.f)((function(e){var a=e.setPlayerRange,t=e.getGamesByFilter,c=e.history,s=e.searchText,l=e.categories.players,o=e.setPage,i=ie(),m=JSON.parse(localStorage.getItem("checked-cats"))||[],u=r.a.useState([l[0],l[1]]),d=Object(ae.a)(u,2),p=d[0],h=d[1];return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{className:"players-heading",variant:"body1"},r.a.createElement(ce.a,null),"   Choose player range:"),r.a.createElement("div",{className:i.root},r.a.createElement(le.a,{theme:oe},r.a.createElement(te.a,{min:1,max:20,step:1,value:p,onChange:function(e,a){h(a)},onMouseUp:function(){a(p),o(0),t(m.join(","),s,p[0],p[1],0),"/overview"!==c.location.pathname&&c.push("/overview")},valueLabelDisplay:"on","aria-labelledby":"discrete-slider-always"}))))}))),de=t(154),pe=t(165),he=t(152),ge=t(153),Ee=t(163),ve=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).componentDidMount=function(){var e,a,n,r,c,s,l;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.props,a=e.getAllCategories,n=e.setLoader,r=e.stopLoader,c=e.toggleCategoryCheck,n(),o.next=4,m.a.awrap(a());case 4:s=o.sent,(l=JSON.parse(localStorage.getItem("checked-cats"))||[]).length&&l.forEach((function(e){return c(e)})),r(),localStorage.setItem("categories",JSON.stringify(s));case 9:case"end":return o.stop()}}))},t.handleClick=function(e){var a,n,r,c,s,l,o,i,u,d;return m.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return a=t.props,n=a.toggleCategoryCheck,r=a.getGamesByFilter,c=a.setPage,s=a.history,l=a.categories.players,o=a.searchText,p.next=3,m.a.awrap(n(e));case 3:return i=p.sent,u=JSON.parse(localStorage.getItem("checked-cats"))||[],-1!==(d=u.indexOf(e))?u.splice(d,1):u.push(i),p.next=9,m.a.awrap(c(0));case 9:return p.next=11,m.a.awrap(r(u.join(","),o,l[0],l[1],0));case 11:localStorage.setItem("checked-cats",JSON.stringify(u)),"/overview"!==s.location.pathname&&s.push("/overview");case 13:case"end":return p.stop()}}))},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleScrollTopClick",value:function(){return window.scrollTo({top:0,behavior:"smooth",block:"center"})}},{key:"render",value:function(){var e=this,a=(this.props.categories.categories||JSON.parse(localStorage.getItem("categories"))||[]).map((function(a,t){return r.a.createElement(pe.a,{key:t,role:void 0,dense:!0,button:!0,onClick:e.handleClick.bind(e,a.id)},r.a.createElement(he.a,null,r.a.createElement(Ee.a,{className:"checkbox",checked:a.checked,value:a.id})),r.a.createElement(ge.a,{primary:a.name}))}));return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{className:"players-heading",variant:"body1"},"Choose categories:"),r.a.createElement(de.a,{className:"table-container"},a))}}]),a}(r.a.Component);var fe={getAllCategories:K,toggleCategoryCheck:function(e){return function(a){return a({type:"CHECK_CATEGORY",payload:e}),e}},getGamesByFilter:P,setPage:H,setLoader:M,stopLoader:J},ye=Object(U.b)((function(e){return{categories:e.categories,games:e.games,loading:e.loading.isLoading,searchText:e.search.searchText}}),fe)(Object(o.f)(ve)),be=t(155),Oe=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{align:"center",gutterBottom:!0,color:"textPrimary",variant:"overline",component:"h3"},"Sorter:"),r.a.createElement(be.a,null),r.a.createElement(ue,null),r.a.createElement(be.a,null),r.a.createElement(ye,null))}}]),a}(r.a.Component),we=t(156),ke=t(46),Ce={removeFromCart:F},Ne=Object(U.b)((function(e){return{shopcart:e.shopcart}}),Ce)((function(e){var a=e.shopcart.cartItems,t=void 0===a?[]:a,c=e.removeFromCart;if(!t.length)return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{variant:"body1",style:{textAlign:"center",marginTop:"1rem"}},"No items in cart!"));var s=t.map((function(e,a){return r.a.createElement("div",{className:"shopcart-item",key:a},r.a.createElement("img",{src:e.images.thumb,alt:e.name}),r.a.createElement(w.a,{className:"shopcart-name",variant:"h5"},e.name),r.a.createElement(w.a,{className:"shopcart-price",variant:"body1"},e.discount>.3?r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:"salePrice-details"},ke.format((e.price*(1-e.discount)*9.18).toFixed(0),{precision:0,thousand:".",code:"NOK"})," ",r.a.createElement("span",{className:"percentageSale"},100*e.discount,"%"))):r.a.createElement("span",null,ke.format((9.18*e.price).toFixed(0),{precision:0,thousand:".",code:"NOK"}))),r.a.createElement(we.a,{className:"remove-from-cart-btn",onClick:function(){return a=e.id,void c(a);var a}}))}));return r.a.createElement(n.Fragment,null,s)})),Se=t(46),xe=Object(U.b)((function(e){return{shopcart:e.shopcart}}),null)((function(e){var a=e.shopcart.cartItems;return r.a.createElement(n.Fragment,null,a.length?r.a.createElement("div",{className:"sum-container"},r.a.createElement(w.a,{variant:"h5"},"Sum:"),r.a.createElement(w.a,{className:"shopcart-price",variant:"body1"},Se.format((9.18*a.reduce((function(e,a){return e+(a.discount>.3?+a.price*(1-a.discount):+a.price)}),0)).toFixed(0),{precision:0,thousand:".",code:"NOK"}))):r.a.createElement(n.Fragment,null))})),_e=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).handleCrossClick=function(){(0,t.props.toggleShopcart)()},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.loading;return e.shopcart.error?r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Error"),r.a.createElement("p",null,"Something went wrong")):r.a.createElement(n.Fragment,null,a?r.a.createElement("p",null,"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement(we.a,{color:"primary",className:"shopcart-close-btn",onClick:this.handleCrossClick.bind(this)}),r.a.createElement("div",{className:"shopcart-content"},r.a.createElement(w.a,{variant:"h3",component:"h3"},"Shopping cart:"),r.a.createElement(Ne,null),r.a.createElement(xe,null))))}}]),a}(n.Component),Te={updateCart:R,removeFromCart:F,setLoader:M,stopLoader:J,toggleShopcart:L},Ge=Object(U.b)((function(e){return{shopcart:e.shopcart,loading:e.loading.isLoading}}),Te)(_e),je=t(157),Re=t(158),Ae=t(81),Fe=t.n(Ae),Le=t(159),De=t(160),Ie=t(162),Be=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).toggleFilter=function(e){t.setState({left:e})},t.handleShopcartClick=function(){(0,t.props.toggleShopcart)()},t.handleSeachIconClick=function(){(0,t.props.toggleSearchField)()},t.handleSearchFieldChange=function(e){var a=e.target.value;(0,t.props.updateSearchWord)(a)},t.state={left:!1},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=this.props.updateCart,0!==this.props.shopcart.cartItems.length){a.next=9;break}return a.next=4,m.a.awrap(JSON.parse(localStorage.getItem("cart-items")));case 4:if(a.t0=a.sent,a.t0){a.next=7;break}a.t0=[];case 7:a.t0.forEach((function(a){return e(a.id)}));case 9:document.addEventListener("keydown",this.handleEnterPress.bind(this));case 10:case"end":return a.stop()}}),null,this)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEnterPress.bind(this))}},{key:"handleEnterPress",value:function(e){var a,t,n,r,c,s,l;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(13!==e.keyCode){o.next=9;break}return a=this.props,t=a.history,n=a.setPage,r=a.getGamesByFilter,c=a.search.searchText,s=a.setLoader,l=a.stopLoader,"/overview"!==t.location.pathname&&t.push("/overview"),s(),localStorage.removeItem("checked-cats"),n(0),o.next=8,m.a.awrap(r("",c,void 0,void 0,0));case 8:l();case 9:case"end":return o.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state.left,t=this.props,n=t.shopcart,c=n.showCart,s=n.cartItems,o=t.search,i=o.showSearchField,m=o.searchText;return r.a.createElement("div",{className:"navbar-container"},r.a.createElement(je.a,{className:"navbar-main"},r.a.createElement(Re.a,null,r.a.createElement(Fe.a,{className:"filter-menu",onClick:this.toggleFilter.bind(this,!0)}),r.a.createElement(Ie.a,{anchor:"left",open:a,onClose:this.toggleFilter.bind(this,!1)},r.a.createElement("div",{className:"sortList",role:"presentation",onClick:e.toggleFilter.bind(e,!0),onKeyDown:e.toggleFilter.bind(e,!0)},r.a.createElement(Oe,null))),r.a.createElement(w.a,{variant:"h6",className:"navbar-title"},r.a.createElement(l.b,{to:"/"},"BoardGames")),i&&r.a.createElement("input",{autoFocus:!0,type:"text",placeholder:"Search!",className:"search-field",value:m,onChange:this.handleSearchFieldChange.bind(this)}),r.a.createElement(O.a,{onClick:this.handleSeachIconClick.bind(this)},r.a.createElement(Le.a,{className:"search-icon"})),r.a.createElement(O.a,{color:"inherit",onClick:this.handleShopcartClick.bind(this)},r.a.createElement(N.a,{badgeContent:s.length,color:"secondary"},r.a.createElement(De.a,null)),"Handlekurv"),r.a.createElement(Ie.a,{anchor:"right",open:c,onClose:this.handleShopcartClick.bind(this),className:"shopcart-container"},r.a.createElement(w.a,{variant:"h2",className:"navbar-title"},r.a.createElement(Ge,null))))))}}]),a}(n.Component),Pe={toggleShopcart:L,toggleSearchField:function(){return function(e){e({type:"TOGGLE_SEARCH_FIELD"})}},updateSearchWord:function(e){return function(a){a({type:"UPDATE_SEARCH_WORD",payload:e})}},getGamesByFilter:P,setLoader:M,stopLoader:J,updateCart:R,setPage:H},Me=Object(U.b)((function(e){return{shopcart:e.shopcart,search:e.search}}),Pe)(Object(o.f)(Be)),Je=t(161),Ke=t(46),He=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={gameImage:"",startSlide:0,endSlide:4},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e,a,t,n,r,c,s;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=this.props,a=e.getGameDetails,t=e.getGamesByFilter,n=e.setLoader,r=e.stopLoader,n(),l.next=4,m.a.awrap(a("mce5HZPnF5"));case 4:return c=l.sent,l.next=7,m.a.awrap(t());case 7:s=c.images.medium,this.setState({gameImage:s}),r();case 10:case"end":return l.stop()}}),null,this)}},{key:"handleOverviewClick",value:function(){this.props.history.push("/overview")}},{key:"handleCartClick",value:function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.addToCart,t.next=3,m.a.awrap(a(e));case 3:case"end":return t.stop()}}),null,this)}},{key:"handleDetailsClick",value:function(e){this.props.history.push("details/".concat(e))}},{key:"handleForwardClick",value:function(){var e=this.state,a=e.startSlide,t=e.endSlide;t>30?this.setState({startSlide:0,endSlide:4}):this.setState({startSlide:a+4,endSlide:t+4})}},{key:"handleBackwardClick",value:function(){var e=this.state,a=e.startSlide,t=e.endSlide;0===a?this.setState({startSlide:0,endSlide:4}):this.setState({startSlide:a-4,endSlide:t-4})}},{key:"render",value:function(){var e=this,a=this.state,t=a.startSlide,c=a.endSlide,s=this.props.games.games;if(this.props.loading){var l=Array.from(new Array(4)).map((function(e){return r.a.createElement(E.a,{className:"game-card",key:e},r.a.createElement(S.a,{className:"skeleton-image",variant:"rect"}),r.a.createElement(S.a,{className:"skeleton-text",width:"83%"}),r.a.createElement(S.a,{className:"skeleton-text",width:"38%"}),r.a.createElement(S.a,{className:"skeleton-button",variant:"rect"}))})).slice(t,c);return r.a.createElement("div",{className:"landing-container"},r.a.createElement(S.a,{className:"skeletonImg",variant:"rect"}),r.a.createElement("div",{className:"skeletonText"},r.a.createElement(S.a,{className:"skeletonTitle"}),r.a.createElement(S.a,{className:"skeletonDesc"}),r.a.createElement(S.a,{className:"skeletonBtn",variant:"rect"})),r.a.createElement("div",{className:"skeleton-slider"},l))}var o=s.map((function(a,t){return r.a.createElement(E.a,{key:t,className:"game-card"},r.a.createElement(y.a,{className:"game-landing",onClick:function(){return e.handleDetailsClick(a.id)}},r.a.createElement(b.a,{image:a.images.small,title:a.name}),r.a.createElement("img",{src:a.images.small,alt:a.name}),r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h2"},a.name),r.a.createElement(w.a,{variant:"body2",component:"p",className:"price"},a.discount>.3?r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"originalPrice"},Ke.format((9.18*a.price).toFixed(0),{precision:0,thousand:".",code:"NOK"})),r.a.createElement("span",{className:"salePrice"},Ke.format((a.price*(1-a.discount)*9.18).toFixed(0),{precision:0,thousand:".",code:"NOK"})),r.a.createElement(N.a,{className:"sale",badgeContent:(100*a.discount).toFixed(0)+"%",color:"secondary"})):r.a.createElement("span",null,Ke.format((9.18*a.price).toFixed(0),{precision:0,thousand:".",code:"NOK"})))),r.a.createElement(O.a,{variant:"contained",color:"primary",className:"add-to-cart-btn",onClick:function(){return e.handleCartClick(a.id)}},r.a.createElement(f.a,null),"Legg i kurv"))})).slice(t,c);return r.a.createElement("div",{className:"landing-container"},r.a.createElement("img",{src:this.state.gameImage,alt:"board game legacy",className:"landing-image"}),r.a.createElement("div",{className:"landing-text"},r.a.createElement(w.a,{variant:"h2"},"WELCOME TO BOARDGAMES"),r.a.createElement(w.a,{variant:"h5",className:"landing-text"},"Boardgames is one of the largest portals for browsing and buying board games in the world. Start browsing from more than 10.000 games and find your new favorite game!"),r.a.createElement(O.a,{className:"btn landing-btn",onClick:this.handleOverviewClick.bind(this)},"See all games")),r.a.createElement("div",{className:"landing-popGames"},r.a.createElement(w.a,{variant:"h4"},"Most popular games:"),r.a.createElement("div",{className:"slider"},r.a.createElement(O.a,{onClick:this.handleBackwardClick.bind(this)},r.a.createElement(W.a,{className:"arrow"})),o,r.a.createElement(O.a,{onClick:this.handleForwardClick.bind(this)},r.a.createElement(Y.a,{className:"arrow"}))),r.a.createElement("div",{className:"slider-pageDetails"},"Game ",t+1,"-",c," of ",s.length)))}}]),a}(n.Component);var Ue={getGameDetails:B,getGamesByFilter:P,setLoader:M,stopLoader:J,addToCart:A},We=Object(U.b)((function(e){return{games:e.games,loading:e.loading.isLoading}}),Ue)(He),Ye=t(33),Ve=t(82),Xe=t(83),ze=t(9),Qe={games:[],chosenGame:{},error:null},qe=t(39),Ze={categories:[],players:[1,6],page:0,error:null};function $e(e,a){return e.findIndex((function(e){return e.id===a}))}var ea={isLoading:!0},aa={cartItems:[],error:null,showCart:!1};function ta(e,a){return e.findIndex((function(e){return e.id===a}))}var na={showSearchField:!1,searchText:""},ra=Object(Ye.combineReducers)({games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"GET_ALL_GAMES":case"GET_GAMES_BY_NAME":return Object(ze.a)({},e,{games:n});case"GET_ALL_GAMES_ERROR":case"GAME_DETAILS_ERROR":case"GET_GAMES_BY_NAME_ERROR":case"GET_GAMES_BY_CATEGORIES_ERROR":return Object(ze.a)({},e,{error:n});case"GET_GAME_DETAILS":return Object(ze.a)({},e,{chosenGame:n});case"GET_GAMES_BY_CATEGORIES":return Object(ze.a)({},e,{games:n});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"GET_CATEGORIES":return Object(ze.a)({},e,{categories:n});case"GET_CATEGORIES_ERROR":return Object(ze.a)({},e,{error:n});case"CHECK_CATEGORY":var r=$e(e.categories,n);return-1!==r?Object(ze.a)({},e,{categories:[].concat(Object(qe.a)(e.categories.slice(0,r)),[Object(ze.a)({},e.categories[r],{checked:!e.categories[r].checked})],Object(qe.a)(e.categories.slice(r+1)))}):e;case"SET_PLAYER_RANGE":return Object(ze.a)({},e,{players:n});case"SET_PAGE":return Object(ze.a)({},e,{page:n});default:return e}},shopcart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:aa,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"ADD_TO_CART":return Object(ze.a)({},e,{cartItems:[].concat(Object(qe.a)(e.cartItems),[n])});case"REMOVE_FROM_CART":var r=ta(e.cartItems,n);return Object(ze.a)({},e,{cartItems:[].concat(Object(qe.a)(e.cartItems.slice(0,r)),Object(qe.a)(e.cartItems.slice(r+1)))});case"TOGGLE_SHOW_CART":return Object(ze.a)({},e,{showCart:!e.showCart});case"ADD_TO_CART_ERROR":return Object(ze.a)({},e,{error:n});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ea,a=arguments.length>1?arguments[1]:void 0,t=a.type;switch(t){case"START_LOADING":return Object(ze.a)({},e,{isLoading:!0});case"UNLOAD":return Object(ze.a)({},e,{isLoading:!1});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:na,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"TOGGLE_SEARCH_FIELD":return Object(ze.a)({},e,{showSearchField:!e.showSearchField});case"UPDATE_SEARCH_WORD":return Object(ze.a)({},e,{searchText:n});default:return e}}}),ca=[Xe.a],sa=Object(Ye.createStore)(ra,{},Object(Ve.composeWithDevTools)(Ye.applyMiddleware.apply(void 0,ca))),la=function(){return r.a.createElement(U.a,{store:sa},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(Me,null),r.a.createElement(Je.a,{maxWidth:"lg",className:"content-area"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:We}),r.a.createElement(o.a,{path:"/overview",component:Q}),r.a.createElement(o.a,{path:"/details/:id",component:ee}),r.a.createElement(o.a,{path:"/shopcart",component:Ge}))))))};s.a.render(r.a.createElement(la,null),document.getElementById("root"))},89:function(e,a,t){e.exports=t(107)},94:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.dc99ac6f.chunk.js.map