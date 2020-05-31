import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  background: rgba(0, 0, 0, 0.87);
  display: flex;
`

const TextBox = styled.textarea`
  background: transparent;
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
  color: #fff;
  padding: 16px;
  resize: none;

  &:focus {
    outline: none;
  }
`

function InputBox({ value, onChange }) {
  return (
    <Container>
      <TextBox
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></TextBox>
    </Container>
  )
}

InputBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputBox
