import Vue from 'vue'
import Router from 'vue-router'
import author from '@/components/wechat/author'
import RecycleHome from '@/components/RecycleHome'
import ConfirmOrder from '@/components/ConfirmOrder'
import OrderComplete from '@/components/OrderComplete'
import Feedback from '@/components/Feedback'
import ContactUs from '@/components/ContactUs'
import PensonCenter from '@/components/PensonCenter'
import MineOrders from '@/components/MineOrders'
import OrderDetail from '@/components/OrderDetail'
import BindCarter from '@/components/carter/BindCarter'
import CarterOrders from '@/components/carter/CarterOrders'
import CarterOrderDetail from '@/components/carter/CarterOrderDetail'
import wechatPay from '@/components/wechat/wechatPay'
import JudgeCater from '@/components/carter/JudgeCater'
import JudgeComplete from '@/components/carter/JudgeComplete'

import SubmitRecycleRecord from '@/components/recycleRecord/SubmitRecycleRecord'
import CheckRecycleRecord from '@/components/recycleRecord/CheckRecycleRecord'
import BindRecycleStation from '@/components/recycleRecord/BindRecycleStation'
import Station from '@/components/recycleRecord/Station'

import FristOrderEdit from '@/components/order/FristOrderEdit'
import UpdateOrderInfo from '@/components/order/UpdateOrderInfo'
import OrderProTime from '@/components/order/OrderProTime'
import OrderCancel from '@/components/order/OrderCancel'


import PointsCenter from '@/components/points/PointsCenter'
import PointsRecord from '@/components/points/PointsRecord'
import PointsOrders from '@/components/points/PointsOrders'
import PointsShop from '@/components/points/PointsShop'
import GoodsDetails from '@/components/points/GoodsDetails'


import AddAddressNew from '@/components/AddAddressNew'
import AddressList from '@/components/AddressList'

import WithdrawPay from '@/components/WithdrawPay/WithdrawPay'
import WithdrawPayIndex from '@/components/WithdrawPay/WithdrawPayIndex'
import WithdrawPage from '@/components/WithdrawPay/WithdrawPage'
import EditCard from '@/components/WithdrawPay/Index'

import CarterCenter from '@/components/carter/CarterCenter'

