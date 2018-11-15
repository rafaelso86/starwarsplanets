import React, {Component} from 'react';
import sabre from '../img/sabres.png';

export default class Sobre extends Component{

    state = {
        titulo: 'Sobre',
        autor: 'Rafael S Oliveira',
    }

    render(){
        return(
            <div className="container">

                <div className="card">
                    <div className="card-body">
                        <h1 style={{margin: '25px 0'}}>{this.state.titulo}</h1>

                        <p><strong>Desenvolvido por:</strong> {this.state.autor}</p>
                        <p><strong>GitHub</strong> <a href="https://github.com/rafaelso86/starwarsplanets" alt="GitHub" target="_blank">https://github.com/rafaelso86/starwarsplanets</a></p>
                        <p><strong>Linkedin</strong> <a href="https://www.linkedin.com/in/rafael-da-silva-oliveira/" alt="Linkedin" target="_blank">https://www.linkedin.com/in/rafael-da-silva-oliveira/</a></p>

                        <ul className='lista'>
                            <li style={{fontSize: '23px'}}><strong>Foram utilizados nesse projeto</strong></li>
                            <li><strong>React -</strong> create-react-app my-app</li>
                            <li><strong>Axios -</strong> npm install --save-dev axios</li>
                            <li><strong>Router -</strong> npm install --save-dev react-router-dom</li>
                            <li><strong>Bootstrap 4 -</strong> CDN</li>
                            <li><strong>JQuery -</strong> CDN</li>
                            <li><strong>GULP -</strong> SASS, CSS CLEAN, CONCAT</li>
                        </ul>

                        <img src={sabre} alt="Sabres" title="Sabres" style={{margin: '25px 0'}} />
                    </div>
                </div>

            </div>
        )
    }
}