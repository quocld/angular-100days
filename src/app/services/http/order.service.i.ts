export interface Order {
  _id: string;

  quantity: number;

  paid: boolean;

  createdAt: string;

  updatedAt?: string;

  __v: number;
}
