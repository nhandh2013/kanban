import React from 'react';
import CheckList from './CheckList';
import marked from 'marked';
import PropTypes from 'prop-types';

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        console.log(value);
        if(typeof value !== 'string' || value.length > 80) {
            return new Error (
                `${propName} in ${componentName} is longer than 80 characters`
            )
        }
    }
}

class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false,
            searchTerm: 'React'
        };
    }
    // handleChange(event) {
    //     this.setState({ searchTerm: event.target.value })
    // }
    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }
    render() {
        let cardDetails;
        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        }
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        }
        return (
            <div className="card">
                {/*<div>*/}
                    {/*Search Term:*/}
                    {/*<input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>*/}
                {/*</div>*/}
                <div style={sideColor}/>
                <div className={this.state.showDetails ? "card__title card__title--is-open" : "card__title"} onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card;