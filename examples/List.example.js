import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import CardHeader from '../components/CardHeader'
import CardBody from '../components/CardBody'

import List from '../components/List'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <List>
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                </List>
                <br/><br/>
                <List size="small">
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                </List>
                <br/><br/>
                <List size="medium">
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                </List>
                <br/><br/>
                <List size="large" divide>
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>List title</h3>
                            <p>List content</p>
                        </div>
                        <div className="list__action">
                            <Button>Click me</Button>
                        </div>
                    </li>
                </List>
                <br/><br/>
                <Card>
                    <CardHeader><h3>List title inside a Card</h3></CardHeader>
                    <CardBody>
                        <List size="large" divide hover noGutter>
                            <li>
                                <div>
                                    <h3>List title</h3>
                                    <p>List content</p>
                                </div>
                                <div className="list__action">
                                    <Button>Click me</Button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>List title</h3>
                                    <p>List content</p>
                                </div>
                                <div className="list__action">
                                    <Button>Click me</Button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>List title</h3>
                                    <p>List content</p>
                                </div>
                                <div className="list__action">
                                    <Button>Click me</Button>
                                </div>
                            </li>
                        </List>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
