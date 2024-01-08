// LabForm.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './LabForm.css';
import { Lab } from '../apis/Lab';
import { fetchProviderGroups, fetchProviderUnits, fetchTimezones, postLabData } from '../apis/labApis';

const LabForm: React.FC = () => {
  const [labData, setLabData] = useState<Lab>({
    labName: '',
    providerGroup: '',
    providerUnit: '',
    address: '',
    state:'',
    city: '',
    zip: '',
    officePhone: '',
    mobile: '',
    email: '',
    timezone: '',
  });

  const [providerGroups, setProviderGroups] = useState<any[]>([]);
  const [providerUnits, setProviderUnits] = useState<any[]>([]);
  const [timezones, setTimezones] = useState<any[]>([]);

  useEffect(() => {
    // Fetch provider groups
    fetchProviderGroups().then(data => setProviderGroups(data));

    // Fetch provider units
    fetchProviderUnits().then(data => setProviderUnits(data));

    // Fetch timezones
    fetchTimezones().then(data => setTimezones(data));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLabData({ ...labData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Use fetch or axios to send data to the PHP API
    try {
      const response = await postLabData(labData);
      setLabData({
        labName: '',
        providerGroup: '',
        providerUnit: '',
        address: '',
        state: '',
        city: '',
        zip: '',
        officePhone: '',
        mobile: '',
        email: '',
        timezone: '',
      });
  
      // Show a success message (you can use a state variable for this)
      alert('Lab registration successful!');
    } catch (error) {
      console.error('Error posting lab data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lab-form">
       <div className="form-row">
        <div className="form-group">
          <label>Lab Name:</label>
          <input type="text" name="labName" value={labData.labName} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
     
        <div className="form-group">
          <label>Provider Group:</label>
          <select name="providerGroup" value={labData.providerGroup} onChange={handleChange} required>
            {providerGroups.map(group => (
              <option key={group.id} value={group.name}>
                {group.name}
              </option>
            ))}
          </select>
        </div> <div className="form-group">
        <label>Provider Unit:</label>
        <select name="providerUnit" value={labData.providerUnit} onChange={handleChange} required>
          {providerUnits.map(unit => (
            <option key={unit.id} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>

      </div>
     
      <div className="form-row">
      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" value={labData.address} onChange={handleChange} required />
      </div>
      </div>
      <div className="form-row">
      <div className="form-group">
        <label>State:</label>
        <input type="text" name="state" value={labData.state} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" name="city" value={labData.city} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Zip:</label>
        <input type="number" name="zip" value={labData.zip} onChange={handleChange} required />
      </div>

      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Office Phone:</label>
        <input type="text" name="officePhone" value={labData.officePhone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Mobile:</label>
        <input type="number" name="mobile" value={labData.mobile} onChange={handleChange} required />
      </div>

      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={labData.email} onChange={handleChange} required />
      </div>
      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Timezone:</label>
        <select name="timezone" value={labData.timezone} onChange={handleChange} required>
          {timezones.map(timezone => (
            <option key={timezone.id} value={timezone.name}>
              {timezone.name}
            </option>
          ))}
        </select>
      </div>
      </div>

      <button type="submit">Register Lab</button>
    </form>
  );
};

export default LabForm;
