import React, { useEffect, memo,useRef,useCallback,useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import { getTopBannerAction } from '../../store/actionCreators'
import {
    TopBannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'

export default memo(function HYTopBanner() {
    //组件需要和redux关联：获取数据进行操作
    const { topBanners } = useSelector(state => ({
        // topBanners: state.recommend.topBanners 
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)

    //拿到dispatch 的hook函数
    const dispatch = useDispatch()

    // 发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    //拿到轮播图对象，进行prev()和next()的调用
    const carouselRef = useRef();

    //设置拿到当前轮播图图片的index
    const [currentIndex, setCurrentIndex] = useState(0)

    //要进行useCallback，传给子组件的数据
    const bannerChange = useCallback(
        (from,to) => {
            // console.log(to)
            setCurrentIndex(to)
        },
        [],
    )

    const bgImg = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20")


    return (
        <TopBannerWrapper Bgimg={bgImg}>
            <div className="wrap-v2 banner">
                <BannerLeft>
                    <Carousel effect="fade"  autoplay ref={carouselRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item,index) => {
                                return(
                                    <div key={item.targetId} className="banner-item">
                                        <img src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight/>
                <BannerControl>
                    <button className="btn left" onClick={e=>carouselRef.current.prev()}></button>
                    <button className="btn right" onClick={e=>carouselRef.current.next()}></button>
                </BannerControl>
            </div>
        </TopBannerWrapper>
    )
})
