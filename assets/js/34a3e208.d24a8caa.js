"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5863],{79446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),l=a(5270),o=a(65488),r=a(85162);const s={title:"Update Relationship Tuples",sidebar_position:3,slug:"/getting-started/update-tuples"},p="Update Relationship Tuples",d={unversionedId:"content/getting-started/update-tuples",id:"content/getting-started/update-tuples",title:"Update Relationship Tuples",description:"This section will illustrate how to update .",source:"@site/docs/content/getting-started/update-tuples.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/update-tuples",permalink:"/docs/getting-started/update-tuples",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/update-tuples.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Update Relationship Tuples",sidebar_position:3,slug:"/getting-started/update-tuples"},sidebar:"docs",previous:{title:"Configure Authorization Model",permalink:"/docs/getting-started/configure-model"},next:{title:"Perform a Check",permalink:"/docs/getting-started/perform-check"}},u={},c=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Configure The <ProductName format={ProductNameFormat.ShortForm}/> API Client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Write API To Add New Relationship Tuples",id:"02-calling-write-api-to-add-new-relationship-tuples",level:3},{value:"03. Calling Write API To Delete Relationship Tuples",id:"03-calling-write-api-to-delete-relationship-tuples",level:3},{value:"Related Sections",id:"related-sections",level:2}],m={toc:c};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update-relationship-tuples"},"Update Relationship Tuples"),(0,i.kt)(l.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"This section will illustrate how to update ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(l.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"})),"."),(0,i.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,i.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK].map((e=>(0,i.kt)(r.Z,{value:e,label:l.UB.get(e),mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(l.YY,{mdxType:"SdkSetupPrerequisite"})),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/install-sdk"},"installed the SDK"),"."),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/configure-model"},"configured the ",(0,i.kt)("em",{parentName:"a"},"authorization model")),"."),(0,i.kt)("li",{parentName:"ol"},"You have loaded ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_API_HOST")," as environment variables."))))),(0,i.kt)(r.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(l.YY,{mdxType:"SdkSetupPrerequisite"})),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/configure-model"},"configured the ",(0,i.kt)("em",{parentName:"a"},"authorization model")),"."),(0,i.kt)("li",{parentName:"ol"},"You have loaded ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_API_HOST")," as environment variables.")))),(0,i.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,i.kt)("p",null,"Assume that you want to add user ",(0,i.kt)("inlineCode",{parentName:"p"},"anne")," to have relationship ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," with object ",(0,i.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  user: 'anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n")),(0,i.kt)("h3",{id:"01-configure-the--api-client"},"01. Configure The ",(0,i.kt)(l.rZ,{format:l.v7.ShortForm,mdxType:"ProductName"})," API Client"),(0,i.kt)("p",null,"Before calling the write API, you will need to configure the API client."),(0,i.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),mdxType:"TabItem"},(0,i.kt)(l.j3,{lang:l.eU.JS_SDK,mdxType:"SdkSetupHeader"})),(0,i.kt)(r.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),mdxType:"TabItem"},(0,i.kt)(l.j3,{lang:l.eU.GO_SDK,mdxType:"SdkSetupHeader"})),(0,i.kt)(r.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),mdxType:"TabItem"},(0,i.kt)(l.j3,{lang:l.eU.DOTNET_SDK,mdxType:"SdkSetupHeader"})),(0,i.kt)(r.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),mdxType:"TabItem"},(0,i.kt)(l.j3,{lang:l.eU.PYTHON_SDK,mdxType:"SdkSetupHeader"})),(0,i.kt)(r.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),mdxType:"TabItem"},(0,i.kt)("p",null,"To obtain the ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow"},"access token"),":"),(0,i.kt)(l.j3,{lang:l.eU.CURL,mdxType:"SdkSetupHeader"}))),(0,i.kt)("h3",{id:"02-calling-write-api-to-add-new-relationship-tuples"},"02. Calling Write API To Add New Relationship Tuples"),(0,i.kt)("p",null,"To add the relationship tuples, we can invoke the write API."),(0,i.kt)(l.Gb,{relationshipTuples:[{user:"anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.CURL],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"03-calling-write-api-to-delete-relationship-tuples"},"03. Calling Write API To Delete Relationship Tuples"),(0,i.kt)("p",null,"To delete relationship tuples, we can invoke the write API."),(0,i.kt)("p",null,"Assume that you want to delete user ",(0,i.kt)("inlineCode",{parentName:"p"},"anne"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," relationship with object ",(0,i.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  user: 'anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n")),(0,i.kt)(l.Gb,{deleteRelationshipTuples:[{user:"anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.CURL],mdxType:"WriteRequestViewer"}),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(l.$q,{description:"Check the following sections for more on how to write your authorization data",relatedLinks:[{title:"Managing User Access",description:"Learn about how to give a user access to a particular object.",link:"../interacting/managing-user-access",id:"../interacting/managing-user-access.mdx"},{title:"Managing Group Access",description:"Learn about how to give a group of users access to a particular object.",link:"../interacting/managing-group-access",id:"../interacting/managing-group-access.mdx"},{title:"Transactional Writes",description:"Learn about how to update multiple relations within the same API call.",link:"../interacting/transactional-writes",id:"../interacting/transactional-writes.mdx"}],mdxType:"RelatedSection"}))}g.isMDXComponent=!0}}]);