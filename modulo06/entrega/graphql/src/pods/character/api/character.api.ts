import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
//import { mockCities, mockHotelCollection } from './hotel.mock-data';


export const getCharacter = async (id: string): Promise<Character> => {
  return Axios.get('https://rickandmortyapi.com/api/character/' + `${id}`).then(({data}) => data);
};

/*export const getHotel = async (id: string): Promise<Hotel> => {
  return mockHotelCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};*/

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
