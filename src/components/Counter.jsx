import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, increment, incrementByAmount, reset } from '../redux/slices/counterSlice';

function Counter() {
  const  {count} = useSelector(state=>state.counterReducer) 
 const dispatch = useDispatch()
 const inputRef=useRef()

 const handleIcrement = () =>{
  const amount = inputRef.current.value
  if(amount){
    dispatch(incrementByAmount(+amount))
    inputRef.current.value =""
  }else {
    alert('enter vaild number')
  }
 }
  

  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center bg-dark text-light "  >
      <div className="text-center border border-primary p-5">
        <h1>{count}</h1>

        <div className="d-flex justify-content-between my-3">
          <button onClick={()=>dispatch(Decrement())}  className="btn btn-danger" >
            Decrement
          </button>

          <button onClick={()=>dispatch(reset())}  className="btn btn-warning " >
            Reset
          </button>

          <button onClick={()=>dispatch(increment())} className="btn btn-success">
            Increment
          </button>
        </div>

       
        <div className="d-flex justify-content-center align-items-center mt-3">
          <input ref={inputRef}
            type="text" className="form-control w-50 "placeholder="Enter the amount to be incremented"
            
          />
          <button onClick={handleIcrement} className="btn btn-primary ">
                 incremented by Amount
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;