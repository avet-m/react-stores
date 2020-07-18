!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactStores={},t.React)}(this,(function(t,e){"use strict";var r="default"in e?e.default:e,i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function n(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o,s=function(){return(s=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function a(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),n=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,n++)i[n]=o[s];return i}(o=t.StoreEventType||(t.StoreEventType={}))[o.All=0]="All",o[o.Init=1]="Init",o[o.Update=2]="Update",o[o.DumpUpdate=3]="DumpUpdate";var u=function(){function t(t,e,r,i){this.id=t,this.types=e,this.onFire=r,this.onRemove=i,this.timeout=null}return t.prototype.remove=function(){this.timeout&&clearTimeout(this.timeout),this.onRemove(this.id)},t}(),p=function(){function t(t,e,r,i,n){void 0===n&&(n=[]),this.id=t,this.types=e,this.onFire=r,this.onRemove=i,this.includeKeys=n,this.timeout=null}return t.prototype.remove=function(){this.timeout&&clearTimeout(this.timeout),this.onRemove(this.id)},t}(),c=function(){function t(t,e){void 0===e&&(e=1/0),this.name=t,this.lifetime=e,this.persistence=!0,this.initialState=null}return t.prototype.pack=function(t){return{data:t,timestamp:Date.now()}},t.prototype.reset=function(){var t=this.pack(this.initialState);return this.write(t),t},Object.defineProperty(t.prototype,"storeName",{get:function(){return("store.persistent."+this.type+"."+this.name).toLowerCase()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dumpHistoryName",{get:function(){return("store.persistent.dump.history."+this.type+"."+this.name).toLowerCase()},enumerable:!0,configurable:!0}),t}(),h=function(t){function e(e,r){void 0===r&&(r=1/0);var i=t.call(this,e,r)||this;return i.name=e,i.lifetime=r,i.storage=null,i.type="localStorage","undefined"!=typeof window&&window.localStorage&&(i.storage=window.localStorage),i}return n(e,t),e.prototype.write=function(t){if(this.storage&&this.persistence)try{this.storage.setItem(this.storeName,JSON.stringify(t))}catch(t){console.error(t)}},e.prototype.read=function(){if(this.storage&&this.persistence){var t=null;try{t=JSON.parse(this.storage.getItem(this.storeName)),Boolean(t)||Boolean(t.timestamp)||(t=this.reset())}catch(e){t=this.reset()}return t}return this.reset()},e.prototype.saveDump=function(t){var e=t.timestamp;if(this.storage&&this.persistence)try{var r=JSON.parse(this.storage.getItem(this.dumpHistoryName));r&&r.dumpHistory?(r.dumpHistory.push(t),this.storage.setItem(this.dumpHistoryName,JSON.stringify(r))):this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[t]}))}catch(r){try{this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[t]}))}catch(t){console.error(t),e=null}console.error(r),e=null}return e},e.prototype.removeDump=function(t){if(this.storage&&this.persistence)try{var e=JSON.parse(this.storage.getItem(this.dumpHistoryName));if(e&&e.dumpHistory){var r=e.dumpHistory.filter((function(e){return e.timestamp!==t}));this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:r}))}}catch(t){console.error(t)}},e.prototype.readDump=function(t){var e=null;if(this.storage&&this.persistence)try{var r=JSON.parse(this.storage.getItem(this.dumpHistoryName));e=r&&r.dumpHistory?r.dumpHistory.find((function(e){return e.timestamp===t})):null}catch(t){console.error(t)}return e},e.prototype.getDumpHistory=function(){var t=[];if(this.storage&&this.persistence)try{var e=JSON.parse(this.storage.getItem(this.dumpHistoryName));e&&e.dumpHistory&&(t=e.dumpHistory.map((function(t){return t.timestamp})))}catch(e){console.error(e),t=[]}return t},e.prototype.resetHistory=function(){if(this.storage&&this.persistence)try{this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[]}))}catch(t){console.error(t)}},e.prototype.clear=function(){if(this.storage&&this.persistence)try{this.storage.removeItem(this.storeName)}catch(t){console.error(t)}},e}(c);function f(t){switch(typeof t){case"undefined":case"boolean":case"number":case"string":case"symbol":return!0;default:return!1}}function m(t,e){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t===e)return!0;if(f(t)||f(e))return t===e;if(null===t||null===e)return!1;if(Array.isArray(t)&&!Array.isArray(e)||!Array.isArray(t)&&Array.isArray(e))return!1;for(var n=new Set(r),o=new Set(Object.keys(t)),s=new Set(Object.keys(e)),u=0,p=r;u<p.length;u++){var c=p[u];o.add(c),s.add(c)}if(o.size!==s.size)return!1;var h=Array.from(o),y=Array.from(s);h.sort(),y.sort();for(var l=h.length-1;l>=0;l--)if(h[l]!==y[l])return!1;for(l=h.length-1;l>=0;l--){c=h[l];if(!n.has(c)&&!m.apply(void 0,a([t[c],e[c]],r)))return!1}return typeof t==typeof e}var y=function(){function e(t,e){this.fireTimeout=t,this.name=e,this.events=[],this.eventCounter=0,this.timeout=null,this._hook=null,this._hook="undefined"!=typeof window&&window.__REACT_STORES_INSPECTOR__}return e.prototype.getEventsCount=function(){return this.events.length},e.prototype.generateEventId=function(){return""+ ++this.eventCounter+Date.now()+Math.random()},e.prototype.fire=function(t,e,r,i){var n=this;if(i)this.fireTimeout&&0!==this.fireTimeout?(i.timeout&&clearTimeout(this.timeout),i.timeout=setTimeout((function(){n.doFire(t,e,r,i)}),this.fireTimeout)):this.doFire(t,e,r,i);else if(this.fireTimeout&&0!==this.fireTimeout)this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){for(var i in n.events)n.events.hasOwnProperty(i)&&n.doFire(t,e,r,n.events[i])}),this.fireTimeout);else for(var o in this.events)this.events.hasOwnProperty(o)&&this.doFire(t,e,r,this.events[o])},e.prototype.remove=function(t){if(this.fireTimeout&&0!==this.fireTimeout)for(var e in this.events)this.events.hasOwnProperty(e)&&this.events[e].timeout&&clearTimeout(this.timeout);this.events=this.events.filter((function(e){return e.id!==t})),this._hook&&this._hook.removeEvent(this.name,t)},e.prototype.add=function(t,e,r){var i,n=this;return i=r?new p(this.generateEventId(),t,e,(function(t){n.remove(t)}),r):new u(this.generateEventId(),t,e,(function(t){n.remove(t)})),this.events.push(i),this._hook&&this._hook.addEvent(this.name,i.id),i},e.prototype.doFire=function(e,r,i,n){if(n.types.includes(e)||n.types.includes(t.StoreEventType.All)){if(n instanceof p){var o=Object.keys(r).filter((function(t){return!n.includeKeys.includes(t)}));return void(m.apply(void 0,a([r,i],o))||n.onFire(r,i,n.includeKeys,e))}n.onFire(r,i,e)}},e}(),l=function(){function e(t,e,r){var i,n,o=this;this.persistenceDriver=r,this.version="5.0.5",this.eventManager=null,this.initialState=null,this.frozenState=null,this._hook=null,this.opts={name:"",live:!1,freezeInstances:!1,immutable:!1,persistence:!1,setStateTimeout:0,asyncPersistence:!1},this._hook="undefined"!=typeof window&&window.__REACT_STORES_INSPECTOR__;var s=null;if(this.name=null!=(n=null===(i=e)||void 0===i?void 0:i.name)?n:this.generateStoreId(t),e&&(this.opts.name=this.name,this.opts.immutable=!0===e.immutable,this.opts.persistence=!0===e.persistence,this.opts.setStateTimeout=e.setStateTimeout,this.opts.asyncPersistence=!0===e.asyncPersistence),this.persistenceDriver||(this.persistenceDriver=new h(this.name+this.generateStoreId(t))),this.opts.persistence)if(this.opts.asyncPersistence)this.persistenceDriver.readAsync().then((function(t){t&&t.data&&o.setState(t.data)}));else{var a=this.persistenceDriver.read().data;a&&(s=a)}this.execStateInitialization(t,s)}return Object.defineProperty(e.prototype,"state",{get:function(){return this.frozenState},enumerable:!0,configurable:!0}),e.prototype.execStateInitialization=function(t,e){null===e&&(e=t),this.persistenceDriver.persistence=this.opts.persistence,this.persistenceDriver.initialState=t,this.eventManager=new y(this.opts.setStateTimeout,this.name),this.initialState=this.deepFreeze(t),this.frozenState=this.deepFreeze(e),this._hook&&this._hook.attachStore(this,this.name,this.opts,!1)},e.prototype.deepFreeze=function(t){if(this.opts.immutable){var e=Object.getOwnPropertyNames(t);for(var r in e)if(e.hasOwnProperty(r)){var i=t[e[r]];"object"==typeof i&&null!==i&&this.deepFreeze(i)}return Object.freeze(t)}return t},e.prototype.hashCode=function(t){for(var e=0,r=0;r<t.length;r++)e=Math.imul(31,e)+t.charCodeAt(r)|0;return e.toString(16)},e.prototype.generateStoreId=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e+=r);return this.hashCode(e)},e.prototype.resetPersistence=function(){this.persistenceDriver.reset()},e.prototype.clearPersistence=function(){this.persistenceDriver.clear()},e.prototype.resetDumpHistory=function(){this.persistenceDriver.resetHistory(),this.eventManager.fire(t.StoreEventType.DumpUpdate,this.frozenState,this.frozenState)},e.prototype.saveDump=function(){var e=this.persistenceDriver.saveDump(this.persistenceDriver.pack(this.frozenState));return this.eventManager.fire(t.StoreEventType.DumpUpdate,this.frozenState,this.frozenState),e},e.prototype.removeDump=function(e){this.persistenceDriver.removeDump(e),this.eventManager.fire(t.StoreEventType.DumpUpdate,this.frozenState,this.frozenState)},e.prototype.restoreDump=function(e){var r=this.persistenceDriver.readDump(e);if(r){var i=this.deepFreeze(this.frozenState);this.setState(s(s({},r.data),{$actionName:"@restoreDump"})),this.eventManager.fire(t.StoreEventType.DumpUpdate,this.frozenState,i)}},e.prototype.getDumpHistory=function(){return this.persistenceDriver.getDumpHistory()},e.prototype.setState=function(t){var e=t.$actionName,r=function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]])}return r}(t,["$actionName"]),i=this.deepFreeze(this.frozenState),n=this.deepFreeze(s(s({},i),r));this.frozenState=n,this.execWrite(i,n,e)},e.prototype.execWrite=function(e,r,i){var n=this;this.opts.asyncPersistence?this.persistenceDriver.writeAsync(this.persistenceDriver.pack(r)).then((function(){n.eventManager.fire(t.StoreEventType.Update,r,e),n._hook&&n._hook.updateState(n.name,r,i)})):(this.persistenceDriver.write(this.persistenceDriver.pack(r)),this.eventManager.fire(t.StoreEventType.Update,r,e),this._hook&&this._hook.updateState(this.name,r,i))},e.prototype.resetState=function(){this.setState(s(s({},this.deepFreeze(this.initialState)),{$actionName:"@resetState"}))},e.prototype.removeStore=function(){this._hook&&this._hook.removeStore(this.name)},e.prototype.getInitialState=function(){return this.initialState},e.prototype.on=function(e,r,i){var n,o=e&&e.constructor===Array?e:[e];return n=Array.isArray(r)?this.eventManager.add(o,i,r):this.eventManager.add(o,r),this.eventManager.fire(t.StoreEventType.Init,this.frozenState,this.frozenState,n),this.eventManager.fire(t.StoreEventType.DumpUpdate,this.frozenState,this.frozenState,n),n},e}();var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.write=function(t){},e.prototype.read=function(){},e.prototype.saveDump=function(t){return 0},e.prototype.readDump=function(t){},e.prototype.getDumpHistory=function(){return[]},e.prototype.removeDump=function(t){},e.prototype.resetHistory=function(){},e}(c);t.Store=l,t.StoreEvent=u,t.StorePersistentDriver=c,t.StorePersistentDriverAsync=v,t.StorePersistentLocalStorageDriver=h,t.areSimilar=m,t.followStore=function(r){return function(i){return function(o){function s(){var t=null!==o&&o.apply(this,arguments)||this;return t.storeEvent=null,t.state={storeState:null},t}return n(s,o),s.prototype.componentWillMount=function(){var e=this;this.storeEvent=r.on(t.StoreEventType.All,(function(){e.forceUpdate()}))},s.prototype.componentWillUnmount=function(){this.storeEvent.remove()},s.prototype.render=function(){return e.createElement(i,this.props)},s}(e.Component)}},t.useIsolatedStore=function(e,i,n){var o=r.useState(0),a=r.useRef(r.useMemo((function(){return new l(e,s({persistence:!1,immutable:!0},i),n)}),[]));return r.useEffect((function(){var e=a.current.on(t.StoreEventType.Update,(function(){o[1](Date.now())}));return function(){var t;e.remove(),(null===(t=i)||void 0===t?void 0:t.persistence)||a.current.resetState(),a.current.removeStore()}}),[]),a.current},t.useStore=function(r){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];var o=e.useMemo((function(){return e=i,r=function(t){return t},n=function(t,e){return t===e},o=t.StoreEventType.All,s=[],e[0]&&(Object.keys(t.StoreEventType).includes(e[0].toString())||Array.isArray(e[0])&&Object.keys(t.StoreEventType).includes(e[0][0].toString()))?{eventType:e[0],mapState:e[1]||r,compare:e[2]||n,includeKeys:s}:e[0]&&Array.isArray(e[0])&&"string"==typeof e[0][0]?{eventType:e[1]||o,mapState:r,compare:n,includeKeys:e[0]}:"function"==typeof e[0]?{eventType:o,mapState:e[0]||r,compare:e[1]||n,includeKeys:s}:e[0]?{eventType:e[0].eventType||o,mapState:e[0].mapState||r,compare:e[0].compare||n,includeKeys:s}:{mapState:r,compare:n,eventType:o,includeKeys:s};var e,r,n,o,s}),[]),s=e.useRef(r),a=e.useMemo((function(){return o.mapState(s.current.state)}),[]),u=e.useState(0),p=e.useRef(a);return e.useEffect((function(){var t;return t=o.includeKeys.length>0?s.current.on(o.eventType,o.includeKeys,(function(t){p.current=o.mapState(t),u[1](Date.now())})):s.current.on(o.eventType,(function(t,e,r){var i=o.mapState(t,e,r);o.compare&&o.compare(i,p.current)||(p.current=i,u[1](Date.now()))})),function(){t.remove()}}),[]),p.current},Object.defineProperty(t,"__esModule",{value:!0})}));