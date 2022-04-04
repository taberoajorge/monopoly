import React from 'react';
import styled from 'styled-components';
import {Check} from 'styled-icons/bootstrap/';
import {Delete} from 'styled-icons/fluentui-system-filled/';

const StyleLandItem = styled.li`
  height: var(--bar-size);
  padding: 1.2rem;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: var(--text-weigth);
  color: var(--text-color);
`;

const StyledButton = styled.button`
  border: 0.2rem solid var(--border-color);
  width: 2rem;
  height: 2rem;
  position: relative;
  border-radius: 50%;
  & > svg {
    margin: -0.2rem;
  }
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;
const StyledCheckBox = styled.div`
  display: flex;
  & > p {
    margin-left: 1rem;
    
  }
`;

function ListComponent({ text, onDelete }) {
  return (
    <StyleLandItem>
      <StyledCheckBox >
        <StyledButton >
        <Check size={20} color='white'/>
        </StyledButton>
        <p>{text}</p>
      </StyledCheckBox>

      <StyledDeleteButton  onClick={onDelete}>
      <Delete size={20} color='white'/>
      </StyledDeleteButton>
    </StyleLandItem>
  );
}

export { ListComponent };
