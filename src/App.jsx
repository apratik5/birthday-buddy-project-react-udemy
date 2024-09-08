import { Fragment, useState } from "react";
import People from "./People";
import Data from './data.js';

const App = () => {
  const [data, setData] = useState(Data);

  return <main>
    <section className="container">
      <h3>{data.length} Birthdays Today</h3>;
      {
        data.map((val) => {
          return <People {...val} key={val.id}></People>
        })
      }
      <button type="button" className="btn btn-block" onClick={() => setData([])}>Clear All</button>
    </section>


  </main>

};
export default App;
