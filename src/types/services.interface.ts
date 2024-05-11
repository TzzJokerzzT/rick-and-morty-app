export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  image: string;
}

export interface ApiResponse {
  info: {
    pages: number;
  };
  results: Character[];
}

export interface User {
  username: string;
  email: string;
  password: string;
}
