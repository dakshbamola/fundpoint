import{InjectedConnector as n}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.ebd99033.js";import{a5 as s}from"./index.2d14a236.js";class l extends n{constructor(o){const e={...{name:"Trust",getProvider(){function t(r){if(!!r?.isTrust)return r}if(s(globalThis.window))return globalThis.window.ethereum?.providers?globalThis.window.ethereum.providers.find(t):t(globalThis.window.ethereum)}},...o.options};super({chains:o.chains,options:e,connectorStorage:o.connectorStorage})}}export{l as TrustConnector};
