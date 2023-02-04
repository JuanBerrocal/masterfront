export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    episode: string[];
    created: Date;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  episode: [],
  created: null,
});
