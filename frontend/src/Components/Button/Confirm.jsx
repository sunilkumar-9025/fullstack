import React from "react";

const Confirm = ({ label, iconType, onClick }) => {
  return (
    <div className="save">
      <button className="noselect" onClick={onClick}>
        <span className="text">{label ? label : "Confirm"}</span>
        <span className="icon">
          {iconType === "save" && (
            <i className="ri-save-line fs-4 text-light"></i>
          )}
          {iconType === "edit" && (
            <i className="ri-edit-box-line fs-4 text-light"></i>
          )}
          {iconType === "upload" && (
            <i className="ri-upload-2-line fs-4 text-light"></i>
          )}
          {iconType === "download" && (
            <i className="ri-download-2-line fs-4 text-light"></i>
          )}
        </span>
      </button>
    </div>
  );
};

export default Confirm;
