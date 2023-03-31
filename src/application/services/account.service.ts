import { isString, isUUID, validate } from "class-validator";
import { Account } from "../../domain/account/account";
import { AccountRepository } from "../../domain/repositories/account.repository";
import { InputAccountDto } from "../dtos/input.account.dto";

export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  async create(createDto: InputAccountDto): Promise<void> {
    try {
      await validate(createDto).then((errors) => {
        if (errors.length) throw new Error(JSON.stringify(errors));
      });

      const account = new Account({
        document: createDto.document,
        name: createDto.name,
      });

      return await this.accountRepository.save(account);
    } catch {}
  }

  async findById(id: string): Promise<Account | undefined> {
    try {
      if (!isUUID(id)) throw new Error("Invalid identification");

      return await this.accountRepository.getById(id);
    } catch {}
  }

  async findByDocument(document: string): Promise<Account | undefined> {
    try {
      if (!isString(document)) throw new Error("Invalid identification");

      return await this.accountRepository.getByDocument(document);
    } catch {}
  }
}
