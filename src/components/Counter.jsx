import React from 'react';

function Counter() {
  

  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center bg-dark text-light "  >
      <div className="text-center border border-primary p-5">
        <h1>0</h1>

        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-danger" >
            Decrement
          </button>

          <button className="btn btn-warning " >
            Reset
          </button>

          <button className="btn btn-success">
            Increment
          </button>
        </div>

       
        <div className="d-flex justify-content-center align-items-center mt-3">
          <input
            type="text" className="form-control w-50 "placeholder="Enter the amount to be incremented"
            
          />
          <button className="btn btn-primary ">
                 incremented by Amount
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;