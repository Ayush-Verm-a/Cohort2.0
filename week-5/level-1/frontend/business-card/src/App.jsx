import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Ayush Verma</h1>
      <p>Associate Software Engineer in Carlon Global Solutions</p>
      <h2>Interests</h2>
      <ul>
        <li>Web Development</li>
        <li>Artificial Intelligence</li>
        <li>Open Source</li>
      </ul>
      <a href="/">LinkedIN</a>
      <a href="/">Twitter</a>
    </div>
  );
}

export default App;
