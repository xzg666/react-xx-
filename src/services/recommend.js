import requset from "./request";

//封装recommend里面的拿到banner图的请求
export function getTopBanners(){
    return requset({
        url:'/banner'
    })
}

//热门推荐
export function getHotRecommend(limit){
    return requset({
        url:'/personalized',
        params:{
            limit
        }
    })
}

//新碟上架
export function getNewAlbum(limit){
    return requset({
        url:'/top/album',
        params:{
            limit
        }
    })
}

//榜单
export function getTopList(idx){
    return requset({
        url:'/top/list',
        params:{
            idx
        }
    })
}