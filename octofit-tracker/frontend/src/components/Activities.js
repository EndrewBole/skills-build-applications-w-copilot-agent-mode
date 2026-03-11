import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results ? json.results : json;
        setData(results);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched data:', results);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-primary">Activities</h2>
        <button className="btn btn-primary mb-3">Adicionar Atividade</button>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {data.length > 0 && Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  {Object.values(item).map((val, i) => (
                    <td key={i}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
