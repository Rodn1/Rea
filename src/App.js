import React, {useState} from 'react';
    // import React, { useEffect, useState } from "react";

function App() {
  const [likes, setLikes] = useState (5)
    const [value, setValue] = useState ('Text in input')


  return (
      <div className="App">
         <h1>{likes}</h1>
          <h1>{value}</h1>
          <input
              type="text"
              value={value}
              onChange={event => setValue(event.target.value)}

          ></input>

    </div>
  );
}

export default App;
