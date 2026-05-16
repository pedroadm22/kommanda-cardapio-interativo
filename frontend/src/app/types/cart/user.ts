// src/types/user.ts

/**
 * Representa o cliente ativo na sessão do PWA
 */
export interface User {
  name: string;
  phone: string;
  // Opcional: caso queira expandir para fidelidade no futuro
  id?: string;
  createdAt?: string;
}

/**
 * Representa a sessão completa de um cliente na mesa
 */
export interface UserSession {
  user: User;
  mesa: string;
  token?: string; // Caso o backend use JWT para validar o pedido
  authenticatedAt: string;
}

/**
 * Define o formato dos dados que salvamos nos Cookies/LocalStorage
 */
export interface AuthState {
  session: UserSession | null;
  setSession: (name: string, phone: string, mesa: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}