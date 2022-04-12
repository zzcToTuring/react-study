import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import App from "./App"
import store from "./redux/store"
//在router中，需要使用 <BrowserRouter>包裹才能完成路由选择
//要是在原生中觉得很复杂的话，直接可以在index中包裹好，就不用在其他地方进行包装了
ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
 , document.getElementById('root'))
