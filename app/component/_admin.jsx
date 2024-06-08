// "use client"
// import Link from "next/link"
// import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
// import { ResponsiveBar } from "@nivo/bar"
// import { ResponsiveLine } from "@nivo/line"
// import { ResponsivePie } from "@nivo/pie"

// export default function Component() {
//     return (
//         <div className="flex min-h-screen w-full">
//             <div className="fixed left-0 top-0 z-10 h-full w-[250px] rounded-r-2xl bg-white shadow-lg">
//                 <div className="flex h-full flex-col">
//                     <div className="flex h-16 items-center justify-center bg-white rounded-tr-2xl">
//                         <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
//                             <Package2Icon className="h-6 w-6 text-violet-500" />
//                             <span className="text-2xl">Admin</span>
//                         </Link>
//                     </div>
//                     <nav className="flex-1 overflow-y-auto px-4 py-6">
//                         <Collapsible className="grid gap-2">
//                             <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white [&[data-state=open]>svg]:rotate-90">
//                                 <div className="flex items-center gap-2">
//                                     <LayoutGridIcon className="h-5 w-5 text-violet-500 group-hover:text-white" />
//                                     <span>Dashboard</span>
//                                 </div>
//                                 <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:text-violet-500" />
//                             </CollapsibleTrigger>
//                             <CollapsibleContent className="grid gap-1 pl-4">
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Overview
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Analytics
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Reporting
//                                 </Link>
//                             </CollapsibleContent>
//                         </Collapsible>
//                         <Collapsible className="grid gap-2">
//                             <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white [&[data-state=open]>svg]:rotate-90">
//                                 <div className="flex items-center gap-2">
//                                     <ShoppingBagIcon className="h-5 w-5 text-violet-500 group-hover:text-white" />
//                                     <span>Orders</span>
//                                 </div>
//                                 <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:text-violet-500" />
//                             </CollapsibleTrigger>
//                             <CollapsibleContent className="grid gap-1 pl-4">
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     All Orders
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Pending
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Shipped
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Cancelled
//                                 </Link>
//                             </CollapsibleContent>
//                         </Collapsible>
//                         <Collapsible className="grid gap-2">
//                             <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white [&[data-state=open]>svg]:rotate-90">
//                                 <div className="flex items-center gap-2">
//                                     <BoxIcon className="h-5 w-5 text-violet-500 group-hover:text-white" />
//                                     <span>Products</span>
//                                 </div>
//                                 <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:text-violet-500" />
//                             </CollapsibleTrigger>
//                             <CollapsibleContent className="grid gap-1 pl-4">
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     All Products
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Categories
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Inventory
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Reviews
//                                 </Link>
//                             </CollapsibleContent>
//                         </Collapsible>
//                         <Collapsible className="grid gap-2">
//                             <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white [&[data-state=open]>svg]:rotate-90">
//                                 <div className="flex items-center gap-2">
//                                     <UsersIcon className="h-5 w-5 text-violet-500 group-hover:text-white" />
//                                     <span>Customers</span>
//                                 </div>
//                                 <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:text-violet-500" />
//                             </CollapsibleTrigger>
//                             <CollapsibleContent className="grid gap-1 pl-4">
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     All Customers
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Groups
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Subscriptions
//                                 </Link>
//                             </CollapsibleContent>
//                         </Collapsible>
//                         <Collapsible className="grid gap-2">
//                             <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white [&[data-state=open]>svg]:rotate-90">
//                                 <div className="flex items-center gap-2">
//                                     <SettingsIcon className="h-5 w-5 text-violet-500 group-hover:text-white" />
//                                     <span>Settings</span>
//                                 </div>
//                                 <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:text-violet-500" />
//                             </CollapsibleTrigger>
//                             <CollapsibleContent className="grid gap-1 pl-4">
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     General
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Payments
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Shipping
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-violet-500 hover:text-white"
//                                     prefetch={false}
//                                 >
//                                     Notifications
//                                 </Link>
//                             </CollapsibleContent>
//                         </Collapsible>
//                     </nav>
//                 </div>
//             </div>
//             <div className="ml-[250px] flex-1 overflow-y-auto">
//                 <div className="p-8">
//                     <h1 className="text-3xl font-bold">Dashboard</h1>
//                     <p className="mt-2 text-gray-500">Welcome to your admin dashboard. Here you can manage your store.</p>
//                     <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Total Orders</CardTitle>
//                                 <CardDescription>1,234</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <BarChart className="w-full aspect-[4/3]" />
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Total Revenue</CardTitle>
//                                 <CardDescription>$123,456</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <LineChart className="w-full aspect-[4/3]" />
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>New Customers</CardTitle>
//                                 <CardDescription>234</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <PieChart className="w-full aspect-[4/3]" />
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Top Products</CardTitle>
//                                 <CardDescription>Shoes, Shirts, Pants</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <Table>
//                                     <TableHeader>
//                                         <TableRow>
//                                             <TableHead>Product</TableHead>
//                                             <TableHead>Sales</TableHead>
//                                             <TableHead>Revenue</TableHead>
//                                         </TableRow>
//                                     </TableHeader>
//                                     <TableBody>
//                                         <TableRow>
//                                             <TableCell>Shoes</TableCell>
//                                             <TableCell>1,234</TableCell>
//                                             <TableCell>$12,345</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell>Shirts</TableCell>
//                                             <TableCell>987</TableCell>
//                                             <TableCell>$9,876</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell>Pants</TableCell>
//                                             <TableCell>654</TableCell>
//                                             <TableCell>$6,543</TableCell>
//                                         </TableRow>
//                                     </TableBody>
//                                 </Table>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function BarChart(props) {
//     return (
//         <div {...props}>
//             <ResponsiveBar
//                 data={[
//                     { name: "Jan", count: 111 },
//                     { name: "Feb", count: 157 },
//                     { name: "Mar", count: 129 },
//                     { name: "Apr", count: 150 },
//                     { name: "May", count: 119 },
//                     { name: "Jun", count: 72 },
//                 ]}
//                 keys={["count"]}
//                 indexBy="name"
//                 margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//                 padding={0.3}
//                 colors={["#2563eb"]}
//                 axisBottom={{
//                     tickSize: 0,
//                     tickPadding: 16,
//                 }}
//                 axisLeft={{
//                     tickSize: 0,
//                     tickValues: 4,
//                     tickPadding: 16,
//                 }}
//                 gridYValues={4}
//                 theme={{
//                     tooltip: {
//                         chip: {
//                             borderRadius: "9999px",
//                         },
//                         container: {
//                             fontSize: "12px",
//                             textTransform: "capitalize",
//                             borderRadius: "6px",
//                         },
//                     },
//                     grid: {
//                         line: {
//                             stroke: "#f3f4f6",
//                         },
//                     },
//                 }}
//                 tooltipLabel={({ id }) => `${id}`}
//                 enableLabel={false}
//                 role="application"
//                 ariaLabel="A bar chart showing data"
//             />
//         </div>
//     )
// }


