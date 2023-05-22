import "./styles/module.app.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { GiBrazilFlag } from "react-icons/gi";
import { BsFillMoonFill } from "react-icons/bs";

function App() {
  return (
    <>
      <header className="header">
        <AiOutlineMenu className="menu" />
        <BsFillMoonFill className="menu" />
      </header>

      <main className="mainSection">
        <h1>Hello World!</h1>
        <h2>I'm Lucian Bellini</h2>
        <p>
          Software engineer and computer science <br /> student from Brazil{" "}
          <GiBrazilFlag className="flag" />
        </p>
      </main>

      <section>
        <h2>Some of my projects</h2>

        <div>
          <img src="" alt="Project preview" />
          <div>
            <h3>Project #1</h3>
            <ul>
              <li>Tech 1</li>
              <li>Tech 2</li>
            </ul>
            <a href="">Take a look</a>
          </div>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
      </section>

      <section>
        <h2>Experience</h2>
      </section>

      <section>
        <h2>Talk to me!</h2>
      </section>
    </>
  );
}

export default App;
