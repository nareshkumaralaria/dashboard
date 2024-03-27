import { Link } from "react-router-dom";
import { Bell, Calendar, LayoutGrid, Menu, Search } from "lucide-react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import MobileSidebar from "@/components/mobile-sidebar";

import Logo from "@/assets/Logo.svg";

const Header = () => {
    return (
        <div className="w-full bg-white shadow-sm py-3 px-3 lg:px-6 gap-3 flex justify-between items-center">
            <div className="hidden lg:flex flex-1 relative">
                <Input
                    placeholder="Search for anything"
                    className="w-full h-11 pl-9 focus-visible:ring-gray-300"
                />
                <Search className="size-4 text-customGray absolute top-1/2 left-3 -translate-y-1/2" />
            </div>

            <div className="hidden lg:flex items-center space-x-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-customGray hover:text-customBlack transition-colors ease-in-out duration-300 relative"
                >
                    <Bell className="size-5" />
                    <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></div>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-customGray hover:text-customBlack transition-colors ease-in-out duration-300"
                >
                    <Calendar className="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-customGray hover:text-customBlack transition-colors ease-in-out duration-300"
                >
                    <LayoutGrid className="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-customGray rounded-full hover:text-customBlack transition-colors ease-in-out duration-300 relative"
                >
                    <Avatar className="cursor-pointer h-9 w-9">
                        <AvatarImage src="https://source.unsplash.com/random/?human,face" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </Button>
            </div>

            <div className="w-fit flex items-center justify-start lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-customGray hover:text-customBlack transition-colors ease-in-out duration-300 mr-1"
                        >
                            <Menu className="size-6 text-customGray" />
                        </Button>
                    </SheetTrigger>
                    <MobileSidebar />
                </Sheet>
                <Link to="/" className="">
                    <img src={Logo} alt="logo" className="w-auto h-5" />
                </Link>
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="flex lg:hidden text-customGray rounded-full hover:text-customBlack transition-colors ease-in-out duration-300 relative"
            >
                <Avatar className="cursor-pointer h-9 w-9">
                    <AvatarImage src="https://source.unsplash.com/random/?human,face" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
            </Button>
        </div>
    )
}

export default Header;