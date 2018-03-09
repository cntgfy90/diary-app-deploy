import React from 'react';
import AlertMessage from './AlertMessage';
import { FormGroup, Input, Col } from 'reactstrap';

class AddComment extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleAdding = this.handleAdding.bind(this);

        this.state = {
            text: '',
            error: ''
        };
    }

    handleInput(e) {
        const text = e.target.value;
        this.setState(() => ({  text }));
    }

    handleAdding(e) {
        const { text, error } = this.state;
        const { addComment } = this.props;
        
        if (e.keyCode === 13 && e.ctrlKey) {
            if (!text) {
                this.setState(() => ({ error: 'Please, provide some information' }));
            } else {
                addComment({ text });
                this.setState(() => ({ text: '', error: '' }))
            }
        }
    }

    render() {
        const { text, error } = this.state;
        return (
            <FormGroup row className="AddComment">
                <Col sm={12}>
                    <AlertMessage error={error} />
                </Col>
                <Col sm={1}>
                    <div className="square square_light"></div>
                </Col>
                <Col sm={9}>
                    <Input
                        className="AddComment__input"
                        type="textarea"
                        name="text"
                        value={text}
                        onChange={this.handleInput}
                        onKeyDown={this.handleAdding}
                        />
                </Col>
            </FormGroup>
        );
    }
}

export default AddComment;