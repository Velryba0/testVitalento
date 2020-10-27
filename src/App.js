import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestChatactersData } from './redux/ducks/characters';
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const dataCharacters = useSelector(state => state);

  console.log(dataCharacters);

  useEffect(() => {
    dispatch(requestChatactersData())
  }, [])

  return <div className="App">Se inicia proyecto</div>;
}

export default App;
