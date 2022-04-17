import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <main className="App">
      <section className="core">
        <section className="text-side">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </section>
        <section className="form-side">
          <div className="ad">
            <p>
              <span>Try it free 7 days</span> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </section>
      </section>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://twitter.com/Abdelghafour1_"
            target="_blank"
            rel="noreferrer"
          >
            Abdelghafour122
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

export default App;
