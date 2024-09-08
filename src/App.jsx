import { useState } from "react";
import People from "./People";
import data from './data.js';

const App = () => {
  const [person, setPerson] = useState(data);

  return <main>
    <section className="container">
      <h3>{person.length} Birthdays Today</h3>
      {
        person.map((val) => {
          return <People {...val} key={val.id}></People>
        })
      }
      <button type="button" className="btn btn-block" onClick={() => setPerson([])}>Clear All</button>
    </section>


  </main>

};
export default App;
