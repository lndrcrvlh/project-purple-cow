import { React, useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState([]);
  const [checkCount, setCheckCount] = useState(false);

  useEffect(() => {
    if (checkCount === true) {
      setCount(() =>
        fetch(
          "https://api.countapi.xyz/hit/namespace/1ccb732e-b55a-4404-ad3f-0f99c02fe44e"
        )
          .then((resp) => resp.json())
          .then((data) => setCount(data))
      );
      setCheckCount(false);
    }
  }, [checkCount]);

  return (
    <div>
      {count.value ? (
        <h1>The current count is: {count.value}</h1>
      ) : (
        <h1>Try Clicking the button to get the count</h1>
      )}
      <button onClick={() => setCheckCount(true)}>get the count</button>
    </div>
  );
}

export default Count;
