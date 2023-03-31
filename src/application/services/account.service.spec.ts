import { AccountRepositoryMemory } from "../../infra/repositories/account.repository.memory";
import { InputAccountDto } from "../dtos/input.account.dto";
import { AccountService } from "./account.service";

test("create account using service", async () => {
  const createAccountDto = new InputAccountDto();
  createAccountDto.document = "111.111.111-11";
  createAccountDto.name = "Test name 1";

  const accountRepository = new AccountRepositoryMemory();
  const accountService = new AccountService(accountRepository);

  await accountService.create(createAccountDto);
  const accountCreated = await accountService.findByDocument(
    createAccountDto.document
  );

  expect(accountCreated?.document).toBe(createAccountDto.document);
});
