import { Redirect } from "react-router-dom";

import HYDiscover from '../pages/discover'
import HYMine from '@/pages/mine'
import HYFriend from '@/pages/friend'
import HYRecommend from '@/pages/discover/c-pages/recommend'
import HYRank from '@/pages/discover/c-pages/rank'
import HYMusic from '@/pages/discover/c-pages/music'
import HYRadio from '@/pages/discover/c-pages/radio'
import HYSinger from '@/pages/discover/c-pages/singer'
import HYNew from '@/pages/discover/c-pages/new'



const routes = [
    {
        path:'/',
        exact:true,
        render: () => (
            <Redirect to="/discover"/>
          )
        
    },
    {
        path:'/discover',
        component:HYDiscover,
        routes:[
            {
                path:'/discover',
                exact:true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                  )
            },
            {
                path:'/discover/recommend',
                component:HYRecommend,
            },
            {
                path:'/discover/rank',
                component:HYRank,
            },
            {
                path:'/discover/music',
                component:HYMusic,
            },
            {
                path:'/discover/radio',
                component:HYRadio,
            },
            {
                path:'/discover/singer',
                component:HYSinger,
            },
            {
                path:'/discover/new',
                component:HYNew ,
            },
        ]
    },
    {
        path:'/mine',
        component:HYMine
    },
    {
        path:'/friend',
        component:HYFriend
    },
];

export default routes