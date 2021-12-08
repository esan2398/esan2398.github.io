import React, { Component} from 'react'
import Photo from './Eddie.jpg';
import '../style/Home.css'

export default class Home extends Component {
    render () {
        return (
            <div className='Background'>
                <div className='Portrait'> <img src={Photo} className="App-logo" alt="logo" /> </div>
                <h1 class='title'>I Am Not a Web Developer</h1>
                <h2 class='title'>But am I learning a ton of cool stuff? Hell yeah!</h2>
                <h2 class='title'>I DO have some cool photography and designs to showcase!</h2>
                
            </div>
            
        )
    }
}