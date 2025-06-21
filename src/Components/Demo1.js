import React, { useEffect, useRef, useState } from "react";

const Demo1 = () => {
  let x = 10;

  //Reference Value
  const ref = useRef(0);

  /*
  not like ref is  ref= 0

  it's an object
  ref = {current: initialValue}
  */

  //Local State Variable
  const [y, setY] = useState(0);
  //console.log("x Value Incresing", x);
const inter = useRef(null) 
  useEffect(() => {
    inter.current = setInterval(() => {
      //console.log("useEffect Calling..!", Math.random() * 100);
    }, 1000);
    return () => clearInterval(inter.current);
  }, []);

  //console.log("Re-Rendering....!");
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96 rounded-lg">
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition duration-200"
          onClick={() => {
            x = x + 1;
            console.log("Normal Value:", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">let={x}</span>
      </div>

      <div className="space-x-4 pt-3">
        <button
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition duration-200"
          onClick={() => {
            setY(y + 1);
            console.log("State Value:", y);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State={y}</span>
      </div>

      <div className="space-x-4 pt-3">
        <button
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition duration-200"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref Value:", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref={ref.current}</span>
        <button
          className="bg-red-700 p-2 m-4 text-white font-bold rounded-lg flex flex-col"
          onClick={() => {
            clearInterval(inter.current);
          }}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default Demo1;
