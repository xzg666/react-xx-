import styled  from "styled-components";

export const AlbumWrapper = styled.div`
    margin: 80px 0;
    .content{
        height: 186px;
        background-color: #f5f5f5;
        border: 1px solid #d3d3d3;
        margin-top: 20px;
        display: flex;
        align-items: center;
        .arrow{
            width: 30px;
            height: 17px;
            cursor: pointer;
        }
        .left{
            background-position: -260px -75px;
        }
        .right{
            background-position: -300px -75px;
        }
        .album{
            width: 640px;
            height: 150px;
            .page{
                
                
                .page-item{
                    display: flex;
                }
            }
        }
    }
`