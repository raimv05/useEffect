import React, { useState, useEffect } from "react";
//Calling useEffect everytime.
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  });

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment count</button>
    </div>
  );
}
export default MyComponent;

//Calling useEffect only when a state of variable changes.

// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("John");

//   useEffect(() => {
//     console.log(`Count is ${count}`);
//   }, [count]);

//   useEffect(() => {
//     console.log(`Name is ${name}`);
//   }, [name]);

//   const handleButtonClick = () => {
//     setCount(count + 1);
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleButtonClick}>Increment</button>
//       <p>Name: {name}</p>
//       <input value={name} onChange={handleNameChange} />
//     </div>
//   );
// }
// export default MyComponent;

//3. When a prop is passed.

//Here prop is not passed.

// function MyComponent({ name }) {
//   const [greeting, setGreeting] = useState("");

//   useEffect(() => {
//     if (name) {
//       setGreeting(`Hello, ${name}!`);
//     }
//   }, [name]);

//   return (
//     <div>
//       <p>{greeting}</p>
//     </div>
//   );
// }

// export default MyComponent;

//Here prop is passed.

// function Example({ name }) {
//   const [greeting, setGreeting] = useState("");

//   useEffect(() => {
//     console.log("useEffect called");
//     if (name) {
//       setGreeting(`Hello, ${name}!`);
//     }
//   }, [name]);

//   return (
//     <div>
//       <p>{greeting}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Example name="John" />
//     </div>
//   );
// }

// export default App;

// 4. Calling useEffect only when load for first time.

// function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component loaded for the first time");
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Example;
