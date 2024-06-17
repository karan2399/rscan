"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7046],{1307:(E,v,r)=>{r.d(v,{S:()=>e});var o=r(177),S=r(4341),c=r(5150),U=r(3953);let e=(()=>{var t;class l{}return(t=l).\u0275fac=function(p){return new(p||t)},t.\u0275mod=U.$C({type:t}),t.\u0275inj=U.G2t({imports:[o.MD,S.YN,c.bv]}),l})()},2754:(E,v,r)=>{r.d(v,{w:()=>S});var o=r(3953);let S=(()=>{var c;class U{constructor(){this.items=[],this.users=[],this.loadUsers()}addUser(t){this.users.includes(t)||this.users.push(t)}removeUser(t){this.users=this.users.filter(l=>l!==t)}setUsers(t){this.users=t}loadUsers(){const t=localStorage.getItem("users");this.users=t?JSON.parse(t):[]}addItem(t,l,u){const p=this.items.findIndex(M=>this.areArraysEqual(M.users,u));-1!==p?this.items[p].itemPrice+=l:this.items.push({itemName:t,itemPrice:l,users:u})}areArraysEqual(t,l){if(t.length!==l.length)return!1;for(let u=0;u<t.length;u++)if(t[u]!==l[u])return!1;return!0}getItems(){return this.items}getUsers(){return this.users}getUserGroupOwingSummary(){const t={};return this.items.forEach(l=>{const{itemPrice:p,users:M}=l,F=p/M.length,m=M.join(", ");t[m]||(t[m]={totalOwed:0,userDetails:[]},M.forEach(d=>{t[m].userDetails.push({userName:d,amountOwed:0})})),t[m].totalOwed+=p,M.forEach(d=>{const g=t[m].userDetails.find(i=>i.userName===d);g&&(g.amountOwed+=F)})}),Object.keys(t).map(l=>({userGroup:l.split(", "),totalOwed:t[l].totalOwed,userDetails:t[l].userDetails}))}getTotalOwedByEachUser(){const t={};return this.users.forEach(l=>{"All"!==l&&(t[l]=0)}),this.items.forEach(l=>{const{itemPrice:u,users:p}=l,M=u/p.length;p.forEach(F=>{"All"!==F&&(t[F]+=M)})}),Object.keys(t).map(l=>({userName:l,totalOwed:t[l]}))}getTotalBillAmount(){return this.items.reduce((t,l)=>t+l.itemPrice,0)}getItemsSharedPerGroup(){const t={};return this.items.forEach(l=>{const{itemName:u,itemPrice:p,users:M}=l,F=M.join(", ");t[F]||(t[F]=[]),t[F].push({itemName:u,itemPrice:p})}),Object.keys(t).map(l=>({userGroup:l.split(", "),items:t[l]}))}deleteItem(t){const l=this.items.findIndex(u=>u.itemName===t.itemName&&u.itemPrice===t.itemPrice&&this.areArraysEqual(u.users,t.users));-1!==l&&this.items.splice(l,1)}}return(c=U).\u0275fac=function(t){return new(t||c)},c.\u0275prov=o.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),U})()},6:(E,v,r)=>{r.r(v),r.d(v,{SplitwiseModule:()=>i});var o=r(5150),S=r(177),c=r(4341),U=r(70),e=r(3953),t=r(2754);function l(n,a){if(1&n){const s=e.RV6();e.j41(0,"ion-row")(1,"ion-col",5),e.EFF(2),e.k0s(),e.j41(3,"ion-col",6),e.EFF(4),e.nI1(5,"currency"),e.k0s(),e.j41(6,"ion-col",7),e.EFF(7),e.k0s(),e.j41(8,"ion-col",6)(9,"ion-icon",15),e.bIt("click",function(){const f=e.eBV(s).$implicit,I=e.XpG();return e.Njj(I.deleteItem(f))}),e.k0s()()()}if(2&n){const s=a.$implicit;e.R7$(2),e.JRh(s.itemName),e.R7$(2),e.JRh(e.bMT(5,3,s.itemPrice)),e.R7$(3),e.JRh(s.users.join(", "))}}function u(n,a){if(1&n&&(e.j41(0,"ion-select-option",16),e.EFF(1),e.k0s()),2&n){const s=a.$implicit;e.Y8G("value",s),e.R7$(),e.SpI("",s," ")}}function p(n,a){if(1&n&&(e.j41(0,"ion-list")(1,"ion-item")(2,"ion-label")(3,"h2"),e.EFF(4),e.k0s(),e.j41(5,"p")(6,"strong"),e.EFF(7,"Total Owed: "),e.k0s(),e.EFF(8),e.nI1(9,"currency"),e.k0s()()()()),2&n){const s=a.$implicit;e.R7$(4),e.JRh(s.userName),e.R7$(4),e.JRh(e.bMT(9,2,s.totalOwed))}}function M(n,a){if(1&n&&(e.j41(0,"ion-list")(1,"ion-item")(2,"ion-label")(3,"div")(4,"strong"),e.EFF(5,"Item: "),e.k0s(),e.EFF(6),e.k0s(),e.j41(7,"div")(8,"strong"),e.EFF(9,"Price: "),e.k0s(),e.EFF(10),e.nI1(11,"currency"),e.k0s()()()()),2&n){const s=a.$implicit;e.R7$(6),e.SpI("",s.itemName," "),e.R7$(4),e.SpI("",e.bMT(11,2,s.itemPrice)," ")}}function F(n,a){if(1&n&&(e.j41(0,"ion-list")(1,"ion-item")(2,"ion-label")(3,"h2"),e.EFF(4),e.k0s()()(),e.DNE(5,M,12,4,"ion-list",8),e.k0s()),2&n){const s=a.$implicit;e.R7$(4),e.SpI("User Group: ",s.userGroup.join(", "),""),e.R7$(),e.Y8G("ngForOf",s.items)}}const d=[{path:"",component:(()=>{var n;class a{constructor(h){this.splitService=h,this.itemName="",this.itemPrice=0,this.selectedUsers=[],this.totalBillAmount=0,this.showSummary=!1,this.userGroupOwingSummary=[],this.sharedItemsByGroup=[],this.totalOwedByUsers=[]}ngOnInit(){}addItem(){this.selectedUsers.includes("All")&&(this.selectedUsers=this.splitService.getUsers().filter(h=>"All"!==h)),this.itemName&&this.itemPrice&&this.selectedUsers.length>0&&(this.splitService.addItem(this.itemName,this.itemPrice,this.selectedUsers),this.itemName="",this.itemPrice=0,this.selectedUsers=[]),this.showSummaryToUsers()}showSummaryToUsers(){this.showSummary=!0,this.userGroupOwingSummary=this.splitService.getUserGroupOwingSummary(),this.totalOwedByUsers=this.splitService.getTotalOwedByEachUser(),this.totalBillAmount=this.splitService.getTotalBillAmount(),this.sharedItemsByGroup=this.splitService.getItemsSharedPerGroup()}deleteItem(h){this.splitService.deleteItem(h),this.showSummaryToUsers()}}return(n=a).\u0275fac=function(h){return new(h||n)(e.rXU(t.w))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-splitwise"]],decls:57,vars:12,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"header"],["size","3"],["size","2"],["size","5"],[4,"ngFor","ngForOf"],["position","floating"],["type","text",3,"ngModelChange","ngModel"],["type","number",3,"ngModelChange","ngModel"],["multiple","true",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["expand","block",3,"click"],["name","close-circle",2,"cursor","pointer","color","red",3,"click"],[3,"value"]],template:function(h,f){1&h&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Manage "),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"Manage"),e.k0s()()(),e.j41(9,"ion-grid")(10,"ion-row",4)(11,"ion-col",5)(12,"strong"),e.EFF(13,"Item Name"),e.k0s()(),e.j41(14,"ion-col",6)(15,"strong"),e.EFF(16,"Price"),e.k0s()(),e.j41(17,"ion-col",7)(18,"strong"),e.EFF(19,"Split Among"),e.k0s()(),e.j41(20,"ion-col",6)(21,"strong"),e.EFF(22,"Action"),e.k0s()()(),e.DNE(23,l,10,5,"ion-row",8),e.j41(24,"ion-row")(25,"ion-col")(26,"ion-item")(27,"ion-label",9),e.EFF(28,"Item Name"),e.k0s(),e.j41(29,"ion-input",10),e.mxI("ngModelChange",function(C){return e.DH7(f.itemName,C)||(f.itemName=C),C}),e.k0s()(),e.j41(30,"ion-item")(31,"ion-label",9),e.EFF(32,"Item Price"),e.k0s(),e.j41(33,"ion-input",11),e.mxI("ngModelChange",function(C){return e.DH7(f.itemPrice,C)||(f.itemPrice=C),C}),e.k0s()(),e.j41(34,"ion-item")(35,"ion-label"),e.EFF(36,"Split among:"),e.k0s(),e.j41(37,"ion-select",12),e.mxI("ngModelChange",function(C){return e.DH7(f.selectedUsers,C)||(f.selectedUsers=C),C}),e.DNE(38,u,2,2,"ion-select-option",13),e.k0s()(),e.j41(39,"ion-button",14),e.bIt("click",function(){return f.addItem()}),e.EFF(40,"Add Item"),e.k0s()()(),e.j41(41,"ion-row")(42,"ion-col"),e.DNE(43,p,10,4,"ion-list",8),e.k0s()(),e.j41(44,"ion-row")(45,"ion-col")(46,"ion-item")(47,"ion-label")(48,"h1"),e.EFF(49,"Total Bill Amount"),e.k0s(),e.j41(50,"h1")(51,"strong"),e.EFF(52),e.nI1(53,"currency"),e.k0s()()()()()(),e.j41(54,"ion-row")(55,"ion-col"),e.DNE(56,F,6,2,"ion-list",8),e.k0s()()()()),2&h&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(19),e.Y8G("ngForOf",f.splitService.getItems()),e.R7$(6),e.R50("ngModel",f.itemName),e.R7$(4),e.R50("ngModel",f.itemPrice),e.R7$(4),e.R50("ngModel",f.selectedUsers),e.R7$(),e.Y8G("ngForOf",f.splitService.getUsers()),e.R7$(5),e.Y8G("ngForOf",f.totalOwedByUsers),e.R7$(9),e.JRh(e.bMT(53,10,f.totalBillAmount)),e.R7$(4),e.Y8G("ngForOf",f.sharedItemsByGroup))},dependencies:[o.Jm,o.hU,o.W9,o.lO,o.eU,o.iq,o.$w,o.uz,o.he,o.nf,o.ln,o.Nm,o.Ip,o.BC,o.ai,o.su,o.Je,o.Gw,S.Sq,c.BC,c.vS,S.oe]}),a})()}];let g=(()=>{var n;class a{}return(n=a).\u0275fac=function(h){return new(h||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[U.iI.forChild(d),U.iI]}),a})(),i=(()=>{var n;class a{}return(n=a).\u0275fac=function(h){return new(h||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[o.bv,S.MD,c.YN,U.iI,g]}),a})()},7046:(E,v,r)=>{r.r(v),r.d(v,{Tab3PageModule:()=>g});var o=r(5150),S=r(177),c=r(4341),U=r(1307),e=r(70),t=r(3953);let l=(()=>{var i;class n{constructor(){}ngOnInit(){}}return(i=n).\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.VBU({type:i,selectors:[["app-inner-menu"]],decls:9,vars:0,consts:[["side","end","menuId","innerMenu","contentId","tab3-content"],["routerLink","/tabs/tab3/users"],["routerLink","/tabs/tab3/split"]],template:function(s,h){1&s&&(t.j41(0,"ion-menu",0)(1,"ion-content")(2,"ion-list")(3,"ion-item",1)(4,"ion-label"),t.EFF(5,"Users"),t.k0s()(),t.j41(6,"ion-item",2)(7,"ion-label"),t.EFF(8,"Splitwise"),t.k0s()()()()())},dependencies:[o.W9,o.uz,o.he,o.nf,o.oS,o.N7,e.Wk]}),n})();const p=[{path:"",component:(()=>{var i;class n{}return(i=n).\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.VBU({type:i,selectors:[["app-tab3"]],decls:9,vars:0,consts:[["slot","end"],["menu","innerMenu"],["id","tab3-content"]],template:function(s,h){1&s&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-menu-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Manage"),t.k0s()()(),t.j41(6,"ion-content",2),t.nrm(7,"app-inner-menu")(8,"ion-router-outlet"),t.k0s())},dependencies:[o.QW,o.W9,o.eU,o.MC,o.BC,o.ai,o.Rg,l]}),n})(),children:[{path:"users",loadChildren:()=>Promise.resolve().then(r.bind(r,5122)).then(i=>i.UserManagementModule)},{path:"split",loadChildren:()=>Promise.resolve().then(r.bind(r,6)).then(i=>i.SplitwiseModule)},{path:"",redirectTo:"users",pathMatch:"full"}]}];let M=(()=>{var i;class n{}return(i=n).\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[e.iI.forChild(p),e.iI]}),n})();var F=r(5122);let m=(()=>{var i;class n{}return(i=n).\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[o.bv,S.MD,e.iI]}),n})();var d=r(6);let g=(()=>{var i;class n{}return(i=n).\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[o.bv,S.MD,c.YN,U.S,M,F.UserManagementModule,m,d.SplitwiseModule,e.iI]}),n})()},5122:(E,v,r)=>{r.r(v),r.d(v,{UserManagementModule:()=>F});var o=r(5150),S=r(177),c=r(4341),U=r(70),e=r(3953),t=r(2754);function l(m,d){if(1&m){const g=e.RV6();e.j41(0,"ion-item")(1,"ion-label"),e.EFF(2),e.k0s(),e.j41(3,"ion-icon",5),e.bIt("click",function(){const n=e.eBV(g).$implicit,a=e.XpG();return e.Njj(a.removeUser(n))}),e.k0s()()}if(2&m){const g=d.$implicit;e.R7$(2),e.JRh(g)}}const p=[{path:"",component:(()=>{var m;class d{constructor(i){this.splitService=i,this.newUser="",this.loadUsers()}addUser(){this.newUser.trim()&&(this.splitService.addUser(this.newUser.trim()),this.newUser="")}doneAddingUsers(){this.saveUsers()}removeUser(i){this.splitService.removeUser(i)}saveUsers(){localStorage.setItem("users",JSON.stringify(this.splitService.getUsers()))}loadUsers(){const i=localStorage.getItem("users");i&&this.splitService.setUsers(JSON.parse(i))}}return(m=d).\u0275fac=function(i){return new(i||m)(e.rXU(t.w))},m.\u0275cmp=e.VBU({type:m,selectors:[["app-user-management"]],decls:17,vars:3,consts:[[3,"fullscreen"],["position","floating"],[3,"ngModelChange","ngModel"],[3,"click"],[4,"ngFor","ngForOf"],["name","close-circle","slot","end",2,"cursor","pointer","color","red",3,"click"]],template:function(i,n){1&i&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," User Management "),e.k0s()()(),e.j41(4,"ion-content",0)(5,"ion-grid")(6,"ion-item")(7,"ion-label",1),e.EFF(8,"Add New User"),e.k0s(),e.j41(9,"ion-input",2),e.mxI("ngModelChange",function(s){return e.DH7(n.newUser,s)||(n.newUser=s),s}),e.k0s(),e.j41(10,"ion-button",3),e.bIt("click",function(){return n.addUser()}),e.EFF(11,"Add"),e.k0s()(),e.j41(12,"ion-list"),e.DNE(13,l,4,1,"ion-item",4),e.k0s(),e.j41(14,"ion-item")(15,"ion-button",3),e.bIt("click",function(){return n.doneAddingUsers()}),e.EFF(16,"Done"),e.k0s()()()()),2&i&&(e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(5),e.R50("ngModel",n.newUser),e.R7$(4),e.Y8G("ngForOf",n.splitService.getUsers()))},dependencies:[o.Jm,o.W9,o.lO,o.eU,o.iq,o.$w,o.uz,o.he,o.nf,o.BC,o.ai,o.Gw,S.Sq,c.BC,c.vS]}),d})()}];let M=(()=>{var m;class d{}return(m=d).\u0275fac=function(i){return new(i||m)},m.\u0275mod=e.$C({type:m}),m.\u0275inj=e.G2t({imports:[U.iI.forChild(p),U.iI]}),d})(),F=(()=>{var m;class d{}return(m=d).\u0275fac=function(i){return new(i||m)},m.\u0275mod=e.$C({type:m}),m.\u0275inj=e.G2t({imports:[o.bv,S.MD,c.YN,U.iI,M]}),d})()}}]);