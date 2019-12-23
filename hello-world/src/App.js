import React from 'react';

// function App() {
//   const greeting = "Hi, Tom!!"
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return (
//     dom
//   );
// }

const App = () => {
  return(
    <div>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow</div>
}

export default App;
