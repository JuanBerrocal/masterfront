import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import {CharacterCollectionContext, CharacterCollectionContextProvider} from './character-collection.context';

export const CharacterCollectionContainer = () => {
  const { characterResponse, loadCharacterResponse } = useCharacterCollection();
  const history = useHistory();

  const {target, setTarget, page, setPage} = React.useContext(CharacterCollectionContext);

  React.useEffect(() => {
    loadCharacterResponse(target, 1);
  }, [target]);

  React.useEffect(() => {
    loadCharacterResponse(target, page);
  }, [page]);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
      <CharacterCollectionComponent
        characterResponse={characterResponse}
        onEdit={handleEdit}
      />
  );
};
