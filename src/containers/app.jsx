import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from '../store/config';
require('./app.css');

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            store: null
        }
    }

    componentDidMount() {
        storeConfig(store => this.setState({ store }))
    }

    render() {
        const { store } = this.state;
        if (!store) {
            return (<p>Đang khởi tạo app...</p>)
        }
        return (
            <Provider store={this.state.store}>
                <p>Hello world! nice</p>
            </Provider>
        );
    }
}
