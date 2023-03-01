import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [veri, setVeri] = useState("");

  const [tarih, setTarih] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setVeri(res.data[tarih]))
      .catch((err) => console.log(err));
  }, [veri, tarih]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto mt-5">
            <h2 className="text-center text-white display-4 p-5">
              Covid-19 Searching Engine
            </h2>
            <h6 className="text-center p-4 text-warning"> Please enter the dates between "11/03/2020" and "07/09/2021" </h6>
            <input
              type="text"
              placeholder=".../.../..."
              className="form-control"
              onChange={(e) => setTarih(e.target.value)}
            />

            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Number of TotalTests</th>
                  <th scope="col">Number of Patients</th>
                  <th scope="col">Number of Deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr className={veri===undefined ? "bg-danger" : "bg-success"} >
                  <th scope="row"> {veri === undefined ? "Data Waiting" : veri.date} </th>
                  <td className="text-white"  >
                    {veri === undefined ? "Data Waiting" : veri.totalTests}
                  </td>
                  <td className="text-white" >{veri === undefined ? "Data Waiting" : veri.patients}</td>
                  <td className="text-white" > {veri === undefined ? "Data Waiting" : veri.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
