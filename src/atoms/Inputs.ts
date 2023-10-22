import styled from '@emotion/styled';

export const InputSearch = styled.input`
  outline: none;
  border: 2px solid #eaeaea;
  padding: 2px 6px;
  border-radius: 4px;
  width: 87%;
  height: 40px;
  background: transparent;
  &::placeholder {
    color: #eaeaea;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  &:focus {
    color: #eaeaea;
  }
`;
