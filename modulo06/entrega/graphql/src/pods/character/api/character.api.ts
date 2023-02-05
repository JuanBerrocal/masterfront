import Axios from 'axios';
import {gql} from 'graphql-request';

import { Character } from './character.api-model';
import {graphQLClient} from './../../../core/api';
import { Lookup } from 'common/models';

//import { mockCities, mockHotelCollection } from './hotel.mock-data';


/*export const getCharacter = async (id: string): Promise<Character> => {
  return Axios.get('https://rickandmortyapi.com/api/character/' + `${id}`).then(({data}) => data);
};*/

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {

  const query = gql`
      query {
        character(id: "${id}") {
   	      id
          name
          status
          species
          gender
          image
 		      created
        }
      }
    `;

    const {character} = await graphQLClient.request<GetCharacterResponse>(query, {id});

    return character;

}

/*export const getHotel = async (id: string): Promise<Hotel> => {
  return mockHotelCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};*/

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
