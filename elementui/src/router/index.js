import Vue from 'vue'
import VueRouter from 'vue-router'
import INOrders from "@/components/INOrders";
import Menus from "@/components/Menus";
import INsearch from "@/components/INsearch";
import OUTsearch from "@/components/OUTsearch";
import OUTOrders from "@/components/OUTOrders";
import UserInfo from "@/components/UserInfo";
import INAdd from "@/components/INAdd";
import OUTAdd from "@/components/OUTAdd";
import Stocks from "@/components/Stocks";
import Home from "@/views/Home";


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"首页",
    redirect: "/库存",
    component: Menus,
    icon:"el-icon-house",
    children:[
      {
        path:"/Dashboard",
        name:"Dashboard",
        component:Home,
      }
    ]
  },
  {
    path:"/库存管理",
    name:"库存管理",
    component:Menus,
    icon:"el-icon-shopping-cart-1",
    children:[
      {
        path:"/库存",
        name:"库存",
        component:Stocks,
      },
    ]
  },
  {
    path:"/入库操作",
    name:"入库操作",
    component:Menus,
    icon:"el-icon-shopping-cart-1",
    children:[
      {
        path:"/新建入库订单",
        name:"新建入库订单",
        component:INAdd,
      },{
        path:"/管理搜索入库订单",
        name:"搜索/管理入库订单",
        component:INOrders,
      }
    ]
  },
  {
    path:"/出库操作",
    name:"出库操作",
    component:Menus,
    icon:"el-icon-coin",
    children:[
      {
        path:"/新建出库订单",
        name:"新建出库订单",
        component:OUTAdd,
      },{
        path:"/管理搜索出库订单",
        name:"搜索/管理出库订单",
        component:OUTOrders,
      }
    ]
  },
  {
    path:"/SKU管理",
    name:"SKU管理",
    component:Menus,
    icon:"el-icon-user",
    children:[
      {
        path:"/基本信息",
        name:"基本信息",
        component:UserInfo,
      },
      {
        path:"/安全设置",
        name:"安全设置",
        component:UserInfo,
      },
      {
        path:"/消息提醒",
        name:"消息提醒",
        component:UserInfo,
      }
    ]
  },
  {
    path:"/员工账号",
    name:"员工账号",
    component:Menus,
    icon:"el-icon-user",
    children:[
      {
        path:"/基本信息",
        name:"基本信息",
        component:UserInfo,
      },
      {
        path:"/安全设置",
        name:"安全设置",
        component:UserInfo,
      },
      {
        path:"/消息提醒",
        name:"消息提醒",
        component:UserInfo,
      }
    ]
  },
  {
    path:"/员工管理",
    name: "员工管理",
    component: Menus,
    icon:"el-icon-lock",
    children: [
      {
        path: "/pageOne",
        name: "page1",
        component: INOrders
      },
      {
        path: "/pageTwo",
        name: "page2",
        component: INOrders
      }
    ]
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


