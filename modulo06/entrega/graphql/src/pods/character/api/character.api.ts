import Axios from 'axios';
import {gql} from 'graphql-request';

import { Character } from './character.api-model';
import {graphQLClient} from './../../../core/api';
import { Lookup } from 'common/models';


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

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
