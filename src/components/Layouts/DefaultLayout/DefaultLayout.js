import React from "react";


const DefaultLayout = ({ children }) => {
  return (
    <>
      
      <main className="main">
        <div className="container">
          {children}
          </div>
      </main>

      
    </>
  );
};

export default DefaultLayout;
