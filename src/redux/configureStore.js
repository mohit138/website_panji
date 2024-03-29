import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Clients } from "./clients";
import { Faqs } from "./faqs";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Ui } from "./ui";
// import { InitialFeedback } from "./forms";   

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            services: Services,
            clients: Clients,
            testimonials: Testimonials,
            faqs: Faqs,
            ui:Ui
        }),
        compose(
            applyMiddleware(thunk, logger),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && 
            // window.__REDUX_DEVTOOLS_EXTENSION__()
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    return store;
}