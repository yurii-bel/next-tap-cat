export interface User {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo_url?: string;
}

export interface Click {
  x: number;
  y: number;
  id: string;
}

export interface StoreState {
  score: number;
  tapBonus: number;
  user: User | null;
  increment: () => void;
  buy: (price: number) => void;
  setUser: (user: User) => void;
}

export interface UserLabelProps {
  user?: User | null;
}
