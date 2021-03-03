import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from "@/components/Orders";
import Menus from "@/components/Menus";
import INsearch from "@/components/INsearch";
import OUTsearch from "@/components/OUTsearch";
import Login from "@/components/Login";
import UserInfo from "@/components/UserInfo";


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"首页",
    redirect:"/搜索入库订单",
    component:Menus,
    icon:"el-icon-house",
    children:[
      {
        path:"/基础设置",
        name:"库存",
        component:Orders,
      }
    ]
  },
  {
    path:"/基础设置",
    name:"基础设置",
    component:Menus,
    icon:"el-icon-house",
    children:[
      {
        path:"/基础设置",
        name:"库存",
        component:Orders,
      }
    ]
  },
  {
    path:"/入库操作",
    name:"入库操作",
    component:Menus,
    icon:"el-icon-shopping-cart-1",
    children:[
      {
        path:"/管理入库订单",
        name:"管理入库订单",
        component:Orders,
      },
      {
        path:"/搜索入库订单",
        name:"搜索入库订单",
        component:INsearch,
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
        path:"/库存余量",
        name:"库存余量",
        component:Orders,
      },
      {
        path: "/库存移动",
        name: "库存移动",
        component: INsearch,
      },
      {
        path:"/库存调整",
        name:"库存调整",
        component:INsearch,
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
        path:"/管理出库订单",
        name:"管理出库订单",
        component:Orders,
      },
      {
        path:"/搜索出库订单",
        name:"搜索出库订单",
        component:OUTsearch,
      }
    ]
  },
  {
    path:"/新建订单",
    name:"新建订单",
    component: Menus,
    icon:"el-icon-circle-plus-outline",
    children: [
      {
        path: "/新建入库订单",
        name: "新建入库订单",
        component: Orders,
      },
      {
        path: "/新建出库订单",
        name: "新建出库订单",
        component: Orders,
      }
    ]
  },
  {
    path:"/供应商管理",
    name:"供应商管理",
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
        component: Orders
      },
      {
        path: "/pageTwo",
        name: "page2",
        component: Orders
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


