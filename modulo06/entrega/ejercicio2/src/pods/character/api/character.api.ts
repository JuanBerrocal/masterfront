import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
//import { mockCities, mockHotelCollection } from './hotel.mock-data';

let url = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  //return Axios.get('https://rickandmortyapi.com/api/character/' + `${id}`).then(({data}) => data);
  return Axios.get(`${url}/${id}`).then((response) => response.data);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    return Axios.put(`${url}/${character.id}`, character).then(() => true);
  }
  else {
    return Axios.post(`${url}`, character).then(() => true);
  }
};
