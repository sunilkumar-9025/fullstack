import { HashRouter } from "react-router-dom";
import AuthPage from "./pages/Authentication/AuthPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <HashRouter>
        <AuthPage />
      </HashRouter>
    </>
  );
}

export default App;
