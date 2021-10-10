import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUM,CHANGE_TOP_INCRSE,CHANGE_TOP_NEW,CHANGE_TOP_ORIGIN } from './constants'
import { Map } from 'immutable'

//创建默认值
const defalultState = Map({
    topBanners: [],
    hotRecommend:[],
    newAlbum:[],
    topIncrse:{},
    topNew:{},
    topOrigin:{}
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
        case CHANGE_TOP_INCRSE:
            return state.set('topIncrse',action.topIncrse)
        case CHANGE_TOP_NEW:
            return state.set('topNew',action.topNew)
        case CHANGE_TOP_ORIGIN:
            return state.set('topOrigin',action.topOrigin)
        default:
            return state
    }
}