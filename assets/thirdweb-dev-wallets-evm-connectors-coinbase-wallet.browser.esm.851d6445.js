import{U as l,_ as a,V as g,g as o,R as d,X as u,Y as c,J as p,f as w,Z as m,$ as C,a0 as f,a1 as v}from"./index.2d14a236.js";class I extends l{constructor(t){let{chains:e,options:r}=t;super({chains:e,options:{reloadOnDisconnect:!1,...r}}),a(this,"id",g.coinbase),a(this,"name","Coinbase Wallet"),a(this,"ready",!0),a(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:o(i[0])})}),a(this,"onChainChanged",i=>{const n=d(i),s=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:s}})}),a(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const r=await e.enable(),i=o(r[0]);let n=await this.getChainId(),s=this.isChainUnsupported(n);if(t&&n!==t)try{n=(await this.switchChain(t)).chainId,s=this.isChainUnsupported(n)}catch(h){console.error(`Connected but failed to switch to desired chain ${t}`,h)}return{account:i,chain:{id:n,unsupported:s},provider:new u(e)}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new c(e):e}}async disconnect(){if(!this._provider)return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});if(e.length===0)throw new Error("No accounts found");return o(e[0])}async getChainId(){const t=await this.getProvider();return d(t.chainId)}async getProvider(){if(!this._provider){let t=(await p(()=>import("./index.faa89547.js").then(s=>s.i),["assets/index.faa89547.js","assets/index.2d14a236.js","assets/index.042f72c2.css","assets/js.0c43ae06.js","assets/index.9cb09f85.js","assets/satisfies.51565183.js"])).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),this._client=new t(this.options);const e=this._client.walletExtension?.getChainId(),r=this.chains.find(s=>this.options.chainId?s.chainId===this.options.chainId:s.chainId===e)||this.chains[0],i=this.options.chainId||r?.chainId,n=this.options.jsonRpcUrl||r?.rpc[0];this._provider=this._client.makeWeb3Provider(n,i)}return this._provider}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]);return new u(e,t).getSigner(r)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),r=w(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(i=>i.chainId===t)??{chainId:t,name:`Chain ${r}`,slug:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const n=this.chains.find(s=>s.chainId===t);if(!n)throw new m({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:C(n),blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(s){throw this._isUserRejectedRequestError(s)?new c(s):new f}throw this._isUserRejectedRequestError(i)?new c(i):new v(i)}}_isUserRejectedRequestError(t){return/(user rejected)/i.test(t.message)}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!this._client)throw new Error("Coinbase Wallet SDK not initialized");return this._client.getQrUrl()}}export{I as CoinbaseWalletConnector};
