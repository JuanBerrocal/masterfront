import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import {CharacterCollectionContext, CharacterCollectionContextProvider} from './character-collection.context';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  //const {target, setTarget, page, setPage} = React.useContext(CharacterCollectionContext);

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };


  return (
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onCreateCharacter={handleCreateCharacter}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
  );
};
