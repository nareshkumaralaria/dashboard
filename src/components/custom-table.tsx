import { EllipsisVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { TABLE_DATA, TABLE_HEADER_LABELS } from "@/data/constants";
import { cn } from "@/lib/utils";


const CustomTable = () => {
    return (
        <Card className='w-full bg-white flex flex-col justify-start items-start text-customBlack '>
            <CardHeader className='p-0 flex-row justify-between items-center w-full px-4 sm:px-6 py-2 border-b'>
                <p className='font-semibold text-customBlack '>
                    Installed apps
                </p>
                <Button
                    variant="ghost"
                    size="sm"
                    className=''
                >
                    <EllipsisVertical className='size-4' />
                </Button>
            </CardHeader>

            <CardHeader className='p-0 flex-row justify-between items-center w-full'>
                <Table >
                    <TableHeader>
                        <TableRow className="bg-gray-100 border-b-0">
                            {
                                TABLE_HEADER_LABELS.map((label, index) => (
                                    <TableHead key={index}>{label}</TableHead>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            TABLE_DATA.map((data) => (
                                <TableRow key={data.id}>
                                    <TableCell className="flex items-center font-semibold">
                                        <div className="mr-3 bg-white shadow rounded-md w-[48px] h-[48px] flex justify-center items-center">
                                            <img src={data.source.image} alt={data.source.text} className="w-[24px] h-[24px]" />
                                        </div>
                                        {data.source.text}
                                    </TableCell>
                                    <TableCell>{data.amount}</TableCell>
                                    <TableCell>
                                        <p
                                            className={cn(
                                                "text-xs w-fit font-semibold text-white bg-green-500 rounded-full px-2 py-1",
                                                data.status.bg,
                                                data.status.color
                                            )}
                                        >
                                            {data.status.text}
                                        </p>
                                    </TableCell>
                                    <TableCell>{data.userID}</TableCell>
                                    <TableCell>{data.joined}</TableCell>
                                    <TableCell>{data.group}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </CardHeader>

            <CardHeader className="p-0 py-2 w-full">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardHeader>
        </Card>
    )
}

export default CustomTable;