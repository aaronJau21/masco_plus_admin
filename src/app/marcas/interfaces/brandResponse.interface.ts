export interface Brand {
  id: number;
  name: string;
  activate: boolean;
  trabajador_id: number;
}

export interface IBrand {
  brand: Brand;
}
