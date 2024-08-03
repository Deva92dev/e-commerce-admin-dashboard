import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UserRound,
} from 'lucide-react';

export const navLinks = [
  {
    url: '/admin',
    icon: <LayoutDashboard />,
    label: 'Dashboard',
  },
  {
    url: '/admin/collections',
    icon: <Shapes />,
    label: 'Collections',
  },
  {
    url: '/admin/products',
    icon: <Tag />,
    label: 'Products',
  },
  {
    url: '/admin/orders',
    icon: <ShoppingBag />,
    label: 'Orders',
  },
  {
    url: '/admin/customers',
    icon: <UserRound />,
    label: 'Customers',
  },
];
