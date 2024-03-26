
import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
     { ID: 1, Name: 'LENOVO', Age: 27 },
     { ID: 2, Name: 'MAC', Age: 25 },
     { ID: 3, Name: 'ASUS', Age: 22 },
     { ID: 4, Name: 'HP', Age: 30 },
     { ID: 5, Name: 'DELL', Age: 29 },
  ];
  return (
     <div>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
           Array of Objects - Table View
        </h1> 
        <TableView data={data} />
     </div>
  );
};
export default App;