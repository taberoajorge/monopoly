import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import InputComponent from '../InputComponent.tsx/InputComponent';

const StyledForm = styled.form`
  width: 30rem;
  background-color: var(--border-color);
  border: none;
  height: 50vh;
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;

`;
const StyledLabel = styled.label`
  color: var(--text-color);
  font-size: 1.8rem;
  display:flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin-left: 1rem;
  width: 7rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--secondary-color);
  color: var(--text-color);
  background-color: var(--secondary-color);
`;

const labels = ['title', 'price', 'rarity'];

function LandForm({ onOpenModal, createLand, value }) {

  const [values, handleOnChange] = useForm({
    id: Math.random() * 100 + 1 + '' + Math.random() * 100,
    title: value,
    price: '',
    rarity: '',
  });


  const onCreateLand = (event) => {
    event.preventDefault()
    createLand(values)
  };

  return (
    <StyledForm onSubmit={onCreateLand}>
      <StyledLabel htmlFor='Land'>
        <span>Estas seguro de crear esta Land?</span>

        
        {labels.map((label) => (
          <InputComponent 
          key={label}
          name={label}
          value={values.title}
          handleOnChange={handleOnChange}
          />
        )
        )}

        <div>
          <StyledButton onClick={() => onOpenModal()} type='button'>
            Cancelar
          </StyledButton>
          <StyledButton type='submit' >Crear</StyledButton>
        </div>

      </StyledLabel>
    </StyledForm>
  );
}

export { LandForm };
