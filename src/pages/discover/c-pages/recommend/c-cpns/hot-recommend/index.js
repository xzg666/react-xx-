import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ThemeHeaderRCM from '@/components/them-header-rcm'
import {getHotRecommendAction} from '../../store/actionCreators'
import HYThemeCover from '@/components/theme-cover'
import {HotRWrapper} from './style'

export default memo(function HYHotRecommend() {
    const {hotRecommend}= useSelector(state => ({
        hotRecommend: state.getIn(['recommend','hotRecommend'])
    }))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotRecommendAction())
       
    }, [ dispatch])
    return (
        <HotRWrapper>
            <ThemeHeaderRCM keywords={['华语','流行','摇滚','电子','民谣']}></ThemeHeaderRCM>
            <div className="content">
                {
                    hotRecommend.map((item)=>{
                        return(
                            <HYThemeCover info={item} key={item.id}></HYThemeCover>
                        )
                    })
                }
            </div>
            
        </HotRWrapper>
    )
})
