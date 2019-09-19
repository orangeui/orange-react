import React, { Component } from 'react'
import { render } from 'react-dom'
import Card from '../components/Card'
import CardHeader from '../components/CardHeader'
import CardBody from '../components/CardBody'
import CardFooter from '../components/CardFooter'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Card>
                    <CardHeader>
                        <h3>This is the header</h3>
                    </CardHeader>
                    <CardBody>
                        This is the card body.
                    </CardBody>
                    <CardFooter>
                        This is the card footer
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card>
                    <CardHeader>
                        <h3>This is the header</h3>

                        <button type="button" className="button">Action</button>
                    </CardHeader>
                    <CardBody>
                        This is the card body.
                    </CardBody>
                    <CardFooter>
                        This is the card footer
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card>
                    <CardHeader>
                        <h3>This is the header</h3>

                        <form className="form">
                            <div className="form__item">
                                <div className="form__wrapper">
                                    <div className="form__input-wrapper">
                                        <input className="form__input" id="form_id" type="text" name="form_id" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardHeader>
                    <CardBody>
                        This is the card body.
                    </CardBody>
                    <CardFooter>
                        This is the card footer
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card>
                    <CardHeader>
                        <nav className="nav">
                            <ul>
                                <li>
                                    <a href="/docs/card" className="is-active">First item</a>
                                </li>
                                <li>
                                    <a href="/docs/changelog">Second item</a>
                                </li>
                                <li>
                                    <a href="/docs/contribute">Third item</a>
                                </li>
                                <li>
                                    <a href="/docs/about" className="is-disabled">Fourth item</a>
                                </li>
                            </ul>
                        </nav>
                    </CardHeader>
                    <CardBody>
                        This is the card body.
                    </CardBody>
                    <CardFooter>
                        This is the card footer
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card>
                    <CardHeader>
                        <h3>Title</h3>
                    </CardHeader>
                    <CardBody>
                        <ul className="list list--large list--divide list--no-gutter list--hover">
                            <li>
                                <div>
                                    <h3>First item</h3>
                                    <p>Description of the first item</p>
                                </div>

                                <div className="list__action">
                                    <button type="button" className="button button--small">Action</button>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h3>Second item</h3>
                                    <p>Description of the second item</p>
                                </div>

                                <div className="list__action">
                                    <button type="button" className="button button--small">Action</button>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h3>Third item</h3>
                                    <p>Description of the third item</p>
                                </div>

                                <div className="list__action">
                                    <button type="button" className="button button--small">Action</button>
                                </div>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter>
                        This is the card footer
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card>
                    <CardHeader>
                        <h3>This is the header</h3>
                    </CardHeader>
                    <CardBody>
                        This is the card body.
                    </CardBody>
                    <CardFooter clickable onClick={e => console.log('Clicked')}>
                        Load more
                        <span className="icon-plus"></span>
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card>
                    <CardHeader>
                        <h3>This is the header</h3>
                    </CardHeader>
                    <section className="card__section">
                        <CardHeader>
                            <h4>First section</h4>
                            <button type="button" className="button button--small button--color-gray">Action</button>
                        </CardHeader>
                        <CardBody>Body of first section</CardBody>
                    </section>

                    <section className="card__section">
                        <CardHeader>
                            <h4>Second section</h4>
                            <button type="button" className="button button--small button--color-gray">Action</button>
                        </CardHeader>
                        <CardBody>Body of second section</CardBody>
                    </section>
                    <CardFooter clickable>
                        Load more
                        <span className="icon-plus"></span>
                    </CardFooter>
                </Card>
                <br/><br/>
                <Card full>
                    <CardHeader>
                        <h3>This is the header</h3>
                    </CardHeader>
                    <CardBody>
                        This is the card body.
                    </CardBody>
                    <CardFooter clickable>
                        Load more
                        <span className="icon-plus"></span>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
