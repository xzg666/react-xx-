import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 33px;
    width: 689px;
    border-bottom: 2px solid #C10D0C;
    display: flex;
    justify-content: space-between;
    background-position: -225px -156px;
    padding: 0 10px 4px 34px;
    .left{
        display: flex;
        .title{
            font-size: 20px;
            font-size: weight 400;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
        .keywords{
            font-size: 13px;
            display: flex;
            margin: 5px 0 0 20px;
            color: #333 !important;
            .keywords-item{
                cursor: pointer;
                :hover{
                        text-decoration: underline !important;
                    }
                .divider{
                    margin: 0 15px ;
                    color: #ccc ;
                    
                }
            }
        }
    }
    .right{
        font-size: 13px;
        padding-top: 5px;
       .more{
        color: #333 !important;
        margin-right: 5px;
           :hover{
               text-decoration: underline; 
           }
       }
        .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            background-position: 0 -240px;
        }
    }
`