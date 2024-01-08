import React, { useEffect, useState } from 'react';
import { fetchLabs } from '../apis/labApis';
import { Lab } from '../apis/Lab';
import './LabsList.css';
const LabsList: React.FC = () => {
  const [labs, setLabs] = useState<Lab[]>([]);

  useEffect(() => {
    // Fetch labs from the API and update the state
    const fetchData = async () => {
      const labsData = await fetchLabs();
      setLabs(labsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Labs List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Lab Name</th>
            <th>Provider Group</th>
            <th>Provider Unit</th>
            <th>Address</th>
            <th>City</th>
            <th>Zip</th>
            <th>Mobile</th>
          
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {labs.map((lab) => (
            <tr key={lab.id}>
              <td>{lab.id}</td>
              <td>{lab.labName}</td>
              <td>{lab.providerGroup}</td>
              <td>{lab.providerUnit}</td>
              <td>{lab.address}</td>
              <td>{lab.city}</td>
              <td>{lab.zip}</td>
              <td>{lab.mobile}</td>
              <td>{lab.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabsList;
