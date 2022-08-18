import React from "react";

const App = () => {
  return (
    <div>
        <form className="form" action="" method="get">
            <label className="label" for="name">Enter your name: </label>
            <input className="field" type="text" name="name" id="name" required />
            <label className="label" for="age">Enter your age: </label>
            <input className="field" type="age" name="age" id="age" required />
            <input className="button" type="submit" value="Submit!" />
      </form>
    </div>)
}

export default App