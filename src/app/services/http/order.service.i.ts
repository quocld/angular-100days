export interface Order {
  _id: string;

  quantity: number;

  paid: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
