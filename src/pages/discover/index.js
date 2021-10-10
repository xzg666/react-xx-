import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {DiscoverSelect} from './style'
import {dicoverMenu} from '../../common/local-data'

// import requset from '../../services/request'



export default memo(function HYDiscover(props) {
    console.log(props.route.routes)

    // useEffect(() => {
    //     requset('/banner').then((res)=>{
    //         console.log(res)
    //     })
        
    // }, [])
    return (
        <div>
            <DiscoverSelect>
                <div className="wrap-v1 select">
                {
                    dicoverMenu.map((item)=>{
                        return(
                            <div key={item.title} className="seilect-item">
                                <NavLink to={item.link} >
                                {item.title}
                            </NavLink>
                            </div>
                            
                        )
                    })
                }
                </div>
                
            </DiscoverSelect>
            {renderRoutes(props.route.routes)}
        </div>
    )
})
