import styled from "styled-components";
import spirt1 from"@/assets/img/sprite_01.png"


export const HeaderWarpper = styled.div`
     height: 75px;
  font-size: 15px;
  color: white;
  background-color: #242424;
    .content{
        height: 70px;
    
        display: flex;
        justify-content: space-between;
    }
    .red-line{
        width: 100%;
        height: 5px;
        background-color: #C20C0C;
    }
`

export const ContentLeft = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70px;
    .logo{
        display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
    }
    .select-box {
        display: flex;
        justify-content: space-around;
        .select-item{
            position: relative;
            color: #ccc !important;
            height: 70px;
            a{
                display: block;
                height: 70px;
                padding: 0 20px;
                line-height: 70px;
            }
            &:hover,a.active{
                color: #fff !important;
                background-color: #000;
                text-decoration: none;
            }
            .active .icon{
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                background-position: -226px 0;
            }
            :last-of-type a{
                position: relative;
                ::after{
                    position: absolute;
                    content: "";
                    width: 28px;
                    height: 19px;
                    background-image: url(${spirt1});
                    background-position: -190px 0;
                    top:10px;
                    right:0px;
                }
            }


    
       
           
      
        }
    }
`
export const ContentRight = styled.div`
line-height: 70px;
color:#ccc;
display: flex;
font-size: 12px;
    height: 70px;
    .search{
        width: 158px;
        height: 32px;
        border-radius: 16px;
        margin-top: 20px;
        ::placeholder{
            font-size: 12px;
        }
    }
    .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 18px 16px;
    background-color: transparent;
  }
`
