import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';

function Content(){
    return(
        <div>
            <App/>
            <Form/>
        </div>
    )
}

ReactDOM.render(<Content/>,document.getElementById("root"));