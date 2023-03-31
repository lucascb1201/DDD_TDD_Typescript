import { InputAccountDto } from "../dtos/input.account.dto";
import { OutputAccountDto } from "../dtos/output.account.dto";
import { Controller } from "../../domain/controllers/account.controller";
import { AccountService } from "../services/account.service";

export class AccountController
  implements Controller<InputAccountDto, OutputAccountDto>
{
  constructor(private accountService: AccountService) {}

  index(): Promise<OutputAccountDto[]> {
    throw new Error("Method not implemented.");
  }
  show(id: string): Promise<OutputAccountDto> {
    throw new Error("Method not implemented.");
  }
  async store(data: InputAccountDto): Promise<void> {
    return await this.accountService.create(data);
  }
  update(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
