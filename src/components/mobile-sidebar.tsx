import { Link } from "react-router-dom";
import { Globe, LogOut, Settings2 } from "lucide-react";

import { SheetContent } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";

import { SIDEBAR_DATA } from "@/data/constants";
import Logo from "@/assets/Logo.svg";

const MobileSidebar = () => {
    return (
        <SheetContent side="left" className="p-0 h-full lg:hidden">
            <aside className='flex lg:hidden col-span-2 bg-white text-customBlack h-full flex-col justify-between items-start border-r shadow-sm'>
                <div className="w-full max-h-[93vh] flex flex-col justify-start items-start flex-1">
                    <Link to="/" className="p-4 pb-0">
                        <img src={Logo} alt="logo" className="w-auto h-5" />
                    </Link>

                    <ScrollArea className="h-full w-full p-4 flex flex-col justify-start items-start gap-4 mt-6">
                        {
                            SIDEBAR_DATA.map(data => {
                                return (
                                    <Nav key={data.id} data={data} />
                                )
                            })
                        }
                    </ScrollArea>
                </div>
                <div className="border-t p-3 w-full flex justify-between items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-customGray h-9">
                        <Settings2 className="size-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-customGray h-9">
                        <LogOut className="size-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-customGray h-9">
                        <Globe className="size-4" />
                    </Button>
                </div>
            </aside>
        </SheetContent>
    );
}

export default MobileSidebar;