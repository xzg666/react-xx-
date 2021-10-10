import React, { memo } from 'react'
import {ThemeCoverWrapper} from './style'
import {getSizeImg,numFormat} from '@/utils/format-utils'

export default memo(function HYThemeCover(props) {
    const {info} = props
    return (
        <ThemeCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImg(info.picUrl,140)} alt=""/>
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {numFormat(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>

                </div>
            </div>
            <div className="cover-bottom">
                <div className="text-nowrap">{info.name}</div>
                <div className="text-nowrap writer">by{info.copywriter}</div>
            </div>
        </ThemeCoverWrapper>
    )
})
