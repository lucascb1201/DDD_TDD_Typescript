import { Account } from "../../domain/account/account";
import { AccountRepository } from "../../domain/repositories/account.repository";

export class AccountRepositoryMemory implements AccountRepository {
  private accounts: Array<Account> = [];

  async save(account: Account): Promise<void> {
    return await new Promise((resolve, reject) => {
      const index = this.accounts.findIndex(
        (acc) => acc?.document === account?.document
      );

      if (index >= 0) this.accounts[index] = account;
      else this.accounts.push(account);

      resolve();
    });
  }

  async getById(id: string): Promise<Account> {
    return await new Promise((resolve, reject) => {
      const account = this.accounts.find((acc) => acc?.id === id);

      if (!account) throw new Error("Resource not found");

      resolve(account);
    });
  }

  async getAll(page: number, limit: number): Promise<Account[]> {
    return await new Promise((resolve, reject) => {
      resolve(this.accounts);
    });
  }

  async getByDocument(document: string): Promise<Account> {
    return await new Promise((resolve, reject) => {
      const account = this.accounts.find((acc) => acc?.document === document);

      if (!account) throw new Error("Resource not found");

      resolve(account);
    });
  }

  async delete(id: string): Promise<void> {
    return await new Promise((resolve, reject) => {
      const account = this.accounts.findIndex((acc) => acc?.id === id);

      if (account === -1) throw new Error("Resource not found");

      this.accounts = this.accounts.filter((acc) => acc?.id !== id);

      resolve();
    });
  }
}
