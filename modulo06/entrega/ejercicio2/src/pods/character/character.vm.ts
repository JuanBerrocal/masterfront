export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    bestSentences: string[];
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
  bestSentences: [],
  image: '',
  episode: [],
  created: null,
});
