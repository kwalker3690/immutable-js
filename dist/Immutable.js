/**
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
function t(){function t(t,e,r,n){var i;if(n){var s=n.prototype;i=J.create(s)}else i=t.prototype;return J.keys(e).forEach(function(t){i[t]=e[t]}),J.keys(r).forEach(function(e){t[e]=r[e]}),i.constructor=t,t.prototype=i,t}function e(t,e,r,n){return J.getPrototypeOf(e)[r].apply(t,n)}function r(t,r,n){e(t,r,"constructor",n)}function n(){return Object.create(L.prototype)}function i(t){var e=Object.create(K.prototype);return e.__reversedIndices=t?t.__reversedIndices:!1,e}function s(t,e,r,n){var i=t.get?t.get(e[n],G):G;return i===G?r:++n===e.length?i:s(i,e,r,n)}function u(t,e,r){return(0===t||null!=r&&-r>=t)&&(null==e||null!=r&&e>=r)}function o(t,e){return 0>t?Math.max(0,e+t):e?Math.min(e,t):t}function a(t,e){return null==t?e:0>t?Math.max(0,e+t):e?Math.min(e,t):t}function h(t){return t}function l(t,e){return[e,t]}function c(){return!0}function f(){return this}function _(t){return(t||0)+1}function p(t,e,r,n,i){var s=t.__makeSequence();return s.__iterateUncached=function(s,u,o){var a=0,h=t.__iterate(function(t,i,u){if(e.call(r,t,i,u)){if(s(t,n?i:a,u)===!1)return!1;a++}},u,o);return i?h:a},s}function v(t){return function(){return!t.apply(this,arguments)}}function g(t){return"string"==typeof t?JSON.stringify(t):t}function y(t,e){for(var r="";e;)1&e&&(r+=t),(e>>=1)&&(t+=t);return r}function m(t,e){return t>e?1:e>t?-1:0}function d(t){if(1/0===t)throw Error("Cannot perform this action with an infinite sequence.")}function w(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t?e!==e:t instanceof L?t.equals(e):!1}function I(t,e,r){var n=t._rootData.updateIn(t._keyPath,e),i=t._keyPath||[];return t._onChange&&t._onChange.call(void 0,n,t._rootData,r?i.concat(r):i),new Q(n,t._keyPath,t._onChange)}function k(t,e,r,n,i){var s=r>>>e&ce,u=[],o=[];return o[s]=i,null!=n&&(u[s]=n),new $(t,1<<s,u,o)}function O(t,e,r){for(var n=[],i=0;r.length>i;i++){var s=r[i];s&&n.push(Array.isArray(s)?L(s).fromEntries():L(s))}return b(t,e,n)}function D(t){return function(e,r){return e&&e.mergeDeepWith?e.mergeDeepWith(t,r):t?t(e,r):r}}function b(t,e,r){return 0===r.length?t:t.withMutations(function(t){for(var n=e?function(r,n){var i=t.get(n,G);
t.set(n,i===G?r:e(i,r))}:function(e,r){t.set(r,e)},i=0;r.length>i;i++)r[i].forEach(n)})}function M(t,e,r,n){var i=e[n],s=t.get?t.get(i,G):G;if(s===G&&(s=X.empty()),!t.set)throw Error("updateIn with invalid keyPath");return t.set(i,++n===e.length?r(s):M(s,e,r,n))}function S(t){return ie.value=t,ie}function x(t){if(!t)return 0;if(t===!0)return 1;if("function"==typeof t.hashCode)return t.hashCode();var e=typeof t;if("number"===e)return Math.floor(t)%2147483647;if("string"===e)return E(t);throw Error("Unable to hash")}function E(t){var e=ae[t];if(null==e){e=0;for(var r=0;t.length>r;r++)e=(31*e+t.charCodeAt(r))%se;oe===ue&&(oe=0,ae={}),oe++,ae[t]=e}return e}function C(t,e){if(e>=P(t._size))return t._tail;if(1<<t._level+he>e){for(var r=t._root,n=t._level;r&&n>0;)r=r.array[e>>>n&ce],n-=he;return r}}function A(t,e,r){var n=t.__ownerID||new Z,i=t._origin,s=t._size,u=i+e,o=null==r?s:0>r?s+r:i+r;if(u===i&&o===s)return t;if(u>=o)return t.clear();for(var a=t._level,h=t._root,l=0;0>u+l;)h=new pe(h.array.length?[,h]:[],n),a+=he,l+=1<<a;l&&(u+=l,i+=l,o+=l,s+=l);for(var c=P(s),f=P(o);f>=1<<a+he;)h=new pe(h.array.length?[h]:[],n),a+=he;var _=t._tail,p=c>f?C(t,o-1):f>c?new pe([],n):_;if(f>c&&s>u&&_.array.length){h=h.ensureOwner(n);for(var v=h,g=a;g>he;g-=he){var y=c>>>g&ce;v=v.array[y]=v.array[y]?v.array[y].ensureOwner(n):new pe([],n)}v.array[c>>>he&ce]=_}if(s>o&&(p=p.removeAfter(n,0,o)),u>=f)u-=f,o-=f,a=he,h=me,p=p.removeBefore(n,0,u);else if(u>i||c>f){var m,d;l=0;do m=u>>>a&ce,d=f-1>>>a&ce,m===d&&(m&&(l+=(1<<a)*m),a-=he,h=h&&h.array[m]);while(h&&m===d);h&&u>i&&(h=h.removeBefore(n,a,u-l)),h&&c>f&&(h=h.removeAfter(n,a,f-l)),l&&(u-=l,o-=l),h=h||me}return t.__ownerID?(t.length=o-u,t._origin=u,t._size=o,t._level=a,t._root=h,t._tail=p,t):fe._make(u,o,a,h,p)}function q(t,e,r){for(var n=[],i=0;r.length>i;i++){var s=r[i];s&&n.push(s.forEach?s:L(s))}var u=Math.max.apply(null,n.map(function(t){return t.length||0}));return u>t.length&&(t=t.setLength(u)),b(t,e,n)}function j(t,e){if(0>t)throw Error("Index out of bounds");return t+e}function P(t){return le>t?0:t-1>>>he<<he
}function U(t,e){if(!t)throw Error(e)}function U(t,e){if(!t)throw Error(e)}function z(t,e){return e?R(e,t,"",{"":t}):W(t)}function R(t,e,r,n){return e&&(Array.isArray(e)||e.constructor===Object)?t.call(n,r,L(e).map(function(r,n){return R(t,r,n,e)})):e}function W(t){if(t){if(Array.isArray(t))return L(t).map(W).toVector();if(t.constructor===Object)return L(t).map(W).toMap()}return t}var J=Object,B={};B.createClass=t,B.superCall=e,B.defaultSuperCall=r;var L=function(t){return V.from(1===arguments.length?t:Array.prototype.slice.call(arguments))},V=L;B.createClass(L,{toString:function(){return this.__toString("Seq {","}")},__toString:function(t,e){return 0===this.length?t+e:t+" "+this.map(this.__toStringMapper).join(", ")+" "+e},__toStringMapper:function(t,e){return e+": "+g(t)},toJS:function(){return this.map(function(t){return t instanceof V?t.toJS():t}).__toJS()},toArray:function(){d(this.length);var t=Array(this.length||0);return this.values().forEach(function(e,r){t[r]=e}),t},toObject:function(){d(this.length);var t={};return this.forEach(function(e,r){t[r]=e}),t},toVector:function(){return d(this.length),fe.from(this)},toMap:function(){return d(this.length),X.from(this)},toOrderedMap:function(){return d(this.length),ke.from(this)},toSet:function(){return d(this.length),de.from(this)},equals:function(t){if(this===t)return!0;if(!(t instanceof V))return!1;if(null!=this.length&&null!=t.length){if(this.length!==t.length)return!1;if(0===this.length&&0===t.length)return!0}return this.__deepEquals(t)},__deepEquals:function(t){var e=this.cacheResult().entries().toArray(),r=0;return t.every(function(t,n){var i=e[r++];return w(n,i[0])&&w(t,i[1])})},join:function(t){t=t||",";var e="",r=!0;return this.forEach(function(n){r?(r=!1,e+=n):e+=t+n}),e},count:function(t,e){return t?this.filter(t,e).count():(null==this.length&&(this.length=this.forEach(c)),this.length)},countBy:function(t){var e=this;return ke.empty().withMutations(function(r){e.forEach(function(e,n,i){r.update(t(e,n,i),_)})})},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];
var r=[this].concat(t.map(function(t){return V(t)})),n=this.__makeSequence();return n.length=r.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),n.__iterateUncached=function(t,e){for(var n,i=0,s=r.length-1,u=0;s>=u&&!n;u++){var o=r[e?s-u:u];i+=o.__iterate(function(e,r,i){return t(e,r,i)===!1?(n=!0,!1):void 0},e)}return i},n},reverse:function(){var t=this,e=t.__makeSequence();return e.length=t.length,e.__iterateUncached=function(e,r){return t.__iterate(e,!r)},e.reverse=function(){return t},e},keys:function(){return this.flip().values()},values:function(){var t=this,e=i(t);return e.length=t.length,e.values=f,e.__iterateUncached=function(e,r,n){if(n&&null==this.length)return this.cacheResult().__iterate(e,r,n);var i,s=0;return n?(s=this.length-1,i=function(t,r,n){return e(t,s--,n)!==!1}):i=function(t,r,n){return e(t,s++,n)!==!1},t.__iterate(i,r),n?this.length:s},e},entries:function(){var t=this;if(t._cache)return V(t._cache);var e=t.map(l).values();return e.fromEntries=function(){return t},e},forEach:function(t,e){return this.__iterate(e?t.bind(e):t)},reduce:function(t,e,r){var n=e;return this.forEach(function(e,i,s){n=t.call(r,n,e,i,s)}),n},reduceRight:function(t,e,r){return this.reverse(!0).reduce(t,e,r)},every:function(t,e){var r=!0;return this.forEach(function(n,i,s){return t.call(e,n,i,s)?void 0:(r=!1,!1)}),r},some:function(t,e){return!this.every(v(t),e)},first:function(){return this.find(c)},last:function(){return this.findLast(c)},rest:function(){return this.slice(1)},butLast:function(){return this.slice(0,-1)},has:function(t){return this.get(t,G)!==G},get:function(t,e){return this.find(function(e,r){return w(r,t)},null,e)},getIn:function(t,e){return t&&0!==t.length?s(this,t,e,0):this},contains:function(t){return this.find(function(e){return w(e,t)},null,G)!==G},find:function(t,e,r){var n=r;return this.forEach(function(r,i,s){return t.call(e,r,i,s)?(n=r,!1):void 0}),n},findKey:function(t,e){var r;return this.forEach(function(n,i,s){return t.call(e,n,i,s)?(r=i,!1):void 0}),r},findLast:function(t,e,r){return this.reverse(!0).find(t,e,r)
},findLastKey:function(t,e){return this.reverse(!0).findKey(t,e)},flip:function(){var t=this,e=n();return e.length=t.length,e.flip=function(){return t},e.__iterateUncached=function(e,r){return t.__iterate(function(t,r,n){return e(r,t,n)!==!1},r)},e},map:function(t,e){var r=this,n=r.__makeSequence();return n.length=r.length,n.__iterateUncached=function(n,i){return r.__iterate(function(r,i,s){return n(t.call(e,r,i,s),i,s)!==!1},i)},n},mapKeys:function(t,e){var r=this,n=r.__makeSequence();return n.length=r.length,n.__iterateUncached=function(n,i){return r.__iterate(function(r,i,s){return n(r,t.call(e,i,r,s),s)!==!1},i)},n},filter:function(t,e){return p(this,t,e,!0,!1)},slice:function(t,e){if(u(t,e,this.length))return this;var r=o(t,this.length),n=a(e,this.length);if(r!==r||n!==n)return this.entries().slice(t,e).fromEntries();var i=0===r?this:this.skip(r);return null==n||n===this.length?i:i.take(n-r)},take:function(t){var e=0,r=this.takeWhile(function(){return e++<t});return r.length=this.length&&Math.min(this.length,t),r},takeLast:function(t,e){return this.reverse(e).take(t).reverse(e)},takeWhile:function(t,e){var r=this,n=r.__makeSequence();return n.__iterateUncached=function(n,i,s){if(i)return this.cacheResult().__iterate(n,i,s);var u=0;return r.__iterate(function(r,i,s){return t.call(e,r,i,s)&&n(r,i,s)!==!1?void u++:!1},i,s),u},n},takeUntil:function(t,e,r){return this.takeWhile(v(t),e,r)},skip:function(t,e){if(0===t)return this;var r=0,n=this.skipWhile(function(){return r++<t},null,e);return n.length=this.length&&Math.max(0,this.length-t),n},skipLast:function(t,e){return this.reverse(e).skip(t).reverse(e)},skipWhile:function(t,e){var r=this,n=r.__makeSequence();return n.__iterateUncached=function(n,i,s){if(i)return this.cacheResult().__iterate(n,i,s);var u=!0,o=0;return r.__iterate(function(r,i,s){if(!u||!(u=t.call(e,r,i,s))){if(n(r,i,s)===!1)return!1;o++}},i,s),o},n},skipUntil:function(t,e,r){return this.skipWhile(v(t),e,r)},groupBy:function(t){var e=this,r=ke.empty().withMutations(function(r){e.forEach(function(e,n,i){var s=t(e,n,i),u=r.get(s,G);
u===G&&(u=[],r.set(s,u)),u.push([n,e])})});return r.map(function(t){return V(t).fromEntries()})},sort:function(t,e){return this.sortBy(h,t,e)},sortBy:function(t,e){e=e||m;var r=this;return V(this.entries().entries().toArray().sort(function(n,i){return e(t(n[1][1],n[1][0],r),t(i[1][1],i[1][0],r))||n[0]-i[0]})).fromEntries().values().fromEntries()},cacheResult:function(){return!this._cache&&this.__iterateUncached&&(d(this.length),this._cache=this.entries().toArray(),null==this.length&&(this.length=this._cache.length)),this},__iterate:function(t,e,r){if(!this._cache)return this.__iterateUncached(t,e,r);var n=this.length-1,i=this._cache,s=this;if(e)for(var u=i.length-1;u>=0;u--){var o=i[u];if(t(o[1],r?o[0]:n-o[0],s)===!1)break}else i.every(r?function(e){return t(e[1],n-e[0],s)!==!1}:function(e){return t(e[1],e[0],s)!==!1});return this.length},__makeSequence:function(){return n()}},{from:function(t){if(t instanceof V)return t;if(!Array.isArray(t)){if(t&&t.constructor===Object)return new N(t);t=[t]}return new F(t)}}),L.prototype.toJSON=L.prototype.toJS,L.prototype.inspect=L.prototype.toSource=function(){return""+this},L.prototype.__toJS=L.prototype.toObject;var K=function(){B.defaultSuperCall(this,H.prototype,arguments)},H=K;B.createClass(K,{toString:function(){return this.__toString("Seq [","]")},toArray:function(){d(this.length);var t=Array(this.length||0);return t.length=this.forEach(function(e,r){t[r]=e}),t},fromEntries:function(){var t=this,e=n();return e.length=t.length,e.entries=function(){return t},e.__iterateUncached=function(e,r,n){return t.__iterate(function(t,r,n){return e(t[1],t[0],n)},r,n)},e},join:function(t){t=t||",";var e="",r=0;return this.forEach(function(n,i){var s=i-r;r=i,e+=(1===s?t:y(t,s))+n}),this.length&&this.length-1>r&&(e+=y(t,this.length-1-r)),e},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var r=[this].concat(t).map(function(t){return L(t)}),n=this.__makeSequence();return n.length=r.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),n.__iterateUncached=function(t,e,n){if(n&&!this.length)return this.cacheResult().__iterate(t,e,n);
for(var i,s=0,u=n&&this.length-1,o=r.length-1,a=0;o>=a&&!i;a++){var h=r[e?o-a:a];h instanceof H||(h=h.values()),s+=h.__iterate(function(e,r,o){return r+=s,t(e,n?u-r:r,o)===!1?(i=!0,!1):void 0},e)}return s},n},reverse:function(t){var e=this,r=e.__makeSequence();return r.length=e.length,r.__reversedIndices=!!(t^e.__reversedIndices),r.__iterateUncached=function(r,n,i){return e.__iterate(r,!n,i^t)},r.reverse=function(r){return t===r?e:H.prototype.reverse.call(this,r)},r},values:function(){var t=B.superCall(this,H.prototype,"values",[]);return t.length=void 0,t},filter:function(t,e,r){var n=p(this,t,e,r,r);return r&&(n.length=this.length),n},indexOf:function(t){return this.findIndex(function(e){return w(e,t)})},lastIndexOf:function(t){return this.reverse(!0).indexOf(t)},findIndex:function(t,e){var r=this.findKey(t,e);return null==r?-1:r},findLastIndex:function(t,e){return this.reverse(!0).findIndex(t,e)},slice:function(t,e,r){var n=this;if(u(t,e,n.length))return n;var i=n.__makeSequence(),s=o(t,n.length),h=a(e,n.length);return i.length=n.length&&(r?n.length:h-s),i.__reversedIndices=n.__reversedIndices,i.__iterateUncached=function(i,u,l){if(u)return this.cacheResult().__iterate(i,u,l);var c=this.__reversedIndices^l;if(s!==s||h!==h||c&&null==n.length){var f=n.count();s=o(t,f),h=a(e,f)}var _=c?n.length-h:s,p=c?n.length-s:h,v=n.__iterate(function(t,e,n){return c?null!=p&&e>=p||e>=_&&i(t,r?e:e-_,n)!==!1:_>e||(null==p||p>e)&&i(t,r?e:e-_,n)!==!1},u,l);return null!=this.length?this.length:r?v:Math.max(0,v-_)},i},splice:function(t,e){for(var r=[],n=2;arguments.length>n;n++)r[n-2]=arguments[n];return 0===e&&0===r.length?this:this.slice(0,t).concat(r,this.slice(t+e))},takeWhile:function(t,e,r){var n=this,i=n.__makeSequence();return i.__iterateUncached=function(s,u,o){if(u)return this.cacheResult().__iterate(s,u,o);var a=0,h=!0,l=n.__iterate(function(r,n,i){return t.call(e,r,n,i)&&s(r,n,i)!==!1?void(a=n):(h=!1,!1)},u,o);return r?i.length:h?l:a+1},r&&(i.length=this.length),i},skipWhile:function(t,e,r){var n=this,i=n.__makeSequence();
return r&&(i.length=this.length),i.__iterateUncached=function(i,s,u){if(s)return this.cacheResult().__iterate(i,s,u);var o=n.__reversedIndices^u,a=!0,h=0,l=n.__iterate(function(n,s,o){return a&&(a=t.call(e,n,s,o),a||(h=s)),a||i(n,u||r?s:s-h,o)!==!1},s,u);return r?l:o?h+1:l-h},i},groupBy:function(t,e,r){var n=this,i=ke.empty().withMutations(function(e){n.forEach(function(i,s,u){var o=t(i,s,u),a=e.get(o,G);a===G&&(a=Array(r?n.length:0),e.set(o,a)),r?a[s]=i:a.push(i)})});return i.map(function(t){return L(t)})},sortBy:function(t,e,r){var n=B.superCall(this,H.prototype,"sortBy",[t,e]);return r||(n=n.values()),n.length=this.length,n},__makeSequence:function(){return i(this)}},{},L),K.prototype.__toJS=K.prototype.toArray,K.prototype.__toStringMapper=g;var N=function(t){var e=Object.keys(t);this._object=t,this._keys=e,this.length=e.length};B.createClass(N,{toObject:function(){return this._object},get:function(t,e){return void 0===e||this.has(t)?this._object[t]:e},has:function(t){return this._object.hasOwnProperty(t)},__iterate:function(t,e){for(var r=this._object,n=this._keys,i=n.length-1,s=0;i>=s;s++){var u=e?i-s:s;if(t(r[n[u]],n[u],r)===!1)break}return s}},{},L);var F=function(t){this._array=t,this.length=t.length};B.createClass(F,{toArray:function(){return this._array},__iterate:function(t,e,r){var n=this._array,i=n.length-1,s=-1;if(e){for(var u=i;u>=0;u--){if(n.hasOwnProperty(u)&&t(n[u],r?u:i-u,n)===!1)return s+1;s=u}return n.length}var o=n.every(function(e,u){return t(e,r?i-u:u,n)===!1?!1:(s=u,!0)});return o?n.length:s+1}},{},K),F.prototype.get=N.prototype.get,F.prototype.has=N.prototype.has;var G={},Q=function(t,e,r){this._rootData=t,this._keyPath=e,this._onChange=r},T=Q;B.createClass(Q,{get:function(t,e){var r=this._rootData.getIn(this._keyPath,X.empty());return t?r.get(t,e):r},set:function(t,e){return I(this,function(r){return r.set(t,e)},t)},"delete":function(t){return I(this,function(e){return e.delete(t)},t)},update:function(t,e){var r;return"function"==typeof t?(r=t,t=void 0):r=function(r){return r.update(t,e)
},I(this,r,t)},cursor:function(t){return t&&!Array.isArray(t)&&(t=[t]),t&&0!==t.length?new T(this._rootData,this._keyPath?this._keyPath.concat(t):t,this._onChange):this}},{});var X=function(t){return t&&t.constructor===Y?t:t&&0!==t.length?Y.empty().merge(t):Y.empty()},Y=X;B.createClass(X,{toString:function(){return this.__toString("Map {","}")},get:function(t,e){return null==t||null==this._root?e:this._root.get(0,x(t),t,e)},set:function(t,e){if(null==t)return this;var r,n=this.length;if(this._root){var i=S();r=this._root.set(this.__ownerID,0,x(t),t,e,i),i.value&&n++}else n++,r=k(this.__ownerID,0,x(t),t,e);return this.__ownerID?(this.length=n,this._root=r,this):r===this._root?this:Y._make(n,r)},"delete":function(t){if(null==t||null==this._root)return this;if(this.__ownerID){var e=S();return this._root=this._root.delete(this.__ownerID,0,x(t),t,e),e.value&&this.length--,this}var r=this._root.delete(this.__ownerID,0,x(t),t);return r?r===this._root?this:Y._make(this.length-1,r):Y.empty()},update:function(t,e){return this.set(t,e(this.get(t)))},clear:function(){return this.__ownerID?(this.length=0,this._root=null,this):Y.empty()},merge:function(){return O(this,null,arguments)},mergeWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return O(this,t,e)},mergeDeep:function(){return O(this,D(null),arguments)},mergeDeepWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return O(this,D(t),e)},updateIn:function(t,e){return t&&0!==t.length?M(this,t,e,0):e(this)},cursor:function(t,e){return e||"function"!=typeof t||(e=t,t=null),t&&!Array.isArray(t)&&(t=[t]),new Q(this,t,e)},withMutations:function(t){var e=this.asMutable();return t(e),e.__ensureOwner(this.__ownerID)},asMutable:function(){return this.__ownerID?this:this.__ensureOwner(new Z)},asImmutable:function(){return this.__ensureOwner()},__ensureOwner:function(t){return t===this.__ownerID?this:t?Y._make(this.length,this._root,t):(this.__ownerID=t,this)},__deepEqual:function(t){var e=this;return t.every(function(t,r){return w(e.get(r,G),t)
})},__iterate:function(t,e){return this._root?this._root.iterate(this,t,e):0}},{empty:function(){return ne||(ne=Y._make(0))},_make:function(t,e,r){var n=Object.create(Y.prototype);return n.length=t,n._root=e,n.__ownerID=r,n}},L),X.from=X;var Z=function(){};B.createClass(Z,{},{});var $=function(t,e,r,n){this.ownerID=t,this.bitmap=e,this.keys=r,this.values=n},te=$;B.createClass($,{get:function(t,e,r,n){var i=e>>>t&ce;if(0===(this.bitmap&1<<i))return n;var s=this.keys[i],u=this.values[i];return null==s?u.get(t+he,e,r,n):r===s?u:n},set:function(t,e,r,n,i,s){var u,o=r>>>e&ce,a=1<<o;if(0===(this.bitmap&a))return s&&(s.value=!0),u=this.ensureOwner(t),u.keys[o]=n,u.values[o]=i,u.bitmap|=a,u;var h,l=this.keys[o],c=this.values[o];if(null==l)return h=c.set(t,e+he,r,n,i,s),h===c?this:(u=this.ensureOwner(t),u.values[o]=h,u);if(n===l)return i===c?this:(u=this.ensureOwner(t),u.values[o]=i,u);var f=x(l);return h=r===f?new ee(t,r,[l,n],[c,i]):k(t,e+he,f,l,c).set(t,e+he,r,n,i),s&&(s.value=!0),u=this.ensureOwner(t),delete u.keys[o],u.values[o]=h,u},"delete":function(t,e,r,n,i){var s,u=r>>>e&ce,o=1<<u,a=this.keys[u];if(0===(this.bitmap&o)||null!=a&&n!==a)return this;if(null==a){var h=this.values[u],l=h.delete(t,e+he,r,n,i);if(l===h)return this;if(l)return s=this.ensureOwner(t),s.values[u]=l,s}else i&&(i.value=!0);return this.bitmap===o?null:(s=this.ensureOwner(t),delete s.keys[u],delete s.values[u],s.bitmap^=o,s)},ensureOwner:function(t){return t&&t===this.ownerID?this:new te(t,this.bitmap,this.keys.slice(),this.values.slice())},iterate:function(t,e,r){for(var n=this.values,i=this.keys,s=n.length,u=0;s>=u;u++){var o=r?s-u:u,a=i[o],h=n[o];if(null!=a){if(e(h,a,t)===!1)return!1}else if(h&&!h.iterate(t,e,r))return!1}return!0}},{});var ee=function(t,e,r,n){this.ownerID=t,this.collisionHash=e,this.keys=r,this.values=n},re=ee;B.createClass(ee,{get:function(t,e,r,n){var i=L(this.keys).indexOf(r);return-1===i?n:this.values[i]},set:function(t,e,r,n,i,s){if(r!==this.collisionHash)return s&&(s.value=!0),k(t,e,this.collisionHash,null,this).set(t,e,r,n,i);
var u=L(this.keys).indexOf(n);if(u>=0&&this.values[u]===i)return this;var o=this.ensureOwner(t);return-1===u?(o.keys.push(n),o.values.push(i),s&&(s.value=!0)):o.values[u]=i,o},"delete":function(t,e,r,n,i){var s=this.keys.indexOf(n);if(-1===s)return this;if(i&&(i.value=!0),this.values.length>1){var u=this.ensureOwner(t);return u.keys[s]=u.keys.pop(),u.values[s]=u.values.pop(),u}},ensureOwner:function(t){return t&&t===this.ownerID?this:new re(t,this.collisionHash,this.keys.slice(),this.values.slice())},iterate:function(t,e,r){for(var n=this.values,i=this.keys,s=n.length-1,u=0;s>=u;u++){var o=r?s-u:u;if(e(n[o],i[o],t)===!1)return!1}return!0}},{});var ne,ie={value:!1},se=4294967296,ue=255,oe=0,ae={},he=5,le=1<<he,ce=le-1,G={},fe=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return _e.from(t)},_e=fe;B.createClass(fe,{toString:function(){return this.__toString("Vector [","]")},get:function(t,e){if(t=j(t,this._origin),t>=this._size)return e;var r=C(this,t),n=t&ce;return r&&(void 0===e||r.array.hasOwnProperty(n))?r.array[n]:e},first:function(){return this.get(0)},last:function(){return this.get(this.length?this.length-1:0)},set:function(t,e){var r=P(this._size);if(t>=this.length)return this.withMutations(function(r){return A(r,0,t+1).set(t,e)});if(this.get(t,G)===e)return this;if(t=j(t,this._origin),t>=r){var n=this._tail.ensureOwner(this.__ownerID);n.array[t&ce]=e;var i=t>=this._size?t+1:this._size;return this.__ownerID?(this.length=i-this._origin,this._size=i,this._tail=n,this):_e._make(this._origin,i,this._level,this._root,n)}for(var s=this._root.ensureOwner(this.__ownerID),u=s,o=this._level;o>0;o-=he){var a=t>>>o&ce;u=u.array[a]=u.array[a]?u.array[a].ensureOwner(this.__ownerID):new pe([],this.__ownerID)}return u.array[t&ce]=e,this.__ownerID?(this._root=s,this):_e._make(this._origin,this._size,this._level,s,this._tail)},"delete":function(t){if(!this.has(t))return this;var e=P(this._size);if(t=j(t,this._origin),t>=e){var r=this._tail.ensureOwner(this.__ownerID);return delete r.array[t&ce],this.__ownerID?(this._tail=r,this):_e._make(this._origin,this._size,this._level,this._root,r)
}for(var n=this._root.ensureOwner(this.__ownerID),i=n,s=this._level;s>0;s-=he){var u=t>>>s&ce;i=i.array[u]=i.array[u].ensureOwner(this.__ownerID)}return delete i.array[t&ce],this.__ownerID?(this._root=n,this):_e._make(this._origin,this._size,this._level,n,this._tail)},clear:function(){return this.__ownerID?(this.length=this._origin=this._size=0,this._level=he,this._root=this._tail=me,this):_e.empty()},push:function(){var t=arguments,e=this.length;return this.withMutations(function(r){A(r,0,e+t.length);for(var n=0;t.length>n;n++)r.set(e+n,t[n])})},pop:function(){return A(this,0,-1)},unshift:function(){var t=arguments;return this.withMutations(function(e){A(e,-t.length);for(var r=0;t.length>r;r++)e.set(r,t[r])})},shift:function(){return A(this,1)},merge:function(){return q(this,null,arguments)},mergeWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return q(this,t,e)},mergeDeep:function(){return q(this,D(null),arguments)},mergeDeepWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return q(this,D(t),e)},setLength:function(t){return A(this,0,t)},__ensureOwner:function(t){return t===this.__ownerID?this:t?_e._make(this._origin,this._size,this._level,this._root,this._tail,t):(this.__ownerID=t,this)},slice:function(t,e,r){var n=B.superCall(this,_e.prototype,"slice",[t,e,r]);if(!r&&n!==this){var i=this,s=i.length;n.toVector=function(){return A(i,0>t?Math.max(0,s+t):s?Math.min(s,t):t,null==e?s:0>e?Math.max(0,s+e):s?Math.min(s,e):e)}}return n},__deepEquals:function(t){var e=this.iterator();return t.every(function(t,r){var n=e.next().value;return n&&r===n[0]&&w(t,n[1])})},iterator:function(){return new ge(this,this._origin,this._size,this._level,this._root,this._tail)},__iterate:function(t,e,r){var n=this,i=0,s=n.length-1;r^=e;var u,o=function(e,u){return t(e,r?s-u:u,n)===!1?!1:(i=u,!0)},a=P(this._size);return u=e?this._tail.iterate(0,a-this._origin,this._size-this._origin,o,e)&&this._root.iterate(this._level,-this._origin,a-this._origin,o,e):this._root.iterate(this._level,-this._origin,a-this._origin,o,e)&&this._tail.iterate(0,a-this._origin,this._size-this._origin,o,e),(u?s:e?s-i:i)+1
}},{empty:function(){return ye||(ye=_e._make(0,0,he,me,me))},from:function(t){if(t&&t.constructor===_e)return t;if(!t||0===t.length)return _e.empty();var e=Array.isArray(t);return t.length>0&&le>t.length?_e._make(0,t.length,he,me,new pe(e?t.slice():L(t).toArray())):(e||(t=L(t),t instanceof K||(t=t.values())),_e.empty().merge(t))},_make:function(t,e,r,n,i,s){var u=Object.create(_e.prototype);return u.length=e-t,u._origin=t,u._size=e,u._level=r,u._root=n,u._tail=i,u.__ownerID=s,u}},K),fe.prototype["@@iterator"]=fe.prototype.__iterator__,fe.prototype.update=X.prototype.update,fe.prototype.updateIn=X.prototype.updateIn,fe.prototype.cursor=X.prototype.cursor,fe.prototype.withMutations=X.prototype.withMutations,fe.prototype.asMutable=X.prototype.asMutable,fe.prototype.asImmutable=X.prototype.asImmutable;var Z=function(){};B.createClass(Z,{},{});var pe=function(t,e){this.array=t,this.ownerID=e},ve=pe;B.createClass(pe,{ensureOwner:function(t){return t&&t===this.ownerID?this:new ve(this.array.slice(),t)},removeBefore:function(t,e,r){if(r===e?1<<e:0||0===this.array.length)return this;var n=r>>>e&ce;if(n>=this.array.length)return new ve([],t);var i,s=0===n;if(e>0){var u=this.array[n];if(i=u&&u.removeBefore(t,e-he,r),i===u&&s)return this}if(s&&!i)return this;var o=this.ensureOwner();if(!s)for(var a=0;n>a;a++)delete o.array[a];return i&&(o.array[n]=i),o},removeAfter:function(t,e,r){if(r===e?1<<e:0||0===this.array.length)return this;var n=r-1>>>e&ce;if(n>=this.array.length)return this;var i,s=n===this.array.length-1;if(e>0){var u=this.array[n];if(i=u&&u.removeAfter(t,e-he,r),i===u&&s)return this}if(s&&!i)return this;var o=this.ensureOwner();return s||(o.array.length=n+1),i&&(o.array[n]=i),o},iterate:function(t,e,r,n,i){if(0===t){if(i){for(var s=this.array.length-1;s>=0;s--)if(this.array.hasOwnProperty(s)){var u=s+e;if(u>=0&&r>u&&n(this.array[s],u)===!1)return!1}return!0}return this.array.every(function(t,i){var s=i+e;return 0>s||s>=r||n(t,s)!==!1})}var o=1<<t,a=t-he;if(i){for(var h=this.array.length-1;h>=0;h--){var l=e+h*o;if(r>l&&l+o>0&&this.array.hasOwnProperty(h)&&!this.array[h].iterate(a,l,r,n,i))return!1
}return!0}return this.array.every(function(t,s){var u=e+s*o;return u>=r||0>=u+o||t.iterate(a,u,r,n,i)})}},{});var ge=function(t,e,r,n,i,s){var u=P(r);this._stack={node:i.array,level:n,offset:-e,max:u-e,__prev:{node:s.array,level:0,offset:u-e,max:r-e}}};B.createClass(ge,{next:function(){var t=this._stack;t:for(;t;){if(0===t.level)for(t.rawIndex||(t.rawIndex=0);t.node.length>t.rawIndex;){var e=t.rawIndex+t.offset;if(e>=0&&t.max>e&&t.node.hasOwnProperty(t.rawIndex)){var r=t.node[t.rawIndex];return t.rawIndex++,{value:[e,r],done:!0}}t.rawIndex++}else{var n=1<<t.level;for(t.levelIndex||(t.levelIndex=0);t.node.length>t.levelIndex;){var i=t.offset+t.levelIndex*n;if(i+n>0&&t.max>i&&t.node.hasOwnProperty(t.levelIndex)){var s=t.node[t.levelIndex].array;t.levelIndex++,t=this._stack={node:s,level:t.level-he,offset:i,max:t.max,__prev:t};continue t}t.levelIndex++}}t=this._stack=this._stack.__prev}return{done:!0}}},{});var ye,he=5,le=1<<he,ce=le-1,G={},me=new pe([]),de=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return we.from(t)},we=de;B.createClass(de,{toString:function(){return this.__toString("Set {","}")},has:function(t){return this._map?this._map.has(t):!1},get:function(t,e){return this.has(t)?t:e},add:function(t){if(null==t)return this;var e=this._map;return e||(e=X.empty().__ensureOwner(this.__ownerID)),e=e.set(t,null),this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:we._make(e)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.delete(t);return 0===e.length?this.clear():this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:we._make(e)},clear:function(){return this.__ownerID?(this.length=0,this._map=null,this):we.empty()},union:function(){var t=arguments;return 0===t.length?this:this.withMutations(function(e){for(var r=0;t.length>r;r++){var n=t[r];n=n.forEach?n:L(n),n.forEach(function(t){return e.add(t)})}})},intersect:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return L(t)
});var r=this;return this.withMutations(function(e){r.forEach(function(r){t.every(function(t){return t.contains(r)})||e.delete(r)})})},subtract:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return L(t)});var r=this;return this.withMutations(function(e){r.forEach(function(r){t.some(function(t){return t.contains(r)})&&e.delete(r)})})},isSubset:function(t){return t=L(t),this.every(function(e){return t.contains(e)})},isSuperset:function(t){var e=this;return t=L(t),t.every(function(t){return e.contains(t)})},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?we._make(e,t):(this.__ownerID=t,this._map=e,this)},__deepEquals:function(t){return!(this._map||t._map)||this._map.equals(t._map)},__iterate:function(t,e){var r=this;return this._map?this._map.__iterate(function(e,n){return t(n,n,r)},e):0}},{empty:function(){return Ie||(Ie=we._make())},from:function(t){return t&&t.constructor===we?t:t&&0!==t.length?we.empty().union(t):we.empty()},fromKeys:function(t){return we.from(L(t).flip())},_make:function(t,e){var r=Object.create(we.prototype);return r.length=t?t.length:0,r._map=t,r.__ownerID=e,r}},L),de.prototype.contains=de.prototype.has,de.prototype.withMutations=X.prototype.withMutations,de.prototype.asMutable=X.prototype.asMutable,de.prototype.asImmutable=X.prototype.asImmutable,de.prototype.__toJS=K.prototype.__toJS,de.prototype.__toStringMapper=K.prototype.__toStringMapper;var Ie,ke=function(t){return t&&t.constructor===Oe?t:t&&0!==t.length?Oe.empty().merge(t):Oe.empty()},Oe=ke;B.createClass(ke,{toString:function(){return this.__toString("OrderedMap {","}")},get:function(t,e){if(null!=t&&this._map){var r=this._map.get(t);if(null!=r)return this._vector.get(r)[1]}return e},clear:function(){return this.__ownerID?(this.length=0,this._map=this._vector=null,this):Oe.empty()},set:function(t,e){if(null==t)return this;var r=this._map,n=this._vector;if(r){var i=r.get(t);null==i?(r=r.set(t,n.length),n=n.push([t,e])):n.get(i)[1]!==e&&(n=n.set(i,[t,e]))
}else n=fe.empty().__ensureOwner(this.__ownerID).set(0,[t,e]),r=X.empty().__ensureOwner(this.__ownerID).set(t,0);return this.__ownerID?(this.length=r.length,this._map=r,this._vector=n,this):n===this._vector?this:Oe._make(r,n)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.get(t);if(null==e)return this;var r=this._map.delete(t),n=this._vector.delete(e);return 0===r.length?this.clear():this.__ownerID?(this.length=r.length,this._map=r,this._vector=n,this):r===this._map?this:Oe._make(r,n)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t),r=this._vector&&this._vector.__ensureOwner(t);return t?Oe._make(e,r,t):(this.__ownerID=t,this._map=e,this._vector=r,this)},__deepEqual:function(t){var e=this._vector.__iterator__();return t.every(function(t,r){var n=e.next();return n&&(n=n[1]),n&&w(r,n[0])&&w(t,n[1])})},__iterate:function(t,e){return this._vector?this._vector.fromEntries().__iterate(t,e):0}},{empty:function(){return De||(De=Oe._make())},_make:function(t,e,r){var n=Object.create(Oe.prototype);return n.length=t?t.length:0,n._map=t,n._vector=e,n.__ownerID=r,n}},X),ke.from=ke;var De,be=function(t,e){var r=function(t){this._map=X(t)};t=L(t),r.prototype=Object.create(Me.prototype),r.prototype.constructor=r,r.prototype._name=e,r.prototype._defaultValues=t;var n=Object.keys(t);return r.prototype.length=n.length,Object.defineProperty&&t.forEach(function(t,e){Object.defineProperty(r.prototype,e,{get:function(){return this.get(e)},set:function(t){if(!this.__ownerID)throw Error("Cannot set on an immutable record.");this.set(e,t)}})}),r},Me=be;B.createClass(be,{toString:function(){return this.__toString((this._name||"Record")+" {","}")},has:function(t){return this._defaultValues.has(t)},get:function(t,e){return void 0===e||this.has(t)?this._map.get(t,this._defaultValues.get(t)):e},clear:function(){return this.__ownerID?(this._map.clear(),this):this._empty()},set:function(t,e){if(null==t||!this.has(t))return this;var r=this._map.set(t,e);return this.__ownerID||r===this._map?this:this._make(r)
},"delete":function(t){if(null==t||!this.has(t))return this;var e=this._map.delete(t);return this.__ownerID||e===this._map?this:this._make(e)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?this._make(e,t):(this.__ownerID=t,this._map=e,this)},__iterate:function(t,e){var r=this;return this._defaultValues.map(function(t,e){return r.get(e)}).__iterate(t,e)},_empty:function(){Object.getPrototypeOf(this).constructor;return Me._empty||(Me._empty=this._make(X.empty()))},_make:function(t,e){var r=Object.create(Object.getPrototypeOf(this));return r._map=t,r.__ownerID=e,r}},{},L),be.prototype.__deepEqual=X.prototype.__deepEqual,be.prototype.merge=X.prototype.merge,be.prototype.mergeWith=X.prototype.mergeWith,be.prototype.mergeDeep=X.prototype.mergeDeep,be.prototype.mergeDeepWith=X.prototype.mergeDeepWith,be.prototype.update=X.prototype.update,be.prototype.updateIn=X.prototype.updateIn,be.prototype.cursor=X.prototype.cursor,be.prototype.withMutations=X.prototype.withMutations,be.prototype.asMutable=X.prototype.asMutable,be.prototype.asImmutable=X.prototype.asImmutable;var Se=function(t,e,r){return this instanceof xe?(U(0!==r,"Cannot step a Range by 0"),t=t||0,null==e&&(e=1/0),t===e&&Ee?Ee:(r=null==r?1:Math.abs(r),t>e&&(r=-r),this._start=t,this._end=e,this._step=r,void(this.length=Math.max(0,Math.ceil((e-t)/r-1)+1)))):new xe(t,e,r)},xe=Se;B.createClass(Se,{toString:function(){return 0===this.length?"Range []":"Range [ "+this._start+"..."+this._end+(this._step>1?" by "+this._step:"")+" ]"},has:function(t){return U(t>=0,"Index out of bounds"),this.length>t},get:function(t,e){return U(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._start+t*this._step:e},contains:function(t){var e=(t-this._start)/this._step;return e>=0&&this.length>e&&e===Math.floor(e)},slice:function(t,e,r){return u(t,e,this.length)?this:r?B.superCall(this,xe.prototype,"slice",[t,e,r]):(t=o(t,this.length),e=a(e,this.length),t>=e?Ee:new xe(this.get(t,this._end),this.get(e,this._end),this._step))
},__deepEquals:function(t){return this._start===t._start&&this._end===t._end&&this._step===t._step},indexOf:function(t){var e=t-this._start;if(e%this._step===0){var r=e/this._step;if(r>=0&&this.length>r)return r}return-1},lastIndexOf:function(t){return this.indexOf(t)},take:function(t){return this.slice(0,t)},skip:function(t,e){return e?B.superCall(this,xe.prototype,"skip",[t]):this.slice(t)},__iterate:function(t,e,r){for(var n=e^r,i=this.length-1,s=this._step,u=e?this._start+i*s:this._start,o=0;i>=o&&t(u,n?i-o:o,this)!==!1;o++)u+=e?-s:s;return n?this.length:o}},{},K),Se.prototype.__toJS=Se.prototype.toArray,Se.prototype.first=fe.prototype.first,Se.prototype.last=fe.prototype.last;var Ee=Se(0,0),Ce=function(t,e){return 0===e&&qe?qe:this instanceof Ae?(this._value=t,void(this.length=null==e?1/0:Math.max(0,e))):new Ae(t,e)},Ae=Ce;B.createClass(Ce,{toString:function(){return 0===this.length?"Repeat []":"Repeat [ "+this._value+" "+this.length+" times ]"},get:function(t,e){return U(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._value:e},first:function(){return this._value},contains:function(t){return w(this._value,t)},__deepEquals:function(t){return w(this._value,t._value)},slice:function(t,e,r){if(r)return B.superCall(this,Ae.prototype,"slice",[t,e,r]);var n=this.length;return t=0>t?Math.max(0,n+t):Math.min(n,t),e=null==e?n:e>0?Math.min(n,e):Math.max(0,n+e),e>t?new Ae(this._value,e-t):qe},reverse:function(t){return t?B.superCall(this,Ae.prototype,"reverse",[t]):this},indexOf:function(t){return w(this._value,t)?0:-1},lastIndexOf:function(t){return w(this._value,t)?this.length:-1},__iterate:function(t,e,r){var n=e^r;U(!n||1/0>this.length,"Cannot access end of infinite range.");for(var i=this.length-1,s=0;i>=s&&t(this._value,n?i-s:s,this)!==!1;s++);return n?this.length:s}},{},K),Ce.prototype.last=Ce.prototype.first,Ce.prototype.has=Se.prototype.has,Ce.prototype.take=Se.prototype.take,Ce.prototype.skip=Se.prototype.skip,Ce.prototype.__toJS=Se.prototype.__toJS;var qe=new Ce(void 0,0),je={Sequence:L,Map:X,Vector:fe,Set:de,OrderedMap:ke,Record:be,Range:Se,Repeat:Ce,is:w,fromJS:z};
return je}"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):Immutable=t();