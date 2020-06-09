import React, { Component } from 'react';
import './tour.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class Tour extends Component {
    state={
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        // console.log(this.props)
        const {id,city,img,name,info} = this.props.tour;
        const {removeTour} = this.props;

        return (
            <article className='tour'>
                <div className='img-container'>
                    <img className='city-img' src={img} alt='tour' />
                    <span onClick={() => removeTour(id)} className='close-btn'>
                        <FontAwesomeIcon icon = {faTimesCircle} size='3x' />
                    </span>
                </div>
                    <div className='tour-info'>
                        <h3> {city} </h3>
                        <h4>{name}</h4>
                        <h5>info <span onClick={this.handleInfo}><FontAwesomeIcon icon = {faAngleDown} /></span></h5>
                        {this.state.showInfo && <p>{info}</p>}
                        
                    </div>
                
            </article>
        )   
    }
}
