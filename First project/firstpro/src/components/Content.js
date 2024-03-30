import React, { useState } from "react";
let textOfP = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`;
let i = 0;
let mistake = 0;
let checker = false;
export default function Content(p) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState({
    color: "black",
  });
  function change1(event) {
    let write = document.getElementById("text");
    if (event.target.value[i] !== textOfP[i]) {
      mistake++;
      // console.log(mistake);
      write.classList.add("anime");
      setTimeout(function () {
        write.classList.remove("anime");
      }, 2000);
    } else {
      setText(event.target.value);
      i++;
      write.classList.remove("anime");
      checker = true;
    }
  }
  return (
    <>
      <div className="main">
        <div className="container my-4" id="main">
          <textarea
            name="typing"
            id="write"
            cols="30"
            rows="10"
            value={text}
            onChange={change1}
            style={p.darkMode ? { color: "white" } : { color: "black" }}
          />
          <div
            id="text"
            className="container"
            style={p.darkMode ? { color: "white" } : { color: "black" }}
          >
            {textOfP}
          </div>
        </div>
        <div
          className="container my-4 center"
          id="score"
          style={p.darkMode ? { color: "white" } : { color: "black" }}
        >
          <div id="speed">Typing speed=30wps</div>
        </div>
      </div>
      <div
        id="background"
        style={
          p.darkMode
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      ></div>
    </>
  );
}
