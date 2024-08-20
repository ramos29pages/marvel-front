import { MessagesComponent } from './../components/messages/messages.component';
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
  status: boolean;
  message: string;
  token ?: string;
}
