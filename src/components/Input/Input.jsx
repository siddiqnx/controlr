import React from 'react'
import styled from 'styled-components'
import { tInputLabel_0, tInputLabel_s1 } from 'style/typography';
const StyledInput = styled.div`
  position: relative;
  ${tInputLabel_0};

  input {
    background-color: ${({ theme }) => theme.cPrimary_750};
    border: 1px solid ${({ theme }) => theme.cPrimary_650};
    height: 48px;
    width: 100%;
    border-radius: 15px;
    padding: 0 15px;
    color: ${({ theme }) => theme.cPrimary_400};

   :not(:placeholder-shown),
   :focus,
   :-webkit-autofill  {
     background-color: transparent;
     border: 1px solid ${({ theme }) => theme.cAccent1_300};
   }

    :not(:placeholder-shown) ~ label,
    :focus ~ label,
    :-webkit-autofill ~ label {
      top: 0%;
      left: 12px;
      background-color: ${({ theme }) => theme.cPrimary_1000};
      padding: 0 6px;
      border-radius: ${({ theme }) => theme.brRadius_1};
      ${tInputLabel_s1};
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 18px;
    transition: all .1s ease-in-out;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.cPrimary_400};
  }
`;

export const Input = ({
  label,
  type,
  placeholder = " ",
  value,
  name,
  onChange,
  style,
  register,
  required,
  ...rest
}) => {
  return (
    <StyledInput style={style}>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={register(required && { required: required })}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </StyledInput>
  )
}
