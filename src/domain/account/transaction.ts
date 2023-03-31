export interface TransactionInputProps {
  type: "CREDIT" | "DEBIT";
  amount: number;
}

export class Transaction {
  type!: "CREDIT" | "DEBIT";
  amount!: number;

  constructor(props: TransactionInputProps) {
    Object.assign(this, props);
  }
}
