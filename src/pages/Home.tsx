import React from 'react';

import CustomChart from '@/components/custom-chart';
import PremiumCard from '@/components/premium-card';
import StatsCard from '@/components/stats-card';
import CustomTable from '@/components/custom-table';

import { DASHBOARD_CARD_DATA } from '@/data/constants';

const Home: React.FC = () => {
    return (
        <div className='w-full py-3 px-3 lg:px-6 gap-4 lg:gap-8 flex flex-col justify-start items-start overflow-y-scroll max-sm:pb-16'>
            <PremiumCard />

            <div className='w-full grid grid-cols-12 gap-4 lg:gap-8'>
                {
                    DASHBOARD_CARD_DATA.map(data => {
                        return (
                            <StatsCard key={data.id} data={data} />
                        )
                    })
                }
            </div>

            <CustomChart />

            <CustomTable />
        </div>
    )
}

export default Home;