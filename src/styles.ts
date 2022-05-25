import styled, { css } from "styled-components";

interface IProps {
  isOpen?: boolean;
}

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50px;
  width: 300px;
  margin: 0 auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.5px solid #dfdfdf;
  border-radius: 11px;
  padding: 0.1rem;
`;

export const DropdownText = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;
  border-radius: 11px;
  padding: 0.35rem;
  cursor: pointer;
  height: auto;
  user-select: none;

  &::after {
    color: #707070;
    font: var(--fa-font-solid);
    content: "\f0d7";
    font-size: 30px;
    transition: all 0.3s;
    float: right;
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
      `}
  }

  > input {
    all: unset;
    width: 85%;
    height: 30px;
    font-size: 16px;
  }
`;

export const DropdownItems = styled.div<IProps>`
  position: relative;
  visibility: hidden;
  opacity: 0;
  max-height: 0px;
  transition: max-height 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      border-top: 1px solid #d6d6d6;
      width: 90%;
      max-height: 500px;
      opacity: 1;
      transition: max-height 0.7s, opacity 2s, visibility 4s ease;
    `}
`;

export const DropdownItem = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid #d6d6d6;
  }

  > input {
    transition: all 0.2s;
    border: none;
    /* text-overflow: ellipsis; */
    font-size: 15px;
    cursor: pointer;
    height: 40px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  :hover {
    > input {
      background: #ebebeb;
    }
  }
`;
