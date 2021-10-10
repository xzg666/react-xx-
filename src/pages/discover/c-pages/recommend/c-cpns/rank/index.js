import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'
import ThemeHeaderRCM from '@/components/them-header-rcm'
import {getTopListAction}  from '../../store/actionCreators'
import {RankWrapper} from './style'
import HYTopRankings from '@/components/top-ranking'

export default memo(function HYRank() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])
    const { topIncrse,topNew,topOrigin }= useSelector(state => ({
        topIncrse:state.getIn(['recommend','topIncrse']),
        topNew:state.getIn(['recommend','topNew']),
        topOrigin:state.getIn(['recommend','topOrigin'])
    }),shallowEqual)
    
    return (
        <RankWrapper>
            <ThemeHeaderRCM title={'榜单'}></ThemeHeaderRCM>
            <div className="content">
                <HYTopRankings info={topIncrse}></HYTopRankings>
                <HYTopRankings info={topNew}></HYTopRankings>
                <HYTopRankings info={topOrigin}></HYTopRankings>
            </div>
        </RankWrapper>
    )
})
