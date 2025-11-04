const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

class BugService {
  async getAllBugs() {
    try {
      const response = await fetch(`${API_BASE_URL}/bugs`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching bugs:', error);
      throw error;
    }
  }

  async createBug(bugData) {
    try {
      const response = await fetch(`${API_BASE_URL}/bugs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bugData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating bug:', error);
      throw error;
    }
  }

  async updateBug(id, updateData) {
    try {
      const response = await fetch(`${API_BASE_URL}/bugs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating bug:', error);
      throw error;
    }
  }

  async deleteBug(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/bugs/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error deleting bug:', error);
      throw error;
    }
  }
}

export const bugService = new BugService();