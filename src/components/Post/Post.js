import React, {Component} from 'react';
import  './Post.css';


export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editting: false,
            inputName: this.props.inputName,
            inputHand: this.props.inputHand,


        };

        this.updateName = this.updateName.bind(this);
        this.updateHand = this.updateHand.bind(this);
        this.edit = this.edit.bind(this);
    }

    
    

    updateName( e ) {
        this.setState({inputName: e.target.value});
    }

    updateHand( e ) {
        this.setState({ inputHand: e.target.value});
    }

    edit(  ) {
        const {inputName, inputHand} = this.state;
        const { id, edit } = this.props;
        edit( id, inputName, inputHand);
        this.setState({editting: false})
    }
    

    render() {
        const { inputName, inputHand, id, edit, remove} = this.props;
        const { editting } = this.state;
        return(
            <div className='postContainer'>
                {
                    editting?
                    <div>
                        <input className = 'inputName' value = {this.state.inputName} onChange={this.updateName}/>
                        <input className = 'inputHand' value={this.state.inputHand} onChange={this.updateHand}/>
                        <button className = 'saveButton' onClick={this.edit}>Save</button>
                    </div>
                    :
                    <div>
                        <span className="inputName">{inputName}</span>
                        <span className="inputHand">{inputHand}</span>
                    </div>
                }
              
                
                <button className='handEdit' onClick={ () => this.setState({ editting:!this.state.editting })} >Edit</button>
                <button className='handDelete' 
                        onClick={ () => remove(id)}>Delete</button>
            </div>
        )

    }
    
}


