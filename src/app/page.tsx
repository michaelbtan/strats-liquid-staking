import { TransactionsTable } from "@/components/transactions/TransactionsTable";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-7xl p-12 lg:px-8">
        <TransactionsTable />
      </div>
    </div>
  );
}
