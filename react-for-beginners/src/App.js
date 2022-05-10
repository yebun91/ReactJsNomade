import { useState, useEffect } from "react";
// import Button from "./Button";
// import styled from "./App.module.css"

// function App() {
//   return (
//     <div>
//       <h1 className={styled.title}>Welcome back!</h1>
//       <Button text={"BUTTON"}/>
//     </div>
//   );
// }

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) =>setKeyword(event.target.value);

//   useEffect(() => {
//     console.log("버튼클릭", counter);
//   }, [counter]);
  
//   useEffect(() => {
//     console.log("api호출");
//   }, []);

//   useEffect(() => {
//     if(keyword && keyword.length > 5){
//       console.log("검색기능", keyword);
//     }
//   }, [keyword, counter]);

//     return (
//       <div>
//         <input 
//           type="text" 
//           value={keyword}
//           placeholder="search here..." 
//           onChange={onChange}
//           />
//         <h1>{counter}</h1>
//         <button onClick={onClick}>click me</button>
//       </div>
//     );
//   }
function Hello() {
//   function byFn(){
//     console.log("Bye :(");
//   }
//   function hiFn(){
//     console.log("Hi :)");
//     return byFn;
//   }
//   useEffect(hiFn, []);
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("bye :(");
  }, [])

  return <h1>hello</h1>
}

function App(){
 const [showing, setShowing] = useState(false);
 const onClick = () => setShowing((prev) => !prev)
 return <div>
  <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  {showing ? <Hello /> : null}
 </div>
}

export default App;
