import React from "react";
import { Slider } from "dead-simple-slider";
import "./App.css";

const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517249361621-f11084eb8e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF0bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXJvbm1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXJvbm1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div className="App">
      <h1>Hello There</h1>
      <h2>Basic Example Slider</h2>
      <Slider images={images} />
      <h2>Slider with some custom styles</h2>
      <div>
        <Slider
          images={images}
          style={{ height: "100%", NavIcon: { backgroundColor: "orange" } }}
        />
      </div>
    </div>
  );
};

export default App;
