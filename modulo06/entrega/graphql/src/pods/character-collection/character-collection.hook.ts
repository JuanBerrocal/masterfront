import * as React from 'react';
import { CharacterEntityVm, CharacterResponseVm } from './character-collection.vm';
import { getCharacterResponse } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterResponse, setCharacterResponse] = React.useState<CharacterResponseVm>(
    {info: {count: 0, pages: 0 }, results: []}
  );

  const loadCharacterResponse = (target: string, page: number) => {
    getCharacterResponse(target, page).then((response) => {
      setCharacterResponse({info: response.info, results: mapToCollection(response.results, mapFromApiToVm)});
    }
    );
  };

  return { characterResponse, loadCharacterResponse };
};
