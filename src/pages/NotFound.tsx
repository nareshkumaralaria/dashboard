import { Link } from 'react-router-dom';

import NotFoundImage from '@/assets/NotFound.png';

import { Button } from '@/components/ui/button';

const NotFound = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col gap-5">
            <img src={NotFoundImage} alt='NotFound' className='w-auto h-40 md:h-96' />
            <Button
                variant="default"
                size="default"
                className=''>
                <Link to="/">
                    Back to Home
                </Link>
            </Button>
        </div>
    )
}

export default NotFound;