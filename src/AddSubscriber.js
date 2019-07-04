import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import './common/common.css';
import {Link} from 'react-router-dom';

class AddSubscriber extends Component{
    state = {
        name: '',
        phone: ''
    }

    onInputChange = (e)=>{
        const newSub = this.state;
        newSub[e.target.name] = e.target.value;
        this.setState(newSub);
    }

    onFormSubmitted= (e)=>{
        e.preventDefault();

        this.props.addNewSubscriber(this.state);
        this.setState({
            name: '',
            phone: ''
        })

        this.props.history.push("/");
    }

    render(){
        const {name,phone}= this.state;
        // const name = this.state.name;
        // const phone = this.state.phone;

        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn">Back</button></Link>

                    <form className="subscriber-form" onSubmit={this.onFormSubmitted}>
                        <label htmlFor="name" className="label-control">Name: </label><br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.onInputChange}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone: </label><br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.onInputChange}/><br/><br/>

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                            <span className="subscriber-info">Name: {name}</span><br/>
                            <span className="subscriber-info">Phone: {phone}</span><br/>
                        </div>

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddSubscriber;