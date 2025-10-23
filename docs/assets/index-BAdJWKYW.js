(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();let q=null;function Ke(t){q=t}function D(){if(!q)throw new Error("Built-in AI API Polyfill: No backend configured. Call a configuration function, e.g., `configureFirebaseBackend()`, first.");return q}class ne{destroy(){console.log("Model destroyed.")}}let Qe=class Re extends ne{#e;type;format;length;sharedContext;expectedInputLanguages;expectedContextLanguages;outputLanguage;inputQuota;static async create(e={}){if(e.signal?.aborted)throw e.signal.reason??new DOMException("Aborted","AbortError");if(e.monitor)try{e.monitor(new EventTarget)}catch(r){console.warn("Monitor callback failed.",r)}const n=D();if(typeof n.checkSummarizerAvailability!="function")throw new Error("The configured AI backend does not support Summarizer.");return new Re(e,n)}static async availability(e={}){return D().checkSummarizerAvailability(e)}constructor(e,n){super(),this.#e=n,this.type=e.type??"key-points",this.format=e.format??"markdown",this.length=e.length??"short",this.sharedContext=e.sharedContext??"",this.expectedInputLanguages=e.expectedInputLanguages?Object.freeze(e.expectedInputLanguages):null,this.expectedContextLanguages=e.expectedContextLanguages?Object.freeze(e.expectedContextLanguages):null,this.outputLanguage=e.outputLanguage??null,this.inputQuota=this.#e.getSummarizerQuota?this.#e.getSummarizerQuota():1/0}get type(){return this.type}get format(){return this.format}get length(){return this.length}get sharedContext(){return this.sharedContext}get expectedInputLanguages(){return this.expectedInputLanguages}get expectedContextLanguages(){return this.expectedContextLanguages}get outputLanguage(){return this.outputLanguage}get inputQuota(){return this.inputQuota}#t(e){return{type:this.type,format:this.format,length:this.length,sharedContext:this.sharedContext,outputLanguage:this.outputLanguage,context:e?.context,signal:e?.signal}}async summarize(e,n={}){const r=this.#t(n);return this.#e.summarize(e,r)}summarizeStreaming(e,n={}){const r=this.#t(n);return this.#e.summarizeStreaming(e,r)}async measureInputUsage(e,n={}){const r=this.#t(n);return this.#e.measureSummarizerUsage(e,r)}},Je=class Oe extends ne{#e;tone;format;length;sharedContext;expectedInputLanguages;expectedContextLanguages;outputLanguage;inputQuota;static async create(e={}){if(e.signal?.aborted)throw e.signal.reason??new DOMException("Aborted","AbortError");if(e.monitor)try{e.monitor(new EventTarget)}catch(r){console.warn("Monitor callback failed.",r)}const n=D();if(typeof n.checkWriterAvailability!="function")throw new Error("The configured AI backend does not support Writer.");return new Oe(e,n)}static async availability(e={}){return D().checkWriterAvailability(e)}constructor(e,n){super(),this.#e=n,this.tone=e.tone??"neutral",this.format=e.format??"markdown",this.length=e.length??"short",this.sharedContext=e.sharedContext??"",this.expectedInputLanguages=e.expectedInputLanguages?Object.freeze(e.expectedInputLanguages):null,this.expectedContextLanguages=e.expectedContextLanguages?Object.freeze(e.expectedContextLanguages):null,this.outputLanguage=e.outputLanguage??null,this.inputQuota=this.#e.getWriterQuota?this.#e.getWriterQuota():1/0}get tone(){return this.tone}get format(){return this.format}get length(){return this.length}get sharedContext(){return this.sharedContext}get expectedInputLanguages(){return this.expectedInputLanguages}get expectedContextLanguages(){return this.expectedContextLanguages}get outputLanguage(){return this.outputLanguage}get inputQuota(){return this.inputQuota}#t(e){return{tone:this.tone,format:this.format,length:this.length,sharedContext:this.sharedContext,outputLanguage:this.outputLanguage,context:e?.context,signal:e?.signal}}async write(e,n={}){const r=this.#t(n);return this.#e.write(e,r)}writeStreaming(e,n={}){const r=this.#t(n);return this.#e.writeStreaming(e,r)}async measureInputUsage(e,n={}){const r=this.#t(n);return this.#e.measureWriterUsage(e,r)}},Xe=class Te extends ne{#e;tone;format;length;sharedContext;expectedInputLanguages;expectedContextLanguages;outputLanguage;inputQuota;static async create(e={}){if(e.signal?.aborted)throw e.signal.reason??new DOMException("Aborted","AbortError");if(e.monitor)try{e.monitor(new EventTarget)}catch(r){console.warn("Monitor callback failed.",r)}const n=D();if(typeof n.checkRewriterAvailability!="function")throw new Error("The configured AI backend does not support Rewriter.");return new Te(e,n)}static async availability(e={}){return D().checkRewriterAvailability(e)}constructor(e,n){super(),this.#e=n,this.tone=e.tone??"as-is",this.format=e.format??"as-is",this.length=e.length??"as-is",this.sharedContext=e.sharedContext??"",this.expectedInputLanguages=e.expectedInputLanguages?Object.freeze(e.expectedInputLanguages):null,this.expectedContextLanguages=e.expectedContextLanguages?Object.freeze(e.expectedContextLanguages):null,this.outputLanguage=e.outputLanguage??null,this.inputQuota=this.#e.getRewriterQuota?this.#e.getRewriterQuota():1/0}get tone(){return this.tone}get format(){return this.format}get length(){return this.length}get sharedContext(){return this.sharedContext}get expectedInputLanguages(){return this.expectedInputLanguages}get expectedContextLanguages(){return this.expectedContextLanguages}get outputLanguage(){return this.outputLanguage}get inputQuota(){return this.inputQuota}#t(e){return{tone:this.tone,format:this.format,length:this.length,sharedContext:this.sharedContext,outputLanguage:this.outputLanguage,context:e?.context,signal:e?.signal}}async rewrite(e,n={}){const r=this.#t(n);return this.#e.rewrite(e,r)}rewriteStreaming(e,n={}){const r=this.#t(n);return this.#e.rewriteStreaming(e,r)}async measureInputUsage(e,n={}){const r=this.#t(n);return this.#e.measureRewriterUsage(e,r)}};ReadableStream.prototype[Symbol.asyncIterator]||(ReadableStream.prototype[Symbol.asyncIterator]=async function*(){const t=this.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)return;yield n}}finally{t.releaseLock()}});function Ze(){self.Summarizer?console.log("Native AI Summarizer detected. Polyfill not required."):(self.Summarizer=Qe,console.log("Polyfill for AI Summarizer has been installed.")),self.Writer?console.log("Native AI Writer detected. Polyfill not required."):(self.Writer=Je,console.log("Polyfill for AI Writer has been installed.")),self.Rewriter?console.log("Native AI Rewriter detected. Polyfill not required."):(self.Rewriter=Xe,console.log("Polyfill for AI Rewriter has been installed."))}Ze();const et=()=>{};var oe={};/**
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
 */const De=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let a=t.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},tt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const a=t[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const s=t[n++];e[r++]=String.fromCharCode((a&31)<<6|s&63)}else if(a>239&&a<365){const s=t[n++],o=t[n++],c=t[n++],i=((a&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(i&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((a&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ve={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<t.length;a+=3){const s=t[a],o=a+1<t.length,c=o?t[a+1]:0,i=a+2<t.length,u=i?t[a+2]:0,h=s>>2,w=(s&3)<<4|c>>4;let I=(c&15)<<2|u>>6,g=u&63;i||(g=64,o||(I=64)),r.push(n[h],n[w],n[I],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(De(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<t.length;){const s=n[t.charAt(a++)],c=a<t.length?n[t.charAt(a)]:0;++a;const u=a<t.length?n[t.charAt(a)]:64;++a;const w=a<t.length?n[t.charAt(a)]:64;if(++a,s==null||c==null||u==null||w==null)throw new nt;const I=s<<2|c>>4;if(r.push(I),u!==64){const g=c<<4&240|u>>2;if(r.push(g),w!==64){const m=u<<6&192|w;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rt=function(t){const e=De(t);return ve.encodeByteArray(e,!0)},xe=function(t){return rt(t).replace(/\./g,"")},at=function(t){try{return ve.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function st(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ot=()=>st().__FIREBASE_DEFAULTS__,it=()=>{if(typeof process>"u"||typeof oe>"u")return;const t=oe.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ct=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&at(t[1]);return e&&JSON.parse(e)},ut=()=>{try{return et()||ot()||it()||ct()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Le=()=>ut()?.config;/**
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
 */class lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function dt(){try{return typeof indexedDB=="object"}catch{return!1}}function ht(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const ft="FirebaseError";class x extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ft,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke.prototype.create)}}class ke{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},a=`${this.service}/${e}`,s=this.errors[e],o=s?pt(s,r):"Error",c=`${this.serviceName}: ${o} (${a}).`;return new x(a,c,r)}}function pt(t,e){return t.replace(gt,(n,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const gt=/\{\$([^}]+)}/g;function Y(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const s=t[a],o=e[a];if(ie(s)&&ie(o)){if(!Y(s,o))return!1}else if(s!==o)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function ie(t){return t!==null&&typeof t=="object"}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class k{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const A="[DEFAULT]";/**
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
 */class bt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Et(e))try{this.getOrInitializeService({instanceIdentifier:A})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:a});r.resolve(s)}catch{}}}}clearInstance(e=A){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=A){return this.instances.has(e)}getOptions(e=A){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(a)}return a}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(r)??new Set;a.add(e),this.onInitCallbacks.set(r,a);const s=this.instances.get(r);return s&&e(s,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yt(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=A){return this.component?this.component.multipleInstances?e:A:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yt(t){return t===A?void 0:t}function Et(t){return t.instantiationMode==="EAGER"}/**
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
 */class wt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(f||(f={}));const It={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Ct=f.INFO,St={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},_t=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),a=St[e];if(a)console[a](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ne{constructor(e){this.name=e,this._logLevel=Ct,this._logHandler=_t,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?It[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}const At=(t,e)=>e.some(n=>t instanceof n);let ce,ue;function Rt(){return ce||(ce=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ot(){return ue||(ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pe=new WeakMap,K=new WeakMap,Me=new WeakMap,z=new WeakMap,re=new WeakMap;function Tt(t){const e=new Promise((n,r)=>{const a=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(S(t.result)),a()},o=()=>{r(t.error),a()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pe.set(n,t)}).catch(()=>{}),re.set(e,t),e}function Dt(t){if(K.has(t))return;const e=new Promise((n,r)=>{const a=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),a()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});K.set(t,e)}let Q={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return K.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Me.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vt(t){Q=t(Q)}function xt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(V(this),e,...n);return Me.set(r,e.sort?e.sort():[e]),S(r)}:Ot().includes(t)?function(...e){return t.apply(V(this),e),S(Pe.get(this))}:function(...e){return S(t.apply(V(this),e))}}function Lt(t){return typeof t=="function"?xt(t):(t instanceof IDBTransaction&&Dt(t),At(t,Rt())?new Proxy(t,Q):t)}function S(t){if(t instanceof IDBRequest)return Tt(t);if(z.has(t))return z.get(t);const e=Lt(t);return e!==t&&(z.set(t,e),re.set(e,t)),e}const V=t=>re.get(t);function kt(t,e,{blocked:n,upgrade:r,blocking:a,terminated:s}={}){const o=indexedDB.open(t,e),c=S(o);return r&&o.addEventListener("upgradeneeded",i=>{r(S(o.result),i.oldVersion,i.newVersion,S(o.transaction),i)}),n&&o.addEventListener("blocked",i=>n(i.oldVersion,i.newVersion,i)),c.then(i=>{s&&i.addEventListener("close",()=>s()),a&&i.addEventListener("versionchange",u=>a(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Nt=["get","getKey","getAll","getAllKeys","count"],Pt=["put","add","delete","clear"],j=new Map;function le(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(j.get(e))return j.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=Pt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Nt.includes(n)))return;const s=async function(o,...c){const i=this.transaction(o,a?"readwrite":"readonly");let u=i.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),a&&i.done]))[0]};return j.set(e,s),s}vt(t=>({...t,get:(e,n,r)=>le(e,n)||t.get(e,n,r),has:(e,n)=>!!le(e,n)||t.has(e,n)}));/**
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
 */class Mt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($t(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $t(t){return t.getComponent()?.type==="VERSION"}const J="@firebase/app",de="0.14.4";/**
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
 */const y=new Ne("@firebase/app"),Bt="@firebase/app-compat",Ft="@firebase/analytics-compat",Ut="@firebase/analytics",Ht="@firebase/app-check-compat",zt="@firebase/app-check",Vt="@firebase/auth",jt="@firebase/auth-compat",Gt="@firebase/database",Wt="@firebase/data-connect",qt="@firebase/database-compat",Yt="@firebase/functions",Kt="@firebase/functions-compat",Qt="@firebase/installations",Jt="@firebase/installations-compat",Xt="@firebase/messaging",Zt="@firebase/messaging-compat",en="@firebase/performance",tn="@firebase/performance-compat",nn="@firebase/remote-config",rn="@firebase/remote-config-compat",an="@firebase/storage",sn="@firebase/storage-compat",on="@firebase/firestore",cn="@firebase/ai",un="@firebase/firestore-compat",ln="firebase";/**
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
 */const X="[DEFAULT]",dn={[J]:"fire-core",[Bt]:"fire-core-compat",[Ut]:"fire-analytics",[Ft]:"fire-analytics-compat",[zt]:"fire-app-check",[Ht]:"fire-app-check-compat",[Vt]:"fire-auth",[jt]:"fire-auth-compat",[Gt]:"fire-rtdb",[Wt]:"fire-data-connect",[qt]:"fire-rtdb-compat",[Yt]:"fire-fn",[Kt]:"fire-fn-compat",[Qt]:"fire-iid",[Jt]:"fire-iid-compat",[Xt]:"fire-fcm",[Zt]:"fire-fcm-compat",[en]:"fire-perf",[tn]:"fire-perf-compat",[nn]:"fire-rc",[rn]:"fire-rc-compat",[an]:"fire-gcs",[sn]:"fire-gcs-compat",[on]:"fire-fst",[un]:"fire-fst-compat",[cn]:"fire-vertex","fire-js":"fire-js",[ln]:"fire-js-all"};/**
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
 */const B=new Map,hn=new Map,Z=new Map;function he(t,e){try{t.container.addComponent(e)}catch(n){y.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function F(t){const e=t.name;if(Z.has(e))return y.debug(`There were multiple attempts to register component ${e}.`),!1;Z.set(e,t);for(const n of B.values())he(n,t);for(const n of hn.values())he(n,t);return!0}function fn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_=new ke("app","Firebase",gn);/**
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
 */class mn{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new k("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}function $e(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:X,automaticDataCollectionEnabled:!0,...e},a=r.name;if(typeof a!="string"||!a)throw _.create("bad-app-name",{appName:String(a)});if(n||(n=Le()),!n)throw _.create("no-options");const s=B.get(a);if(s){if(Y(n,s.options)&&Y(r,s.config))return s;throw _.create("duplicate-app",{appName:a})}const o=new wt(a);for(const i of Z.values())o.addComponent(i);const c=new mn(n,r,o);return B.set(a,c),c}function bn(t=X){const e=B.get(t);if(!e&&t===X&&Le())return $e();if(!e)throw _.create("no-app",{appName:t});return e}function T(t,e,n){let r=dn[t]??t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const o=[`Unable to register library "${r}" with version "${e}":`];a&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),y.warn(o.join(" "));return}F(new k(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const yn="firebase-heartbeat-database",En=1,N="firebase-heartbeat-store";let G=null;function Be(){return G||(G=kt(yn,En,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(N)}catch(n){console.warn(n)}}}}).catch(t=>{throw _.create("idb-open",{originalErrorMessage:t.message})})),G}async function wn(t){try{const n=(await Be()).transaction(N),r=await n.objectStore(N).get(Fe(t));return await n.done,r}catch(e){if(e instanceof x)y.warn(e.message);else{const n=_.create("idb-get",{originalErrorMessage:e?.message});y.warn(n.message)}}}async function fe(t,e){try{const r=(await Be()).transaction(N,"readwrite");await r.objectStore(N).put(e,Fe(t)),await r.done}catch(n){if(n instanceof x)y.warn(n.message);else{const r=_.create("idb-set",{originalErrorMessage:n?.message});y.warn(r.message)}}}function Fe(t){return`${t.name}!${t.options.appId}`}/**
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
 */const In=1024,Cn=30;class Sn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new An(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pe();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Cn){const a=Rn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){y.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pe(),{heartbeatsToSend:n,unsentEntries:r}=_n(this._heartbeatsCache.heartbeats),a=xe(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return y.warn(e),""}}}function pe(){return new Date().toISOString().substring(0,10)}function _n(t,e=In){const n=[];let r=t.slice();for(const a of t){const s=n.find(o=>o.agent===a.agent);if(s){if(s.dates.push(a.date),ge(n)>e){s.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ge(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class An{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dt()?ht().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return fe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return fe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ge(t){return xe(JSON.stringify({version:2,heartbeats:t})).length}function Rn(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function On(t){F(new k("platform-logger",e=>new Mt(e),"PRIVATE")),F(new k("heartbeat",e=>new Sn(e),"PRIVATE")),T(J,de,t),T(J,de,"esm2020"),T("fire-js","")}On("");var me="@firebase/ai",ee="2.4.0";/**
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
 */const v="AI",be="us-central1",Tn="firebasevertexai.googleapis.com",Dn="v1beta",ye=ee,vn="gl-js",xn=180*1e3,Ln="gemini-2.0-flash-lite";/**
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
 */class d extends x{constructor(e,n,r){const a=v,s=`${a}/${e}`,o=`${a}: ${n} (${s})`;super(e,o),this.code=e,this.customErrorData=r,Error.captureStackTrace&&Error.captureStackTrace(this,d),Object.setPrototypeOf(this,d.prototype),this.toString=()=>o}}/**
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
 */const Ee=["user","model","function","system"],Ue={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},we={SAFETY:"SAFETY",RECITATION:"RECITATION"},C={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"};/**
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
 */class He{constructor(e){this.backendType=e}}class M extends He{constructor(){super(E.GOOGLE_AI)}}class H extends He{constructor(e=be){super(E.VERTEX_AI),e?this.location=e:this.location=be}}/**
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
 */function kn(t){if(t instanceof M)return`${v}/googleai`;if(t instanceof H)return`${v}/vertexai/${t.location}`;throw new d(l.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function Nn(t){const e=t.split("/");if(e[0]!==v)throw new d(l.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const r=e[2];if(!r)throw new d(l.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new H(r);case"googleai":return new M;default:throw new d(l.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
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
 */const p=new Ne("@firebase/vertexai");var R;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(R||(R={}));/**
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
 */class b{constructor(e,n,r={createOptions:{expectedInputs:[{type:"image"}]}}){this.languageModelProvider=e,this.mode=n,this.onDeviceParams=r,this.isDownloading=!1}async isAvailable(e){if(!this.mode)return p.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===C.ONLY_IN_CLOUD)return p.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await this.downloadIfAvailable();if(this.mode===C.ONLY_ON_DEVICE){if(n===R.UNAVAILABLE)throw new d(l.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(n===R.DOWNLOADABLE||n===R.DOWNLOADING)&&(p.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return n!==R.AVAILABLE?(p.debug(`On-device inference unavailable because availability is "${n}".`),!1):b.isOnDeviceRequest(e)?!0:(p.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),r=await Promise.all(e.contents.map(b.toLanguageModelMessage)),a=await n.prompt(r,this.onDeviceParams.promptOptions);return b.toResponse(a)}async generateContentStream(e){const n=await this.createSession(),r=await Promise.all(e.contents.map(b.toLanguageModelMessage)),a=n.promptStreaming(r,this.onDeviceParams.promptOptions);return b.toStreamResponse(a)}async countTokens(e){throw new d(l.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return p.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.role==="function")return p.debug('"Function" role rejected for on-device inference.'),!1;for(const r of n.parts)if(r.inlineData&&b.SUPPORTED_MIME_TYPES.indexOf(r.inlineData.mimeType)===-1)return p.debug(`Unsupported mime type "${r.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){const e=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return e===R.DOWNLOADABLE&&this.download(),e}download(){this.isDownloading||(this.isDownloading=!0,this.downloadPromise=this.languageModelProvider?.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(b.toLanguageModelMessageContent));return{role:b.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const r=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(r)}}throw new d(l.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new d(l.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(r,a){const s=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:r}]}}]});a.enqueue(n.encode(`data: ${s}

`))}}))}}}b.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Pn(t,e,n){if(typeof e<"u"&&t)return new b(e.LanguageModel,t,n)}/**
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
 */class Mn{constructor(e,n,r,a,s){this.app=e,this.backend=n,this.chromeAdapterFactory=s;const o=a?.getImmediate({optional:!0}),c=r?.getImmediate({optional:!0});this.auth=c||null,this.appCheck=o||null,n instanceof H?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
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
 */function $n(t,{instanceIdentifier:e}){if(!e)throw new d(l.ERROR,"AIService instance identifier is undefined.");const n=Nn(e),r=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Mn(r,n,a,s,Pn)}/**
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
 */class L{constructor(e,n){if(e.app?.options?.apiKey)if(e.app?.options?.projectId)if(e.app?.options?.appId){if(this._apiSettings={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend},pn(e.app)&&e.app.settings.appCheckToken){const r=e.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:r})}else e.appCheck&&(e.options?.useLimitedUseAppCheckTokens?this._apiSettings.getAppCheckToken=()=>e.appCheck.getLimitedUseToken():this._apiSettings.getAppCheckToken=()=>e.appCheck.getToken());e.auth&&(this._apiSettings.getAuthToken=()=>e.auth.getToken()),this.model=L.normalizeModelName(n,this._apiSettings.backend.backendType)}else throw new d(l.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');else throw new d(l.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new d(l.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(e,n){return n===E.GOOGLE_AI?L.normalizeGoogleAIModelName(e):L.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
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
 */var P;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.PREDICT="predict"})(P||(P={}));class ze{constructor(e,n,r,a,s){this.model=e,this.task=n,this.apiSettings=r,this.stream=a,this.requestOptions=s}toString(){const e=new URL(this.baseUrl);return e.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,e.search=this.queryParams.toString(),e.toString()}get baseUrl(){return this.requestOptions?.baseUrl||`https://${Tn}`}get apiVersion(){return Dn}get modelPath(){if(this.apiSettings.backend instanceof M)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof H)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new d(l.ERROR,`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){const e=new URLSearchParams;return this.stream&&e.set("alt","sse"),e}}function Bn(){const t=[];return t.push(`${vn}/${ye}`),t.push(`fire/${ye}`),t.join(" ")}async function Fn(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",Bn()),e.append("x-goog-api-key",t.apiSettings.apiKey),t.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.apiSettings.appId),t.apiSettings.getAppCheckToken){const n=await t.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&p.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.apiSettings.getAuthToken){const n=await t.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function Un(t,e,n,r,a,s){const o=new ze(t,e,n,r,s);return{url:o.toString(),fetchOptions:{method:"POST",headers:await Fn(o),body:a}}}async function ae(t,e,n,r,a,s){const o=new ze(t,e,n,r,s);let c,i;try{const u=await Un(t,e,n,r,a,s),h=s?.timeout!=null&&s.timeout>=0?s.timeout:xn,w=new AbortController;if(i=setTimeout(()=>w.abort(),h),u.fetchOptions.signal=w.signal,c=await fetch(u.url,u.fetchOptions),!c.ok){let I="",g;try{const m=await c.json();I=m.error.message,m.error.details&&(I+=` ${JSON.stringify(m.error.details)}`,g=m.error.details)}catch{}throw c.status===403&&g&&g.some(m=>m.reason==="SERVICE_DISABLED")&&g.some(m=>m.links?.[0]?.description.includes("Google developers console API activation"))?new d(l.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${o.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:c.status,statusText:c.statusText,errorDetails:g}):new d(l.FETCH_ERROR,`Error fetching from ${o}: [${c.status} ${c.statusText}] ${I}`,{status:c.status,statusText:c.statusText,errorDetails:g})}}catch(u){let h=u;throw u.code!==l.FETCH_ERROR&&u.code!==l.API_NOT_ENABLED&&u instanceof Error&&(h=new d(l.ERROR,`Error fetching from ${o.toString()}: ${u.message}`),h.stack=u.stack),h}finally{i&&clearTimeout(i)}return c}/**
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
 */function $(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&p.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Ve(t.candidates[0]))throw new d(l.RESPONSE_ERROR,`Response error: ${O(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function U(t){return t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),Hn(t)}function Hn(t){return t.text=()=>{if($(t))return Ie(t,e=>!e.thought);if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Text not available. ${O(t)}`,{response:t});return""},t.thoughtSummary=()=>{if($(t)){const e=Ie(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Thought summary not available. ${O(t)}`,{response:t})},t.inlineDataParts=()=>{if($(t))return Vn(t);if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Data not available. ${O(t)}`,{response:t})},t.functionCalls=()=>{if($(t))return zn(t);if(t.promptFeedback)throw new d(l.RESPONSE_ERROR,`Function call not available. ${O(t)}`,{response:t})},t}function Ie(t,e){const n=[];if(t.candidates?.[0].content?.parts)for(const r of t.candidates?.[0].content?.parts)r.text&&e(r)&&n.push(r.text);return n.length>0?n.join(""):""}function zn(t){const e=[];if(t.candidates?.[0].content?.parts)for(const n of t.candidates?.[0].content?.parts)n.functionCall&&e.push(n.functionCall);if(e.length>0)return e}function Vn(t){const e=[];if(t.candidates?.[0].content?.parts)for(const n of t.candidates?.[0].content?.parts)n.inlineData&&e.push(n);if(e.length>0)return e}const jn=[we.RECITATION,we.SAFETY];function Ve(t){return!!t.finishReason&&jn.some(e=>e===t.finishReason)}function O(t){let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",t.promptFeedback?.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),t.promptFeedback?.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if(t.candidates?.[0]){const n=t.candidates[0];Ve(n)&&(e+=`Candidate was blocked due to ${n.finishReason}`,n.finishMessage&&(e+=`: ${n.finishMessage}`))}return e}/**
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
 */function je(t){if(t.safetySettings?.forEach(e=>{if(e.method)throw new d(l.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),t.generationConfig?.topK){const e=Math.round(t.generationConfig.topK);e!==t.generationConfig.topK&&(p.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=e)}return t}function se(t){return{candidates:t.candidates?Wn(t.candidates):void 0,prompt:t.promptFeedback?qn(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Gn(t,e){return{generateContentRequest:{model:e,...t}}}function Wn(t){const e=[];let n;return e&&t.forEach(r=>{let a;if(r.citationMetadata&&(a={citations:r.citationMetadata.citationSources}),r.safetyRatings&&(n=r.safetyRatings.map(o=>({...o,severity:o.severity??Ue.HARM_SEVERITY_UNSUPPORTED,probabilityScore:o.probabilityScore??0,severityScore:o.severityScore??0}))),r.content?.parts?.some(o=>o?.videoMetadata))throw new d(l.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const s={index:r.index,content:r.content,finishReason:r.finishReason,finishMessage:r.finishMessage,safetyRatings:n,citationMetadata:a,groundingMetadata:r.groundingMetadata,urlContextMetadata:r.urlContextMetadata};e.push(s)}),e}function qn(t){const e=[];return t.safetyRatings.forEach(r=>{e.push({category:r.category,probability:r.probability,severity:r.severity??Ue.HARM_SEVERITY_UNSUPPORTED,probabilityScore:r.probabilityScore??0,severityScore:r.severityScore??0,blocked:r.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
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
 */const Ce=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Yn(t,e){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=Jn(n),[a,s]=r.tee();return{stream:Qn(a,e),response:Kn(s,e)}}async function Kn(t,e){const n=[],r=t.getReader();for(;;){const{done:a,value:s}=await r.read();if(a){let o=Xn(n);return e.backend.backendType===E.GOOGLE_AI&&(o=se(o)),U(o)}n.push(s)}}async function*Qn(t,e){const n=t.getReader();for(;;){const{value:r,done:a}=await n.read();if(a)break;let s;e.backend.backendType===E.GOOGLE_AI?s=U(se(r)):s=U(r);const o=s.candidates?.[0];!o?.content?.parts&&!o?.finishReason&&!o?.citationMetadata&&!o?.urlContextMetadata||(yield s)}}function Jn(t){const e=t.getReader();return new ReadableStream({start(r){let a="";return s();function s(){return e.read().then(({value:o,done:c})=>{if(c){if(a.trim()){r.error(new d(l.PARSE_FAILED,"Failed to parse stream"));return}r.close();return}a+=o;let i=a.match(Ce),u;for(;i;){try{u=JSON.parse(i[1])}catch{r.error(new d(l.PARSE_FAILED,`Error parsing JSON response: "${i[1]}`));return}r.enqueue(u),a=a.substring(i[0].length),i=a.match(Ce)}return s()})}}})}function Xn(t){const n={promptFeedback:t[t.length-1]?.promptFeedback};for(const r of t)if(r.candidates)for(const a of r.candidates){const s=a.index||0;n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:a.index}),n.candidates[s].citationMetadata=a.citationMetadata,n.candidates[s].finishReason=a.finishReason,n.candidates[s].finishMessage=a.finishMessage,n.candidates[s].safetyRatings=a.safetyRatings,n.candidates[s].groundingMetadata=a.groundingMetadata;const o=a.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(n.candidates[s].urlContextMetadata=o),a.content){if(!a.content.parts)continue;n.candidates[s].content||(n.candidates[s].content={role:a.content.role||"user",parts:[]});for(const c of a.content.parts){const i={...c};c.text!==""&&Object.keys(i).length>0&&n.candidates[s].content.parts.push(i)}}}return n}/**
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
 */const Zn=[l.FETCH_ERROR,l.ERROR,l.API_NOT_ENABLED];async function Ge(t,e,n,r){if(!e)return r();switch(e.mode){case C.ONLY_ON_DEVICE:if(await e.isAvailable(t))return n();throw new d(l.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case C.ONLY_IN_CLOUD:return r();case C.PREFER_IN_CLOUD:try{return await r()}catch(a){if(a instanceof d&&Zn.includes(a.code))return n();throw a}case C.PREFER_ON_DEVICE:return await e.isAvailable(t)?n():r();default:throw new d(l.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
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
 */async function er(t,e,n,r){return t.backend.backendType===E.GOOGLE_AI&&(n=je(n)),ae(e,P.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r)}async function We(t,e,n,r,a){const s=await Ge(n,r,()=>r.generateContentStream(n),()=>er(t,e,n,a));return Yn(s,t)}async function tr(t,e,n,r){return t.backend.backendType===E.GOOGLE_AI&&(n=je(n)),ae(e,P.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)}async function qe(t,e,n,r,a){const s=await Ge(n,r,()=>r.generateContent(n),()=>tr(t,e,n,a)),o=await nr(s,t);return{response:U(o)}}async function nr(t,e){const n=await t.json();return e.backend.backendType===E.GOOGLE_AI?se(n):n}/**
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
 */function Ye(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function te(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return rr(e)}function rr(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,a=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),a=!0):(e.parts.push(s),r=!0);if(r&&a)throw new d(l.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!r&&!a)throw new d(l.INVALID_CONTENT,"No Content is provided for sending chat message.");return r?e:n}function W(t){let e;return t.contents?e=t:e={contents:[te(t)]},t.systemInstruction&&(e.systemInstruction=Ye(t.systemInstruction)),e}/**
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
 */const Se=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],ar={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},_e={user:["model"],function:["model"],model:["user","function"],system:[]};function sr(t){let e=null;for(const n of t){const{role:r,parts:a}=n;if(!e&&r!=="user")throw new d(l.INVALID_CONTENT,`First Content should be with role 'user', got ${r}`);if(!Ee.includes(r))throw new d(l.INVALID_CONTENT,`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Ee)}`);if(!Array.isArray(a))throw new d(l.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(a.length===0)throw new d(l.INVALID_CONTENT,"Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const c of a)for(const i of Se)i in c&&(s[i]+=1);const o=ar[r];for(const c of Se)if(!o.includes(c)&&s[c]>0)throw new d(l.INVALID_CONTENT,`Content with role '${r}' can't contain '${c}' part`);if(e&&!_e[r].includes(e.role))throw new d(l.INVALID_CONTENT,`Content with role '${r}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(_e)}`);e=n}}/**
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
 */const Ae="SILENT_ERROR";class or{constructor(e,n,r,a,s){this.model=n,this.chromeAdapter=r,this.params=a,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,a?.history&&(sr(a.history),this._history=a.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){await this._sendPromise;const n=te(e),r={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,n]};let a={};return this._sendPromise=this._sendPromise.then(()=>qe(this._apiSettings,this.model,r,this.chromeAdapter,this.requestOptions)).then(s=>{if(s.response.candidates&&s.response.candidates.length>0){this._history.push(n);const o={parts:s.response.candidates?.[0].content.parts||[],role:s.response.candidates?.[0].content.role||"model"};this._history.push(o)}else{const o=O(s.response);o&&p.warn(`sendMessage() was unsuccessful. ${o}. Inspect response object for details.`)}a=s}),await this._sendPromise,a}async sendMessageStream(e){await this._sendPromise;const n=te(e),r={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,n]},a=We(this._apiSettings,this.model,r,this.chromeAdapter,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(s=>{throw new Error(Ae)}).then(s=>s.response).then(s=>{if(s.candidates&&s.candidates.length>0){this._history.push(n);const o={...s.candidates[0].content};o.role||(o.role="model"),this._history.push(o)}else{const o=O(s);o&&p.warn(`sendMessageStream() was unsuccessful. ${o}. Inspect response object for details.`)}}).catch(s=>{s.message!==Ae&&p.error(s)}),a}}/**
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
 */async function ir(t,e,n,r){let a="";if(t.backend.backendType===E.GOOGLE_AI){const o=Gn(n,e);a=JSON.stringify(o)}else a=JSON.stringify(n);return(await ae(e,P.COUNT_TOKENS,t,!1,a,r)).json()}async function cr(t,e,n,r,a){if(r?.mode===C.ONLY_ON_DEVICE)throw new d(l.UNSUPPORTED,"countTokens() is not supported for on-device models.");return ir(t,e,n,a)}/**
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
 */class ur extends L{constructor(e,n,r,a){super(e,n.model),this.chromeAdapter=a,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ye(n.systemInstruction),this.requestOptions=r||{}}async generateContent(e){const n=W(e);return qe(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,this.requestOptions)}async generateContentStream(e){const n=W(e);return We(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,this.requestOptions)}startChat(e){return new or(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e){const n=W(e);return cr(this._apiSettings,this.model,n,this.chromeAdapter)}}/**
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
 */function lr(t=bn(),e){t=mt(t);const n=fn(t,v),r=e?.backend??new M,a={useLimitedUseAppCheckTokens:e?.useLimitedUseAppCheckTokens??!1},s=kn(r),o=n.getImmediate({identifier:s});return o.options=a,o}function dr(t,e,n){const r=e;let a;if(r.mode?a=r.inCloudParams||{model:Ln}:a=e,!a.model)throw new d(l.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const s=t.chromeAdapterFactory?.(r.mode,typeof window>"u"?void 0:window,r.onDeviceParams);return new ur(t,a,n,s)}function hr(){F(new k(v,$n,"PUBLIC").setMultipleInstances(!0)),T(me,ee),T(me,ee,"esm2020")}hr();class fr{#e;#t;constructor(e){this.#e=e,this.#t=dr(this.#e,{mode:C.ONLY_IN_CLOUD,model:"gemini-2.5-flash"})}async checkSummarizerAvailability(e){return"available"}getSummarizerQuota(){return 1/0}#n(e,n){let r=`You are a text summarization assistant.
Follow these instructions precisely:
- Task: Summarize the provided text.
- Summary Type: ${n.type}
- Output Format: ${n.format}
- Desired Length: ${n.length}
`;n.outputLanguage&&(r+=`- Output Language: ${n.outputLanguage}
`);const a=[n.sharedContext,n.context].filter(Boolean).join(`

`);return a&&(r+=`
Here is some context to use:
${a}
`),r+=`
Here is the text to summarize:
---
${e}
---

Summary:`,r}async summarize(e,n){const r=this.#n(e,n),a=n.signal;try{return(await this.#t.generateContent(r,{signal:a})).response.text()}catch(s){throw s.name==="AbortError"||a?.aborted?a?.reason??new DOMException("Aborted","AbortError"):s}}summarizeStreaming(e,n){const r=this.#n(e,n),a=n.signal,s=new AbortController;a?.addEventListener("abort",()=>s.abort(a.reason),{once:!0});const o=this;return new ReadableStream({async start(i){try{const u=await o.#t.generateContentStream(r,{signal:s.signal});for await(const h of u.stream)i.enqueue(h.text());i.close()}catch(u){let h;a?.aborted?h=a.reason??new DOMException("Aborted","AbortError"):u.name==="AbortError"?h=s.signal.reason??u:h=u,i.error(h)}},cancel(i){s.abort(i)}})}async measureSummarizerUsage(e,n){const r=this.#n(e,n),a=n.signal;try{return(await this.#t.countTokens(r,{signal:a})).totalTokens}catch(s){throw s.name==="AbortError"||a?.aborted?a?.reason??new DOMException("Aborted","AbortError"):s}}async checkWriterAvailability(e){return"available"}getWriterQuota(){return 1/0}#r(e,n){let r=`You are a writing assistant.
Follow these instructions precisely:
- Task: Write the provided text.
- Tone: ${n.tone}
- Output Format: ${n.format}
- Desired Length: ${n.length}
`;n.outputLanguage&&(r+=`- Output Language: ${n.outputLanguage}
`);const a=[n.sharedContext,n.context].filter(Boolean).join(`

`);return a&&(r+=`
Here is some context to use:
${a}
`),r+=`
Here is the text to write:
---
${e}
---

Written Text:`,r}async write(e,n){const r=this.#r(e,n),a=n.signal;try{return(await this.#t.generateContent(r,{signal:a})).response.text()}catch(s){throw s.name==="AbortError"||a?.aborted?a?.reason??new DOMException("Aborted","AbortError"):s}}writeStreaming(e,n){const r=this.#r(e,n),a=n.signal,s=new AbortController;a?.addEventListener("abort",()=>s.abort(a.reason),{once:!0});const o=this;return new ReadableStream({async start(i){try{const u=await o.#t.generateContentStream(r,{signal:s.signal});for await(const h of u.stream)i.enqueue(h.text());i.close()}catch(u){let h;a?.aborted?h=a.reason??new DOMException("Aborted","AbortError"):u.name==="AbortError"?h=s.signal.reason??u:h=u,i.error(h)}},cancel(i){s.abort(i)}})}async measureWriterUsage(e,n){const r=this.#r(e,n),a=n.signal;try{return(await this.#t.countTokens(r,{signal:a})).totalTokens}catch(s){throw s.name==="AbortError"||a?.aborted?a?.reason??new DOMException("Aborted","AbortError"):s}}async checkRewriterAvailability(e){return"available"}getRewriterQuota(){return 1/0}#a(e,n){let r=`You are a writing assistant.
  Follow these instructions precisely:
  - Task: Rewrite the provided text.
  - Tone: ${n.tone}
  - Output Format: ${n.format}
  - Desired Length: ${n.length}
  `;n.outputLanguage&&(r+=`- Output Language: ${n.outputLanguage}
`);const a=[n.sharedContext,n.context].filter(Boolean).join(`

`);return a&&(r+=`
Here is some context to use:
${a}
`),r+=`
Here is the text to rewrite:
---
${e}
---

Rewritten Text:`,r}async rewrite(e,n){const r=this.#a(e,n),a=n.signal;try{return(await this.#t.generateContent(r,{signal:a})).response.text()}catch(s){throw s.name==="AbortError"||a?.aborted?a?.reason??new DOMException("Aborted","AbortError"):s}}rewriteStreaming(e,n){const r=this.#a(e,n),a=n.signal,s=new AbortController;a?.addEventListener("abort",()=>s.abort(a.reason),{once:!0});const o=this;return new ReadableStream({async start(i){try{const u=await o.#t.generateContentStream(r,{signal:s.signal});for await(const h of u.stream)i.enqueue(h.text());i.close()}catch(u){let h;a?.aborted?h=a.reason??new DOMException("Aborted","AbortError"):u.name==="AbortError"?h=s.signal.reason??u:h=u,i.error(h)}},cancel(i){s.abort(i)}})}async measureRewriterUsage(e,n){const r=this.#a(e,n),a=n.signal;try{return(await this.#t.countTokens(r,{signal:a})).totalTokens}catch(s){throw s.name==="AbortError"||a?.aborted?a?.reason??new DOMException("Aborted","AbortError"):s}}}var pr="firebase",gr="12.4.0";/**
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
 */T(pr,gr,"app");function mr(){const e=$e({apiKey:"AIzaSyCI_e1wo0T-SUbjKJU0LzI1kGOYvEDTnSE",authDomain:"vertexaiinfirebase-test.firebaseapp.com",projectId:"vertexaiinfirebase-test",storageBucket:"vertexaiinfirebase-test.firebasestorage.app",messagingSenderId:"857620473716",appId:"1:857620473716:web:8c803ada68ede9b2bb6e21"}),n=lr(e,{backend:new M}),r=new fr(n);Ke(r)}mr();(async()=>{const t=`Thomas Steiner is a Developer Relations Engineer at Google, focused on Web AI, WebAssembly, and Project Fugu. He's an alumnus of University of Lyon (Postdoc), Polytechnic University of Barcelona (Ph. D.), and University of Karlsruhe (MA).
				
He blogs at blog.tomayac.com and posts as @tomayac@toot.cafe. On all other places on the Internet, chances are that he's there under his online alias tomayac.`;document.body.textContent=`# Built-in AI task APIs polyfill

`,document.body.append(`## Original text

`),document.body.append(t),document.body.append(`

`),document.body.append(`## Summarizer availability

`),document.body.append(await Summarizer.availability()),document.body.append(`

`);const e=await Summarizer.create({sharedContext:"This is a short biography of a conference speaker.",expectedInputLanguages:["en"],expectedContextLanguages:["en"],outputLanguage:"en",format:"markdown",type:"key-points",length:"short"});document.body.append(`## Summarizer non-streaming summary

`),document.body.append(await e.summarize(t)),document.body.append(`

`),document.body.append(`## Summarizer streaming summary

`);const n=e.summarizeStreaming(t);for await(const c of n)document.body.append(c);document.body.append(`

`),document.body.append(`## Summarizer measure input usage

`),document.body.append(String(await e.measureInputUsage(t))),document.body.append(`

`),document.body.append(`## Writer availability

`),document.body.append(await Writer.availability()),document.body.append(`

`);const r=await Writer.create({sharedContext:"This is a biography of a conference speaker.",expectedInputLanguages:["en"],expectedContextLanguages:["en"],outputLanguage:"en",format:"plain-text",tone:"formal",length:"medium"});document.body.append(`## Writer non-streaming write

`),document.body.append(await r.write(`Write a short biography about Thomas, based on the text:

`+t)),document.body.append(`

`),document.body.append(`## Writer streaming write

`);const a=r.writeStreaming(`Write a biography about Thomas, based on the text:

`+t);for await(const c of a)document.body.append(c);document.body.append(`

`),document.body.append(`## Writer measure input usage

`),document.body.append(String(await r.measureInputUsage(t))),document.body.append(`

`),document.body.append(`## Rewriter availability

`),document.body.append(await Rewriter.availability()),document.body.append(`

`);const s=await Rewriter.create({sharedContext:"This is a biography of a conference speaker.",expectedInputLanguages:["en"],expectedContextLanguages:["en"],outputLanguage:"en",format:"plain-text",tone:"more-formal",length:"longer"});document.body.append(`## Rewriter non-streaming rewrite

`),document.body.append(await s.rewrite(`Rewrite a short biography about Thomas, based on the text:

`+t)),document.body.append(`

`),document.body.append(`## Rewriter streaming rewrite

`);const o=s.rewriteStreaming(`Rewrite a biography about Thomas, based on the text:

`+t);for await(const c of o)document.body.append(c);document.body.append(`

`),document.body.append(`## Rewriter measure input usage

`),document.body.append(String(await s.measureInputUsage(t))),document.body.append(`

`)})();
