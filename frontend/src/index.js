import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/index"

const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStore(rootReducer, composePlugin(applyMiddleware(thunk)));

import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
        uri: API_ENDPOINT + '/graphql'
});

ReactDOM.render(
        <ApolloProvider client={client}>
                <Provider store={store}>
                        <Router history={history}>
                                <App />
                        </Router>
                </Provider>
        </ApolloProvider>
        , document.getElementById('root'));
registerServiceWorker();

 

serviceWorker.unregister();
