import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import activePublic from '@/page/activePublic/index.vue'
import step1 from '@/page/activePublic/step1.vue'
import totalpages from '@/page/activeManage/totalpages.vue'
import activeManage from '@/page/activeManage/index.vue'
import step2 from '@/page/activePublic/step2.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/activePublic',
            component: activePublic,
            children: [{
                    path: '',
                    component: step1
                },
                {
                    path: 'step1',
                    component: step1
                },
                {
                    path: 'step2',
                    component: step2
                }
            ]
        },
        {
            path: '/activeManage',
            component: totalpages,
            children: [{
                path: '',
                component: activeManage
            }]
        }
    ]
})