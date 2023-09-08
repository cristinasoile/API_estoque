export interface IProductRequest {
  // São as mesmas informações que constam no banco de dados Não esquecer de referencia o category_id
  category_id: string,
  name: string,
  price: string,
  description: string,
  banner: string,
  amount: number,
}
