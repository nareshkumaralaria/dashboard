import { Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

const PremiumCard = () => {
    return (
        <Card className="w-full bg-customBlack border-customBlack flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center text-white p-4 sm:p-6 md:p-8">
            <CardContent className="flex-1 space-y-1 sm:space-y-2 p-0 text-center sm:text-left">
                <p className="text-2xl font-semibold">Unlock premium stats</p>
                <p className="text-sm text-gray-200">
                    Get up to 10TB of storage for a limited time
                </p>
            </CardContent>
            <Button
                variant="default"
                size="default"
                className="bg-white text-customBlack hover:bg-gray-100 transition-colors ease-in-out duration-300 rounded-full px-6"
            >
                <Zap className="size-5 mr-2" />
                Upgrade
            </Button>
        </Card>
    )
}

export default PremiumCard;