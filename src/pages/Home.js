import React, {Component} from 'react';
import Axios from 'axios';

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            planetas: [],
            filmes: [],
        }

        this.click = this.click.bind(this)
    }

    componentDidMount(){
        this.carregarPlanetas()
    }

    carregarPlanetas(){
        //Número Aleatório
        const numero = Math.floor(Math.random() * (20 - 1) + 1);
        //console.log(numero);

        //Planetas
        Axios.get('https://swapi.co/api/planets/' + numero + '/')
        .then(response =>{
            const planetas = response.data;
            this.setState({planetas});
            console.log(planetas)

            const filmes = response.data.films;
            this.setState({filmes})
            console.log(filmes)
        })
    }

    click(event){
        //Número Aleatório
        const numero = Math.floor(Math.random() * (20 - 1) + 1);
        console.log('ID ' + numero);

        //Planetas
        Axios.get('https://swapi.co/api/planets/' + numero + '/')
        .then(response =>{
            const planetas = response.data;
            this.setState({planetas: this.planetas = response.data});
            console.log(planetas)

            const filmes = response.data.films;
            this.setState({filmes})
            console.log(filmes)
        })

        event.preventDefault();
    }

    render(){
        return(
            <div className="container">

                <div className="card">
                    <div className="card-body">
                        <div className="dartVader"></div>
                        <h1>{ this.state.planetas.name }</h1>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Population:</strong> { this.state.planetas.population }</li>
                        <li className="list-group-item"><strong>Climate:</strong> { this.state.planetas.climate }</li>
                        <li className="list-group-item"><strong>Terrain:</strong> { this.state.planetas.terrain }</li>
                        <li className="list-group-item"><strong>Feature in Films: </strong> {this.state.filmes.length}</li>
                    </ul>
                    <div className="card-body">
                        <button className="card-link btn btn-primary" onClick={this.click}>NEXT</button>
                        <ul>
                            <li className="clone-1"></li>
                            <li className="clone-2"></li>
                            <li className="clone-3"></li>
                            <li className="clone-4"></li>
                            <li className="soldier"></li>
                            <li className="bobaFeth"></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}