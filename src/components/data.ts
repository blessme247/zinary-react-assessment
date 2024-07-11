export const withdrawalData = [
    {id: 1, title: "Withdrawals", amount: "N3,402,300", cases: "722 Cases" },
    {id: 2, title: "Withdrawals", amount: "N3,402,300", cases: "722 Cases" },
    {id: 3, title: "Withdrawals", amount: "N3,402,300", cases: "722 Cases" },
    {id: 4, title: "Withdrawals", amount: "N3,402,300", cases: "722 Cases" },
]

interface Transaction {
    id: string;
    name: string;
    reference: string;
    type: string;
    amount: string;
    date: string;
    status: 'Successful' | 'Failed' | 'Pending';
  }

  export const transactions: Transaction[] = [
    {
      id: '0000001',
      name: 'Tife Balogun',
      reference: 'tanya.hill@example.com',
      type: 'Deposit',
      amount: '₦34,694.145',
      date: 'Dec 4, 2019 21:42',
      status: 'Successful',
    },
    {
      id: '0000002',
      name: 'Kelechi Nwosu',
      reference: 'georgia.young@example.com',
      type: 'Withdrawal',
      amount: '₦784,324.34',
      date: 'Dec 7, 2019 23:26',
      status: 'Failed',
    },
    {
      id: '0000003',
      name: 'Temi Obadofin',
      reference: 'deanna.curtis@example.com',
      type: 'Payments',
      amount: '₦11,784.22',
      date: 'Dec 30, 2019 05:18',
      status: 'Pending',
    },
    {
        id: '0000004',
        name: 'Harry Potter',
        reference: 'harry.curtis@example.com',
        type: 'Payments',
        amount: '₦21,784.22',
        date: 'Dec 30, 2019 05:18',
        status: 'Pending',
      },
      {
        id: '0000005',
        name: 'Peter Pan',
        reference: 'peter.curtis@example.com',
        type: 'Deposit',
        amount: '₦21,784.22',
        date: 'Dec 30, 2019 05:18',
        status: 'Successful',
      },
  ];
  