import React, { memo } from 'react'
import  { HeaderWrapper } from'./style'
import { Link } from 'react-router-dom'

export default memo(function ThemeHeaderRCM(props) {

    const {title = "热门推荐" , keywords=[],moreLink=''} = props

    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <div className="title">{title}</div>
                <div className="keywords">
                    {
                        keywords.map((item)=>{
                            return (
                                <div key={item} className="keywords-item">
                                    <span>{item}</span>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                    <Link to={moreLink} className="more">更多</Link>
                    <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})
