import React, { useMemo } from "react";
import { customersData } from "./lot_data";

function Table() {
    const columns = useMemo(
        () => [
            {
                Header: "Customer",
                accessor: "customer",
            },
            {
                Header: "Deposit",
                accessor: "deposit",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Voucher NO.",
                accessor: "voucherNo",
            },
            {
                Header: "Trans.Status",
                accessor: "status",
            },
        ],
        []
    );

    const data = useMemo(() => customersData(), []);

    return (
        <>
            <h1>Hello React!</h1>
            <div>
                <Table columns={columns} data={data} />
            </div>
        </>
    );
}

export default Table;
