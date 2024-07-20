import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import { generateRandomKey } from '../utils/generateRandomKey';


const Dashboard = lazy(() => import('../views/Dashboard'));
const Wallet = lazy(() => import('../views/Wallet'));
const ShortLoan = lazy(()=> import('../views/ShortLoan'))
const InstallmentalLoan = lazy(()=> import('../views/InstallmentalLoan'))
const Loans = lazy(()=> import('../views/Loans'))
const Transactions = lazy(()=> import('../views/Transactions'))
const Settings = lazy(()=> import('../views/Settings'))
const Users = lazy(()=> import('../views/Users'))
const Staff = lazy(()=> import('../views/Staff'))
const Payments = lazy(()=> import('../views/Payments'))
const AuditTrail = lazy(()=> import('../views/AuditTrail'))

const routes = [
	{ path: '/', component: <Dashboard /> },
	{ path: '/wallet', component: <Wallet /> },
	{ path: '/shortloan', component: <ShortLoan /> },
	{ path: '/installmentloan', component: <InstallmentalLoan /> },
	{ path: '/loans', component: <Loans /> },
	{ path: '/transactions', component: <Transactions /> },
	{ path: '/settings', component: <Settings /> },
	{ path: '/users', component: <Users /> },
	{ path: '/staff', component: <Staff /> },
	{ path: '/payments', component: <Payments /> },
	{ path: '/audit-trail', component: <AuditTrail /> },
];

const AppRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map((route) => (
					<Route
						path={route.path}
						element={<>{route.component}</>}
						key={generateRandomKey(12)}
					/>
				))}
			</Route>
			
		</Routes>
	);
};

export default AppRoute;
