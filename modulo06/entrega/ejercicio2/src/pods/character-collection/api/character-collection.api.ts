
import Axios from 'axios';

import { CharacterEntityApi, CharacterResponseApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
let url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return characterCollection;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== parseInt(id));
  return true;
};


