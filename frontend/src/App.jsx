import React from "react";
import Route from "./Routes/Route";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Loader/Loader";
import Confirm from "./Components/Button/Confirm";
import Delete from "./Components/Button/Delete";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        limit={0}
      />
      {/* <Route /> */}
      <Loader />
      <Delete />
      <Confirm label="Download" iconType="download"  />
    </React.Fragment>
  );
}

export default App;
