import { Account } from "../account/account";

export interface AccountRepository {
  save(account: Account): Promise<void>;
  getById(id: string): Promise<Account>;
  getAll(page: number, limit: number): Promise<Array<Account>>;
  getByDocument(document: string): Promise<Account>;
  delete(id: string): Promise<void>;
}
