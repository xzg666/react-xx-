import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUM  } from './constants'
import { Map } from 'immutable'

//创建默认值
const defalultState = Map({
    topBanners: [],
    hotRecommend:[],
    newAlbum:[]
})

export default function reducer(state = defalultState, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            // return {...state,topBanners:action.topBanners}
            return state.set('topBanners', action.topBanners)
        case CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommend',action.hotRecommend)
        case CHANGE_NEW_ALBUM :
            return state.set('newAlbum',action.newAlbum)
        default:
            return state
    }
}