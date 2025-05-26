export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    // …otros campos
  };
}

export interface MeResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

