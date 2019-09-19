import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom' // Link is required for the Breadcrumbs components
import Breadcrumbs from '../components/Breadcrumbs'
import BreadcrumbsItem from '../components/BreadcrumbsItem'

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
                            <Breadcrumbs
                                fullWidth
                                backTo="/"
                                color="green"
                            >
                                <BreadcrumbsItem
                                    content="First"
                                    to="/example"
                                    active="true"
                                    iconClass="icon-integrations"
                                />
                                <BreadcrumbsItem
                                    content="Second"
                                    to="/example"
                                    active="true"
                                />
                                <BreadcrumbsItem
                                    content="Third"
                                    to="/example"
                                    active="false"
                                />
                                <BreadcrumbsItem
                                    content="Fourth"
                                    to="/example"
                                    active="false"
                                />
                            </Breadcrumbs>
                        </div>
                    )} />
                    <Route path="/example" render={() => (
                        <div>This is the example page</div>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App />, document.querySelector('#root'))
