import styled from "styled-components";

export const TopRankingWrapper = styled.div`
    padding: 20px;
    flex: 1;
    .header{
        .img{
            width: 80px;
            height: 80px;
        }
        .info{
            margin-left: 5px;
            .title{
                color:#333;
                font-size: 14px;
            }
            .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }

        }
    }
    .list{
        margin-top: 23px;
        width: 190px;
        .tracks-item{
            display: flex;
            height: 32px;
            :nth-child(-n+3) .rank{
                    color:red;
            }
            .rank{
                font-size: 16px;
            }
            .music{
                font-size: 12px;
                margin: 2px 0 0 8px;
                display: flex;
                width: 180px;
                .name{
                    flex: 1;

                }
                .operate {
                display: flex;
                align-items: center;
                display: none;
                 width: 82px;
                 .btn {
                    width: 17px;
                    height: 17px;
                    margin-left: 8px;
                    cursor: pointer;
                }

                .play {
                    background-position: -267px -268px;
                }

                .addto {
                    position: relative;
                    top: 2px;
                    background-position: 0 -700px;
                 }

                .favor {
                    background-position: -297px -268px;
                }
            }
            &:hover {
                .operate {
                    display: block;
                    }
                }
            }       
        }
    }
    .all{
        font-size: 12px;
        color: #333 !important;
        margin-left: 130px;
        &:hover{
            text-decoration: underline;
        }
    }
   
`