import BankCardManagement from '@/components/Me/BankCardManagement' //银行卡管理
import TransactionRecord from '@/components/Me/TransactionRecord' //交易记录

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/author',
            name: 'author',
            component: author
        },
        {
            path: '/BankCardManagement',
            name: 'BankCardManagement',
            component: BankCardManagement,
            meta: {
                title: '我的银行卡'
            },
        },
        {
            path: '/TransactionRecord',
            name: 'TransactionRecord',
            component: TransactionRecord,
            meta: {
                title: '交易记录'
            },
        },
        {
            path: '/RecycleHome',
            name: 'RecycleHome',
            meta: {
                title: '快速回收'
            },
            component: RecycleHome
        },
        {
            path: '/ConfirmOrder',
            name: 'ConfirmOrder',
            meta: {
                title: '确认订单'
            },
            component: ConfirmOrder
        },

        {
            path: '/OrderProTime',
            name: 'OrderProTime',
            meta: {
                title: '预约成功'
            },
            component: OrderProTime
        },
        {
            path: '/JudgeComplete',
            name: 'JudgeComplete',
            meta: {
                title: '评价成功'
            },
            component: JudgeComplete
        },
        {
            path: '/Feedback',
            name: 'Feedback',
            meta: {
                title: '意见反馈'
            },
            component: Feedback
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            meta: {
                title: '联系我们'
            },
            component: ContactUs
        },
        {
            path: '/PensonCenter',
            name: 'PensonCenter',
            meta: {
                title: '个人中心',
                keepAlive: true
            },
            component: PensonCenter
        },
        {
            path: '/MineOrders',
            name: 'MineOrders',
            meta: {
                title: '我的订单'
            },
            component: MineOrders
        },
        {
            path: '/OrderDetail/:id',
            name: 'OrderDetail',
            meta: {
                title: '订单详情'
            },
            component: OrderDetail
        },
        {
            path: '/BindCarter',
            name: 'BindCarter',
            meta: {
                title: '车夫绑定'
            },
            component: BindCarter
        },
        {
            path: '/CarterOrders',
            name: 'CarterOrders',
            meta: {
                title: '服务订单'
            },
            component: CarterOrders
        },
        {
            path: '/CarterOrderDetail/:id',
            name: 'CarterOrderDetail',
            meta: {
                title: '订单详情'
            },
            component: CarterOrderDetail
        },
        {
            path: '/payback',
            name: 'wechatPay',
            meta: {
                title: '微信支付'
            },
            component: wechatPay
        },
        {
            path: '/JudgeCater/:id',
            name: 'JudgeCater',
            meta: {
                title: '服务评价'
            },
            component: JudgeCater
        },
        {
            path: '/Station',
            name: 'Station',
            meta: {
                title: '回收站'
            },
            component: Station
        },
        {
            path: '/BindRecycleStation',
            name: 'BindRecycleStation',
            meta: {
                title: '登陆回收站'
            },
            component: BindRecycleStation
        },
        {
            path: '/SubmitRecycleRecord',
            name: 'SubmitRecycleRecord',
            meta: {
                title: '提交回收记录'
            },
            component: SubmitRecycleRecord
        },
        {
            path: '/CheckRecycleRecord',
            name: 'CheckRecycleRecord',
            meta: {
                title: '查询回收记录'
            },
            component: CheckRecycleRecord
        },

        // 积分部分
        {
            path: '/PointsCenter',
            name: 'PointsCenter',
            meta: {
                title: '积分个人中心'
            },
            component: PointsCenter
        },
        {
            path: '/PointsRecord',
            name: 'PointsRecord',
            meta: {
                title: '积分记录'
            },
            component: PointsRecord
        },
        {
            path: '/PointsOrders',
            name: 'PointsOrders',
            meta: {
                title: '兑换纪录'
            },
            component: PointsOrders
        },
        {
            path: '/PointsShop',
            name: 'PointsShop',
            meta: {
                title: '积分商城'
            },
            component: PointsShop
        },
        {
            path: '/GoodsDetails',
            name: 'GoodsDetails',
            meta: {
                title: '积分商品详情'
            },
            component: GoodsDetails
        },
        {
            path: '/AddAddressNew',
            name: 'AddAddressNew',
            meta: {
                title: '增加地址'
            },
            component: AddAddressNew
        },
        {
            path: '/AddressList',
            name: 'AddressList',
            meta: {
                title: '修改地址'
            },
            component: AddressList
        },

        // 提现部分
        {
            path: '/WithdrawPay',
            name: 'WithdrawPay',
            meta: {
                title: '申请提现'
            },
            component: WithdrawPay
        },
        {
            path: '/WithdrawPayIndex',
            name: 'WithdrawPayIndex',
            meta: {
                title: '申请提现'
            },
            component: WithdrawPayIndex
        },
        {
            path: '/WithdrawPage',
            name: 'WithdrawPage',
            meta: {
                title: '申请提现'
            },
            component: WithdrawPage
        },
        {
            path: '/EditCard',
            name: 'EditCard',
            meta: {
                title: '编辑银行卡'
            },
            component: EditCard
        },

        // 衍生一个车夫个人中心可以切换订单和提现
        {
            path: '/CarterCenter',
            name: 'CarterCenter',
            meta: {
                title: '车夫中心'
            },
            component: CarterCenter
        },


        //一键下单
        {
            path: '/FristOrderEdit',
            name: 'FristOrderEdit',
            meta: {
                title: '首次下单'
            },
            component: FristOrderEdit
        },
        {
            path: '/',
            name: 'UpdateOrderInfo',
            meta: {
                title: '确认下单'
            },
            component: UpdateOrderInfo
        },
        {
            path: '/OrderComplete',
            name: 'OrderComplete',
            meta: {
                title: '下单成功'
            },
            component: OrderComplete
        },
        {
            path: '/OrderCancel',
            name: 'OrderCancel',
            meta: {
                title: '取消成功'
            },
            component: OrderCancel
        },
    ]
})