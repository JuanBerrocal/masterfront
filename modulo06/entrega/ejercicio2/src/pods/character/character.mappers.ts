import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  bestSentences: character.bestSentences,
  image: character.image,
  episode: character.episode,
  created: character.created,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    bestSentences: character.bestSentences,
    image: character.image,
    episode: character.episode,
    created: character.created,
  } as unknown) as apiModel.Character);
