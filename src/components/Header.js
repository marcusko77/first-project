import React, {Component} from 'react';
import axios from 'axios';
import Title from './Title/Title.js'

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            vegasTemp: 0,
            atlanticTemp:0,

        };
    }

    componentDidMount(){

        axios.get('http://api.apixu.com/v1/current.json?key=5dd24964531e45d5aa0170317181202&q=las vegas').
        then( res => this.setState({vegasTemp: res.data.current.temp_f}));

        axios.get('http://api.apixu.com/v1/current.json?key=5dd24964531e45d5aa0170317181202&q=atlantic city'). 
        then( res => this.setState({atlanticTemp: res.data.current.temp_f}));
    }


    render(){
        return(
        <div>
           <Title/>
           <h1>Las Vegas Temperature: {this.state.vegasTemp} F</h1>
           <h2>Atlantic City Temperature: {this.state.atlanticTemp} F</h2>
           <h3>Format example: KK is King-King. 98s is nine-eight suited. KQo is King-Queen offsuit</h3>

        </div>

    )
}

}

