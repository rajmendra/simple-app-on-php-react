import { Lab } from '../apis/Lab';

const API_URL = 'http://localhost/api/index.php';

const fetchLabs = async (): Promise<Lab[]> => {
  try {
    const response = await fetch(`${API_URL}/labs`);
    
    if (!response.ok) {
      // Handle non-successful HTTP responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any other errors that might occur
    console.error('Error fetching labs:', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
};

const fetchProviderGroups = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_URL}/provider-groups`);

    if (!response.ok) {
      // Handle non-successful HTTP responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any other errors that might occur
    console.error('Error fetching provider groups:', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
};

const fetchProviderUnits = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_URL}/provider-units`);

    if (!response.ok) {
      // Handle non-successful HTTP responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any other errors that might occur
    console.error('Error fetching provider units:', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
};

const fetchTimezones = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_URL}/timezones`);

    if (!response.ok) {
      // Handle non-successful HTTP responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any other errors that might occur
    console.error('Error fetching timezones:', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
};

const postLabData = async (labData: any) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(labData),
    });

    if (!response.ok) {
      // Handle non-successful HTTP responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any other errors that might occur
    console.error('Error posting lab data:', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
};

export { fetchLabs, fetchProviderGroups, fetchProviderUnits, fetchTimezones, postLabData };