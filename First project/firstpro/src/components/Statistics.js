import React from "react";
export default function Statistics(p) {
  return (
    <body
      style={
        p.darkMode
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <h1 className="container my-2">Statistic</h1>
      <p className="container my-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque facere
        assumenda sed, asperiores obcaecati autem vero quidem saepe ab
        blanditiis sapiente animi consequatur eius, minima fuga unde porro optio
        modi?
      </p>
    </body>
  );
}
