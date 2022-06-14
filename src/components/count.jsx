import { React, useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.countapi.xyz/hit/namespace/1ccb732e-b55a-4404-ad3f-0f99c02fe44e"
    ).then((resp) => resp.json()).then(data => setCount(data.value))
  }, []);

  return <div>{count}</div>;
}

export default Count;
