"use strict";var e=(e,{services:s})=>{const{ItemsService:a}=s;e.get("/",(async(e,s)=>{const c=new a("logs",{schema:e.schema});s.json(await c.readMany())}))};module.exports=e;
