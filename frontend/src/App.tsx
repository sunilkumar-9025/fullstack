import React from "react";
import { ToastContainer } from "react-toastify";
import Route from "./router";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={0}
      />
      <Route />
    </React.Fragment>
  );
}

export default App;
