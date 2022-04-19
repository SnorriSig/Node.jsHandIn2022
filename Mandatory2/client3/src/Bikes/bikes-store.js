import { readable, writable } from "svelte/store";

export const email = readable("snor0259@stud.kea.dk")

const bikes = writable([]);     

const customBikesStore = {
    subscribe: bikes.subscribe,
    setBikes: (bikeArray) => {
      bikes.set(bikeArray);
    },
    addBike: bikeData => {
      const newBike = {
        ...bikeData
      };
      bikes.update(items => {
        return [newBike, ...items];
      });
    },
    updateBike: (id, bikeData) => {
      bikes.update(items => {
        const bikeIndex = items.findIndex(i => i.id === id);
        const updatedBike = { ...items[bikeIndex], ...bikeData };
        const updatedBikes = [...items];
        updatedBikes[bikeIndex] = updatedBike;
        return updatedBikes;
      })
    }, 
    removeBike: (id) => {
      bikes.update(items => {
        return items.filter(i => i.id !== id);
        
      });
    },
    toggleFavorite: id => {
      bikes.update(items => {
        const updatedBike = { ...items.find(b => b.id === id) };
        updatedBike.isFavorite = !updatedBike.isFavorite;
        const bikeIndex = items.findIndex(b => b.id === id);
        const updatedBikes = [...items];
        updatedBikes[bikeIndex] = updatedBike;
        return updatedBikes;
      });
    }
  };
  
  export default customBikesStore; 