webpackJsonp([35783957827783],{79:function(e,t,n){"use strict";function a(e){return e}function o(e,t,n){function o(e,t){var n=N.hasOwnProperty(t)?N[t]:null;M.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(c)&&_.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var s=n[i],u=a.hasOwnProperty(i);if(o(u,i),_.hasOwnProperty(i))_[i](e,s);else{var p=N.hasOwnProperty(i),m="function"==typeof s,E=m&&!p&&!u&&n.autobind!==!1;if(E)r.push(i,s),a[i]=s;else if(u){var y=N[i];l(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?a[i]=f(a[i],s):"DEFINE_MANY"===y&&(a[i]=d(a[i],s))}else a[i]=s}}}else;}function u(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var o=n in _;l(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var i=g.hasOwnProperty(n)?g[n]:null;return l("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],a))}e[n]=a}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var o={};return p(o,n),p(o,a),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],o=t[n+1];e[a]=m(e,o)}}function y(e){var t=a(function(e,a,o){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=a,this.refs=s,this.updater=o||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;l("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new I,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(r.bind(null,t)),r(t,v),r(t,e),r(t,D),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in N)t.prototype[o]||(t.prototype[o]=null);return t}var h=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},_={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},D={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},I=function(){};return i(I.prototype,e.prototype,M),y}var r,i=n(10),s=n(25),l=n(6),c="mixins";r={},e.exports=o},84:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,s=i&&i(Object);return function l(c,u,p){if("string"!=typeof u){if(s){var f=i(u);f&&f!==s&&l(c,f,p)}var d=a(u);o&&(d=d.concat(o(u)));for(var m=0;m<d.length;++m){var E=d[m];if(!(e[E]||t[E]||p&&p[E])){var y=r(u,E);try{n(c,E,y)}catch(e){}}}return c}return c}})},55:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),r=a(o),i=n(49),s=(a(i),function(e){var t=e.title,n=e.image,a=e.description;return r.default.createElement("header",{className:"masthead",style:{backgroundImage:"url("+n+")"}},r.default.createElement("div",{className:"overlay"}),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},r.default.createElement("div",{className:"site-heading"},r.default.createElement("h1",null,t),r.default.createElement("span",{className:"subheading"},a))))))});t.default=s,e.exports=t.default},141:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(1),r=a(o),i=n(49),s=a(i),l=n(55),c=a(l),u=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement(c.default,{title:"Home Page",description:"What was most significant about the lunar voyage"}),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},t.allContentfulPost.edges.map(function(e){return r.default.createElement(r.default.Fragment,{key:e.node.id},r.default.createElement("div",{className:"post-preview"},r.default.createElement(s.default,{to:"post/"+e.node.slug},r.default.createElement("h2",{className:"post-title"},e.node.title),r.default.createElement("h3",{className:"post-subtitle"},e.node.content.childMarkdownRemark.excerpt)),r.default.createElement("p",{className:"post-meta"},"Posted by",r.default.createElement("a",{href:"#"},"Start Bootstrap")," on ",e.node.createdAt)),r.default.createElement("hr",null))}),r.default.createElement("div",{className:"clearfix"},r.default.createElement("a",{className:"btn btn-primary float-right",href:"#"},"Older Posts →"))))))};t.default=u;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-e9ff2f2560b43df0e514.js.map