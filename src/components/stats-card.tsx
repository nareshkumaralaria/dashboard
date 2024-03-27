import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";

type StatsCardProps = {
    data: {
        id: number;
        title: string;
        value: string;
        change: string;
        from?: string | undefined;
        color: string;
        bg: string;
    }
}

const StatsCard = ({ data }: StatsCardProps) => {
    return (
        <Card className='col-span-12 sm:col-span-6 md:col-span-3 bg-white shadow-sm p-4 sm:p-6 rounded-lg border-gray-200'>
            <p className='text-base font-medium text-customGray'>{data.title}</p>
            <p className='text-2xl text-customBlack font-bold'>$56,945</p>

            <div className="flex items-center gap-2 pt-6">
                <p className={cn(`text-xs font-semibold rounded-full px-2 py-1`, data.color, data.bg)}>{data.change}</p>
                <p className='text-sm font-medium text-customGray/60'>{data.from}</p>
            </div>
        </Card>
    )
}

export default StatsCard;