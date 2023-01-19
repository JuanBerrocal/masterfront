import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: (character.id).toString(),
  /*image: `${process.env.BASE_PICTURES_URL}/${character.thumbNailUrl}`,*/
  image: character.image,
  name: character.name,
});
