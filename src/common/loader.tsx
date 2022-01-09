import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};
