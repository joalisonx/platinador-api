interface IGame {
  name: string;
  platform: string;
  state: string;
  image: string;
  updatedAt: Date;
  description: string;
}

export type { IGame }