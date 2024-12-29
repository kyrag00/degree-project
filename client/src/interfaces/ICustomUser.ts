export interface ICustomUser {
  uid: string;
  email: string | null;
  firstName?: string;
  lastName?: string;
  getIdToken: () => Promise<string>;
}
