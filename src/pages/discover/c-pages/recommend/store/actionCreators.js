import {CHANGE_TOP_BANNERS,CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUM,CHANGE_TOP_INCRSE,CHANGE_TOP_NEW,CHANGE_TOP_ORIGIN} from './constants'

import {getTopBanners,getHotRecommend,getNewAlbum,getTopList} from '@/services/recommend'

//因为此项目使用了中间件，第一个action是发送请求拿到数据，第二个才是dispatch（action）发给reducer对数据进行处理
//第一个auction为中间件，进行网络操作
export const getTopBannerAction = ()=>{
    return dispatch =>{
        getTopBanners().then(res=>{
            // console.log('111',res.data.banners)
            dispatch(changeTopBannerAction(res.data.banners))
        })
    }
}
//第二个auction，
const changeTopBannerAction = (res) => ({
    type: CHANGE_TOP_BANNERS,
    topBanners: res
  });

//热门推荐
  export const getHotRecommendAction = ()=>{
    return dispatch =>{
        getHotRecommend(8).then(res=>{
            // console.log('热门推荐',res.data.result)
            dispatch(changeHotRecommendAction(res.data.result))
        })
    }
}
    const changeHotRecommendAction = (res) => ({
        type:CHANGE_HOT_RECOMMEND,
        hotRecommend:res

    })

    //新碟上架
    export const getNewAlbumAction = ()=>{
        return dispatch =>{
            getNewAlbum(10).then(res=>{
                console.log('新碟上架',res.data)
                dispatch(changeNewAlbumAction(res.data.albums))
            })
        }
    }
    const changeNewAlbumAction = (res) => ({
        type:CHANGE_NEW_ALBUM,
        newAlbum:res
    })

    //榜单数据
    export const getTopListAction = (idx)=>{
        return dispatch =>{
            getTopList(idx).then(res=>{
                console.log('榜单数据',res.data.playlist)
                switch(idx){
                    case 3:
                        return dispatch(changeTopIncrseAction(res.data.playlist));
                        // break;
                    case 0:
                        return dispatch(changeTopNewAction(res.data.playlist));
                        // break;
                    case 2:
                        return dispatch(changeTopOriginAction(res.data.playlist));
                        // break;
                    default:
                        console.log('other message')
                }
            })
        }
    }

    const changeTopIncrseAction = (res) => ({
        type:CHANGE_TOP_INCRSE,
        topIncrse:res
    })
    const changeTopNewAction = (res) => ({
        type:CHANGE_TOP_NEW,
        topNew:res
    })
    const changeTopOriginAction = (res) => ({
        type:CHANGE_TOP_ORIGIN,
        topOrigin:res
    })