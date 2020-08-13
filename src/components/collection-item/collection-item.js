import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../button/button';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='container'>
      <span className='subtitle is-4 has-text-black'>{name}</span>
    </div>
    <div className='container'>
      <span className='subtitle has-text-black'>${price}</span>
    </div>
    <div className="container pt-2">
    <CustomButton onClick={() => addItem(item)}> Add to Cart </CustomButton>
    </div>
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);