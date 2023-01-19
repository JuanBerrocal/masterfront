import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterCollectionContainer } from 'pods/character-collection';
import { CharacterCollectionContextProvider } from '../pods/character-collection/character-collection.context';

export const CharacterCollectionScene = () => (
  <AppLayout>

      <CharacterCollectionContainer />

  </AppLayout>
);
