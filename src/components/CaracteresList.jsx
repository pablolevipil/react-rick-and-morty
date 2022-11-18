import React, { useState, useEffect } from "react";
import Caracteres from "./Caracteres";

function CaracteresList() {
  const [caracteres, setCaracteres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [siguiente, setSiguiente] = useState(null);
  const [anterior, setAnterior] = useState(null);
  const [actual, setActual] = useState(
    "https://rickandmortyapi.com/api/character"
  );

  useEffect(() => {
    getData();
  }, [actual]);

  const getData = async () => {
    const response = await fetch(actual);
    const data = await response.json();
    setLoading(false);
    setCaracteres(data.results);
    setSiguiente(data.info.next);
    setAnterior(data.info.prev);
  };

  return (
    <div className="container">
      <div className="container text-center py-4 ">
        <button
          className="btn btn-primary m-3"
          onClick={() => anterior != null && setActual(anterior)}
        >
          Anterior
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={() => siguiente != null && setActual(siguiente)}
        >
          Siguiente
        </button>
      </div>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {caracteres.map((caracter, i) => {
            return (
              <div className="col-md-4" key={caracter.id}>
                <Caracteres caracter={caracter} />
              </div>
            );
          })}
        </div>
      )}
      <div className="container text-center py-4 ">
        <button
          className="btn btn-primary m-3"
          onClick={() => anterior != null && setActual(anterior)}
        >
          Anterior
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={() => siguiente != null && setActual(siguiente)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CaracteresList;
