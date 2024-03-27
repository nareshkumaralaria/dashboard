import React, { lazy } from "react";

const Sidebar = lazy(() => import('@/components/sidebar'));
const Header = lazy(() => import('@/components/header'))

type LayoutProps = {
    component: React.ReactNode
}

const Layout = ({ component }: LayoutProps) => {
    return (
        <div className="w-full min-h-screen p-0 grid grid-cols-12">
            <Sidebar />

            <div className="col-span-12 lg:col-span-10 max-h-screen flex flex-col justify-start items-start gap-1 lg:gap-4 max-sm:pb-16">
                <Header />
                {component}
            </div>
        </div>
    )
}

export default Layout;