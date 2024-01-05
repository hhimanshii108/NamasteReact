// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>
// ReactElement (object)=> HTML (Browser understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a react heading"),
    React.createElement("h2", {}, "i am heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a react2 heading"),
    React.createElement("h2", {}, "i am heading 22"),
  ]),
]);
// const heading=React.createElement("h1",{id:"heading"},"hello world using react");
// console.log(heading) // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // it will be responsibe for taking the object and converting it to h1 tag and puts it in root
