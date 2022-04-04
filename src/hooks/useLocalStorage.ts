import React from 'react';


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [itemsToLoad] = React.useState(
    JSON.parse(localStorage.getItem(itemName))
  );

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem('Land_V1', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch (error) {
        console.error(error);
      }
    }, 3000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    item,
    saveItem,
    itemsToLoad,
  };
}

export default useLocalStorage;