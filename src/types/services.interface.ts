export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  image: string;
  origin: {
    name: string;
    url: string;
  };
};

export interface ApiResponse {
  info: {
    pages: number;
  };
  results: Character[];
  error?: string
}

export interface User {
  username: string;
  email: string;
  password: string;
}
