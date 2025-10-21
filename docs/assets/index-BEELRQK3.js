(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();let W=null;function We(t){W=t}function re(){if(!W)throw new Error("Built-in AI API Polyfill: No backend configured. Call a configuration function, e.g., `configureFirebaseBackend()`, first.");return W}class qe{destroy(){console.log("Model destroyed.")}}let Ye=class Oe extends qe{#e;type;format;length;sharedContext;expectedInputLanguages;expectedContextLanguages;outputLanguage;inputQuota;static async create(e={}){if(e.signal?.aborted)throw e.signal.reason??new DOMException("Aborted","AbortError");if(e.monitor)try{e.monitor(new EventTarget)}catch(s){console.warn("Monitor callback failed.",s)}const n=re();if(typeof n.checkSummarizerAvailability!="function")throw new Error("The configured AI backend does not support Summarizer.");return new Oe(e,n)}static async availability(e={}){return re().checkSummarizerAvailability(e)}constructor(e,n){super(),this.#e=n,this.type=e.type??"key-points",this.format=e.format??"markdown",this.length=e.length??"short",this.sharedContext=e.sharedContext??"",this.expectedInputLanguages=e.expectedInputLanguages?Object.freeze(e.expectedInputLanguages):null,this.expectedContextLanguages=e.expectedContextLanguages?Object.freeze(e.expectedContextLanguages):null,this.outputLanguage=e.outputLanguage??null,this.inputQuota=this.#e.getSummarizerQuota?this.#e.getSummarizerQuota():1/0}get type(){return this.type}get format(){return this.format}get length(){return this.length}get sharedContext(){return this.sharedContext}get expectedInputLanguages(){return this.expectedInputLanguages}get expectedContextLanguages(){return this.expectedContextLanguages}get outputLanguage(){return this.outputLanguage}get inputQuota(){return this.inputQuota}#t(e){return{type:this.type,format:this.format,length:this.length,sharedContext:this.sharedContext,outputLanguage:this.outputLanguage,context:e?.context,signal:e?.signal}}async summarize(e,n={}){const s=this.#t(n);return this.#e.summarize(e,s)}summarizeStreaming(e,n={}){const s=this.#t(n);return this.#e.summarizeStreaming(e,s)}async measureInputUsage(e,n={}){const s=this.#t(n);return this.#e.measureSummarizerUsage(e,s)}};ReadableStream.prototype[Symbol.asyncIterator]||(ReadableStream.prototype[Symbol.asyncIterator]=async function*(){const t=this.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)return;yield n}}finally{t.releaseLock()}});function Ke(){self.Summarizer?console.log("Native AI Summarizer detected. Polyfill not required."):(self.Summarizer=Ye,console.log("Polyfill for AI Summarizer has been installed."))}Ke();const Je=()=>{};var ae={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Qe=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],o=t[n++],i=t[n++],c=((r&7)<<18|(a&63)<<12|(o&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Re={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const a=t[r],o=r+1<t.length,i=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,f=a>>2,_=(a&3)<<4|i>>4;let w=(i&15)<<2|u>>6,g=u&63;c||(g=64,o||(w=64)),s.push(n[f],n[_],n[w],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ae(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qe(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],i=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const _=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||i==null||u==null||_==null)throw new Xe;const w=a<<2|i>>4;if(s.push(w),u!==64){const g=i<<4&240|u>>2;if(s.push(g),_!==64){const m=u<<6&192|_;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xe extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ze=function(t){const e=Ae(t);return Re.encodeByteArray(e,!0)},De=function(t){return Ze(t).replace(/\./g,"")},et=function(t){try{return Re.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=()=>tt().__FIREBASE_DEFAULTS__,st=()=>{if(typeof process>"u"||typeof ae>"u")return;const t=ae.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&et(t[1]);return e&&JSON.parse(e)},at=()=>{try{return Je()||nt()||st()||rt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Te=()=>at()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function it(){try{return typeof indexedDB=="object"}catch{return!1}}function ct(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="FirebaseError";class v extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lt,Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ve.prototype.create)}}class ve{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],o=a?dt(a,s):"Error",i=`${this.serviceName}: ${o} (${r}).`;return new v(r,i,s)}}function dt(t,e){return t.replace(ut,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ut=/\{\$([^}]+)}/g;function q(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const a=t[r],o=e[r];if(oe(a)&&oe(o)){if(!q(a,o))return!1}else if(a!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function oe(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class P{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ot;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gt(e))try{this.getOrInitializeService({instanceIdentifier:O})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=O){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=O){return this.instances.has(e)}getOptions(e=O){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,o]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);s===i&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pt(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=O){return this.component?this.component.multipleInstances?e:O:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pt(t){return t===O?void 0:t}function gt(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ft(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(h||(h={}));const bt={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},yt=h.INFO,Et={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},_t=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Et[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ne{constructor(e){this.name=e,this._logLevel=yt,this._logHandler=_t,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const wt=(t,e)=>e.some(n=>t instanceof n);let ie,ce;function St(){return ie||(ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function It(){return ce||(ce=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pe=new WeakMap,Y=new WeakMap,Le=new WeakMap,H=new WeakMap,te=new WeakMap;function Ct(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",o)},a=()=>{n(I(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pe.set(n,t)}).catch(()=>{}),te.set(e,t),e}function Ot(t){if(Y.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",o),t.removeEventListener("abort",o)},a=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",o),t.addEventListener("abort",o)});Y.set(t,e)}let K={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Y.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Le.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function At(t){K=t(K)}function Rt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(V(this),e,...n);return Le.set(s,e.sort?e.sort():[e]),I(s)}:It().includes(t)?function(...e){return t.apply(V(this),e),I(Pe.get(this))}:function(...e){return I(t.apply(V(this),e))}}function Dt(t){return typeof t=="function"?Rt(t):(t instanceof IDBTransaction&&Ot(t),wt(t,St())?new Proxy(t,K):t)}function I(t){if(t instanceof IDBRequest)return Ct(t);if(H.has(t))return H.get(t);const e=Dt(t);return e!==t&&(H.set(t,e),te.set(e,t)),e}const V=t=>te.get(t);function Tt(t,e,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const o=indexedDB.open(t,e),i=I(o);return s&&o.addEventListener("upgradeneeded",c=>{s(I(o.result),c.oldVersion,c.newVersion,I(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),i.then(c=>{a&&c.addEventListener("close",()=>a()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),i}const vt=["get","getKey","getAll","getAllKeys","count"],Nt=["put","add","delete","clear"],z=new Map;function le(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(z.get(e))return z.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Nt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vt.includes(n)))return;const a=async function(o,...i){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(i.shift())),(await Promise.all([u[n](...i),r&&c.done]))[0]};return z.set(e,a),a}At(t=>({...t,get:(e,n,s)=>le(e,n)||t.get(e,n,s),has:(e,n)=>!!le(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lt(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lt(t){return t.getComponent()?.type==="VERSION"}const J="@firebase/app",de="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Ne("@firebase/app"),kt="@firebase/app-compat",Mt="@firebase/analytics-compat",xt="@firebase/analytics",$t="@firebase/app-check-compat",Bt="@firebase/app-check",Ft="@firebase/auth",Ut="@firebase/auth-compat",Ht="@firebase/database",Vt="@firebase/data-connect",zt="@firebase/database-compat",jt="@firebase/functions",Gt="@firebase/functions-compat",Wt="@firebase/installations",qt="@firebase/installations-compat",Yt="@firebase/messaging",Kt="@firebase/messaging-compat",Jt="@firebase/performance",Qt="@firebase/performance-compat",Xt="@firebase/remote-config",Zt="@firebase/remote-config-compat",en="@firebase/storage",tn="@firebase/storage-compat",nn="@firebase/firestore",sn="@firebase/ai",rn="@firebase/firestore-compat",an="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="[DEFAULT]",on={[J]:"fire-core",[kt]:"fire-core-compat",[xt]:"fire-analytics",[Mt]:"fire-analytics-compat",[Bt]:"fire-app-check",[$t]:"fire-app-check-compat",[Ft]:"fire-auth",[Ut]:"fire-auth-compat",[Ht]:"fire-rtdb",[Vt]:"fire-data-connect",[zt]:"fire-rtdb-compat",[jt]:"fire-fn",[Gt]:"fire-fn-compat",[Wt]:"fire-iid",[qt]:"fire-iid-compat",[Yt]:"fire-fcm",[Kt]:"fire-fcm-compat",[Jt]:"fire-perf",[Qt]:"fire-perf-compat",[Xt]:"fire-rc",[Zt]:"fire-rc-compat",[en]:"fire-gcs",[tn]:"fire-gcs-compat",[nn]:"fire-fst",[rn]:"fire-fst-compat",[sn]:"fire-vertex","fire-js":"fire-js",[an]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new Map,cn=new Map,X=new Map;function ue(t,e){try{t.container.addComponent(e)}catch(n){y.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(X.has(e))return y.debug(`There were multiple attempts to register component ${e}.`),!1;X.set(e,t);for(const n of $.values())ue(n,t);for(const n of cn.values())ue(n,t);return!0}function ln(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},C=new ve("app","Firebase",un);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new P("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}function ke(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Q,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw C.create("bad-app-name",{appName:String(r)});if(n||(n=Te()),!n)throw C.create("no-options");const a=$.get(r);if(a){if(q(n,a.options)&&q(s,a.config))return a;throw C.create("duplicate-app",{appName:r})}const o=new mt(r);for(const c of X.values())o.addComponent(c);const i=new hn(n,s,o);return $.set(r,i),i}function fn(t=Q){const e=$.get(t);if(!e&&t===Q&&Te())return ke();if(!e)throw C.create("no-app",{appName:t});return e}function D(t,e,n){let s=on[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),y.warn(o.join(" "));return}B(new P(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="firebase-heartbeat-database",gn=1,L="firebase-heartbeat-store";let j=null;function Me(){return j||(j=Tt(pn,gn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(L)}catch(n){console.warn(n)}}}}).catch(t=>{throw C.create("idb-open",{originalErrorMessage:t.message})})),j}async function mn(t){try{const n=(await Me()).transaction(L),s=await n.objectStore(L).get(xe(t));return await n.done,s}catch(e){if(e instanceof v)y.warn(e.message);else{const n=C.create("idb-get",{originalErrorMessage:e?.message});y.warn(n.message)}}}async function he(t,e){try{const s=(await Me()).transaction(L,"readwrite");await s.objectStore(L).put(e,xe(t)),await s.done}catch(n){if(n instanceof v)y.warn(n.message);else{const s=C.create("idb-set",{originalErrorMessage:n?.message});y.warn(s.message)}}}function xe(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=1024,yn=30;class En{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wn(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fe();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>yn){const r=Sn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){y.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fe(),{heartbeatsToSend:n,unsentEntries:s}=_n(this._heartbeatsCache.heartbeats),r=De(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return y.warn(e),""}}}function fe(){return new Date().toISOString().substring(0,10)}function _n(t,e=bn){const n=[];let s=t.slice();for(const r of t){const a=n.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),pe(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pe(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return it()?ct().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return he(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return he(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pe(t){return De(JSON.stringify({version:2,heartbeats:t})).length}function Sn(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){B(new P("platform-logger",e=>new Pt(e),"PRIVATE")),B(new P("heartbeat",e=>new En(e),"PRIVATE")),D(J,de,t),D(J,de,"esm2020"),D("fire-js","")}In("");var ge="@firebase/ai",Z="2.4.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="AI",me="us-central1",Cn="firebasevertexai.googleapis.com",On="v1beta",be=Z,An="gl-js",Rn=180*1e3,Dn="gemini-2.0-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends v{constructor(e,n,s){const r=T,a=`${r}/${e}`,o=`${r}: ${n} (${a})`;super(e,o),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,d),Object.setPrototypeOf(this,d.prototype),this.toString=()=>o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=["user","model","function","system"],$e={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},Ee={SAFETY:"SAFETY",RECITATION:"RECITATION"},S={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.backendType=e}}class M extends Be{constructor(){super(E.GOOGLE_AI)}}class U extends Be{constructor(e=me){super(E.VERTEX_AI),e?this.location=e:this.location=me}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){if(t instanceof M)return`${T}/googleai`;if(t instanceof U)return`${T}/vertexai/${t.location}`;throw new d(l.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function vn(t){const e=t.split("/");if(e[0]!==T)throw new d(l.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const s=e[2];if(!s)throw new d(l.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new U(s);case"googleai":return new M;default:throw new d(l.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new Ne("@firebase/vertexai");var A;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(A||(A={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n,s={createOptions:{expectedInputs:[{type:"image"}]}}){this.languageModelProvider=e,this.mode=n,this.onDeviceParams=s,this.isDownloading=!1}async isAvailable(e){if(!this.mode)return p.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===S.ONLY_IN_CLOUD)return p.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await this.downloadIfAvailable();if(this.mode===S.ONLY_ON_DEVICE){if(n===A.UNAVAILABLE)throw new d(l.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(n===A.DOWNLOADABLE||n===A.DOWNLOADING)&&(p.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return n!==A.AVAILABLE?(p.debug(`On-device inference unavailable because availability is "${n}".`),!1):b.isOnDeviceRequest(e)?!0:(p.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(b.toLanguageModelMessage)),r=await n.prompt(s,this.onDeviceParams.promptOptions);return b.toResponse(r)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(b.toLanguageModelMessage)),r=n.promptStreaming(s,this.onDeviceParams.promptOptions);return b.toStreamResponse(r)}async countTokens(e){throw new d(l.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return p.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.role==="function")return p.debug('"Function" role rejected for on-device inference.'),!1;for(const s of n.parts)if(s.inlineData&&b.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return p.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){const e=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return e===A.DOWNLOADABLE&&this.download(),e}download(){this.isDownloading||(this.isDownloading=!0,this.downloadPromise=this.languageModelProvider?.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(b.toLanguageModelMessageContent));return{role:b.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new d(l.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new d(l.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,r){const a=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});r.enqueue(n.encode(`data: ${a}

`))}}))}}}b.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Nn(t,e,n){if(typeof e<"u"&&t)return new b(e.LanguageModel,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s,r,a){this.app=e,this.backend=n,this.chromeAdapterFactory=a;const o=r?.getImmediate({optional:!0}),i=s?.getImmediate({optional:!0});this.auth=i||null,this.appCheck=o||null,n instanceof U?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,{instanceIdentifier:e}){if(!e)throw new d(l.ERROR,"AIService instance identifier is undefined.");const n=vn(e),s=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),a=t.getProvider("app-check-internal");return new Pn(s,n,r,a,Nn)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,n){if(e.app?.options?.apiKey)if(e.app?.options?.projectId)if(e.app?.options?.appId){if(this._apiSettings={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend},dn(e.app)&&e.app.settings.appCheckToken){const s=e.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:s})}else e.appCheck&&(e.options?.useLimitedUseAppCheckTokens?this._apiSettings.getAppCheckToken=()=>e.appCheck.getLimitedUseToken():this._apiSettings.getAppCheckToken=()=>e.appCheck.getToken());e.auth&&(this._apiSettings.getAuthToken=()=>e.auth.getToken()),this.model=N.normalizeModelName(n,this._apiSettings.backend.backendType)}else throw new d(l.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');else throw new d(l.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new d(l.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(e,n){return n===E.GOOGLE_AI?N.normalizeGoogleAIModelName(e):N.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.PREDICT="predict"})(k||(k={}));class Fe{constructor(e,n,s,r,a){this.model=e,this.task=n,this.apiSettings=s,this.stream=r,this.requestOptions=a}toString(){const e=new URL(this.baseUrl);return e.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,e.search=this.queryParams.toString(),e.toString()}get baseUrl(){return this.requestOptions?.baseUrl||`https://${Cn}`}get apiVersion(){return On}get modelPath(){if(this.apiSettings.backend instanceof M)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof U)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new d(l.ERROR,`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){const e=new URLSearchParams;return this.stream&&e.set("alt","sse"),e}}function kn(){const t=[];return t.push(`${An}/${be}`),t.push(`fire/${be}`),t.join(" ")}async function Mn(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",kn()),e.append("x-goog-api-key",t.apiSettings.apiKey),t.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.apiSettings.appId),t.apiSettings.getAppCheckToken){const n=await t.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&p.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.apiSettings.getAuthToken){const n=await t.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function xn(t,e,n,s,r,a){const o=new Fe(t,e,n,s,a);return{url:o.toString(),fetchOptions:{method:"POST",headers:await Mn(o),body:r}}}async function ne(t,e,n,s,r,a){const o=new Fe(t,e,n,s,a);let i,c;try{const u=await xn(t,e,n,s,r,a),f=a?.timeout!=null&&a.timeout>=0?a.timeout:Rn,_=new AbortController;if(c=setTimeout(()=>_.abort(),f),u.fetchOptions.signal=_.signal,i=await fetch(u.url,u.fetchOptions),!i.ok){let w="",g;try{const m=await i.json();w=m.error.message,m.error.details&&(w+=` ${JSON.stringify(m.error.details)}`,g=m.error.details)}catch{}throw i.status===403&&g&&g.some(m=>m.reason==="SERVICE_DISABLED")&&g.some(m=>m.links?.[0]?.description.includes("Google developers console API activation"))?new d(l.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${o.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:i.status,statusText:i.statusText,errorDetails:g}):new d(l.FETCH_ERROR,`Error fetching from ${o}: [${i.status} ${i.statusText}] ${w}`,{status:i.status,statusText:i.statusText,errorDetails:g})}}catch(u){let f=u;throw u.code!==l.FETCH_ERROR&&u.code!==l.API_NOT_ENABLED&&u instanceof Error&&(f=new d(l.ERROR,`Error fetching from ${o.toString()}: ${u.message}`),f.stack=u.stack),f}finally{c&&clearTimeout(c)}return i}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&p.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Ue(t.candidates[0]))throw new d(l.RESPONSE_ERROR,`Response error: ${R(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function F(t){return t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),$n(t)}function $n(t){return t.text=()=>{if(x(t))return _e(t,e=>!e.thought);if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Text not available. ${R(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(x(t)){const e=_e(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Thought summary not available. ${R(t)}`,{response:t})},t.inlineDataParts=()=>{if(x(t))return Fn(t);if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Data not available. ${R(t)}`,{response:t})},t.functionCalls=()=>{if(x(t))return Bn(t);if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Function call not available. ${R(t)}`,{response:t})},t}function _e(t,e){const n=[];if(t.candidates?.[0].content?.parts)for(const s of t.candidates?.[0].content?.parts)s.text&&e(s)&&n.push(s.text);return n.length>0?n.join(""):""}function Bn(t){const e=[];if(t.candidates?.[0].content?.parts)for(const n of t.candidates?.[0].content?.parts)n.functionCall&&e.push(n.functionCall);if(e.length>0)return e}function Fn(t){const e=[];if(t.candidates?.[0].content?.parts)for(const n of t.candidates?.[0].content?.parts)n.inlineData&&e.push(n);if(e.length>0)return e}const Un=[Ee.RECITATION,Ee.SAFETY];function Ue(t){return!!t.finishReason&&Un.some(e=>e===t.finishReason)}function R(t){let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",t.promptFeedback?.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),t.promptFeedback?.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if(t.candidates?.[0]){const n=t.candidates[0];Ue(n)&&(e+=`Candidate was blocked due to ${n.finishReason}`,n.finishMessage&&(e+=`: ${n.finishMessage}`))}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){if(t.safetySettings?.forEach(e=>{if(e.method)throw new d(l.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),t.generationConfig?.topK){const e=Math.round(t.generationConfig.topK);e!==t.generationConfig.topK&&(p.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=e)}return t}function se(t){return{candidates:t.candidates?Vn(t.candidates):void 0,prompt:t.promptFeedback?zn(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Hn(t,e){return{generateContentRequest:{model:e,...t}}}function Vn(t){const e=[];let n;return e&&t.forEach(s=>{let r;if(s.citationMetadata&&(r={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(o=>({...o,severity:o.severity??$e.HARM_SEVERITY_UNSUPPORTED,probabilityScore:o.probabilityScore??0,severityScore:o.severityScore??0}))),s.content?.parts?.some(o=>o?.videoMetadata))throw new d(l.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const a={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:r,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(a)}),e}function zn(t){const e=[];return t.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??$e.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function jn(t,e){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),s=qn(n),[r,a]=s.tee();return{stream:Wn(r,e),response:Gn(a,e)}}async function Gn(t,e){const n=[],s=t.getReader();for(;;){const{done:r,value:a}=await s.read();if(r){let o=Yn(n);return e.backend.backendType===E.GOOGLE_AI&&(o=se(o)),F(o)}n.push(a)}}async function*Wn(t,e){const n=t.getReader();for(;;){const{value:s,done:r}=await n.read();if(r)break;let a;e.backend.backendType===E.GOOGLE_AI?a=F(se(s)):a=F(s);const o=a.candidates?.[0];!o?.content?.parts&&!o?.finishReason&&!o?.citationMetadata&&!o?.urlContextMetadata||(yield a)}}function qn(t){const e=t.getReader();return new ReadableStream({start(s){let r="";return a();function a(){return e.read().then(({value:o,done:i})=>{if(i){if(r.trim()){s.error(new d(l.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}r+=o;let c=r.match(we),u;for(;c;){try{u=JSON.parse(c[1])}catch{s.error(new d(l.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(u),r=r.substring(c[0].length),c=r.match(we)}return a()})}}})}function Yn(t){const n={promptFeedback:t[t.length-1]?.promptFeedback};for(const s of t)if(s.candidates)for(const r of s.candidates){const a=r.index||0;n.candidates||(n.candidates=[]),n.candidates[a]||(n.candidates[a]={index:r.index}),n.candidates[a].citationMetadata=r.citationMetadata,n.candidates[a].finishReason=r.finishReason,n.candidates[a].finishMessage=r.finishMessage,n.candidates[a].safetyRatings=r.safetyRatings,n.candidates[a].groundingMetadata=r.groundingMetadata;const o=r.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(n.candidates[a].urlContextMetadata=o),r.content){if(!r.content.parts)continue;n.candidates[a].content||(n.candidates[a].content={role:r.content.role||"user",parts:[]});for(const i of r.content.parts){const c={...i};i.text!==""&&Object.keys(c).length>0&&n.candidates[a].content.parts.push(c)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=[l.FETCH_ERROR,l.ERROR,l.API_NOT_ENABLED];async function Ve(t,e,n,s){if(!e)return s();switch(e.mode){case S.ONLY_ON_DEVICE:if(await e.isAvailable(t))return n();throw new d(l.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case S.ONLY_IN_CLOUD:return s();case S.PREFER_IN_CLOUD:try{return await s()}catch(r){if(r instanceof d&&Kn.includes(r.code))return n();throw r}case S.PREFER_ON_DEVICE:return await e.isAvailable(t)?n():s();default:throw new d(l.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e,n,s){return t.backend.backendType===E.GOOGLE_AI&&(n=He(n)),ne(e,k.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s)}async function ze(t,e,n,s,r){const a=await Ve(n,s,()=>s.generateContentStream(n),()=>Jn(t,e,n,r));return jn(a,t)}async function Qn(t,e,n,s){return t.backend.backendType===E.GOOGLE_AI&&(n=He(n)),ne(e,k.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)}async function je(t,e,n,s,r){const a=await Ve(n,s,()=>s.generateContent(n),()=>Qn(t,e,n,r)),o=await Xn(a,t);return{response:F(o)}}async function Xn(t,e){const n=await t.json();return e.backend.backendType===E.GOOGLE_AI?se(n):n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function ee(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Zn(e)}function Zn(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,r=!1;for(const a of t)"functionResponse"in a?(n.parts.push(a),r=!0):(e.parts.push(a),s=!0);if(s&&r)throw new d(l.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!s&&!r)throw new d(l.INVALID_CONTENT,"No Content is provided for sending chat message.");return s?e:n}function G(t){let e;return t.contents?e=t:e={contents:[ee(t)]},t.systemInstruction&&(e.systemInstruction=Ge(t.systemInstruction)),e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],es={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Ie={user:["model"],function:["model"],model:["user","function"],system:[]};function ts(t){let e=null;for(const n of t){const{role:s,parts:r}=n;if(!e&&s!=="user")throw new d(l.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!ye.includes(s))throw new d(l.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(ye)}`);if(!Array.isArray(r))throw new d(l.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new d(l.INVALID_CONTENT,"Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const i of r)for(const c of Se)c in i&&(a[c]+=1);const o=es[s];for(const i of Se)if(!o.includes(i)&&a[i]>0)throw new d(l.INVALID_CONTENT,`Content with role '${s}' can't contain '${i}' part`);if(e&&!Ie[s].includes(e.role))throw new d(l.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Ie)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="SILENT_ERROR";class ns{constructor(e,n,s,r,a){this.model=n,this.chromeAdapter=s,this.params=r,this.requestOptions=a,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,r?.history&&(ts(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){await this._sendPromise;const n=ee(e),s={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,n]};let r={};return this._sendPromise=this._sendPromise.then(()=>je(this._apiSettings,this.model,s,this.chromeAdapter,this.requestOptions)).then(a=>{if(a.response.candidates&&a.response.candidates.length>0){this._history.push(n);const o={parts:a.response.candidates?.[0].content.parts||[],role:a.response.candidates?.[0].content.role||"model"};this._history.push(o)}else{const o=R(a.response);o&&p.warn(`sendMessage() was unsuccessful. ${o}. Inspect response object for details.`)}r=a}),await this._sendPromise,r}async sendMessageStream(e){await this._sendPromise;const n=ee(e),s={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,n]},r=ze(this._apiSettings,this.model,s,this.chromeAdapter,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>r).catch(a=>{throw new Error(Ce)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history.push(n);const o={...a.candidates[0].content};o.role||(o.role="model"),this._history.push(o)}else{const o=R(a);o&&p.warn(`sendMessageStream() was unsuccessful. ${o}. Inspect response object for details.`)}}).catch(a=>{a.message!==Ce&&p.error(a)}),r}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e,n,s){let r="";if(t.backend.backendType===E.GOOGLE_AI){const o=Hn(n,e);r=JSON.stringify(o)}else r=JSON.stringify(n);return(await ne(e,k.COUNT_TOKENS,t,!1,r,s)).json()}async function rs(t,e,n,s,r){if(s?.mode===S.ONLY_ON_DEVICE)throw new d(l.UNSUPPORTED,"countTokens() is not supported for on-device models.");return ss(t,e,n,r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends N{constructor(e,n,s,r){super(e,n.model),this.chromeAdapter=r,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ge(n.systemInstruction),this.requestOptions=s||{}}async generateContent(e){const n=G(e);return je(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,this.requestOptions)}async generateContentStream(e){const n=G(e);return ze(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,this.requestOptions)}startChat(e){return new ns(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e){const n=G(e);return rs(this._apiSettings,this.model,n,this.chromeAdapter)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t=fn(),e){t=ht(t);const n=ln(t,T),s=e?.backend??new M,r={useLimitedUseAppCheckTokens:e?.useLimitedUseAppCheckTokens??!1},a=Tn(s),o=n.getImmediate({identifier:a});return o.options=r,o}function is(t,e,n){const s=e;let r;if(s.mode?r=s.inCloudParams||{model:Dn}:r=e,!r.model)throw new d(l.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const a=t.chromeAdapterFactory?.(s.mode,typeof window>"u"?void 0:window,s.onDeviceParams);return new as(t,r,n,a)}function cs(){B(new P(T,Ln,"PUBLIC").setMultipleInstances(!0)),D(ge,Z),D(ge,Z,"esm2020")}cs();class ls{#e;#t;constructor(e){this.#e=e,this.#t=is(this.#e,{mode:S.ONLY_IN_CLOUD,model:"gemini-2.5-flash"})}async checkSummarizerAvailability(e){return"available"}getSummarizerQuota(){return 1/0}#n(e,n){let s=`You are a text summarization assistant.
Follow these instructions precisely:
- Task: Summarize the provided text.
- Summary Type: ${n.type}
- Output Format: ${n.format}
- Desired Length: ${n.length}
`;n.outputLanguage&&(s+=`- Output Language: ${n.outputLanguage}
`);const r=[n.sharedContext,n.context].filter(Boolean).join(`

`);return r&&(s+=`
Here is some context to use:
${r}
`),s+=`
Here is the text to summarize:
---
${e}
---

Summary:`,s}async summarize(e,n){const s=this.#n(e,n),r=n.signal;try{return(await this.#t.generateContent(s,{signal:r})).response.text()}catch(a){throw a.name==="AbortError"||r?.aborted?r?.reason??new DOMException("Aborted","AbortError"):a}}summarizeStreaming(e,n){const s=this.#n(e,n),r=n.signal,a=new AbortController;r?.addEventListener("abort",()=>a.abort(r.reason),{once:!0});const o=this;return new ReadableStream({async start(c){try{const u=await o.#t.generateContentStream(s,{signal:a.signal});for await(const f of u.stream)c.enqueue(f.text());c.close()}catch(u){let f;r?.aborted?f=r.reason??new DOMException("Aborted","AbortError"):u.name==="AbortError"?f=a.signal.reason??u:f=u,c.error(f)}},cancel(c){a.abort(c)}})}async measureSummarizerUsage(e,n){const s=this.#n(e,n),r=n.signal;try{return(await this.#t.countTokens(s,{signal:r})).totalTokens}catch(a){throw a.name==="AbortError"||r?.aborted?r?.reason??new DOMException("Aborted","AbortError"):a}}}var ds="firebase",us="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D(ds,us,"app");function hs(){const e=ke({apiKey:"AIzaSyCI_e1wo0T-SUbjKJU0LzI1kGOYvEDTnSE",authDomain:"vertexaiinfirebase-test.firebaseapp.com",projectId:"vertexaiinfirebase-test",storageBucket:"vertexaiinfirebase-test.firebasestorage.app",messagingSenderId:"857620473716",appId:"1:857620473716:web:8c803ada68ede9b2bb6e21"}),n=os(e,{backend:new M}),s=new ls(n);We(s)}hs();(async()=>{const t=`Thomas Steiner is a Developer Relations Engineer at Google, focused on Web AI, WebAssembly, and Project Fugu. He's an alumnus of University of Lyon (Postdoc), Polytechnic University of Barcelona (Ph. D.), and University of Karlsruhe (MA).

He blogs at blog.tomayac.com and posts as @tomayac@toot.cafe. On all other places on the Internet, chances are that he's there under his online alias tomayac.`;document.body.append(t),document.body.append(`

`),document.body.append(await Summarizer.availability()),document.body.append(`

`);const e=await Summarizer.create();document.body.append(await e.summarize(t)),document.body.append(`

`);const n=e.summarizeStreaming(t);for await(const s of n)document.body.append(s);document.body.append(`

`)})();
