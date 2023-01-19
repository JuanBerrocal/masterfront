import * as React from 'react';
import { CharacterEntityVm, CharacterResponseVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((response) => {
      setCharacterCollection(mapToCollection(response, mapFromApiToVm));
    }
    );
  };

  return { characterCollection, loadCharacterCollection };
};
