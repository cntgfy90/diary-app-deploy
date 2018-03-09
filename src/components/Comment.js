import React from 'react';
import { Media, Col } from 'reactstrap';

const Comment = (props) => (
    <Media className="Comment">
        <Col sm={1}>
            <div className="square"></div>
        </Col>
        <Col sm={9}>
            <Media body className="Comment__text">
                {props.comment}
            </Media>
        </Col>
    </Media>
);

export default Comment;