import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StakeBlock from "./StakeBlock";
import UnStakeBlock from "./UnstakeBlock";

const transactions = [
  {
    date: "2024-10-01",
    type: "stake",
    hash: "0x1234abcd5678efgh9012ijkl",
    quantity: 10.5,
  },
  {
    date: "2024-10-05",
    type: "stake",
    hash: "0x5678mnop9012qrst3456uvwx",
    quantity: 3.25,
  },
  {
    date: "2024-10-12",
    type: "unstake",
    hash: "0x9abcde1234fgh5678ijkl901",
    quantity: 5.0,
  },
  {
    date: "2024-10-15",
    type: "stake",
    hash: "0xdef01234abcd5678efgh9012",
    quantity: 2.75,
  },
  {
    date: "2024-10-20",
    type: "stake",
    hash: "0x3456mnop7890qrst1234uvwx",
    quantity: 1.0,
  },
];


export function TransactionsTable() {
  return (
    <div>
        <h1 className="text-2xl mb-4">Transaction History</h1>
      <Table>
        <TableCaption>A list of your transactions on STRATS LST.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Hash</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.hash}>
              <TableCell>{transaction.type === 'stake' ? <StakeBlock /> : <UnStakeBlock />}</TableCell>
              <TableCell className="font-medium">{transaction.date}</TableCell>
              <TableCell>{transaction.hash}</TableCell>
              <TableCell className="text-right">
                {transaction.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
