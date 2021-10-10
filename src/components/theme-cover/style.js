import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
    width: 140px;
    font-size: 14px;
    margin-top: 15px;
    .cover-top{
        position: relative;
        .cover{
        position: absolute;
        left: 0;
        top: 0;
        width: 140px;
        height: 140px;
        background-position: 0 0;
        .info{
            position: absolute;
            left: 0;
            bottom: 0;
            background-position: 0 -537px;
            height: 27px;
            width: 100%;
            color:#ccc;
            font-size: 12px;
            line-height: 27px;
            display: flex;
            justify-content: space-between;
            .erji {
                margin:0 5px;
                display: inline-block;
                width: 14px;
                height: 11px;
                background-position: 0 -24px;
            }
            .play {
                margin: 5px 5px 0 0;
                display: inline-block;
                width: 16px;
                height: 17px;
                background-position: 0 0;
            }
        }
    }
    }
    
    .writer{
        font-size: 12px;
    }
`