
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
