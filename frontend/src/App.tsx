import { HashRouter } from "react-router-dom";
import AuthPage from "./pages/Authentication/AuthPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <HashRouter>
        {/* <AuthPage /> */}
        <div className="fx-block">
          <div className="toggle">
            <div>
              <input type="checkbox" id="toggles" />
              <div data-unchecked="Overall Dashboard" data-checked="Module Dashboard"></div>
            </div>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
