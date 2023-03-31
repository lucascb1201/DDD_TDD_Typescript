import { v4 as uuidV4 } from "uuid";
import { Transaction } from "./transaction";

interface AccountInputProps {
  document: string;
  id?: string;
  name?: string;
  branch?: string;
  account?: string;
  transactions?: Transaction[];
}

export class Account {
  id: string;
  document: string;

  private name?: string;
  private branch?: string;
  private account?: string;
  private transactions: Transaction[];

  constructor(props: AccountInputProps) {
    this.id = props?.id || uuidV4();
    this.transactions = props?.transactions || [];

    this.name = props?.name;
    this.document = props?.document;
    this.branch = props?.branch;
    this.account = props?.account;
  }

  credit(amount: number) {
    this.transactions?.push(
      new Transaction({
        type: "CREDIT",
        amount,
      })
    );
  }

  debit(amount: number) {
    this.transactions?.push(
      new Transaction({
        type: "DEBIT",
        amount,
      })
    );
  }

  getBalance(): number {
    let balance = 0;

    this.transactions?.forEach((transaction) => {
      if (transaction.type === "CREDIT") balance += transaction.amount;
      if (transaction.type === "DEBIT") balance -= transaction.amount;
    });

    return balance;
  }
}
