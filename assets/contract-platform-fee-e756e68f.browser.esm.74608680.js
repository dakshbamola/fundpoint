import{aL as r,b4 as e,aa as o,ad as s}from"./index.2d14a236.js";class c{featureName=r.name;constructor(a){this.contractWrapper=a}async get(){const[a,t]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return e.parseAsync({platform_fee_recipient:a,platform_fee_basis_points:t})}set=o(async a=>{const t=await e.parseAsync(a);return s.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[t.platform_fee_recipient,t.platform_fee_basis_points]})})}export{c as C};
