import React, {Component} from 'react';
import logo from '../img/star-wars-logo.png';

export default class Topo extends Component{
    render(){
        return(
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} style={{maxWidth: "100px"}} alt="Star Wars" title="Star Wars" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
        )
    }
}