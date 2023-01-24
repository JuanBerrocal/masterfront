
import Axios from 'axios';

import { CharacterEntityApi, CharacterResponseApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let url = '/api/characters';

export const getCharacterCollection = async () => {
  return Axios.get<CharacterEntityApi[]>(url).then((response) => response.data);
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  return Axios.delete(`${url}/${id}`).then(() => true);
};


