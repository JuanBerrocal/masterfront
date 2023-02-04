import Axios from 'axios';
import { CharacterEntityApi, CharacterResponseApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let characterCollectionCollection = [...mockHotelCollection];
let characterCollection = [];

export const getCharacterResponse = async (target: string, page:number): Promise<CharacterResponseApi> => {
  return Axios.get(`https://rickandmortyapi.com/api/character/?name=${target}&page=${page}`).then(({data}) => data);
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
