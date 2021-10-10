import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {headerLinks} from '@/common/local-data'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import {HeaderWarpper,ContentLeft,ContentRight} from './style'



export default memo(function HYAppHeader() {
    function showSelectItem(item,index){
        if(index<3){
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        }else{
            return(
                <a href={item.link}>{item.title}</a>
            )
        }
    }

    return (
        <HeaderWarpper>
            <div className="content wrap-v1">
                <ContentLeft>
                    <a href="/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-box">
                        {headerLinks.map((item,index)=>{
                            return(
                                <div key={item.title} className="select-item">
                                   {showSelectItem(item,index)} 
                                </div>
                            )
                        })}
                    </div>
                </ContentLeft>
                <ContentRight>
                    <Input className="search" placeholder="音乐/电台/视频/文字" prefix={<SearchOutlined />}/>
                    <div className="center">创作者中心</div>
          <div>登录</div>
                </ContentRight>
            </div>
            <div className="red-line"></div>
        </HeaderWarpper>
    )
})