import { useMemo, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const nums = new Array(10_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 9_000,
  };
});

function Memoization() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(nums);

  // console.log(number);

  // const magical = number.find((num) => {
  //   console.log("calculating...");
  //   return num.isMagical;
  // });

  const magical = useMemo(
    () =>
      number.find((num) => {
        // console.log("calculating...");
        return num.isMagical;
      }),
    [number]
  );

  if(Math.random() > 0.6) {
    throw new Error("Random Error Occurred");
}

  return (
    <div className="wfull h-[50vh] flex flex-col items-center justify-center bg-gray-200 text-lg">
      
      <h1 className="text-xl font-bold mb-5">Memoization + Lazy Loading...</h1>
      <h2>Magical Number: {magical?.index}</h2>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if(count == 10 ) {
            setNumber(new Array(20_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 18_000,
              };
            }))
          }
        }}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Memoization;
