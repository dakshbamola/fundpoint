import{InjectedConnector as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.ebd99033.js";import{a5 as t}from"./index.2d14a236.js";class l extends i{constructor(o){const r={...{name:"Zerion",getProvider(){function e(n){if(!!n?.isZerion)return n}if(t(globalThis.window))return globalThis.window.ethereum?.providers?globalThis.window.ethereum.providers.find(e):e(globalThis.window.ethereum)}},...o.options};super({chains:o.chains,options:r,connectorStorage:o.connectorStorage})}}export{l as ZerionConnector};
