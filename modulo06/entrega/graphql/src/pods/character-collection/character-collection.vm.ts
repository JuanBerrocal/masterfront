export interface CharacterEntityVm {
  id: string;
  image: string;
  name: string;
}

export interface CharacterResponseVm {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterEntityVm[];
}
