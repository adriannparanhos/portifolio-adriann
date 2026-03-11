export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessageResponse {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}