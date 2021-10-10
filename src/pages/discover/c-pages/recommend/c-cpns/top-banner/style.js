import styled from "styled-components";
import download from '@/assets/img/download.png'
import bannerControl from "@/assets/img/banner_sprite.png"

export const TopBannerWrapper = styled.div`
    width: 100%;
    height: 270px;
    background: url(${props => props.Bgimg}) center/6000px;

    .banner{
        height: 270px;
        background-color: blue;
        display: flex;
        position: relative;
    }
`
export const BannerLeft = styled.div`
    width: 730px;
    .banner-item{
        img{
            width: 730px;
        height: 270px;
        }
        
    }
`

export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
width: 254px;
  height: 270px;
  background: url(${download});
`

export const BannerControl = styled.div`
    .btn{
        top: 50%;
        width: 37px;
        height: 63px;
        background: url(${bannerControl});
        position: absolute;
        transform: translateY(-50% );
        background-color: transparent;
    }
    .left{
        left:-70px;
        background-position: 0 -360px;
    }
    .right{
        right:-70px;
        background-position: 0 -508px;
    }
`