import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyRoutes from "./my-routes/MyRoutes";
import store from "./Redux/store"

function App() {
  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
      <Header />
      <MyRoutes/>
      </Provider>
      <Footer />
    </BrowserRouter>
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>
  );
}

export default App;
