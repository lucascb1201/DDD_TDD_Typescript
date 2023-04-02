import { AccountRepositoryMemory } from "../../infra/repositories/account.repository.memory";
import { InputAccountDto } from "../dtos/input.account.dto";
import { AccountService } from "./account.service";
import { AccountRepository } from "../../domain/repositories/account.repository";

describe("AccountApplicationService", () => {
  test("create account using service and find by id and document", async () => {
    const createAccountDto = new InputAccountDto();
    createAccountDto.document = "111.111.111-11";
    createAccountDto.name = "Test name 1";

    const accountRepository: AccountRepository = new AccountRepositoryMemory();

    const accountService = new AccountService(accountRepository);

    await accountService.create(createAccountDto);

    const accountFoundByDocument = await accountService.findByDocument(
      createAccountDto.document
    );

    expect(accountFoundByDocument?.document).toBe(createAccountDto.document);

    const id = accountFoundByDocument?.id || "";

    const accountFoundById = await accountService.findById(id);

    expect(accountFoundById?.document).toBe(createAccountDto.document);
  });
});
