import ReactDom from "react-dom";
import Application from "./src/Application";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

ReactDom.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
