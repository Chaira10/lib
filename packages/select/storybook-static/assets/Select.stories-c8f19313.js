import{r as E}from"./index-c013ead5.js";import{I as b,v as w}from"./preview-errors-dde4324f.js";import{P as l}from"./index-2baff29e.js";import"./_commonjsHelpers-725317a4.js";import"./index-356e4a49.js";var x={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=E,P=Symbol.for("react.element"),D=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,A=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function C(t,e,o){var n,r={},s=null,a=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)T.call(e,n)&&!q.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:P,type:t,key:s,ref:a,props:r,_owner:A.current}}u.Fragment=D;u.jsx=C;u.jsxs=C;x.exports=u;var d=x.exports;const{addons:N}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var W="storybook/actions",B=`${W}/action-event`,U={depth:10,clearOnStoryChange:!0,limit:50},R=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:R(o,e)},k=t=>!!(typeof t=="object"&&t&&R(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),F=t=>{if(k(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},Y=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function $(t,e={}){let o={...U,...e},n=function(...r){var f,h;if(e.implicit){let g=(f="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:f.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(g){let i=!((h=window==null?void 0:window.FEATURES)!=null&&h.disallowImplicitActionsInRenderV8),_=new b({phase:g.phase,name:t,deprecated:i});if(i)console.warn(_);else throw _}}let s=N.getChannel(),a=Y(),L=5,m=r.map(F),j=r.length>1?m:m[0],V={id:a,count:0,data:{name:t,args:j},options:{...o,maxDepth:L+(o.depth||3),allowFunction:o.allowFunction||!1}};s.emit(B,V)};return n.isAction=!0,n}function p({id:t,value:e,onChange:o,placeholder:n,options:r,name:s}){return d.jsxs("select",{name:s,"data-testid":t,value:e,onChange:o,className:"inputs",children:[d.jsx("option",{value:"",disabled:!0,hidden:!0,children:n}),r.map(a=>d.jsx("option",{value:a,children:a},a))]})}p.propTypes={id:l.string,value:l.string,onChange:l.func,placeholder:l.string,options:l.arrayOf(l.string),name:l.string};p.defaultProps={id:null,value:"",onChange:()=>{},placeholder:"Choose an option",options:[],name:null};p.__docgenInfo={description:`Composant Select\r
\r
### Usage\r
\r
\`\`\`\`jsx\r
@param {string} id - L'identifiant du select.\r
@param {string} value - La valeur sélectionnée du select.\r
@param {function} onChange - La fonction appelée lorsqu'une option est sélectionnée.\r
@param {string} placeholder - Le texte de l'option par défaut (placeholder).\r
@param {array} options - La liste des options du select.\r
@param {string} name - Le nom du select.\r
@returns {JSX.Element} - Le composant Select.\r
\r
@example\r
<Select\r
  id="example-select"\r
  value={selectedValue}\r
  onChange={handleChange}\r
  placeholder="Choisissez une option"\r
  options={['Option 1', 'Option 2', 'Option 3']}\r
  name="example"\r
/>\r
\`\`\`\``,methods:[],displayName:"Select",props:{id:{defaultValue:{value:"null",computed:!1},description:"L'identifiant du select",type:{name:"string"},required:!1},value:{defaultValue:{value:"''",computed:!1},description:"La valeur sélectionnée du select",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"La fonction appelée lorsqu'une option est sélectionnée",type:{name:"func"},required:!1},placeholder:{defaultValue:{value:"'Choose an option'",computed:!1},description:"Le texte de l'option par défaut (placeholder)",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"La liste des options du select",type:{name:"arrayOf",value:{name:"string"}},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"Le nom du select",type:{name:"string"},required:!1}}};const H={title:"Select",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},name:{control:"text"},onChange:{control:null}}},z=["Option 1","Option 2","Option 3"],c=()=>{const[t,e]=E.useState(""),o=n=>{const{value:r}=n.target;e(r),$("selected")(n)};return d.jsx(p,{id:"select",name:"select",value:t,onChange:o,placeholder:"Choose an option",options:z})};c.__docgenInfo={description:"",methods:[],displayName:"SelectWithState"};var v,O,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = event => {
    const {
      value
    } = event.target;
    setSelectedValue(value);
    action("selected")(event); // Enregistre l'événement onChange
  };
  return <Select id="select" name="select" value={selectedValue} onChange={handleChange} placeholder="Choose an option" options={options} />;
}`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const Q=["SelectWithState"];export{c as SelectWithState,Q as __namedExportsOrder,H as default};
