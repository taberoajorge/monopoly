import React from 'react';
import { ListComponent } from '../ListComponent/index';
import styled from 'styled-components';
import { LandMaker } from '../LandMaker';
import { Modal } from '../Modal/index';
import { LandForm } from '../LandForm/index';
import useLands from '../../hooks/useLands';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'price', headerName: 'Price', width: 130 },
  { field: 'rarity', headerName: 'Rarity', width: 130 }
];

const StyledSection = styled.section`
  list-style: none;
  border-radius: 0.5rem;
  background-color: var(--secondary-color);
  height: 55vh;
`;

const StyledWarningText = styled.p`
  width: 15rem;
  font-size: 1.5rem;
  background-color: red;
  position: relative;
  top: -0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

function ListContainer() {

  const [warning, setWarning] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const {
    value,
    setValue,
    deleteLand,
    createLand,
    onOpenModal,
    Lands,
    toggleModal,
    setToggleModal
  } = useLands();


  return (
    <>
      {warning && <StyledWarningText>Establece un valor</StyledWarningText>}
      <LandMaker
        setWarning={setWarning}
        value={value}
        setValue={setValue}
        onOpenModal={onOpenModal}
        createLand={createLand}

      />
      <StyledSection>



        <div style={{ height: 400, width: '100%' }}>

          {true && (<DataGrid
            rows={Lands}
            columns={columns}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = Lands.filter((row) =>
                selectedIDs.has(row.id),
              );
              setSelectedRows(selectedRows);
            }}
          />)}
        </div>

      </StyledSection>

      <Button
        variant='contained'
        onClick={() => {
          if (selectedRows.length > 0) {
            deleteLand(selectedRows);
            setSelectedRows([]);
          } else {
            console.log('No hay nada seleccionado');
          }
        }}
        disabled={selectedRows.length === 0}
        sx={{
          margin: '1rem auto',
          padding: '1rem',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '0.5rem',
          position: 'absolute',
          right: '45%',
          width: '10rem',
        }}

      >Eliminar
      </Button>

      {toggleModal && (
        <Modal>
          <LandForm
            setValue={setValue}
            value={value}
            createLand={createLand}
            onOpenModal={onOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export { ListContainer };
