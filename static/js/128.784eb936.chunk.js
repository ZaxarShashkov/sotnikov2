"use strict";(self.webpackChunksotnikov=self.webpackChunksotnikov||[]).push([[128],{4128:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(3433),o=n(9439),s=n(2791),i=n(9434),a=(n(4091),function(){return(0,i.I0)()}),c=i.v9,l=n(7223),u=n(9140),d=n(7022),f=n(7577),m=n(5695),h=n(9410),x=n(3360),j=n(184),Z=function(e){var t=e.handleClick;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(h.Z,{className:"mt-3",style:{justifyContent:"center"},children:[(0,j.jsx)(x.Z,{variant:"outline-secondary",value:10,onClick:function(e){return t(e)},children:"10"}),(0,j.jsx)(x.Z,{variant:"outline-secondary",value:20,onClick:function(e){return t(e)},children:"20"}),(0,j.jsx)(x.Z,{variant:"outline-secondary",value:50,onClick:function(e){return t(e)},children:"50"}),(0,j.jsx)(x.Z,{variant:"outline-secondary",value:100,onClick:function(e){return t(e)},children:"100"}),(0,j.jsx)(x.Z,{variant:"outline-secondary",value:100,onClick:function(e){return t(e)},children:"All"})]})})},p=n(6144),v=n(7418),y=function(e){var t=e.pages,n=e.limit,r=e.handleClickLimit,o=function(){var e=Array.from({length:t},(function(e,t){return(0,j.jsx)(x.Z,{variant:"outline-secondary","data-id":t*n,onClick:function(e){return r(e)},children:t+1},t)}));return(0,j.jsx)(j.Fragment,{children:e})}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h3",{style:{textAlign:"center",marginTop:"1rem"},children:"Pages"}),(0,j.jsx)(v.Z,{style:{justifyContent:"center"},className:"mt-3","aria-label":"Toolbar with Button groups",children:(0,j.jsx)(p.Z,{className:"me-2","aria-label":"First group",children:o})})]})},g=n(3795),C=n(7333),b=function(e){var t=e.children,n=e.eventKey,r=e.id,i=e.setComment,a=(0,s.useState)("secondary"),c=(0,o.Z)(a,2),l=c[0],u=c[1],d=(0,C.k)(n,(function(e){u("secondary"===l?"secondary-outlined":"secondary");var t=e.currentTarget.dataset.id;i(t)}));return(0,j.jsx)(x.Z,{type:"button",variant:l,onClick:d,"data-id":r,children:t})},k=n(5316),T=function(e){var t=e.onRemove,n=e.id,r=(0,s.useState)(!1),i=(0,o.Z)(r,2),a=i[0],c=i[1],l=function(){return c(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{variant:"secondary",onClick:function(){return c(!0)},children:"Remove"}),(0,j.jsxs)(k.Z,{show:a,onHide:l,children:[(0,j.jsx)(k.Z.Header,{closeButton:!0,children:(0,j.jsx)(k.Z.Title,{children:"Are you sure you want to delete?"})}),(0,j.jsxs)(k.Z.Footer,{children:[(0,j.jsx)(x.Z,{variant:"secondary",onClick:l,children:"Close"}),(0,j.jsx)(x.Z,{variant:"primary","data-id":n,onClick:function(e){c(!1),t(e)},children:"Remove"})]})]})]})},S=n(241),I=n(9806),N=n(1632),B=function(e){var t=e.postId,n=e.elected,r=e.setElected,o=e.setSelected,i=e.onElected,a=e.selected,c=(0,s.useRef)([]);return(0,s.useEffect)((function(){r(localStorage.getItem(t))}),[]),(0,s.useEffect)((function(){o((function(e){return!e}))}),[n]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(x.Z,{ref:c,variant:"secondary","data-elected":a,onClick:function(e){i(e)},"data-id":t,children:n?(0,j.jsx)(I.G,{icon:N.Tab,style:{color:"#ffec70"}}):(0,j.jsx)(I.G,{icon:N.Tab,style:{color:"#ffffff"}})})})},E=function(e){var t=e.onVisible,n=e.removeGroup,r=e.onElected;return(0,j.jsx)("div",{className:"modal show",style:{display:"block",position:"initial"},children:(0,j.jsxs)(k.Z.Dialog,{style:{position:"absolute",width:"25rem",height:"15rem",top:"150px",left:"15%"},children:[(0,j.jsx)(k.Z.Header,{closeButton:!0,onClick:function(){return t()},children:(0,j.jsx)(k.Z.Title,{children:"Are you sure ?"})}),(0,j.jsxs)(k.Z.Footer,{children:[(0,j.jsx)(x.Z,{variant:"secondary",onClick:function(){return t()},children:"Close"}),(0,j.jsx)(x.Z,{variant:"primary",onClick:function(e){n(),r(e)},children:"Accept"})]})]})})},L=function(e){var t=e.postId,n=e.postTitle,i=e.postBody,d=e.postComments,f=e.contentEditable,h=e.setContentEditable,Z=e.setPostsLocal,p=e.postsLocal,v=e.setRemove,y=e.removeGroup,g=e.id,C=e.setId,k=(0,s.useState)(!1),I=(0,o.Z)(k,2),N=I[0],L=I[1],w=(0,s.useState)(!1),P=(0,o.Z)(w,2),R=P[0],F=P[1],U=(0,s.useState)(!1),A=(0,o.Z)(U,2),D=A[0],G=A[1],H=(0,s.useState)(!1),K=(0,o.Z)(H,2),V=K[0],M=K[1],q=(0,s.useState)(0),z=(0,o.Z)(q,2),J=z[0],O=z[1],Q=c((function(e){return e.commentsReducer})),W=(Q.comments,Q.isLoadingComments,a());(0,s.useEffect)((function(){W((0,l.tH)(J))}),[J]);var X=function(){F((function(e){return!e}))},Y=function(e){G((function(e){return!e}));var t=e.currentTarget.dataset.id;e.currentTarget.dataset.elected=V,null!==localStorage.getItem(t)?localStorage.removeItem(t):localStorage.setItem(t,V),F(!1),L(!1)};return(0,j.jsxs)(u.Z,{className:"mt-3",style:D?{background:"grey"}:{background:"transparent"},children:[(0,j.jsxs)(u.Z.Body,{children:[(0,j.jsx)(u.Z.Title,{children:(0,j.jsxs)("span",{contentEditable:f,children:[t,". ",n]})}),(0,j.jsx)(u.Z.Text,{children:(0,j.jsxs)("span",{contentEditable:f,children:["Text: ",i]})}),(0,j.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,j.jsx)(b,{eventKey:t,id:t,setComment:O,children:"Comments"}),(0,j.jsx)(x.Z,{variant:"secondary",onClick:function(){h((function(e){return!e}))},children:"Edit"}),(0,j.jsx)(T,{id:t,onRemove:function(e){Z(p.filter((function(t){return t.id!==+e.currentTarget.dataset.id})))}}),(0,j.jsx)(B,{postId:t,elected:D,setElected:G,setSelected:M,selected:V,onElected:Y}),(0,j.jsx)(S.Z.Check,{"data-id":t,"data-elected":V,"aria-label":"option 1",className:"mt-2",onClick:function(e){L((function(e){return!e})),C([].concat((0,r.Z)(g),[e.currentTarget.dataset.id]))}}),N?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{variant:"secondary",setRemove:v,"data-id":t,onClick:function(){F((function(e){return!e})),v(!0)},children:"Remove"}),(0,j.jsx)(x.Z,{variant:"secondary","data-id":t,onClick:X,children:"Select"})]}):null,R?(0,j.jsx)(E,{removeGroup:y,onVisible:X,onElected:Y}):null]})]}),d.map((function(e){return(0,j.jsx)(m.Z.Collapse,{eventKey:t,children:(0,j.jsxs)(u.Z.Body,{children:["Name: ",e.name,(0,j.jsx)("br",{}),"Email: ",e.email,(0,j.jsx)("br",{}),"Text: ",e.body]})},e.id)}))]},t)},w=n(8789),P=function(e){var t=e.sortByIdDown,n=e.sortByIdUp,r=e.sortByUserNameDown,o=e.sortByUserNameUp;return(0,j.jsxs)(w.Z,{className:"mt-3",children:[(0,j.jsx)(w.Z.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Post sorting"}),(0,j.jsxs)(w.Z.Menu,{children:[(0,j.jsx)(w.Z.Item,{onClick:function(){return t()},href:"#",children:"By id down"}),(0,j.jsx)(w.Z.Item,{onClick:function(){return n()},href:"#",children:"By id up"}),(0,j.jsx)(w.Z.Item,{onClick:function(){return r()},href:"#",children:"By user name down"}),(0,j.jsx)(w.Z.Item,{onClick:function(){return o()},href:"#",children:"By user name up"})]})]})},R=n(1413),F=function(e){var t=e.usersLocal,n=e.setUsersLocal,i=e.postsLocal,a=e.setPostsLocal,c=(0,s.useState)(!1),l=(0,o.Z)(c,2),u=l[0],d=l[1],f=(0,s.useState)(""),m=(0,o.Z)(f,2),h=m[0],Z=m[1],p=(0,s.useState)({postTitle:"",postText:""}),v=(0,o.Z)(p,2),y=v[0],g=v[1],C=function(){return d(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{variant:"secondary",onClick:function(){return d(!0)},className:"mt-3",children:"Create new post"}),(0,j.jsxs)(k.Z,{show:u,onHide:C,animation:!1,children:[(0,j.jsx)(k.Z.Header,{closeButton:!0}),(0,j.jsxs)(k.Z.Body,{children:[(0,j.jsxs)(S.Z.Select,{"aria-label":"Default select example",onChange:function(e){return function(e){Z(e.currentTarget.value)}(e)},children:[(0,j.jsx)("option",{children:"Select user"}),t.map((function(e){return(0,j.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),(0,j.jsx)(S.Z.Control,{placeholder:"Post Title","aria-label":"Post Title","aria-describedby":"basic-addon1",defaultValue:y.postTitle,onChange:function(e){return function(e){g((0,R.Z)((0,R.Z)({},y),{},{postTitle:e.currentTarget.value}))}(e)}}),(0,j.jsx)(S.Z.Control,{placeholder:"Post text","aria-label":"Post text","aria-describedby":"basic-addon1",defaultValue:y.postText,onChange:function(e){return function(e){g((0,R.Z)((0,R.Z)({},y),{},{postText:e.currentTarget.value}))}(e)}})]}),(0,j.jsxs)(k.Z.Footer,{children:[(0,j.jsx)(x.Z,{variant:"secondary",onClick:C,children:"Close"}),(0,j.jsx)(x.Z,{variant:"primary",onClick:function(){var e=y.postTitle,o=y.postText;d(!1),n([].concat((0,r.Z)(t),[{id:t.length+1,name:h,email:"".concat(h,"@gmail.com")}])),a([].concat((0,r.Z)(i),[{userId:t.length+1,id:i.length+1,title:e,body:o}])),Z(null),g({postTitle:null,postText:null})},children:"Save Changes"})]})]})]})},U=function(){var e=(0,s.useState)(100),t=(0,o.Z)(e,2),n=t[0],i=t[1],h=(0,s.useState)([]),x=(0,o.Z)(h,2),p=x[0],v=x[1],C=(0,s.useState)([]),b=(0,o.Z)(C,2),k=b[0],T=b[1],S=(0,s.useState)(!1),I=(0,o.Z)(S,2),N=I[0],B=I[1],E=(0,s.useState)(1),w=(0,o.Z)(E,2),R=w[0],U=w[1],A=(0,s.useState)(0),D=(0,o.Z)(A,2),G=D[0],H=D[1],K=(0,s.useState)(null),V=(0,o.Z)(K,2),M=V[0],q=V[1],z=(0,s.useState)([]),J=(0,o.Z)(z,2),O=J[0],Q=J[1],W=(0,s.useState)(!1),X=(0,o.Z)(W,2),Y=X[0],$=X[1],_=c((function(e){return e.commentsReducer})),ee=_.comments,te=_.isLoadingComments,ne=c((function(e){return e.postReducer})),re=ne.posts,oe=ne.isLoading,se=(ne.error,c((function(e){return e.userReducer})).users),ie=a();(0,s.useEffect)((function(){ie((0,l.T6)()),ie((0,l.uh)()),v(re),i(Number(localStorage.getItem("limit"))),q(Number(localStorage.getItem("filter")))}),[]),(0,s.useEffect)((function(){oe||T(se)}),[oe]);(0,s.useEffect)((function(){var e=re.length/Number(n);U(e)}),[re,n]);var ae=function(){var e=p.filter((function(e){return O.every((function(t){return e.id!==+t}))}));return Y?($(!1),v(e)):null};return(0,j.jsxs)(d.Z,{children:[(0,j.jsx)("h2",{style:{textAlign:"center"},children:"Number of posts"}),(0,j.jsx)(Z,{handleClick:function(e){var t=e.target.value;i(t),q(t),localStorage.setItem("limit",t),localStorage.setItem("filter",t)}}),(0,j.jsx)(y,{postsLocal:p,limit:n,pages:R,setPages:U,countPosts:G,setCountPosts:H,setLimit:i,handleClickLimit:function(e){var t=e.currentTarget.dataset.id;H(e.currentTarget.dataset.id),q(+n*Number((+t+ +n)/n))}}),(0,j.jsx)(P,{className:"mt-3",sortByIdDown:function(){T((0,r.Z)(k).sort((function(e,t){return t.id-e.id}))),v((0,r.Z)(p).sort((function(e,t){return t.id-e.id})))},sortByIdUp:function(){T((0,r.Z)(k).sort((function(e,t){return e.id-t.id}))),v((0,r.Z)(p).sort((function(e,t){return e.id-t.id})))},postsLocal:p,sortByUserNameDown:function(){T((0,r.Z)(k).sort((function(e,t){return t.name.localeCompare(e.name)})))},sortByUserNameUp:function(){T((0,r.Z)(k).sort((function(e,t){return e.name.localeCompare(t.name)})))}}),(0,j.jsx)(F,{usersLocal:k,setUsersLocal:T,postsLocal:p,setPostsLocal:v}),(0,j.jsxs)(f.Z,{children:[te||oe?(0,j.jsx)(g.Z,{}):null,(0,j.jsx)(j.Fragment,{children:p?k.slice(Number(G)/10,Number(M)/10).map((function(e){var t=p.slice(Number(G),Number(M)).filter((function(t){return t.userId===e.id}));return(0,j.jsxs)("div",{children:[(0,j.jsx)(u.Z.Title,{className:"mb-3 mt-3",children:(0,j.jsxs)("span",{contentEditable:N,children:["Username: ",e.name]})}),t.map((function(e){var n=ee.filter((function(t){return t.postId===e.id}));return(0,j.jsx)(m.Z,{defaultActiveKey:"0",children:(0,j.jsx)(L,{postId:e.id,userPosts:t,postTitle:e.title,postComments:n,postBody:e.body,setContentEditable:B,contentEditable:N,postsLocal:p,setPostsLocal:v,id:O,setId:Q,removeGroup:ae,setRemove:$})},e.id)}))]},e.id)})):null})]})]})}}}]);
//# sourceMappingURL=128.784eb936.chunk.js.map