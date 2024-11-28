export interface IUserAuth {
  id: number;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token ?: string;
}
