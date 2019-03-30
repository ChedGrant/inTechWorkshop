import React, {Component} from 'react';
import './componentStyle.css'




class MyComponent extends Component{
    render(){
        return(
            <header className='myHeader'>
                <div className='headerContent'>
                    <h1>DaJuan Can Code</h1>
                    <p>Welcome to my portfolio</p>
                </div>
            </header>
        )
    }
}

export default MyComponent;