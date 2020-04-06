import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserRgt from './UserRegisteration'
import Popup from './popupData'
import NavRender from './Nav'
import Search from './Search'
import Home from './Home'


function IndexPage()
{
    return(
        <Router>
            <div>
                
                    <Route path="/" component={NavRender} />
                    <Route path="/home" component={Home} />
                    <Route path="/add" component={UserRgt} />
                    <Route path="/search" component={Search} />
                   
               

            </div>
            </Router>

    )
}
export default IndexPage