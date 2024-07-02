export interface IUser{
  _id: number;
  name: string;
  surname: string;
  flag: string;
  country: string;
  company: string;
  workPosition: string;
  profileURL: string;
  categories: Array<string>;
}
