import React, { useState, useEffect } from 'react';
import api from '../../../shared/api';
import Button from '../../atoms/Button/Button';
import {
  StyledTableContainer,
  StyledTable,
  StyledMessage,
  StyledHeadline,
} from './List.style';

const List = () => {
  const [clientsData, setClientsData] = useState([]);
  const [message, setMessage] = useState('');

  // Side Effects
  useEffect(() => {
    async function getData() {
      const clients = await api.getData(1);
      const array = [];

      array.push(...clients);

      setClientsData(array);
    }

    getData();
  }, [clientsData]);

  // Functions

  const editAppointment = async (id) => {
    const name = document.querySelector(`#name${id}`);
    const email = document.querySelector(`#email${id}`);
    const date = document.querySelector(`#date${id}`);
    const time = document.querySelector(`#time${id}`);

    const newData = {
      name: name.value,
      email: email.value,
      date: date.value,
      time: time.value,
    };

    const message = await api.updateData(id, newData);

    setMessage(message.message);

    setTimeout(() => {
      setMessage('');
    }, 6000);
  };

  const deleteAppointment = async (id) => {
    const message = await api.deleteData(id);

    setMessage(message.message);

    setTimeout(() => {
      setMessage('');
    }, 6000);
  };

  const messageColor = () => {
    if (message.includes('not')) {
      return 'red';
    } else {
      return 'green';
    }
  };

  return (
    <StyledTableContainer>
      <StyledHeadline>
        <h3>Appointments List</h3>
      </StyledHeadline>
      {message && (
        <StyledMessage textColor={messageColor}>{message}</StyledMessage>
      )}
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clientsData &&
            clientsData.map((client) => (
              <tr key={client._id}>
                <td>
                  <input
                    id={'name' + client._id}
                    type='text'
                    defaultValue={client.name}
                  />
                </td>
                <td>
                  <input
                    id={'email' + client._id}
                    type='text'
                    defaultValue={client.email}
                  />
                </td>
                <td>
                  <input
                    id={'date' + client._id}
                    type='text'
                    defaultValue={client.date}
                  />
                </td>
                <td>
                  <input
                    id={'time' + client._id}
                    type='text'
                    defaultValue={client.time}
                  />
                </td>
                <td>
                  <Button
                    primary={true}
                    text={'Edit'}
                    action={() => editAppointment(client._id)}
                  />
                  <Button
                    text={'Delete'}
                    action={() => deleteAppointment(client._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default List;
