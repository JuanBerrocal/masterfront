import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';
import { CharacterCollectionContextProvider } from '../../pods/character-collection/character-collection.context';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <CharacterCollectionContextProvider>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
      </Switch>
      </CharacterCollectionContextProvider>
    </HashRouter>
  );
};
