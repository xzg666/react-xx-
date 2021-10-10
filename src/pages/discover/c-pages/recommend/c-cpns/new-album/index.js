import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import ThemeHeaderRCM from '@/components/them-header-rcm'
import HYAlbumItem from '@/components/new-album'
import { AlbumWrapper } from './style'
import { getNewAlbumAction } from '../../store/actionCreators'


export default memo(function HYNewAlbum() {
    //redux
    const { newAlbum } = useSelector(state => ({
        newAlbum: state.getIn(['recommend', 'newAlbum'])
    }))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewAlbumAction())

    }, [dispatch])
    //其他hook 
    const carouselRef = useRef()

    return (
        <AlbumWrapper>
            <ThemeHeaderRCM title={'新碟上架'}></ThemeHeaderRCM>
            <div className="content">
                <div className="arrow left sprite_02" onClick={e => carouselRef.current.prev()}></div>
                <div className="album">
                    <Carousel dots={false} ref={carouselRef}>
                        {
                            [0, 1].map((item) => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
                                                return (
                                                    <HYAlbumItem info={iten} key={iten.id}></HYAlbumItem>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow right sprite_02" onClick={e => carouselRef.current.next()}></div>
            </div>
        </AlbumWrapper>
    )
})
