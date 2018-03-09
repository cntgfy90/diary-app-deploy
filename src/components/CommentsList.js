import React from 'react';
import uuid from 'uuid';
import Comment from './Comment';
import AddComment from './AddComment';
import { Alert } from 'reactstrap';

const CommentsList = ({ comments, addComment }) => (
    <ul>
        {
            comments.length > 0 ?
            comments.map((comment) => (
                <div key={uuid()}>
                    <Comment comment={comment} />
                </div>
            )) :
            <div>
                <Alert color="info">
                    There is no currently any comment. You may add one!
                </Alert>
            </div>
        }
        <AddComment addComment={addComment}/>
    </ul>
);

export default CommentsList;