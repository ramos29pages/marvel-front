export interface IUserAuth {
  id: number;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResponse {
  access_token: string;
  refresh_token: string;
}
