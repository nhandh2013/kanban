import React from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import constants from './constants';

const ShoppingCartSpec = {
    drop() {
        return {name: 'ShoppingCart'};
    }
}
let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
class ShoppingCart extends React.Component {
    render() {
        const {canDrop, isOver, connectDropTarget} = this.props;
        const isActive = canDrop && isOver;
        let backgroundColor = '#ffffff';
        if(isActive) {
            backgroundColor = '#fbfbbd';
        } else {
            backgroundColor = '#f7f7f7';
        }
        const style = {
            backgroundColor: backgroundColor
        };
        return (
            <div className="shopping-cart" style={style}>
                {isActive ?
                    'Hummmm, sack !' :
                    'Drag here to order !'
                }
            </div>
        )
    }
}
ShoppingCart.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
}
export default DropTarget(constants.SNACK, ShoppipngCartSpec, collect)(ShoppingCart);
