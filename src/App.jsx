import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header id="main__header">
        <div>
          <h1 class="main__title" id="main__title">
            Kindle Express
          </h1>
        </div>
        <p class="header-description" id="header-description">
          Convert and send your books to Kindle in a single click{" "}
        </p>

        <div id="archivoDiv">
          <img src="Images/cloud-computing.png" id="img-archivo"></img>
          <p id="text-archivo">Upload your files</p>
        </div>
      </header>
      <p>Customize text</p>
    </>
  );
}

export default App;
