import React, { useEffect } from 'react';

export default function Api() {
    const [data, setData] = React.useState('Esperando data...');

    const getData = async () => {
      try {
        fetch('http://localhost:3000/api')
        .then((res) => res.json())
        .then((data) => setData(data.message));
      } catch (error) {
          console.error(error);
      }
  };

  useEffect(() => {

      (async () => {
          await getData();
      })();

  }, []);

      return (
        <div className="App">
          <header className="App-header">
            <p>{!data ? "Loading..." : data}</p>
          </header>
        </div>
      );
}