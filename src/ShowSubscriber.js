import React,{Component} from 'react';
import Header from './Header';
import './ShowSubscriber.css';
import './common/common.css';
import {Link} from 'react-router-dom';

class ShowSubscriber extends Component{
    onDeleteClicked = (subID)=>{
        this.props.deleteSubscriberHandler(subID);
    }

    render(){    
        return (
            <div>
                <Header headerText="phone directory"/>
                <div className="component-body-container">
                    <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
    
                    <div className="grid-container heading-container">
                        <span className="grid-item name-heading">Name</span>
                        <span className="grid-item phone-heading">Phone</span>
                    </div>

                    {
                        this.props.subscriberList.map((sub)=>{
                            return (
                                <div key = {sub.id} className="grid-container">
                                    <span className="grid-item">{sub.name}</span>
                                    <span className="grid-item">{sub.phone}</span>
                                    <span className="grid-item action-btn-container">
                                        <button className="custom-btn delete-btn" onClick={this.onDeleteClicked.bind(this,sub.id)}>Delete</button>
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
    
        );
    }
}

export default ShowSubscriber;