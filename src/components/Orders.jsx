import { DocumentDownload } from "iconsax-react";
import User1 from "../assets/user-1.png";
import User2 from "../assets/user-2.png";
import User3 from "../assets/user-3.png";
import User4 from "../assets/user-4.png";
import User5 from "../assets/user-5.png";

const orders = [
  {
    photo: User1,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: 80000,
    status: "Paid",
  },
  {
    photo: User2,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: 150000,
    status: "Refund",
  },
  {
    photo: User3,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: 87000,
    status: "Paid",
  },
  {
    photo: User4,
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: 100000,
    status: "Refund",
  },
  {
    photo: User5,
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: 78000,
    status: "Paid",
  },
];

const Orders = () => {
  // const { orders } = Datas;
  // console.log(orders)

  const statusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-emerald-400";
      case "Refund":
        return "text-red-500";
      default:
    }
  };

  return (
    <div className="inline-flex w-full flex-col items-start justify-start rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-base font-semibold leading-relaxed text-zinc-800 dark:text-neutral-100">
          Last Orders
        </h3>
        <button className="cursor-pointer text-base font-medium text-emerald-400">
          See All
        </button>
      </div>

      <table className="scrollbar mx-auto mt-7 block w-full overflow-x-auto text-left">
        <thead>
          <tr className="">
            <th className="px-2 pb-3  text-left text-base font-medium text-gray-400 dark:text-neutral-200">
              Name
            </th>
            <th className="px-2 pb-3  text-left text-base font-medium text-gray-400 dark:text-neutral-200">
              Date
            </th>
            <th className="px-2 pb-3 text-left  text-base font-medium text-gray-400 dark:text-neutral-200">
              Amount
            </th>
            <th className="px-2 pb-3 text-left  text-base font-medium text-gray-400 dark:text-neutral-200">
              Status
            </th>
            <th className="px-2 pb-3 text-left  text-base font-medium text-gray-400 dark:text-neutral-200">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="w-[100px] py-3 text-sm font-medium text-gray-700 dark:text-neutral-300">
                {order.name}
              </td>
              <td className="py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400 ">
                {order.date}
              </td>
              <td className="py-3 text-sm font-medium text-slate-900 dark:text-neutral-200">
                ${order.amount.toLocaleString()}
              </td>
              <td
                className={`py-3 text-sm font-medium  ${statusColor(order.status)}`}
              >
                {order.status}
              </td>
              <td
                className={`inline-flex cursor-pointer items-center gap-3 py-3 text-sm font-medium text-slate-900 dark:text-neutral-400`}
              >
                <DocumentDownload size="14" variant="Outline" />
                <span>View</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
