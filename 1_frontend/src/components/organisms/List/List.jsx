import React, { useState, useEffect } from 'react';
import api from '../../../shared/api';
import Button from '../../atoms/Button';
import Pagination from '../../atoms/Pagination';
import ErrorMessage from '../../atoms/ErrorMessage';
import {
  StyledTableContainer,
  StyledTable,
  StyledHeadline,
  StyledMessage,
  StyledButtonTd,
} from './List.style';

const List = () => {
  // useState
  const [clientsData, setClientsData] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);

  // Side Effects
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  // Functions

  // GET data
  const getData = async (page) => {
    try {
      const { limitedClientsData, pages } = await api.getData(page);
      const array = [];

      array.push(...limitedClientsData);

      // Pages limit
      setPages(pages);
      setClientsData(array);
    } catch (error) {
      setResponseMessage(`Cannot get clients data try again later`);
    }
  };

  // UPDATE data
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

    try {
      const message = await api.updateData(id, newData);

      setResponseMessage(message.message);
      getData(currentPage);
    } catch (error) {
      setResponseMessage(error.response.data.message);
    }

    setTimeout(() => {
      setResponseMessage('');
    }, 6000);
  };

  // DELETE data
  const deleteAppointment = async (id) => {
    const message = await api.deleteData(id);

    setResponseMessage(message.message);
    getData(currentPage);

    setTimeout(() => {
      setResponseMessage('');
    }, 6000);
  };

  return (
    <StyledTableContainer>
      <StyledHeadline>
        <h3>APPOINTMENTS LIST</h3>
      </StyledHeadline>
      <StyledMessage>
        {responseMessage && <ErrorMessage text={responseMessage} />}
      </StyledMessage>
      {clientsData.length > 0 && (
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
            {clientsData.map((client) => (
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
                <StyledButtonTd>
                  <Button
                    primary={true}
                    text={'Edit'}
                    action={() => editAppointment(client._id)}
                  />
                  <Button
                    text={'Delete'}
                    action={() => deleteAppointment(client._id)}
                  />
                </StyledButtonTd>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      {pages > 1 && (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          action={setCurrentPage}
        />
      )}
    </StyledTableContainer>
  );
};

export default List;
