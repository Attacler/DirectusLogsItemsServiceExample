"use strict";var e=({filter:e,action:s},{services:t})=>{const{ItemsService:c}=t;s("items.create",(async(e,{schema:s})=>{if("logs"==e.collection)return;const t=new c("logs",{schema:s});await t.createOne({log:e})}))};module.exports=e;