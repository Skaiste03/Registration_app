import React from 'react';
import { StyledSelectDiv } from './TimeSelector.style';

const TimeSelector = ({ onChangeHours, onChangeMinutes }) => {
  return (
    <StyledSelectDiv>
      <select onChange={onChangeHours}>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
        <option value='13'>13</option>
        <option value='14'>14</option>
        <option value='15'>15</option>
        <option value='16'>16</option>
      </select>
      <span>:</span>
      <select onChange={onChangeMinutes}>
        <option value='00'>00</option>
        <option value='30'>30</option>
      </select>
    </StyledSelectDiv>
  );
};

export default TimeSelector;