// function BoxIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//             <path d="m3.3 7 8.7 5 8.7-5" />
//             <path d="M12 22V12" />
//         </svg>
//     )
// }


// function ChevronRightIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m9 18 6-6-6-6" />
//         </svg>
//     )
// }


// function LayoutGridIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <rect width="7" height="7" x="3" y="3" rx="1" />
//             <rect width="7" height="7" x="14" y="3" rx="1" />
//             <rect width="7" height="7" x="14" y="14" rx="1" />
//             <rect width="7" height="7" x="3" y="14" rx="1" />
//         </svg>
//     )
// }


// function LineChart(props) {
//     return (
//         <div {...props}>
//             <ResponsiveLine
//                 data={[
//                     {
//                         id: "Desktop",
//                         data: [
//                             { x: "Jan", y: 43 },
//                             { x: "Feb", y: 137 },
//                             { x: "Mar", y: 61 },
//                             { x: "Apr", y: 145 },
//                             { x: "May", y: 26 },
//                             { x: "Jun", y: 154 },
//                         ],
//                     },
//                     {
//                         id: "Mobile",
//                         data: [
//                             { x: "Jan", y: 60 },
//                             { x: "Feb", y: 48 },
//                             { x: "Mar", y: 177 },
//                             { x: "Apr", y: 78 },
//                             { x: "May", y: 96 },
//                             { x: "Jun", y: 204 },
//                         ],
//                     },
//                 ]}
//                 margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//                 xScale={{
//                     type: "point",
//                 }}
//                 yScale={{
//                     type: "linear",
//                 }}
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 0,
//                     tickPadding: 16,
//                 }}
//                 axisLeft={{
//                     tickSize: 0,
//                     tickValues: 5,
//                     tickPadding: 16,
//                 }}
//                 colors={["#2563eb", "#e11d48"]}
//                 pointSize={6}
//                 useMesh={true}
//                 gridYValues={6}
//                 theme={{
//                     tooltip: {
//                         chip: {
//                             borderRadius: "9999px",
//                         },
//                         container: {
//                             fontSize: "12px",
//                             textTransform: "capitalize",
//                             borderRadius: "6px",
//                         },
//                     },
//                     grid: {
//                         line: {
//                             stroke: "#f3f4f6",
//                         },
//                     },
//                 }}
//                 role="application"
//             />
//         </div>
//     )
// }


// function Package2Icon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//             <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//             <path d="M12 3v6" />
//         </svg>
//     )
// }


// function PieChart(props) {
//     return (
//         <div {...props}>
//             <ResponsivePie
//                 data={[
//                     { id: "Jan", value: 111 },
//                     { id: "Feb", value: 157 },
//                     { id: "Mar", value: 129 },
//                     { id: "Apr", value: 150 },
//                     { id: "May", value: 119 },
//                     { id: "Jun", value: 72 },
//                 ]}
//                 sortByValue
//                 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//                 cornerRadius={0}
//                 padAngle={0}
//                 borderWidth={1}
//                 borderColor={"#ffffff"}
//                 enableArcLinkLabels={false}
//                 arcLabel={(d) => `${d.id}`}
//                 arcLabelsTextColor={"#ffffff"}
//                 arcLabelsRadiusOffset={0.65}
//                 colors={["#2563eb"]}
//                 theme={{
//                     labels: {
//                         text: {
//                             fontSize: "18px",
//                         },
//                     },
//                     tooltip: {
//                         chip: {
//                             borderRadius: "9999px",
//                         },
//                         container: {
//                             fontSize: "12px",
//                             textTransform: "capitalize",
//                             borderRadius: "6px",
//                         },
//                     },
//                 }}
//                 role="application"
//             />
//         </div>
//     )
// }


// function SettingsIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//             <circle cx="12" cy="12" r="3" />
//         </svg>
//     )
// }


// function ShoppingBagIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//             <path d="M3 6h18" />
//             <path d="M16 10a4 4 0 0 1-8 0" />
//         </svg>
//     )
// }


// function UsersIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//             <circle cx="9" cy="7" r="4" />
//             <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//         </svg>
//     )
// }

import React from 'react'

const _admin = () => {
  return (
    <div>
      
    </div>
  )
}

export default _admin
