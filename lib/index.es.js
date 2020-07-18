import t,{createElement as e,Component as r,useMemo as i,useRef as n,useState as o,useEffect as s}from"react";
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
***************************************************************************** */var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function u(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var p,c=function(){return(c=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function h(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),n=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,n++)i[n]=o[s];return i}!function(t){t[t.All=0]="All",t[t.Init=1]="Init",t[t.Update=2]="Update",t[t.DumpUpdate=3]="DumpUpdate"}(p||(p={}));var f=function(){function t(t,e,r,i){this.id=t,this.types=e,this.onFire=r,this.onRemove=i,this.timeout=null}return t.prototype.remove=function(){this.timeout&&clearTimeout(this.timeout),this.onRemove(this.id)},t}(),m=function(){function t(t,e,r,i,n){void 0===n&&(n=[]),this.id=t,this.types=e,this.onFire=r,this.onRemove=i,this.includeKeys=n,this.timeout=null}return t.prototype.remove=function(){this.timeout&&clearTimeout(this.timeout),this.onRemove(this.id)},t}(),y=function(t){return function(i){return function(r){function n(){var t=null!==r&&r.apply(this,arguments)||this;return t.storeEvent=null,t.state={storeState:null},t}return u(n,r),n.prototype.componentWillMount=function(){var e=this;this.storeEvent=t.on(p.All,(function(){e.forceUpdate()}))},n.prototype.componentWillUnmount=function(){this.storeEvent.remove()},n.prototype.render=function(){return e(i,this.props)},n}(r)}},l=function(){function t(t,e){void 0===e&&(e=1/0),this.name=t,this.lifetime=e,this.persistence=!0,this.initialState=null}return t.prototype.pack=function(t){return{data:t,timestamp:Date.now()}},t.prototype.reset=function(){var t=this.pack(this.initialState);return this.write(t),t},Object.defineProperty(t.prototype,"storeName",{get:function(){return("store.persistent."+this.type+"."+this.name).toLowerCase()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dumpHistoryName",{get:function(){return("store.persistent.dump.history."+this.type+"."+this.name).toLowerCase()},enumerable:!0,configurable:!0}),t}(),v=function(t){function e(e,r){void 0===r&&(r=1/0);var i=t.call(this,e,r)||this;return i.name=e,i.lifetime=r,i.storage=null,i.type="localStorage","undefined"!=typeof window&&window.localStorage&&(i.storage=window.localStorage),i}return u(e,t),e.prototype.write=function(t){if(this.storage&&this.persistence)try{this.storage.setItem(this.storeName,JSON.stringify(t))}catch(t){console.error(t)}},e.prototype.read=function(){if(this.storage&&this.persistence){var t=null;try{t=JSON.parse(this.storage.getItem(this.storeName)),Boolean(t)||Boolean(t.timestamp)||(t=this.reset())}catch(e){t=this.reset()}return t}return this.reset()},e.prototype.saveDump=function(t){var e=t.timestamp;if(this.storage&&this.persistence)try{var r=JSON.parse(this.storage.getItem(this.dumpHistoryName));r&&r.dumpHistory?(r.dumpHistory.push(t),this.storage.setItem(this.dumpHistoryName,JSON.stringify(r))):this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[t]}))}catch(r){try{this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[t]}))}catch(t){console.error(t),e=null}console.error(r),e=null}return e},e.prototype.removeDump=function(t){if(this.storage&&this.persistence)try{var e=JSON.parse(this.storage.getItem(this.dumpHistoryName));if(e&&e.dumpHistory){var r=e.dumpHistory.filter((function(e){return e.timestamp!==t}));this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:r}))}}catch(t){console.error(t)}},e.prototype.readDump=function(t){var e=null;if(this.storage&&this.persistence)try{var r=JSON.parse(this.storage.getItem(this.dumpHistoryName));e=r&&r.dumpHistory?r.dumpHistory.find((function(e){return e.timestamp===t})):null}catch(t){console.error(t)}return e},e.prototype.getDumpHistory=function(){var t=[];if(this.storage&&this.persistence)try{var e=JSON.parse(this.storage.getItem(this.dumpHistoryName));e&&e.dumpHistory&&(t=e.dumpHistory.map((function(t){return t.timestamp})))}catch(e){console.error(e),t=[]}return t},e.prototype.resetHistory=function(){if(this.storage&&this.persistence)try{this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[]}))}catch(t){console.error(t)}},e.prototype.clear=function(){if(this.storage&&this.persistence)try{this.storage.removeItem(this.storeName)}catch(t){console.error(t)}},e}(l);function d(t){switch(typeof t){case"undefined":case"boolean":case"number":case"string":case"symbol":return!0;default:return!1}}function g(t,e){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t===e)return!0;if(d(t)||d(e))return t===e;if(null===t||null===e)return!1;if(Array.isArray(t)&&!Array.isArray(e)||!Array.isArray(t)&&Array.isArray(e))return!1;for(var n=new Set(r),o=new Set(Object.keys(t)),s=new Set(Object.keys(e)),a=0,u=r;a<u.length;a++){var p=u[a];o.add(p),s.add(p)}if(o.size!==s.size)return!1;var c=Array.from(o),f=Array.from(s);c.sort(),f.sort();for(var m=c.length-1;m>=0;m--)if(c[m]!==f[m])return!1;for(m=c.length-1;m>=0;m--){p=c[m];if(!n.has(p)&&!g.apply(void 0,h([t[p],e[p]],r)))return!1}return typeof t==typeof e}var S=function(){function t(t,e){this.fireTimeout=t,this.name=e,this.events=[],this.eventCounter=0,this.timeout=null,this._hook=null,this._hook="undefined"!=typeof window&&window.__REACT_STORES_INSPECTOR__}return t.prototype.getEventsCount=function(){return this.events.length},t.prototype.generateEventId=function(){return""+ ++this.eventCounter+Date.now()+Math.random()},t.prototype.fire=function(t,e,r,i){var n=this;if(i)this.fireTimeout&&0!==this.fireTimeout?(i.timeout&&clearTimeout(this.timeout),i.timeout=setTimeout((function(){n.doFire(t,e,r,i)}),this.fireTimeout)):this.doFire(t,e,r,i);else if(this.fireTimeout&&0!==this.fireTimeout)this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){for(var i in n.events)n.events.hasOwnProperty(i)&&n.doFire(t,e,r,n.events[i])}),this.fireTimeout);else for(var o in this.events)this.events.hasOwnProperty(o)&&this.doFire(t,e,r,this.events[o])},t.prototype.remove=function(t){if(this.fireTimeout&&0!==this.fireTimeout)for(var e in this.events)this.events.hasOwnProperty(e)&&this.events[e].timeout&&clearTimeout(this.timeout);this.events=this.events.filter((function(e){return e.id!==t})),this._hook&&this._hook.removeEvent(this.name,t)},t.prototype.add=function(t,e,r){var i,n=this;return i=r?new m(this.generateEventId(),t,e,(function(t){n.remove(t)}),r):new f(this.generateEventId(),t,e,(function(t){n.remove(t)})),this.events.push(i),this._hook&&this._hook.addEvent(this.name,i.id),i},t.prototype.doFire=function(t,e,r,i){if(i.types.includes(t)||i.types.includes(p.All)){if(i instanceof m){var n=Object.keys(e).filter((function(t){return!i.includeKeys.includes(t)}));return void(g.apply(void 0,h([e,r],n))||i.onFire(e,r,i.includeKeys,t))}i.onFire(e,r,t)}},t}(),D=function(){function t(t,e,r){var i,n,o=this;this.persistenceDriver=r,this.version="5.0.5",this.eventManager=null,this.initialState=null,this.frozenState=null,this._hook=null,this.opts={name:"",live:!1,freezeInstances:!1,immutable:!1,persistence:!1,setStateTimeout:0,asyncPersistence:!1},this._hook="undefined"!=typeof window&&window.__REACT_STORES_INSPECTOR__;var s=null;if(this.name=null!=(n=null===(i=e)||void 0===i?void 0:i.name)?n:this.generateStoreId(t),e&&(this.opts.name=this.name,this.opts.immutable=!0===e.immutable,this.opts.persistence=!0===e.persistence,this.opts.setStateTimeout=e.setStateTimeout,this.opts.asyncPersistence=!0===e.asyncPersistence),this.persistenceDriver||(this.persistenceDriver=new v(this.name+this.generateStoreId(t))),this.opts.persistence)if(this.opts.asyncPersistence)this.persistenceDriver.readAsync().then((function(t){t&&t.data&&o.setState(t.data)}));else{var a=this.persistenceDriver.read().data;a&&(s=a)}this.execStateInitialization(t,s)}return Object.defineProperty(t.prototype,"state",{get:function(){return this.frozenState},enumerable:!0,configurable:!0}),t.prototype.execStateInitialization=function(t,e){null===e&&(e=t),this.persistenceDriver.persistence=this.opts.persistence,this.persistenceDriver.initialState=t,this.eventManager=new S(this.opts.setStateTimeout,this.name),this.initialState=this.deepFreeze(t),this.frozenState=this.deepFreeze(e),this._hook&&this._hook.attachStore(this,this.name,this.opts,!1)},t.prototype.deepFreeze=function(t){if(this.opts.immutable){var e=Object.getOwnPropertyNames(t);for(var r in e)if(e.hasOwnProperty(r)){var i=t[e[r]];"object"==typeof i&&null!==i&&this.deepFreeze(i)}return Object.freeze(t)}return t},t.prototype.hashCode=function(t){for(var e=0,r=0;r<t.length;r++)e=Math.imul(31,e)+t.charCodeAt(r)|0;return e.toString(16)},t.prototype.generateStoreId=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e+=r);return this.hashCode(e)},t.prototype.resetPersistence=function(){this.persistenceDriver.reset()},t.prototype.clearPersistence=function(){this.persistenceDriver.clear()},t.prototype.resetDumpHistory=function(){this.persistenceDriver.resetHistory(),this.eventManager.fire(p.DumpUpdate,this.frozenState,this.frozenState)},t.prototype.saveDump=function(){var t=this.persistenceDriver.saveDump(this.persistenceDriver.pack(this.frozenState));return this.eventManager.fire(p.DumpUpdate,this.frozenState,this.frozenState),t},t.prototype.removeDump=function(t){this.persistenceDriver.removeDump(t),this.eventManager.fire(p.DumpUpdate,this.frozenState,this.frozenState)},t.prototype.restoreDump=function(t){var e=this.persistenceDriver.readDump(t);if(e){var r=this.deepFreeze(this.frozenState);this.setState(c(c({},e.data),{$actionName:"@restoreDump"})),this.eventManager.fire(p.DumpUpdate,this.frozenState,r)}},t.prototype.getDumpHistory=function(){return this.persistenceDriver.getDumpHistory()},t.prototype.setState=function(t){var e=t.$actionName,r=function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]])}return r}(t,["$actionName"]),i=this.deepFreeze(this.frozenState),n=this.deepFreeze(c(c({},i),r));this.frozenState=n,this.execWrite(i,n,e)},t.prototype.execWrite=function(t,e,r){var i=this;this.opts.asyncPersistence?this.persistenceDriver.writeAsync(this.persistenceDriver.pack(e)).then((function(){i.eventManager.fire(p.Update,e,t),i._hook&&i._hook.updateState(i.name,e,r)})):(this.persistenceDriver.write(this.persistenceDriver.pack(e)),this.eventManager.fire(p.Update,e,t),this._hook&&this._hook.updateState(this.name,e,r))},t.prototype.resetState=function(){this.setState(c(c({},this.deepFreeze(this.initialState)),{$actionName:"@resetState"}))},t.prototype.removeStore=function(){this._hook&&this._hook.removeStore(this.name)},t.prototype.getInitialState=function(){return this.initialState},t.prototype.on=function(t,e,r){var i,n=t&&t.constructor===Array?t:[t];return i=Array.isArray(e)?this.eventManager.add(n,r,e):this.eventManager.add(n,e),this.eventManager.fire(p.Init,this.frozenState,this.frozenState,i),this.eventManager.fire(p.DumpUpdate,this.frozenState,this.frozenState,i),i},t}();function w(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var a=i((function(){return t=e,r=function(t){return t},i=function(t,e){return t===e},n=p.All,o=[],t[0]&&(Object.keys(p).includes(t[0].toString())||Array.isArray(t[0])&&Object.keys(p).includes(t[0][0].toString()))?{eventType:t[0],mapState:t[1]||r,compare:t[2]||i,includeKeys:o}:t[0]&&Array.isArray(t[0])&&"string"==typeof t[0][0]?{eventType:t[1]||n,mapState:r,compare:i,includeKeys:t[0]}:"function"==typeof t[0]?{eventType:n,mapState:t[0]||r,compare:t[1]||i,includeKeys:o}:t[0]?{eventType:t[0].eventType||n,mapState:t[0].mapState||r,compare:t[0].compare||i,includeKeys:o}:{mapState:r,compare:i,eventType:n,includeKeys:o};var t,r,i,n,o}),[]),u=n(t),c=i((function(){return a.mapState(u.current.state)}),[]),h=o(0),f=n(c);return s((function(){var t;return t=a.includeKeys.length>0?u.current.on(a.eventType,a.includeKeys,(function(t){f.current=a.mapState(t),h[1](Date.now())})):u.current.on(a.eventType,(function(t,e,r){var i=a.mapState(t,e,r);a.compare&&a.compare(i,f.current)||(f.current=i,h[1](Date.now()))})),function(){t.remove()}}),[]),f.current}function O(e,r,i){var n=t.useState(0),o=t.useRef(t.useMemo((function(){return new D(e,c({persistence:!1,immutable:!0},r),i)}),[]));return t.useEffect((function(){var t=o.current.on(p.Update,(function(){n[1](Date.now())}));return function(){var e;t.remove(),(null===(e=r)||void 0===e?void 0:e.persistence)||o.current.resetState(),o.current.removeStore()}}),[]),o.current}var b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.write=function(t){},e.prototype.read=function(){},e.prototype.saveDump=function(t){return 0},e.prototype.readDump=function(t){},e.prototype.getDumpHistory=function(){return[]},e.prototype.removeDump=function(t){},e.prototype.resetHistory=function(){},e}(l);export{D as Store,f as StoreEvent,p as StoreEventType,l as StorePersistentDriver,b as StorePersistentDriverAsync,v as StorePersistentLocalStorageDriver,g as areSimilar,y as followStore,O as useIsolatedStore,w as useStore};