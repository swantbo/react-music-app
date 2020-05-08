import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const middleware = [thunk];

//生产环境不打印action
if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
