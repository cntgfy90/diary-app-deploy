import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/items';
import CommentsList from './CommentsList';

export const CommentsCard = ({ items, title, addComment, index }) => {
    const currentIndex = index + 1;
    return (
        <div className="Comments">
            <h2 className="Comments__title">{index < 0 ? 'Select item' : title + ' #'}{index >= 0 && currentIndex}</h2>
            {
                items.map((item) => item.selected && <CommentsList key={item.id} {...item} addComment={addComment} />)
            }
        </div> 
    );
};

const mapStateToProps = (state) => ({
    items: state.items,
    index: state.items.findIndex((item) => item.selected)
});

const mapDispatchToProps = (dispatch) => ({
    addComment: (text, id) => dispatch(addComment(text, id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsCard);