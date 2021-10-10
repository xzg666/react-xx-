import React, { memo } from 'react'
import { AlbumWrapper } from './style'
import { getSizeImg } from '@/utils/format-utils'

export default memo(function HYAlbumItem(props) {
    const { info } = props
    return (
        <AlbumWrapper >
            <div className="img">
                <img src={getSizeImg(info.picUrl, 100)} alt="" />
                {/* 下面这样写利于seo */}
                <a className="cover sprite_covor" href="/">{info.name}</a>
            </div>
            <div className="prod">
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </AlbumWrapper >
    )
})
