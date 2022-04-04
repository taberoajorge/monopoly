import React from 'react'
import useLocalStorage from './useLocalStorage';

type Props = {}

function useLands() {

  const [value, setValue] = React.useState('');
  const [toggleModal, setToggleModal] = React.useState(false);


  const {
    item: Lands,
    saveItem: saveLands,
  } = useLocalStorage('Land_V1', []);


  const deleteLand = (land) => {
    land.map(item => {
      const newLands = Lands.filter(land => land.id !== item.id);
      saveLands(newLands);
    })
  }

  const onOpenModal = () => {
    setToggleModal((prevState) => !prevState)
  }

  const createLand = (text) => {
    const newLand = [text]
    const newLands = [...newLand, ...Lands]
    saveLands(newLands)
    onOpenModal()
    setValue('')
  }

  return {
    value,
    setValue,
    deleteLand,
    createLand,
    onOpenModal,
    Lands,
    toggleModal,
    setToggleModal
  }
}

export default useLands
