import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface ListTransaction {
  transactions: Transaction[];
  balance: Balance;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { income: 0, outcome: 0, total: 0 };
  }

  public all(): ListTransaction {
    // TODO
    const transactions = {
      transactions: this.transactions,
      balance: this.balance,
    };

    return transactions;
  }

  public getBalance(): Balance {
    // TODO
    return this.balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    this.balance[type] += value;
    this.balance.total = this.balance.income - this.balance.outcome;
    return transaction;
  }
}

export default TransactionsRepository;
