import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import { getSizeImg } from '@/utils/format-utils'

export default memo(function HYTopRankings(props) {
    const { info } = props
    const { tracks = [] } = info
    return (
        <TopRankingWrapper>
            <div className="header" style={{ display: 'flex' }}>
                <div className="img">
                    <img src={getSizeImg(info.coverImgUrl, 80)} alt="" />
                </div>
                <div className="info">
                    <div className="title" >{info.name}</div>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="tracks-item">
                                <div className="rank">{index + 1}</div>
                                <div className="music">
                                    <div className="text-nowrap name">{item.name}</div>
                                    <div className="operate">
                                        <button className="btn sprite_02 play"></button>
                                        <button className="btn sprite_icon2 addto"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                <a href="" className="all">
                    查看全部 &gt;
                </a>
            </div>
        </TopRankingWrapper>
    )
})
