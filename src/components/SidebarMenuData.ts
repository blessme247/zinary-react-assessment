import React, { MouseEvent } from 'react';
import { AuditIcon, DashboardIcon, LoanIcon, PaymentsIcon, SettingsIcon, StaffIcon, UsersIcon, WalletIcon } from './DashBoardIcons';

interface SubItem {
  id: string;
  label: string;
  link: string;
  parentId: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.FC<{ fill: string }>;
  link: string;
  click?: (e: MouseEvent<HTMLAnchorElement>) => void;
  subItems?: SubItem[];
}

const SidebarMenuData = () => {

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: DashboardIcon,
      link: '/',
      click: function (e) {
        e.preventDefault();
        const caretIcon = document.querySelector(".caretIcon") as HTMLElement
        if (caretIcon) {
            const currentRotation = caretIcon.style.transform;
      if (currentRotation === "rotate(90deg)") {
        caretIcon.style.transform = "rotate(0deg)";
      } else {
        caretIcon.style.transform = "rotate(90deg)";
      }
          }
      },
      subItems: [
        {
          id: 'shortloan',
          label: 'Short Loan',
          link: '/shortloan',
          parentId: 'dashboard',
        },
        {
          id: 'installmentloan',
          label: 'Installment Loan',
          link: '/installmentloan',
          parentId: 'dashboard',
        },
      ],
    },
    {
        id: 'loans',
        label: 'Loans',
        icon: LoanIcon,
        link: '/loans',
      },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: UsersIcon,
      link: '/transactions',
    },
    {
      id: 'users',
      label: 'Users',
      icon: UsersIcon,
      link: '/users',
    },
    {
        id: 'payments',
        label: 'Payments',
        icon: PaymentsIcon,
        link: '/payments',
      },
      {
        id: 'wallet',
        label: 'Wallet',
        icon: WalletIcon,
        link: '/wallet',
      },

      {
        id: 'staff',
        label: 'Staff',
        icon: StaffIcon,
        link: '/staff',
      },
      {
        id: 'audit',
        label: 'Audit Trail',
        icon: AuditIcon,
        link: '/audit-trail',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: SettingsIcon,
        link: '/settings',
      }
  ];

  return menuItems
};

export default SidebarMenuData;
