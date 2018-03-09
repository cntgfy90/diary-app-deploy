import React from 'react';
import AlertMessage from './AlertMessage';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import { Button } from 'reactstrap/dist/reactstrap.es';


export class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdding = this.handleAdding.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.state = {
            title: '',
            error: '',
            disabledBtn: false
        };
    }

    handleAdding() {
        const { title } = this.state;
        const { addItem } = this.props;
        if (title) {
            addItem({ title });
            this.setState(() => ({ error: '', title: '' }));
        } else {
            this.setState(() => ({ error: 'Please, provide some information!'}));
        }
    }

    handleInput(e) {
        const { items } = this.props;
        const title = e.target.value;
        this.setState(() => ({ title }));
        items.map((item) => item.title === title ? this.setState(() => ({ disabledBtn: true })) 
                                                 : this.setState(() => ({ disabledBtn: false })));
    }

    render() {
        const { title, error, disabledBtn } = this.state;
        return (
            <div className="Items__group">
                <input
                    className="Items__input form-control"
                    type="text"
                    name="text"
                    value={title}
                    placeholder="Type name here..."
                    onChange={this.handleInput}
                />
                <Button
                    className="Items__btn"
                    onClick={this.handleAdding}
                    color="secondary"
                    disabled={disabledBtn}
                >
                    Add new
                </Button>
                <AlertMessage error={error} />
            </div>
        );
    } 
}

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (title) => dispatch(addItem(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);