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
          <img src="Images/cloud-computing.png" id="img-archivo"></img>{" "}
          <p id="text-archivo">Upload your files</p>{" "}
        </div>
      </header>
      <div class="center__design">
        <div id="custom__container">
          <h3 id="custom__title">Customize file</h3>
          <div id="options__wrapper">
            {/* Font Size */}
            <div id="format__design">
              <div id="fontsize__container">
                <label
                  for="fontSize"
                  id="labels__font-size"
                  class="label__design"
                >
                  <p class="options__text">Enter Font Size: </p>
                </label>
                <input
                  type="number"
                  id="fontSize__input"
                  name="fontSize__input"
                  min="8"
                  class="input__design"
                  max="24"
                  placeholder="8px - 24px"
                />
              </div>
              {/* Font Family */}
              <div id="fontfamily__container">
                <label
                  for="fontFamily"
                  id="labels__font-family"
                  class="label__design"
                >
                  <p class="options__text">Select Font Family: </p>
                </label>
                <select id="fontSize" class="select__design" name="fontSize">
                  <option value="Arial">Arial</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Verdana">Verdana</option>
                </select>
              </div>
              {/* Margin */}
              <div id="margin__container">
                <label for="margin" id="labels__margin" class="label__design">
                  <p class="options__text">Enter Margin: </p>
                </label>
                <input
                  type="number"
                  class="input__design"
                  id="margin"
                  name="margin"
                  min="5"
                  max="30"
                  placeholder="5px - 30px"
                />
              </div>
              {/* Interlineado */}
              <div id="spacing__container">
                <label
                  for="line__spacing"
                  id="labels__line-spacing"
                  class="label__design"
                >
                  <p class="options__text">Enter Line Spacing: </p>
                </label>
                <input
                  type="number"
                  class="input__design"
                  id="spacing"
                  name="spacing"
                  min="1.0"
                  max="2.0"
                  step={0.1}
                  placeholder="1.0px - 2.0px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Kindle Preview */}
        <div id="kindle__preview" class="center__design">
          <div id="kindle__inter"></div>
        </div>
      </div>
    </>
  );
}

export default App;
