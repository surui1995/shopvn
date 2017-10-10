import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/Cart'
import Hi from '@/view/Hi'
import Address from '@/view/Address'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'GoodsList',
            component: GoodsList
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/address',
            component: Address
        },
        {
            path: '/hi',
            name: 'Hi',
            component: Hi
        },
        {
            path: '/orderConfirm',
            component: OrderConfirm
        },
        {
            path: '/orderSuccess',
            component: OrderSuccess
        },
    ]
})