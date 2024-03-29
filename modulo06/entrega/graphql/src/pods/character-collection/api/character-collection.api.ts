import Axios from 'axios';
import {gql} from 'graphql-request';
import { CharacterEntityApi, CharacterResponseApi } from './character-collection.api-model';
import {graphQLClient} from './../../../core/api';

let characterCollection = [];


interface GetCharacterCollectionResponse  {
      characters: {
        info: {
          count: number;
          pages: number;
        }
        results: CharacterEntityApi[];
      }
}

export const getCharacterResponse = async (target: string, page:number): Promise<CharacterResponseApi> => {
  const query = gql`
    query {
      characters(page: ${page}, filter:{name: "${target}"})  {
   	    info {
          count
          pages
        } 
        results {
          id
          name
          image
        }
      }
    }
  `;

  const {characters} = await graphQLClient.request<GetCharacterCollectionResponse>(query, {page});

  return characters;
}

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
