import { useMemo, useState } from "react";
import { findPrime } from "../utils/hepler";

const Demo = () => {
  //Local state Variable
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //Expensive Heavy Opertaion
  //with using of this method application was very slow!
  //const prime = findPrime(text)

  //solution use useMemo
    const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black rounded-lg flex flex-col justify-between items-center transition-colors duration-300 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full flex justify-end p-2">
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Toggle Theme
        </button>
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="prime-input" className="mb-2 text-lg">
          Enter a number for nth prime:
        </label>
        <input
          id="prime-input"
          className="border border-black px-2 py-1 w-72 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
            text-black" // Ensure input text is black for visibility on both themes
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl m-2">
          nth Prime : {text < 1 ? "Invalid Input" : prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;
