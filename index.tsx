import ReactDom from "react-dom";
import Application from "./src/Application";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { ping } from "common/api";

ReactDom.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
setInterval(() => {
  ping().then(res =>{
    console.log(`${res.status}-${res.data}`)
  });
}, 200000);
