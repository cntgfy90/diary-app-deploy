import React from 'react';
import ItemsList from './ItemsList';
import AddItem from './AddItem';

const ItemsCard = ({ title }) => (
    <div className="Items">
        <h2 className="Items__title">{title}</h2>
        <AddItem />
        <ItemsList />
    </div>
);

export default ItemsCard;