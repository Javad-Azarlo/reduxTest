import { useEffect, useState } from "react";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./fetch/todos";

function App() {
  const store = useSelector((state) => state.token);
  const dispatch = useDispatch();
  console.log(store);
  useEffect(() => {
    dispatch(fetchToken);
  });

  return (
    <Provider store={store}>
      <h1>redux</h1>
    </Provider>
  );
}

export default App;
