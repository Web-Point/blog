webpackJsonp([0xb1abc741118f],{79:function(e,t,n){"use strict";function o(e){return e}function a(e,t,n){function a(e,t){var n=E.hasOwnProperty(t)?E[t]:null;w.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function i(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var r in n)if(n.hasOwnProperty(r)&&r!==c){var s=n[r],u=o.hasOwnProperty(r);if(a(u,r),b.hasOwnProperty(r))b[r](e,s);else{var d=E.hasOwnProperty(r),m="function"==typeof s,h=m&&!d&&!u&&n.autobind!==!1;if(h)i.push(r,s),o[r]=s;else if(u){var y=E[r];l(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,r),"DEFINE_MANY_MERGED"===y?o[r]=p(o[r],s):"DEFINE_MANY"===y&&(o[r]=f(o[r],s))}else o[r]=s}}}else;}function u(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var a=n in b;l(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;if(i){var r=v.hasOwnProperty(n)?v[n]:null;return l("DEFINE_MANY_MERGED"===r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=p(e[n],o))}e[n]=o}}}function d(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var a={};return d(a,n),d(a,o),a}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],a=t[n+1];e[o]=m(e,a)}}function y(e){var t=o(function(e,o,a){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=o,this.refs=s,this.updater=a||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;l("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(i.bind(null,t)),i(t,N),i(t,e),i(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var a in E)t.prototype[a]||(t.prototype[a]=null);return t}var g=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)i(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return r(D.prototype,e.prototype,w),y}var i,r=n(10),s=n(25),l=n(6),c="mixins";i={},e.exports=a},235:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(){return"undefined"==typeof _&&"undefined"!=typeof window&&window.IntersectionObserver&&(_=new window.IntersectionObserver(function(e){e.forEach(function(e){w.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),_}t.__esModule=!0;var i=n(28),r=o(i),s=n(37),l=o(s),c=n(36),u=o(c),d=n(92),p=o(d),f=n(91),m=o(f),h=n(1),y=o(h),g=n(2),E=o(g),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},b={},N=function(e){var t=v(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!b[n]||(b[n]=!0,!1)},_=void 0,w=[],D=function(e,t){a().observe(e),w.push([e,t])},I=null,M=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+s+t+n+i+a+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(e){var t=e.style,n=e.onLoad,o=(0,p.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,m.default)({},o,{onLoad:n,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};R.propTypes={style:E.default.object,onLoad:E.default.func};var P=function(e){function t(n){(0,r.default)(this,t);var o=(0,l.default)(this,e.call(this,n)),a=!0,i=!0,s=!1,c=N(n);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!1,s=!0),"undefined"==typeof window&&(a=!1,i=!1),o.state={isVisible:a,imgLoaded:i,IOSupported:s},o.handleRef=o.handleRef.bind(o),o}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&D(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),n=t.title,o=t.alt,a=t.className,i=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,c=void 0===l?{}:l,u=t.sizes,d=t.resolutions,p=t.backgroundColor,f=t.Tag,h=void 0;h="boolean"==typeof p?"lightgray":p;var g=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),E=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(u){var b=u;return b.srcWebp&&b.srcSetWebp&&M()&&(b.src=b.srcWebp,b.srcSet=b.srcSetWebp),y.default.createElement(f,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},y.default.createElement(f,{className:(a?a:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},y.default.createElement(f,{style:{width:"100%",paddingBottom:100/b.aspectRatio+"%"}}),b.base64&&y.default.createElement(R,{alt:o,title:n,src:b.base64,style:g}),b.tracedSVG&&y.default.createElement(R,{alt:o,title:n,src:b.tracedSVG,style:g}),h&&y.default.createElement(f,{title:n,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(R,{alt:o,title:n,srcSet:b.srcSet,src:b.src,sizes:b.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,m.default)({alt:o,title:n},b))}})))}if(d){var N=d,_=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},s);return"inherit"===s.display&&delete _.display,N.srcWebp&&N.srcSetWebp&&M()&&(N.src=N.srcWebp,N.srcSet=N.srcSetWebp),y.default.createElement(f,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},y.default.createElement(f,{className:(a?a:"")+" gatsby-image-wrapper",style:_,ref:this.handleRef},N.base64&&y.default.createElement(R,{alt:o,title:n,src:N.base64,style:g}),N.tracedSVG&&y.default.createElement(R,{alt:o,title:n,src:N.tracedSVG,style:g}),h&&y.default.createElement(f,{title:n,style:{backgroundColor:h,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&y.default.createElement(R,{alt:o,title:n,width:N.width,height:N.height,srcSet:N.srcSet,src:N.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,m.default)({alt:o,title:n,width:N.width,height:N.height},N))}})))}return null},t}(y.default.Component);P.defaultProps={fadeIn:!0,alt:"",Tag:"div"},P.propTypes={responsiveResolution:E.default.object,responsiveSizes:E.default.object,resolutions:E.default.object,sizes:E.default.object,fadeIn:E.default.bool,title:E.default.string,alt:E.default.string,className:E.default.oneOfType([E.default.string,E.default.object]),outerWrapperClassName:E.default.oneOfType([E.default.string,E.default.object]),style:E.default.object,imgStyle:E.default.object,position:E.default.string,backgroundColor:E.default.oneOfType([E.default.string,E.default.bool]),onLoad:E.default.func,Tag:E.default.string},t.default=P},84:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,s=r&&r(Object);return function l(c,u,d){if("string"!=typeof u){if(s){var p=r(u);p&&p!==s&&l(c,p,d)}var f=o(u);a&&(f=f.concat(a(u)));for(var m=0;m<f.length;++m){var h=f[m];if(!(e[h]||t[h]||d&&d[h])){var y=i(u,h);try{n(c,h,y)}catch(e){}}}return c}return c}})},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=o(a),r=n(49),s=(o(r),function(e){var t=e.title,n=e.image,o=e.description;return i.default.createElement("header",{className:"masthead",style:{backgroundImage:"url("+n+")"}},i.default.createElement("div",{className:"overlay"}),i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},i.default.createElement("div",{className:"site-heading"},i.default.createElement("h1",null,t),i.default.createElement("span",{className:"subheading"},o))))))});t.default=s,e.exports=t.default},142:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=n(1),i=o(a),r=n(2),s=o(r),l=n(235),c=(o(l),n(55)),u=o(c),d=function(e){var t=e.data,n=t.contentfulPost,o=n.title,a=(n.createdAt,n.image),r=n.content;return i.default.createElement("div",null,i.default.createElement(u.default,{title:o,image:a.responsiveResolution.src,description:r.childMarkdownRemark.excerpt}),i.default.createElement("article",null,i.default.createElement("div",{class:"container"},i.default.createElement("div",{class:"row"},i.default.createElement("div",{class:"col-lg-8 col-md-10 mx-auto",dangerouslySetInnerHTML:{__html:r.childMarkdownRemark.html}})))))};d.PropTypes={data:s.default.object.isRequired},t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-js-ca991de6246f76370452.js.map