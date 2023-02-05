export interface CharacterEntityVm {
  id: string;
  image: string;
  name: string;
}

export interface CharacterResponseVm {
  info: {
    count: number;
    pages: number;
  };
  results: CharacterEntityVm[];
}
