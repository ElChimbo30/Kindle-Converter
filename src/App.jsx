import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header id="main__header">
        <div>
          <h1 className="main__title" id="main__title">
            Kindle Express
          </h1>
        </div>
        <p className="header-description" id="header-description">
          Convert and send your books to Kindle in a{" "}
          <span id="click__description">SINGLE CLICK</span>{" "}
        </p>

        <div id="archivoDiv">
          <img src="Images/cloud-computing.png" id="img-archivo" alt="cloud" />
          <p id="text-archivo">Upload your files</p>
        </div>
        <div className="header__oval"></div>
      </header>
      <div className="advanced__main__wrapper">
        <h3 className="settings__name" id="settings__name">
          Personalize your reading settings
        </h3>
        <div className="advanced__wrapper">
          <div id="container">
            {/* Main section */}
            <div id="left__column">
              <h4 className="custom__title">Options</h4>
              <div id="inputs__wrapper">
                {/* Optciones left wrapper */}
                <div id="format__design">
                  {/* Font Size */}
                  <div id="fontsize__container">
                    <label
                      htmlFor="fontSize"
                      id="labels__font-size"
                      className="label__design"
                    >
                      <p className="options__text" id="font-size__text">
                        Enter Font Size:{" "}
                      </p>
                    </label>
                    <input
                      type="number"
                      id="fontSize__input"
                      name="fontSize__input"
                      min="8"
                      className="input__design"
                      max="24"
                      placeholder="8px - 24px"
                    />
                  </div>
                  {/* Font Family */}
                  <div id="fontfamily__container">
                    <label
                      htmlFor="fontFamily"
                      id="labels__font-family"
                      className="label__design"
                    >
                      <p className="options__text">Select Font Family: </p>
                    </label>
                    <select
                      id="fontSize"
                      className="select__design"
                      name="fontSize"
                    >
                      <option value="Arial">Arial</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Verdana">Verdana</option>
                    </select>
                  </div>
                  {/* Margin */}
                  <div id="margin__container">
                    <label
                      htmlFor="margin"
                      id="labels__margin"
                      className="label__design"
                    >
                      <p className="options__text">Enter Margin: </p>
                    </label>
                    <input
                      type="number"
                      className="input__design"
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
                      htmlFor="line__spacing"
                      id="labels__line-spacing"
                      className="label__design"
                    >
                      <p className="options__text">Enter Line Spacing: </p>
                    </label>
                    <input
                      type="number"
                      className="input__design"
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

            {/*Contenido derecho*/}
            <div className="right__column">
              <h4 className="custom__title">Kindle Preview</h4>
              <div id="kindle__preview" className="center__design">
                <div id="kindle__border">
                  <div id="kindle__inter">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum. Why
                    do we use it? It is a long established fact that a reader
                    will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like). Where does it come
                    from? Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature,
                    discovered the undoubtable source. Lorem Ipsum comes from
                    sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                    Malorum" (The Extremes of Good and Evil) by Cicero, written
                    in 45 BC. This book is a treatise on the theory of ethics,
                    very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                    section 1.10.32. The standard chunk of Lorem Ipsum used
                    since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                    Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914
                    translation by H. Rackham. Where can I get some? There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. All the Lorem
                    Ipsum generators on the Internet tend to repeat predefined
                    chunks as necessary, making this the first true generator on
                    the Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of model sentence structures, to
                    generate Lorem Ipsum which looks reasonable. The generated
                    Lorem Ipsum is therefore always free from repetiti.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="email__main" id="email__main">
        <section id="send-to-kindle">
          <form className="form__send" action="/enviar" method="post">
            <label for="kindle-email" className="label__send">
              Type your Kindle email to receive the file:{" "}
            </label>
            <input
              className="input__email"
              type="email"
              id="kindle-email"
              name="kindle_email"
              placeholder="john.doe@kindle.com"
              required
            />
            <button type="submit" className="send__button">
              Enviar libro
            </button>
          </form>
        </section>
      </div>
      <div className="help__wrapper">
        <div className="title__div">
          <h3 className="help__title">Convert in 3 Simple Steps</h3>
        </div>
        <div className="instructions__div">
          <a href="#header-description">
            <div className="help__orders">
              <img
                src="Images/subir.png"
                id="upload__img"
                className="order__img"
              ></img>
              <h5 className="orders__title">Upload your files</h5>
              <p className="orders__p">
                Upload your files to get started. Make sure your documents are
                in a supported format for the best results. Check the uploaded
                content carefully to ensure everything looks correct and no
                errors are present. Once uploaded, your files are ready for
                preview or further actions, including sharing or downloading
                them securely.
              </p>
            </div>
          </a>
          <a href="#settings__name">
            <div className="help__orders">
              <img
                src="Images/configuration.png"
                id="conf__img"
                className="order__img"
              ></img>
              <h5 className="orders__title">Choose your settings</h5>
              <p className="orders__p">
                Select your preferred settings (font, font size, line
                spacing...) to personalize your reading experience. Use the
                preview on the right to see how your book will look with these
                settings. Adjust the options until the layout feels comfortable
                for you. Experiment with different combinations to find the
                perfect setup for your reading style.
              </p>
            </div>
          </a>
          <a href="#email__main">
            <div className="help__orders">
              <img
                src="Images/enviar.png"
                id="send__img"
                className="order__img"
              ></img>
              <h5 className="orders__title">Send to kindle</h5>
              <p className="orders__p">
                Enter your Kindle email in the field provided to ensure your
                converted files are delivered correctly. Double-check that the
                email address is typed accurately to avoid any mistakes. Make
                sure it matches the email linked to your Kindle account. Once
                confirmed, your book will be ready to appear on your device,
                ready for you to enjoy.
              </p>
            </div>
          </a>
        </div>
      </div>
      <footer class="footer">
        <p>© 2025 Kindle Converter. Todos los derechos reservados.</p>
        <p>
          Kindle Converter no está afiliado, patrocinado ni aprobado por Amazon
          o Kindle™. Kindle es una marca registrada de Amazon.com, Inc.
        </p>
        <nav>
          <a href="/aviso-legal">Aviso Legal</a> |
          <a href="/privacidad">Política de Privacidad</a> |
          <a href="/terminos">Términos y Condiciones</a> |
          <a href="/cookies">Política de Cookies</a>
        </nav>
        <p>
          Contacto:{" "}
          <a href="mailto:soporte@kindleconverter.com">
            soporte@kindleconverter.com
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
