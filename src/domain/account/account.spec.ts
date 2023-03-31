import { Account } from "./account";

test("create an account entity and deposit", () => {
  const account = new Account({
    document: "111.111.111-11",
  });

  account.credit(500);

  expect(account.getBalance()).toBe(500);
});

test("create an account entity and debit", () => {
  const account = new Account({
    document: "111.111.111-11",
  });

  account.credit(600);
  account.debit(500);

  expect(account.getBalance()).toBe(100);
});
