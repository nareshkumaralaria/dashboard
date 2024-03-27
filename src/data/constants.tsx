import { Folder, LayoutDashboard, LayoutGrid, LifeBuoy, Mail, User } from "lucide-react";

import Zapplin from '@/assets/zeplin.svg';
import Figma from '@/assets/figma.svg';
import Meta from '@/assets/meta.svg';
import Angular from '@/assets/angular.svg';
import Vue from '@/assets/vue.svg';


type SidebarData = {
    id: number;
    title: string;
    children: {
        id: number;
        title: string;
        icon: JSX.Element;
        children: {
            id: number;
            title: string;
            path: string;
        }[]
    }[]
}[]

type DashboardCardData = {
    id: number;
    title: string;
    value: string;
    change: string;
    from?: string;
    bg: string,
    color: string;
}[]

type ChartData = {
    series: {
        name: string;
        data: number[];
    }[],
    options: {
        chart: {
            height: number;
            type: string;
        },
        dataLabels: {
            enabled: boolean;
        },
        stroke: {
            curve: string | undefined;
        },
        xaxis: {
            type: string;
            categories: string[];
        },
        grid: {
            xaxis: {
                lines: {
                    show: boolean;
                }
            },
            yaxis: {
                lines: {
                    show: boolean;
                }
            }
        },
        fill: {
            type: string;
            opacity: number;
        }
    }
}

type TableHeaderLabels = string[];

type TableData = {
    id: number;
    source: {
        text: string;
        image: string;
    };
    amount: string;
    userID: string;
    joined: string;
    group: string;
    status: {
        text: string;
        color: string;
        bg: string;
    }
}[]

export const SIDEBAR_DATA: SidebarData = [
    {
        id: 1,
        title: "Dashboard",
        children: [
            {
                id: 11,
                title: "Dashboard",
                icon: <LayoutDashboard className="size-4" />,
                children: [
                    {
                        id: 111,
                        title: "Analytics",
                        path: "/dashboard/analytics"
                    },
                    {
                        id: 112,
                        title: "Finance",
                        path: "/dashboard/finance"
                    },
                    {
                        id: 113,
                        title: "Job Board",
                        path: "/dashboard/job-board"
                    }
                ]
            },
            {
                id: 12,
                title: "Messages",
                icon: <Mail className="size-4" />,
                children: [
                    {
                        id: 121,
                        title: "Inbox",
                        path: "messages/inbox"
                    },
                ]
            },
            {
                id: 13,
                title: "Friends",
                icon: <User className="size-4" />,
                children: [
                    {
                        id: 131,
                        title: "Favorites",
                        path: "friends/favorites"
                    },
                    {
                        id: 132,
                        title: "All Friends",
                        path: "friends/all-friends"
                    },
                ]
            },
            {
                id: 14,
                title: "Apps",
                icon: <LayoutGrid className="size-4" />,
                children: [
                    {
                        id: 141,
                        title: "All",
                        path: "apps/all"
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        title: "Pages",
        children: [
            {
                id: 21,
                title: "Help Center",
                icon: <LifeBuoy className="size-4" />,
                children: [
                    {
                        id: 211,
                        title: "FAQ",
                        path: "pages/help-center/faq"
                    },
                    {
                        id: 212,
                        title: "Guides",
                        path: "pages/help-center/guides"
                    },
                    {
                        id: 213,
                        title: "Support",
                        path: "pages/help-center/support"
                    },
                ]
            },
            {
                id: 22,
                title: "File Manager",
                icon: <Folder className="size-4" />,
                children: [
                    {
                        id: 221,
                        title: "Files",
                        path: "pages/file-manager/files"
                    },
                    {
                        id: 222,
                        title: "Upload",
                        path: "pages/file-manager/upload"
                    },
                    {
                        id: 223,
                        title: "Sync",
                        path: "pages/file-manager/sync"
                    },
                ]
            }
        ]
    }
]

export const DASHBOARD_CARD_DATA: DashboardCardData = [
    {
        id: 1,
        title: "Revenue",
        value: "$56,945",
        change: "+45%",
        from: "From 4.6%",
        bg: "bg-emerald-200",
        color: "text-emerald-800"
    },
    {
        id: 2,
        title: "Users",
        value: "76.8%",
        change: "-1.7%",
        from: "From 4.6%",
        bg: "bg-red-200",
        color: "text-red-800"
    },
    {
        id: 3,
        title: "New Signups",
        value: "116",
        change: "0.00",
        bg: "bg-gray-200",
        color: "text-gray-800"
    },
    {
        id: 4,
        title: "Retention",
        value: "12.67%",
        change: "+0.6%",
        from: "From 4.6%",
        bg: "bg-emerald-200",
        color: "text-emerald-800"
    },
]

export const CHART_DATA: ChartData = {
    options: {
        chart: {
            height: 450,
            type: 'area' as const,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'string',
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        fill: {
            type: 'solid',
            opacity: 0.1
        },
    },
    series: [
        {
            name: 'Instagram',
            data: [180, 260, 200, 190, 240, 180, 250]
        },
        {
            name: 'Facebook',
            data: [200, 190, 260, 200, 250, 220, 200]
        }
    ],
}

export const TABLE_HEADER_LABELS: TableHeaderLabels = [
    "Source",
    "Amount",
    "Status",
    "User ID",
    "Joined",
    "Group",
]

export const TABLE_DATA: TableData = [
    {
        id: 1,
        source: {
            text: "Zepplin",
            image: Zapplin,
        },
        amount: "686.00",
        userID: "114423",
        joined: "October",
        group: "Design",
        status: {
            text: "Active",
            color: "text-emerald-800",
            bg: "bg-emerald-200"
        }
    },
    {
        id: 2,
        source: {
            text: "Figma",
            image: Figma,
        },
        amount: "864.00",
        userID: "76223",
        joined: "June",
        group: "Finance",
        status: {
            text: "Pending",
            color: "bg-orange-400",
            bg: "bg-orange-100"
        }
    },
    {
        id: 3,
        source: {
            text: "Meta",
            image: Meta,
        },
        amount: "176.00",
        userID: "89453",
        joined: "March",
        group: "Coding",
        status: {
            text: "Cancelled",
            color: "text-gray-800",
            bg: "bg-gray-200"
        }
    },
    {
        id: 4,
        source: {
            text: "Angular",
            image: Angular,
        },
        amount: "49.00",
        userID: "11467",
        joined: "February",
        group: "Marketing",
        status: {
            text: "Active",
            color: "text-emerald-800",
            bg: "bg-emerald-200"
        }
    },
    {
        id: 5,
        source: {
            text: "Vue",
            image: Vue,
        },
        amount: "999.00",
        userID: "67385",
        joined: "October",
        group: "Finance",
        status: {
            text: "Active",
            color: "text-emerald-800",
            bg: "bg-emerald-200"
        }
    },
]