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
        <AuthPage />
      </HashRouter>
    </>
  );
}

export default App;
