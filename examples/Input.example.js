import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '../components/Button'
import Input from '../components/Input'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <form className="form">
                    <Input
                        id="a"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        onChange={e => {console.log(e.target.value)}}
                    />
                </form>
                <br/><br/>
                <form className="form form--large">
                    <Input
                        id="a"
                        label="Large input label text"
                        description="My custom input description"
                        name="example-name"
                        onChange={e => {console.log(e.target.value)}}
                    />
                </form>
                <br/><br/>
                <form className="form form--large">
                    <Input
                        id="a"
                        label="Large input label text"
                        description="My custom input description"
                        name="example-name"
                        value="Large read only text"
                        readOnly
                    />
                </form>
                <br/><br/>
                <form className="form">
                    <Input
                        id="b"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        value="read only text"
                        readOnly
                    />
                </form>
                <br/><br/>
                <form className="form">
                    <Input
                        id="c"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        left={"Left text"}
                    />
                </form>
                <br/><br/>
                <form className="form">
                    <Input
                        id="d"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        right={"Right text"}
                    />
                </form>
                <br/><br/>
                <form className="form">
                    <Input
                        id="d"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        readOnly="true"
                        value="kndf8234b13f7134rf134f89hi"
                        left={
                            <Button
                                size="small"
                                onClick={() => console.log('Do something when clicked')}
                            >Copy</Button>
                        }
                    />
                </form>
                <br/><br/>
                <form className="form">
                    <Input
                        id="d"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        readOnly="true"
                        value="kndf8234b13f7134rf134f89hi"
                        right={
                            <Button
                                size="small"
                                onClick={() => console.log('Do something when clicked')}
                            >Copy</Button>
                        }
                    />
                </form>
                <br/><br/>
                <form className="form form--large">
                    <Input
                        id="d"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        readOnly="true"
                        value="kndf8234b13f7134rf134f89hi"
                        right={
                            <Button
                                size="small"
                                onClick={() => console.log('Do something when clicked')}
                            >Copy</Button>
                        }
                    />
                </form>
                <br/><br/>
                <form className="form">
                    <Input
                        id="d"
                        label="This is the input label text"
                        description="My custom input description"
                        name="example-name"
                        readOnly="true"
                        value="kndf8234b13f7134rf134f89hi"
                        right={
                            <Button
                                size="small"
                                onClick={() => console.log('Do something when clicked')}
                            >Click me</Button>
                        }
                        left={
                            <Button
                                size="small"
                                onClick={() => console.log('Do something when clicked')}
                            >Click here</Button>
                        }
                    />
                </form>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
