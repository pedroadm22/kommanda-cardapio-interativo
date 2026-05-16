export interface User {
  name: string;
  phone: string;
}

export interface UserSession {
  user: User;
  mesa: string;
  authenticatedAt: string;
}