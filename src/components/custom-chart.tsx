import Chart from 'react-apexcharts'
import { EllipsisVertical } from 'lucide-react';

import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { CHART_DATA } from '@/data/constants';

const CustomChart = () => {
    return (
        <Card className='w-full bg-white flex flex-col justify-start items-start text-customBlack '>
            <CardHeader className='p-0 flex-row justify-between items-center w-full px-4 sm:px-6 py-2 border-b'>
                <p className='font-semibold text-customBlack '>
                    Performance
                </p>
                <Button
                    variant="ghost"
                    size="sm"
                >
                    <EllipsisVertical className='size-4' />
                </Button>
            </CardHeader>

            <CardHeader className='p-0 flex-row justify-between items-center w-full px-6 py-2'>
                <Chart
                    options={CHART_DATA.options as ApexCharts.ApexOptions}
                    series={CHART_DATA.series}
                    type="area"
                    height={420}
                    className="w-full"
                />
            </CardHeader>
        </Card>
    )
}

export default CustomChart;