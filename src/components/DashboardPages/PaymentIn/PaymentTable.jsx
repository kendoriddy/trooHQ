import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import chips1 from "../../../assets/images/svg/chips.svg";
import chips from "../../../assets/images/svg/chips1.svg";
import { MoreVert } from "@mui/icons-material";

const columns = [
  //   { field: "id", headerName: "ID", width: 165 },
  { field: "referenceNo", headerName: "Reference No" },
  { field: "customerName", headerName: "Customer name" },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <div
        style={{
          backgroundColor: params.value === "Paid" ? "#E7F7E8" : "#F7F4E7",
          color:
            params.value === "Paid"
              ? "#074909"
              : params.value === "Partially paid"
              ? "#605109"
              : "transparent",
          padding: "2px 10px",
          borderRadius: "100px",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        {params.value}
      </div>
    ),
  },
  { field: "paymentType", headerName: "Payment type" },
  { field: "amount", headerName: "Amount" },
  { field: "date", headerName: "Date" },
  {
    field: "action",
    headerName: "Action",
    description: "Action",
    sortable: false,
    renderCell: (params) => (
      <div className="cursor-pointer">
        <MoreVert />
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 2,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 3,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 4,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 5,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 6,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 7,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
];

export default function PaymentTable() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <span className="text-[#012320] text-[16px] font-medium mb-4 md:mb-0">
          Payment History
        </span>
        <div className="flex items-center justify-end gap-4">
          <img src={chips} alt="button" className="cursor-pointer" />
          <img src={chips1} alt="button" className="cursor-pointer" />
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.map((col) => ({
          ...col,
          headerClassName: "custom-header-class",
        }))}
        pageSize={1000}
        className="border-none"
        style={{ border: "none", width: "100%" }}
        checkboxSelection
      />
    </div>
  );
}