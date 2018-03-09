import React from 'react';
import { connect } from 'react-redux';
import { removeItem, selectItem } from '../actions/items';
import { Badge, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Item = ({ removeItem, selectItem, items }) => (
    <ul>
        {
            items.map(({ id, selected, comments, title }) => (
                <ListGroup className="Item" key={id}>
                    <ListGroupItem 
                        onClick={() => selectItem({ id })}
                        className={selected ? 'Item__text active-item' : 'Item__text'}
                        >{title} <Badge className="Item__badge">{comments.length}</Badge>
                    </ListGroupItem>
                    <Button className="Item__btn"
                            onClick={() => removeItem({ id })}>Delete</Button>
                </ListGroup>
            ))
        }
    </ul>
);

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeItem(id)),
    selectItem: (id) => dispatch(selectItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);

