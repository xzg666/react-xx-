import React from 'react'

import {RecommendWrapper,Content,ContentLeft,ContentRight} from './style' 
import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from'./c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRank from './c-cpns/rank'

export default function HYRecommend(props) {

    
  
    return (
        <div>
            <RecommendWrapper>
                <HYTopBanner/>
                <Content className="wrap-v2">
                    <ContentLeft>
                        <HYHotRecommend/>
                        <HYNewAlbum/>
                        <HYRank/>
                    </ContentLeft>
                    <ContentRight>
                        123
                    </ContentRight>
                </Content>
            </RecommendWrapper>
         
        </div>
    )
}























