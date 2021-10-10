import styled from "styled-components";

export const AlbumWrapper = styled.div`
    width: 118px;
    font-size: 12px;
    .img{
        position: relative;
        width: 118px;
        height: 110px;
        .cover{
        position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
        }
    }

    
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
    }
    
`