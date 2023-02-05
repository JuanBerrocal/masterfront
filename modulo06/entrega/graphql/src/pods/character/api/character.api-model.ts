
export interface Episode {
  name: string;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    //type: string;
    gender: string;
    /*origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };*/
    image: string;
    /*episode: Episode[];*/
    /*url: string;*/
    created: Date;
  }


