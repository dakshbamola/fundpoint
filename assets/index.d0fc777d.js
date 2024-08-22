import{bT as p,bU as ae,h as Z,F as ie,aC as W,bP as b,bS as q,bj as v,bw as R,bV as K,J as oe,aE as le,B as C,bo as $,A,b2 as X,bn as fe,bv as ue,aZ as F,aB as g,aD as Y,bW as ce,b3 as z,bO as he,b0 as G,bp as pe,n as D,bX as de,bY as E,bZ as me,b_ as V,b$ as ye}from"./index.2d14a236.js";import{b as B,t as ge}from"./treeify.12a4e25e.js";import{S as _,E as be}from"./assertEnabled-d1700f0b.browser.esm.ee464f74.js";import{N as M}from"./setErc20Allowance-7f76f677.browser.esm.2db1466d.js";class x{print(){x.print(this)}bufferIndexOf(e,t){if(arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1)return this.binarySearch(e,t,p.Buffer.compare);const s=(a,l)=>a.equals(l);return this.linearSearch(e,t,s)}static binarySearch(e,t,r){let s=0,a=e.length-1;for(;s<=a;){const l=Math.floor((s+a)/2),i=r(e[l],t);if(i===0){for(let o=l-1;o>=0;o--)if(r(e[o],t)!==0)return o+1;return 0}else i<0?s=l+1:a=l-1}return-1}binarySearch(e,t,r){return x.binarySearch(e,t,r)}static linearSearch(e,t,r){for(let s=0;s<e.length;s++)if(r(e[s],t))return s;return-1}linearSearch(e,t,r){return x.linearSearch(e,t,r)}static bufferify(e){if(!p.Buffer.isBuffer(e)){if(typeof e=="object"&&e.words)return p.Buffer.from(e.toString(Se),"hex");if(x.isHexString(e))return p.Buffer.from(e.replace(/^0x/,""),"hex");if(typeof e=="string")return p.Buffer.from(e);if(typeof e=="bigint")return p.Buffer.from(e.toString(16),"hex");if(e instanceof Uint8Array)return p.Buffer.from(e.buffer);if(typeof e=="number"){let t=e.toString();return t.length%2&&(t=`0${t}`),p.Buffer.from(t,"hex")}else if(ArrayBuffer.isView(e))return p.Buffer.from(e.buffer,e.byteOffset,e.byteLength)}return e}bigNumberify(e){return x.bigNumberify(e)}static bigNumberify(e){if(typeof e=="bigint")return e;if(typeof e=="string")return e.startsWith("0x")&&x.isHexString(e)?BigInt("0x"+e.replace("0x","").toString()):BigInt(e);if(p.Buffer.isBuffer(e))return BigInt("0x"+e.toString("hex"));if(e instanceof Uint8Array)return Pe(e);if(typeof e=="number")return BigInt(e);throw new Error("cannot bigNumberify")}static isHexString(e){return typeof e=="string"&&/^(0x)?[0-9A-Fa-f]*$/.test(e)}static print(e){console.log(e.toString())}bufferToHex(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return x.bufferToHex(e,t)}static bufferToHex(e){return`${(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?"0x":""}${(e||p.Buffer.alloc(0)).toString("hex")}`}bufferify(e){return x.bufferify(e)}bufferifyFn(e){return t=>{const r=e(t);if(p.Buffer.isBuffer(r))return r;if(this.isHexString(r))return p.Buffer.from(r.replace("0x",""),"hex");if(typeof r=="string")return p.Buffer.from(r);if(typeof r=="bigint")return p.Buffer.from(t.toString(16),"hex");if(ArrayBuffer.isView(r))return p.Buffer.from(r.buffer,r.byteOffset,r.byteLength);const s=xe(t.toString("hex")),a=e(s),l=Te(a);return p.Buffer.from(l,"hex")}}isHexString(e){return x.isHexString(e)}log2(e){return e===1?0:1+this.log2(e/2|0)}zip(e,t){return e.map((r,s)=>[r,t[s]])}static hexZeroPad(e,t){return"0x"+e.replace("0x","").padStart(t,"0")}}var we=x;function Se(n){const e=n.words,t=new ArrayBuffer(e.length*4),r=new Uint8Array(t);for(let s=0;s<e.length;s++)r[s*4]=e[s]>>24&255,r[s*4+1]=e[s]>>16&255,r[s*4+2]=e[s]>>8&255,r[s*4+3]=e[s]&255;return t}function xe(n){const e=new Uint8Array(n.length/2);for(let t=0;t<n.length;t+=2)e[t/2]=parseInt(n.substring(t,t+2),16);return e.buffer}function Te(n){const e=new Uint8Array(n);return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}function Pe(n){const e=Array.from(n).map(t=>t.toString(16).padStart(2,"0")).join("");return BigInt(`0x${e}`)}class L extends we{duplicateOdd=!1;concatenator=p.Buffer.concat;hashLeaves=!1;isBitcoinTree=!1;leaves=[];layers=[];sortLeaves=!1;sortPairs=!1;sort=!1;fillDefaultHash=null;complete=!1;constructor(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(super(),r.complete){if(r.isBitcoinTree)throw new Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw new Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash)if(typeof r.fillDefaultHash=="function")this.fillDefaultHash=r.fillDefaultHash;else if(p.Buffer.isBuffer(r.fillDefaultHash)||typeof r.fillDefaultHash=="string")this.fillDefaultHash=(s,a)=>r.fillDefaultHash;else throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(t),this.processLeaves(e)}getOptions(){return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:this.fillDefaultHash?.toString()??null,duplicateOdd:this.duplicateOdd}}processLeaves(e){if(this.hashLeaves&&(e=e.map(this.hashFn)),this.leaves=e.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(p.Buffer.compare)),this.fillDefaultHash)for(let t=this.leaves.length;t<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));t++)this.leaves.push(this.bufferify(this.fillDefaultHash(t,this.hashFn)));this.createHashes(this.leaves)}createHashes(e){for(this.layers=[e];e.length>1;){const t=this.layers.length;this.layers.push([]);const r=this.complete&&t===1&&!Number.isInteger(Math.log2(e.length))?2*e.length-2**Math.ceil(Math.log2(e.length)):e.length;for(let s=0;s<e.length;s+=2){if(s>=r){this.layers[t].push(...e.slice(r));break}else if(s+1===e.length&&e.length%2===1){const f=e[e.length-1];let c=f;if(this.isBitcoinTree){c=this.hashFn(this.concatenator([B(f),B(f)])),c=B(this.hashFn(c)),this.layers[t].push(c);continue}else if(!this.duplicateOdd){this.layers[t].push(e[s]);continue}}const a=e[s],l=s+1===e.length?a:e[s+1];let i=null;this.isBitcoinTree?i=[B(a),B(l)]:i=[a,l],this.sortPairs&&i.sort(p.Buffer.compare);let o=this.hashFn(this.concatenator(i));this.isBitcoinTree&&(o=B(this.hashFn(o))),this.layers[t].push(o)}e=this.layers[t]}}addLeaf(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=this.hashFn(e)),this.processLeaves(this.leaves.concat(e))}addLeaves(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=e.map(this.hashFn)),this.processLeaves(this.leaves.concat(e))}getLeaves(e){return Array.isArray(e)?(this.hashLeaves&&(e=e.map(this.hashFn),this.sortLeaves&&(e=e.sort(p.Buffer.compare))),this.leaves.filter(t=>this.bufferIndexOf(e,t,this.sortLeaves)!==-1)):this.leaves}getLeaf(e){return e<0||e>this.leaves.length-1?p.Buffer.from([]):this.leaves[e]}getLeafIndex(e){e=this.bufferify(e);const t=this.getLeaves();for(let r=0;r<t.length;r++)if(t[r].equals(e))return r;return-1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map(e=>this.bufferToHex(e))}static marshalLeaves(e){return JSON.stringify(e.map(t=>L.bufferToHex(t)),null,2)}static unmarshalLeaves(e){let t=null;if(typeof e=="string")t=JSON.parse(e);else if(e instanceof Object)t=e;else throw new Error("Expected type of string or object");if(!t)return[];if(!Array.isArray(t))throw new Error("Expected JSON string to be array");return t.map(L.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce((e,t)=>(Array.isArray(t)?e.push(t.map(r=>this.bufferToHex(r))):e.push(t),e),[])}getLayersFlat(){const e=this.layers.reduce((t,r)=>(Array.isArray(r)?t.unshift(...r):t.unshift(r),t),[]);return e.unshift(p.Buffer.from([0])),e}getHexLayersFlat(){return this.getLayersFlat().map(e=>this.bufferToHex(e))}getLayerCount(){return this.getLayers().length}getRoot(){return this.layers.length===0?p.Buffer.from([]):this.layers[this.layers.length-1][0]||p.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(e,t){if(typeof e>"u")throw new Error("leaf is required");e=this.bufferify(e);const r=[];if(!Number.isInteger(t)){t=-1;for(let s=0;s<this.leaves.length;s++)p.Buffer.compare(e,this.leaves[s])===0&&(t=s)}if(t<=-1)return[];for(let s=0;s<this.layers.length;s++){const a=this.layers[s],l=t%2,i=l?t-1:this.isBitcoinTree&&t===a.length-1&&s<this.layers.length-1?t:t+1;i<a.length&&r.push({position:l?"left":"right",data:a[i]}),t=t/2|0}return r}getHexProof(e,t){return this.getProof(e,t).map(r=>this.bufferToHex(r.data))}getProofs(){const e=[],t=[];return this.getProofsDFS(this.layers.length-1,0,e,t),t}getProofsDFS(e,t,r,s){const a=t%2;if(e===-1){a||s.push([...r].reverse());return}if(t>=this.layers[e].length)return;const l=this.layers[e],i=a?t-1:t+1;let o=!1;i<l.length&&(o=!0,r.push({position:a?"left":"right",data:l[i]}));const f=t*2,c=t*2+1;this.getProofsDFS(e-1,f,r,s),this.getProofsDFS(e-1,c,r,s),o&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map(e=>this.bufferToHex(e.data))}getPositionalHexProof(e,t){return this.getProof(e,t).map(r=>[r.position==="left"?0:1,this.bufferToHex(r.data)])}getProofIndices(e,t){const r=2**t;let s=new Set;for(const f of e){let c=r+f;for(;c>1;)s.add(c^1),c=c/2|0}const a=e.map(f=>r+f),l=Array.from(s).sort((f,c)=>f-c).reverse();s=a.concat(l);const i=new Set,o=[];for(let f of s)if(!i.has(f))for(o.push(f);f>1&&(i.add(f),!!i.has(f^1));)f=f/2|0;return o.filter(f=>!e.includes(f-r))}getProofIndicesForUnevenTree(e,t){const r=Math.ceil(Math.log2(t)),s=[];for(let i=0;i<r;i++)t%2!==0&&s.push({index:i,leavesCount:t}),t=Math.ceil(t/2);const a=[];let l=e;for(let i=0;i<r;i++){let f=l.map(u=>u%2===0?u+1:u-1).filter(u=>!l.includes(u));const c=s.find(u=>{let{index:h}=u;return h===i});c&&l.includes(c.leavesCount-1)&&(f=f.slice(0,-1)),a.push(f),l=[...new Set(l.map(u=>u%2===0?u/2:u%2===0?(u+1)/2:(u-1)/2))]}return a}getMultiProof(e,t){if(this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),t||(t=e,e=this.getLayersFlat()),this.isUnevenTree()&&t.every(Number.isInteger))return this.getMultiProofForUnevenTree(t);if(!t.every(Number.isInteger)){let s=t;this.sortPairs&&(s=s.sort(p.Buffer.compare));let a=s.map(f=>this.bufferIndexOf(this.leaves,f,this.sortLeaves)).sort((f,c)=>f===c?0:f>c?1:-1);if(!a.every(f=>f!==-1))throw new Error("Element does not exist in Merkle tree");const l=[],i=[];let o=[];for(let f=0;f<this.layers.length;f++){const c=this.layers[f];for(let u=0;u<a.length;u++){const h=a[u],m=this.getPairNode(c,h);l.push(c[h]),m&&i.push(m),o.push(h/2|0)}a=o.filter((u,h,m)=>m.indexOf(u)===h),o=[]}return i.filter(f=>!l.includes(f))}return this.getProofIndices(t,Math.log2(e.length/2|0)).map(s=>e[s])}getMultiProofForUnevenTree(e,t){t||(t=e,e=this.getLayers());let r=[],s=t;for(const a of e){const l=[];for(const o of s){if(o%2===0){const c=o+1;if(!s.includes(c)&&a[c]){l.push(a[c]);continue}}const f=o-1;if(!s.includes(f)&&a[f]){l.push(a[f]);continue}}r=r.concat(l);const i=new Set;for(const o of s){if(o%2===0){i.add(o/2);continue}if(o%2===0){i.add((o+1)/2);continue}i.add((o-1)/2)}s=Array.from(i)}return r}getHexMultiProof(e,t){return this.getMultiProof(e,t).map(r=>this.bufferToHex(r))}getProofFlags(e,t){if(!Array.isArray(e)||e.length<=0)throw new Error("Invalid Inputs!");let r;if(e.every(Number.isInteger)?r=[...e].sort((i,o)=>i===o?0:i>o?1:-1):r=e.map(i=>this.bufferIndexOf(this.leaves,i,this.sortLeaves)).sort((i,o)=>i===o?0:i>o?1:-1),!r.every(i=>i!==-1))throw new Error("Element does not exist in Merkle tree");const s=t.map(i=>this.bufferify(i)),a=[],l=[];for(let i=0;i<this.layers.length;i++){const o=this.layers[i];r=r.reduce((f,c)=>{if(!a.includes(o[c])){const h=this.getPairNode(o,c),m=s.includes(o[c])||s.includes(h);h&&l.push(!m),a.push(o[c]),a.push(h)}return f.push(c/2|0),f},[])}return l}verify(e,t,r){let s=this.bufferify(t);if(r=this.bufferify(r),!Array.isArray(e)||!t||!r)return!1;for(let a=0;a<e.length;a++){const l=e[a];let i=null,o=null;if(typeof l=="string")i=this.bufferify(l),o=!0;else if(Array.isArray(l))o=l[0]===0,i=this.bufferify(l[1]);else if(p.Buffer.isBuffer(l))i=l,o=!0;else if(l instanceof Object)i=this.bufferify(l.data),o=l.position==="left";else throw new Error("Expected node to be of type string or object");const f=[];this.isBitcoinTree?(f.push(B(s)),f[o?"unshift":"push"](B(i)),s=this.hashFn(this.concatenator(f)),s=B(this.hashFn(s))):this.sortPairs?p.Buffer.compare(s,i)===-1?(f.push(s,i),s=this.hashFn(this.concatenator(f))):(f.push(i,s),s=this.hashFn(this.concatenator(f))):(f.push(s),f[o?"unshift":"push"](i),s=this.hashFn(this.concatenator(f)))}return p.Buffer.compare(s,r)===0}verifyMultiProof(e,t,r,s,a){if(this.isUnevenTree())return this.verifyMultiProofForUnevenTree(e,t,r,s,a);const i=Math.ceil(Math.log2(s));e=this.bufferify(e),r=r.map(u=>this.bufferify(u)),a=a.map(u=>this.bufferify(u));const o={};for(const[u,h]of this.zip(t,r))o[2**i+u]=h;for(const[u,h]of this.zip(this.getProofIndices(t,i),a))o[u]=h;let f=Object.keys(o).map(u=>Number(u)).sort((u,h)=>u-h);f=f.slice(0,f.length-1);let c=0;for(;c<f.length;){const u=f[c];if(u>=2&&{}.hasOwnProperty.call(o,u^1)){let h=[o[u-u%2],o[u-u%2+1]];this.sortPairs&&(h=h.sort(p.Buffer.compare));const m=h[1]?this.hashFn(this.concatenator(h)):h[0];o[u/2|0]=m,f.push(u/2|0)}c+=1}return!t.length||{}.hasOwnProperty.call(o,1)&&o[1].equals(e)}verifyMultiProofWithFlags(e,t,r,s){e=this.bufferify(e),t=t.map(this.bufferify),r=r.map(this.bufferify);const a=t.length,l=s.length,i=[];let o=0,f=0,c=0;for(let u=0;u<l;u++){const h=s[u]?o<a?t[o++]:i[f++]:r[c++],m=o<a?t[o++]:i[f++],y=[h,m].sort(p.Buffer.compare);i[u]=this.hashFn(this.concatenator(y))}return p.Buffer.compare(i[l-1],e)===0}verifyMultiProofForUnevenTree(e,t,r,s,a){e=this.bufferify(e),r=r.map(i=>this.bufferify(i)),a=a.map(i=>this.bufferify(i));const l=this.calculateRootForUnevenTree(t,r,s,a);return e.equals(l)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){const e=this.getLayers().map(r=>r.map(s=>this.bufferToHex(s,!1))),t=[];for(let r=0;r<e.length;r++){const s=[];for(let a=0;a<e[r].length;a++){const l={[e[r][a]]:null};if(t.length){l[e[r][a]]={};const i=t.shift(),o=Object.keys(i)[0];if(l[e[r][a]][o]=i[o],t.length){const f=t.shift(),c=Object.keys(f)[0];l[e[r][a]][c]=f[c]}}s.push(l)}t.push(...s)}return t[0]}resetTree(){this.leaves=[],this.layers=[]}getPairNode(e,t){const r=t%2===0?t+1:t-1;return r<e.length?e[r]:null}toTreeString(){const e=this.getLayersAsObject();return ge.exports.asTree(e,!0,!1)}toString(){return this.toTreeString()}isUnevenTree(e){const t=e?.length||this.getDepth();return!this.isPowOf2(t)}isPowOf2(e){return e&&!(e&e-1)}calculateRootForUnevenTree(e,t,r,s){const a=this.zip(e,t).sort((u,h)=>{let[m]=u,[y]=h;return m-y}),l=a.map(u=>{let[h]=u;return h}),i=this.getProofIndicesForUnevenTree(l,r);let o=0;const f=[];for(let u=0;u<i.length;u++){const h=i[u],m=o;o+=h.length,f[u]=this.zip(h,s.slice(m,o))}const c=[a];for(let u=0;u<f.length;u++){const h=f[u].concat(c[u]).sort((d,T)=>{let[k]=d,[w]=T;return k-w}).map(d=>{let[,T]=d;return T}),m=c[u].map(d=>{let[T]=d;return T}),y=[...new Set(m.map(d=>d%2===0?d/2:d%2===0?(d+1)/2:(d-1)/2))],I=[];for(let d=0;d<y.length;d++){const T=y[d],k=h[d*2],w=h[d*2+1],P=w?this.hashFn(this.concatenator([k,w])):k;I.push([T,P])}c.push(I)}return c[c.length-1][0][1]}}function $e(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot,pricePerToken:n.pricePerToken,currency:n.currency,quantityLimitPerTransaction:n.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:n.waitTimeInSecondsBetweenClaims||0}}function ze(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot,pricePerToken:n.pricePerToken,currency:n.currency,quantityLimitPerWallet:n.maxClaimablePerWallet,metadata:n.metadata||""}}function O(n,e){return n==="unlimited"?v:R(n,e)}async function ee(n){const t=Array.from({length:Math.ceil(n.length/25e3)},(a,l)=>n.slice(l*25e3,l*25e3+25e3)),r=[],s=await Promise.all(t.map(a=>V.parseAsync(a)));for(const a of s)r.push(...a);return r}const Be=2;let j=function(n){return n[n.V1=1]="V1",n[n.V2=2]="V2",n}({});class S{constructor(e,t,r,s,a){this.storage=e,this.shardNybbles=s,this.baseUri=t,this.originalEntriesUri=r,this.tokenDecimals=a,this.shards={},this.trees={}}static async fromUri(e,t){try{const r=await t.downloadJSON(e);if(r.isShardedMerkleTree)return S.fromShardedMerkleTreeInfo(r,t)}catch{return}}static async fromShardedMerkleTreeInfo(e,t){return new S(t,e.baseUri,e.originalEntriesUri,e.shardNybbles,e.tokenDecimals)}static hashEntry(e,t,r,s){switch(s){case j.V1:return G(["address","uint256"],[e.address,O(e.maxClaimable,t)]);case j.V2:return G(["address","uint256","uint256","address"],[e.address,O(e.maxClaimable,t),O(e.price||"unlimited",r),e.currencyAddress||A])}}static async fetchAndCacheDecimals(e,t,r){if(!r)return 18;let s=e[r];return s===void 0&&(s=(await pe(t,r)).decimals,e[r]=s),s}static async buildAndUpload(e,t,r,s,a){let l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:Be;const i=await ee(e),o={};for(const w of i){const P=w.address.slice(2,2+l).toLowerCase();o[P]===void 0&&(o[P]=[]),o[P].push(w)}const f={},c=await Promise.all(Object.entries(o).map(async w=>{let[P,U]=w;return[P,new L(await Promise.all(U.map(async H=>{const ne=await S.fetchAndCacheDecimals(f,r,H.currencyAddress);return S.hashEntry(H,t,ne,a)})),D,{sort:!0}).getHexRoot()]})),u=Object.fromEntries(c),h=new L(Object.values(u),D,{sort:!0}),m=[];for(const[w,P]of Object.entries(o)){const U={proofs:h.getProof(u[w]).map(H=>"0x"+H.data.toString("hex")),entries:P};m.push({data:JSON.stringify(U),name:`${w}.json`})}const y=await s.uploadBatch(m),I=y[0].slice(0,y[0].lastIndexOf("/")),d=await s.upload(i),T={merkleRoot:h.getHexRoot(),baseUri:I,originalEntriesUri:d,shardNybbles:l,tokenDecimals:t,isShardedMerkleTree:!0},k=await s.upload(T);return{shardedMerkleInfo:T,uri:k}}async getProof(e,t,r){const s=e.slice(2,2+this.shardNybbles).toLowerCase();let a=this.shards[s];const l={};if(a===void 0)try{const u=this.baseUri.endsWith("/")?this.baseUri:`${this.baseUri}/`;a=this.shards[s]=await this.storage.downloadJSON(`${u}${s}.json`);const h=await Promise.all(a.entries.map(async m=>{const y=await S.fetchAndCacheDecimals(l,t,m.currencyAddress);return S.hashEntry(m,this.tokenDecimals,y,r)}));this.trees[s]=new L(h,D,{sort:!0})}catch{return null}const i=a.entries.find(u=>u.address.toLowerCase()===e.toLowerCase());if(!i)return null;const o=await S.fetchAndCacheDecimals(l,t,i.currencyAddress),f=S.hashEntry(i,this.tokenDecimals,o,r),c=this.trees[s].getProof(f).map(u=>"0x"+u.data.toString("hex"));return de.parseAsync({...i,proof:c.concat(a.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(e){return console.warn("Could not fetch original snapshot entries",e),[]}}}async function Ae(n,e,t,r,s,a){if(!t)return null;const l=t[e];if(l){const i=await s.downloadJSON(l);if(i.isShardedMerkleTree&&i.merkleRoot===e)return await(await S.fromShardedMerkleTreeInfo(i,s)).getProof(n,r,a);const o=await K.parseAsync(i);if(e===o.merkleRoot)return o.claims.find(f=>f.address.toLowerCase()===n.toLowerCase())||null}return null}function Ve(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot.toString(),pricePerToken:n.pricePerToken,currency:n.currency,maxClaimablePerWallet:n.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:n.waitTimeInSecondsBetweenClaims}}function Je(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot.toString(),pricePerToken:n.pricePerToken,currency:n.currency,maxClaimablePerWallet:n.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:n.metadata}}async function Ie(n,e,t,r,s){const a=n.getSigner(),l=n.getProvider(),i=(await oe(()=>import("./index.2d14a236.js").then(m=>m.en),["assets/index.2d14a236.js","assets/index.042f72c2.css"])).default,o=new le(a||l,e,i,n.options,n.storage),f=await n.getSignerAddress(),c=n.address,u=await o.read("allowance",[f,c]),h=C.from(t).mul(C.from(r)).div(R("1",s));u.lt(h)&&await o.sendTransaction("approve",[c,u.add(h)])}async function Qe(n,e,t,r,s,a,l,i,o){let f=O(t.maxClaimablePerWallet,s),c=[$([0],32)],u=t.price,h=t.currencyAddress;try{if(!t.merkleRootHash.toString().startsWith(A)){const d=await Ae(n,t.merkleRootHash.toString(),await r(),a.getProvider(),l,o);if(d)c=d.proof,f=d.maxClaimable==="unlimited"?v:R(d.maxClaimable,s),u=d.price===void 0||d.price==="unlimited"?v:await X(a.getProvider(),d.price,d.currencyAddress||A),h=d.currencyAddress||A;else if(o===j.V1)throw new Error("No claim found for this address")}}catch(d){if(d?.message==="No claim found for this address")throw d;console.warn("failed to check claim condition merkle root hash, continuing anyways",d)}const m=await a.getCallOverrides()||{},y=u.toString()!==v.toString()?u:t.price,I=h!==A?h:t.currencyAddress;return y.gt(0)&&(fe(I)?m.value=C.from(y).mul(e).div(R("1",s)):i&&await Ie(a,I,y,e,s)),{overrides:m,proofs:c,maxClaimable:f,price:y,currencyAddress:I,priceInProof:u,currencyAddressInProof:h}}const Ce=(()=>g.object({name:g.string(),symbol:g.string(),decimals:g.number()}))(),ke=(()=>Ce.extend({value:b,displayValue:g.string()}))(),Le=(()=>g.object({name:g.string().optional()}).catchall(g.unknown()))(),J=(()=>g.object({startTime:_,currencyAddress:g.string().default(z),price:W.default(0),maxClaimableSupply:E,maxClaimablePerWallet:E,waitInSeconds:q.default(0),merkleRootHash:me.default($([0],32)),snapshot:g.optional(V).nullable(),metadata:Le.optional()}))(),Oe=(()=>g.array(J))(),te=(()=>J.extend({availableSupply:E,currentMintSupply:E,currencyMetadata:ke.default({value:C.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:b,waitInSeconds:b,startTime:b.transform(n=>new Date(n.toNumber()*1e3)),snapshot:V.optional().nullable()}))();async function ve(n,e,t,r,s){const a=await ee(n),l=a.map(f=>f.address);if(new Set(l).size<l.length)throw new ye;const o=await S.buildAndUpload(a,e,t,r,s);return{merkleRoot:o.shardedMerkleInfo.merkleRoot,snapshotUri:o.uri}}function He(n,e){const t=C.from(n),r=C.from(e);return t.eq(r)?0:t.gt(r)?1:-1}async function Ne(n,e,t,r,s){const a=[];return{inputsWithSnapshots:await Promise.all(n.map(async i=>{if(i.snapshot&&i.snapshot.length>0){const o=await ve(i.snapshot,e,t,r,s);a.push(o),i.merkleRootHash=o.merkleRoot}else i.merkleRootHash=$([0],32);return i})),snapshotInfos:a}}async function Re(n,e,t,r){const s=n.currencyAddress===A?z:n.currencyAddress,a=O(n.maxClaimableSupply,e),l=O(n.maxClaimablePerWallet,e);let i;return n.metadata&&(typeof n.metadata=="string"?i=n.metadata:i=await r.upload(n.metadata)),{startTimestamp:n.startTime,maxClaimableSupply:a,supplyClaimed:0,maxClaimablePerWallet:l,pricePerToken:await X(t,n.price,s),currency:s,merkleRoot:n.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:n.waitInSeconds||0,metadata:i}}async function Ze(n,e,t,r,s){const{inputsWithSnapshots:a,snapshotInfos:l}=await Ne(n,e,t,r,s),i=await Oe.parseAsync(a),o=(await Promise.all(i.map(f=>Re(f,e,t,r)))).sort((f,c)=>He(f.startTimestamp,c.startTimestamp));return{snapshotInfos:l,sortedConditions:o}}async function Ee(n,e,t){if(!e)return null;const r=e[n];if(r){const s=await t.downloadJSON(r);if(s.isShardedMerkleTree&&s.merkleRoot===n)return(await S.fromUri(r,t))?.getAllEntries()||null;{const a=await K.parseAsync(s);if(n===a.merkleRoot)return a.claims.map(l=>({address:l.address,maxClaimable:l.maxClaimable,price:l.price,currencyAddress:l.currencyAddress}))}}return null}function N(n,e){return n.toString()===v.toString()?"unlimited":F(n,e)}async function Ye(n,e,t,r,s,a){const l=await ue(t,n.currency,n.pricePerToken),i=N(n.maxClaimableSupply,e),o=N(n.maxClaimablePerWallet,e),f=N(C.from(n.maxClaimableSupply).sub(n.supplyClaimed),e),c=N(n.supplyClaimed,e);let u;return n.metadata&&(u=await s.downloadJSON(n.metadata)),te.parseAsync({startTime:n.startTimestamp,maxClaimableSupply:i,maxClaimablePerWallet:o,currentMintSupply:c,availableSupply:f,waitInSeconds:n.waitTimeInSecondsBetweenClaims?.toString(),price:C.from(n.pricePerToken),currency:n.currency,currencyAddress:n.currency,currencyMetadata:l,merkleRootHash:n.merkleRoot,snapshot:a?await Ee(n.merkleRoot,r,s):void 0,metadata:u})}async function Ge(n,e,t){if(n>=t.length)throw Error(`Index out of bounds - got index: ${n} with ${t.length} conditions`);const r=t[n].currencyMetadata.decimals,s=t[n].price,a=F(s,r),l=await J.parseAsync({...t[n],price:a,...e}),i=await te.parseAsync({...l,price:s});return t.map((o,f)=>{let c;f===n?c=i:c=o;const u=F(c.price,r);return{...c,price:u}})}let Ke=function(n){return n.NotEnoughSupply="There is not enough supply to claim.",n.AddressNotAllowed="This address is not on the allowlist.",n.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",n.ClaimPhaseNotStarted="Claim phase has not started yet.",n.AlreadyClaimed="You have already claimed the token.",n.WrongPriceOrCurrency="Incorrect price or currency.",n.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",n.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",n.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",n.NoClaimConditionSet="There is no claim condition set.",n.NoWallet="No wallet connected.",n.Unknown="No claim conditions found.",n}({});function Me(n){if(n===void 0){const e=p.Buffer.alloc(16);return ae({},e),Z(ie(e.toString("hex")))}else return Z(n)}const re=(()=>g.object({to:Y.refine(n=>n.toLowerCase()!==A,{message:"Cannot create payload to mint to zero address"}),price:W.default(0),currencyAddress:ce.default(z),mintStartTime:_,mintEndTime:be,uid:g.string().optional().transform(n=>Me(n)),primarySaleRecipient:Y.default(A)}))(),Ue=(()=>re.extend({quantity:W}))(),Xe=(()=>Ue.extend({mintStartTime:b,mintEndTime:b}))(),Q=(()=>re.extend({metadata:M,royaltyRecipient:g.string().default(A),royaltyBps:he.default(0)}))(),se=(()=>Q.extend({metadata:M.default(""),uri:g.string(),royaltyBps:b,mintStartTime:b,mintEndTime:b}))(),De=(()=>Q.extend({metadata:M.default(""),quantity:q}))(),_e=(()=>De.extend({tokenId:q}))(),et=(()=>se.extend({tokenId:b,quantity:b}))(),tt=(()=>Q.extend({metadata:M.default(""),quantity:b.default(1)}))(),rt=(()=>se.extend({quantity:b.default(1)}))(),st=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],nt=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],at=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],it=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];var ot=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,s,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!n(e[s],t[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[s]))return!1;for(s=r;s--!==0;){var l=a[s];if(!n(e[l],t[l]))return!1}return!0}return e!==e&&t!==t};export{re as B,Ke as C,at as M,_e as S,Ie as a,et as b,O as c,ot as d,$e as e,Ae as f,ze as g,Qe as h,j as i,Ue as j,Xe as k,Ve as l,st as m,Je as n,tt as o,Ze as p,rt as q,Me as r,nt as s,Ye as t,Ge as u,it as v};
