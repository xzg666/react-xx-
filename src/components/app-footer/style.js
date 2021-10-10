import styled from "styled-components";

import sprite_footer_02 from '@/assets/img/sprite_footer_02.png'
import sprite_footer_01 from "@/assets/img/sprite_footer_01.png"

export const WrapFooter = styled.div`
border-top: #d3d3d3 1px solid;
    padding-top: 10px;
    width: 100%;
    height: 172px;
    color: #666 !important;
    font-size: 12px;
    .fotter-wrap{
        display: flex;
    justify-content: space-between;
    }
    
`
export const FooterLeft = styled.div`
    
    width: 50%;
    height: 172px;
    a:hover{
            text-decoration: underline;
            }
    .service{
        margin-bottom: 5px;
        display: flex;
        flex: 1;
        color: #999;
        .service-item{
            padding: 2px 5px;
            a{
                color:#999 !important;
            }
            .line{
                margin-left: 5px;
            }
        }
    }
    .copyright {
        span {
         margin-right: 15px;
        }
    }
    .report{
         margin:5px 0
     }
    .copyright,.report,.info{
        a{
            color:#666 !important;
        }
    }
  `

export const FooterLRight = styled.div`
    display: flex;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${sprite_footer_02});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }
    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${sprite_footer_01});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
