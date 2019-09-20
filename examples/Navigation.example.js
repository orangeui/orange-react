import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import NavigationItem from '../components/NavigationItem'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => (
                        <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                            <Navigation>
                                <NavigationItem to="/" active>
                                    Home
                                </NavigationItem>
                                <NavigationItem to="/example" icon="icon-code">
                                    About us
                                </NavigationItem>
                                <NavigationItem to="/example" disabled>
                                    Exit
                                </NavigationItem>
                            </Navigation>

                            <br/><br/>

                            <Navigation align="center" color="green">
                                <NavigationItem to="/" icon="icon-theme">
                                    Home
                                </NavigationItem>
                                <NavigationItem to="/example" active>
                                    About us
                                </NavigationItem>
                            </Navigation>
                        </div>
                    )} />

                    <Route path="/example" render={() => (
                        <h3>This is the example page</h3>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App />, document.querySelector('#root'))
