import React,{useState} from 'react'
import { CryptoDetails, ItemsList, News, Home } from '.'
import {Route, Switch, Redirect} from 'react-router'
import './MiddleSection.css'
const MiddleSection = () => {
const [simplified, setSimplified] = useState(true);

    return (
        <div className="middle-content">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
            <Switch>
                <Route exact path='/home'><Home/></Route>
            </Switch>

            <Switch>
                <Route exact path ='/cryptocurrencies'><ItemsList simplified={simplified} setSimplified={setSimplified} /></Route>
            </Switch>
            <Switch>
                <Route exact path ='/news'><News simplified={simplified} setSimplified ={setSimplified}/></Route>
            </Switch>
            <Switch>
                <Route exact path ='/crypto/:coinId'><CryptoDetails/></Route>
            </Switch>
        </div>
    )
}

export default MiddleSection
