import axios from 'axios';

const HOST = 'http://localhost:5000';

class API {
  async getData() {
    const { data } = await axios.get(`${HOST}/api/clients`);

    return data;
  }
  async addData(clientData) {
    const { data } = await axios.post(`${HOST}/api/clients`, clientData);

    return data;
  }
  async updateData(id, clientData) {
    const { data } = await axios.put(`${HOST}/api/clients/${id}`, clientData);

    return data;
  }
  async deleteData(id) {
    const { data } = await axios.delete(`${HOST}/api/clients/${id}`);

    return data;
  }
}

const api = new API();

export default api;
