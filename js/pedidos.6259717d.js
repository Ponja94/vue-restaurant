"use strict";(self["webpackChunkvue_restaurant"]=self["webpackChunkvue_restaurant"]||[]).push([[550],{5689:function(t,e,s){s.r(e),s.d(e,{default:function(){return z}});var a=s(3396);const n={class:"main-container"},i=(0,a._)("h1",null,"Gerenciar Pedidos:",-1);function o(t,e,s,o,l,u){const d=(0,a.up)("Dashboard");return(0,a.wg)(),(0,a.iD)("div",n,[i,(0,a.Wm)(d)])}var l=s(9242),u=s(7139);const d=t=>((0,a.dD)("data-v-507d06fa"),t=t(),(0,a.Cn)(),t),r={id:"burger-table"},c=d((()=>(0,a._)("div",null,[(0,a._)("div",{id:"burger-table-heading"},[(0,a._)("div",{class:"order-id"},"#:"),(0,a._)("div",null,"Cliente:"),(0,a._)("div",null,"Pão:"),(0,a._)("div",null,"Carne:"),(0,a._)("div",null,"Opcionais:"),(0,a._)("div",null,"Ações:")])],-1))),g={id:"burger-table-rows"},h={class:"order-number"},v=["onChange"],m=d((()=>(0,a._)("option",{value:""},"Selecione",-1))),p=["value","selected"],w=["onClick"];function _(t,e,s,n,i,o){const d=(0,a.up)("Message");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.wy)((0,a.Wm)(d,{msg:i.msg},null,8,["msg"]),[[l.F8,i.msg]]),c,(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.burgers,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"burger-table-row",key:t.id},[(0,a._)("div",h,(0,u.zw)(t.id),1),(0,a._)("div",null,(0,u.zw)(t.nome),1),(0,a._)("div",null,(0,u.zw)(t.pao),1),(0,a._)("div",null,(0,u.zw)(t.carne),1),(0,a._)("div",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.opcionais,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,u.zw)(t),1)))),128))])]),(0,a._)("div",null,[(0,a._)("select",{name:"status",class:"status",onChange:e=>o.updateBurger(e,t.id)},[m,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.status,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.tipo,selected:t.status==e.tipo},(0,u.zw)(e.tipo),9,p)))),128))],40,v),(0,a._)("button",{class:"delete-btn",onClick:e=>o.deleteBurger(t.id)},"Cancelar",8,w)])])))),128))])])}var b=s(121),f={name:"Dashboard",components:{Message:b.Z},data(){return{burgers:null,burger_id:null,status:[],msg:null}},methods:{async getPedidos(){const t=await fetch("http://localhost:3000/burgers"),e=await t.json();this.burgers=e,this.getStatus()},async getStatus(){const t=await fetch("http://localhost:3000/status"),e=await t.json();this.status=e},async deleteBurger(t){const e=await fetch(`http://localhost:3000/burgers/${t}`,{method:"DELETE"});e.json();this.msg="Pedido removido com sucesso!",setTimeout((()=>this.msg=""),3e3),this.getPedidos()},async updateBurger(t,e){const s=t.target.value,a=JSON.stringify({status:s}),n=await fetch(`http://localhost:3000/burgers/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:a}),i=await n.json();this.msg=`O pedido N° ${i.id} foi atualizado para ${i.status}`,setTimeout((()=>this.msg=""),3e3)}},mounted(){this.getPedidos()}},D=s(89);const C=(0,D.Z)(f,[["render",_],["__scopeId","data-v-507d06fa"]]);var y=C,k={name:"Pedidos",components:{Dashboard:y}};const P=(0,D.Z)(k,[["render",o]]);var z=P}}]);
//# sourceMappingURL=pedidos.6259717d.js.map