import { OutputAccountDto } from "../../application/dtos/output.account.dto";

export interface Controller<Input, Output> {
  index(): Promise<Array<Output>>;
  show(id: string): Promise<Output>;
  store(data: Input): Promise<void>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
