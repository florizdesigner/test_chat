import React from "react";
import './App.css';
import JoinForm from "./components/JoinForm/JoinForm";
import reducer from "./reducer";

function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        isAuth: false
    })

    const onLogin = () => {
        dispatch({
            type: "IS_AUTHENTICATED",
            payload: true
        })
    }

    console.log(state)

    return (
    <div className="App">
        {state.isAuth ? "you're joined" : <JoinForm onLogin={onLogin}/>}
    </div>
  );
}

export default App;
