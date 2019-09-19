import React, { Component } from 'react'
import { render } from 'react-dom'
import Avatar from '../components/Avatar'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 500, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Avatar />
                <Avatar circle="true" />

                <br/>

                <Avatar circle="true" size="small"/>
                <Avatar circle="true" size="large"/>
                <Avatar circle="true" size="auto"/>

                <Avatar size="small"/>
                <Avatar size="large"/>
                <Avatar size="auto"/>

                <Avatar size="small" color="red"/>
                <Avatar size="large" color="blue"/>
                <Avatar size="auto" color="secondary"/>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
