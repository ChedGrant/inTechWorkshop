import React , {Component} from 'react'
import './aboutComponent.css'

class AboutComponent extends Component {
    render(){
        return(
            <main>
                <section className='aboutSection'>
                    <h2>About Me</h2>
                    <p>My name is DaJuan and I like programming</p>
                </section>
                <section className='languages'>
                    <div className='language'>HTML</div>
                    <div className='language'>CSS</div>
                    <div className='language'>JavaScript</div>
                </section>
            </main>
        )
    }
}

export default AboutComponent;