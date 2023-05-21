import{j as z}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const s=({label:l="Default Label",size:h="normal",color:x="primary",allCaps:v=!1,fontColor:C="#000000"})=>z.jsx("span",{style:{color:C},className:`${h} text-${x}`,children:v?l.toUpperCase():l});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"Default Label"},description:"Label content",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of label should have",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Define the color text",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"Decide whether to capitalize the word or not",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:{value:"#000000"},description:"Define text color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const S={title:"UI/MyLabel",component:s,tags:["autodocs"],argTypes:{fontColor:{control:"color"}}},e={args:{label:"Example1",color:"primary"}},a={args:{label:"Example2",size:"h1",color:"secondary"}},r={args:{label:"Example2",size:"h1",allCaps:!0,color:"tertiary"}},o={args:{label:"Label Example",size:"h1",fontColor:"#000000"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Example1',
    color: 'primary'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Example2',
    size: 'h1',
    color: 'secondary'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Example2',
    size: 'h1',
    allCaps: true,
    color: 'tertiary'
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Label Example',
    size: 'h1',
    fontColor: '#000000'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const q=["Primary","Secondary","Tertiary","CustomFontColor"];export{o as CustomFontColor,e as Primary,a as Secondary,r as Tertiary,q as __namedExportsOrder,S as default};
//# sourceMappingURL=MyLabel.stories-ac24b5e9.js.map
