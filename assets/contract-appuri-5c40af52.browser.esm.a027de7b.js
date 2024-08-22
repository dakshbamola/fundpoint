import{aV as b,aW as W,ae as w,aa as m,ad as y,aU as A,aX as v,aY as k,aZ as N,aQ as L,a_ as M,H as T}from"./index.2d14a236.js";function f(c,t){return b(c.abi,t,c.extensions)}function E(c,t){return c in t.readContract.functions}class P{featureName=W.name;constructor(t,r,e){this.contractWrapper=t,this.schema=r,this.storage=e}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){const r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{let r;try{E("name",this.contractWrapper)&&(r=await this.contractWrapper.read("name",[]))}catch{}let e;try{E("symbol",this.contractWrapper)&&(e=await this.contractWrapper.read("symbol",[]))}catch{}let a;try{a=await w(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch{}t={name:r||a?.name,symbol:e,description:a?.info.title}}catch{throw new Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}set=m(async t=>{const r=await this._parseAndUploadMetadata(t),e=this.contractWrapper;if(this.supportsContractMetadata(e))return y.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:a=>({receipt:a,data:this.get})});throw new A(W)});update=m(async t=>await this.set.prepare({...await this.get(),...t}));async _parseAndUploadMetadata(t){const r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return f(t,"ContractMetadata")}}class F{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(v.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(v.Transaction,t)}addEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t),s={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(e)]},n=i=>{const o=this.contractWrapper.readContract.interface.parseLog(i);r(this.toContractEvent(o.eventFragment,o.args,i))};return this.contractWrapper.getProvider().on(s,n),()=>{this.contractWrapper.getProvider().off(s,n)}}listenToAllEvents(t){const e={address:this.contractWrapper.address},a=s=>{try{const n=this.contractWrapper.readContract.interface.parseLog(s);t(this.toContractEvent(n.eventFragment,n.args,s))}catch(n){console.error("Could not parse event:",s,n)}};return this.contractWrapper.getProvider().on(e,a),()=>{this.contractWrapper.getProvider().off(e,a)}}removeEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(e.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();const r={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(r)}async getAllEvents(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"};const e=(await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock)).sort((a,s)=>t.order==="desc"?s.blockNumber-a.blockNumber:a.blockNumber-s.blockNumber);return this.parseEvents(e)}async getEvents(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"};const e=this.contractWrapper.readContract.interface.getEvent(t),a=r.filters?e.inputs.map(o=>r.filters[o.name]):[],s=this.contractWrapper.readContract.filters[e.name](...a),i=(await this.contractWrapper.readContract.queryFilter(s,r.fromBlock,r.toBlock)).sort((o,d)=>r.order==="desc"?d.blockNumber-o.blockNumber:o.blockNumber-d.blockNumber);return this.parseEvents(i)}parseEvents(t){return t.map(r=>{const e=Object.fromEntries(Object.entries(r).filter(a=>typeof a[1]!="function"&&a[0]!=="args"));if(r.args){const a=Object.entries(r.args),s=a.slice(a.length/2,a.length),n={};for(const[i,o]of s)n[i]=o;return{eventName:r.event||"",data:n,transaction:e}}return{eventName:r.event||"",data:{},transaction:e}})}toContractEvent(t,r,e){const a=Object.fromEntries(Object.entries(e).filter(n=>typeof n[1]!="function"&&n[0]!=="args")),s={};return t.inputs.forEach((n,i)=>{if(Array.isArray(r[i])){const o=n.components;if(o){const d=r[i];if(n.type==="tuple[]"){const h=[];for(let p=0;p<d.length;p++){const l=d[p],g={};for(let u=0;u<o.length;u++){const C=o[u].name;g[C]=l[u]}h.push(g)}s[n.name]=h}else{const h={};for(let p=0;p<o.length;p++){const l=o[p].name;h[l]=d[p]}s[n.name]=h}}}else s[n.name]=r[i]}),{eventName:t.name,data:s,transaction:a}}}function U(c){return T(c)}class O{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){const e=await k(this.contractWrapper.getProvider(),await this.contractWrapper.populateTransaction(t,r));return U(e)}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){const t=await this.contractWrapper.getProvider().getGasPrice();return N(t,"gwei")}}class j{featureName=L.name;constructor(t,r,e){this.contractWrapper=t,this.metadata=r,this.storage=e}async get(){return f(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):M((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}set=m(async t=>f(this.contractWrapper,"AppURI")?y.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t}))}export{F as C,O as G,P as a,j as b,f as d,E as h};
