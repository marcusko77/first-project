import React, {Component} from 'react';
import axios from 'axios';

import './body.css';
import Post from './Post/Post.js';
export default class Body extends Component {
    constructor(){
        super()

        this.state = {
            inputName:'',
            inputHand:'',
            hands: [],
        }

        this.removeHand = this.removeHand.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateHand = this.updateHand.bind(this);
        this.addHand = this.addHand.bind(this);
        this.removeHand = this.removeHand.bind(this);
        this.editHand = this.editHand.bind(this);
    }


    componentDidMount(){
        axios.get( '/api/componentDidMount' ). then( res => {
            this.setState({hands: res.data})
        })
    }

    updateName(e){
        this.setState({inputName: e.target.value})
    }

    updateHand(e){
        this.setState({inputHand: e.target.value})
    }



    addHand(){
        const { inputName, inputHand } = this.state;
        axios.post('/api/addHand', {inputName, inputHand}).then( res => {
            var hand = res.data
             this.setState({hands:hand});
        });
        this.setState({inputName:'',inputHand:''})
    
    }

    removeHand(id) {
        axios.delete(`/api/removeHand/${id}` ). then( res => {
            var deleteHand = res.data
            this.setState({hands: deleteHand})
        })
    }

    editHand( id, inputName, inputHand ){ 
        axios.put(`/api/editHand/${id}`, { inputName, inputHand }).then( res => {
            this.setState({ hands: res.data})
        })
    }




    render() {
        
        return(
            <div className='Body'>  
               <div className="new_hand_container">
                    <input placeholder="Name"
                           onChange={(e) => this.updateName(e)}/>
                    <input placeholder="Formatted Favorite Hand"
                           onChange={ (e) => this.updateHand(e)}/>
                    <button onClick={() => this.addHand()}>Add hand</button>
                </div>
                <div className= 'hands'>   
                    <div>
                          { this.state.hands.map( post => (
                              <Post id = {post.id} key = {post.id} inputName={post.inputName} inputHand={post.inputHand} remove = {this.removeHand} edit = {this.editHand}/>
                          ))
                        } 
                    </div>
                </div>

                
            </div>


         )
        }
}