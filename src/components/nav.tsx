import { Link } from "react-router-dom";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type NavProps = {
    data: {
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
    }
}

const Nav = ({ data }: NavProps) => {
    return (
        <div className="w-full flex flex-col justify-start items-start space-y-3 pb-8">
            <p className="text-customGray uppercase text-xs font-medium tracking-[0.2em]">
                {data.title}
            </p>

            <Accordion
                type="single"
                collapsible
                className="w-full"
            >
                {
                    data.children.map(item => {
                        return (
                            <AccordionItem
                                key={item.id}
                                value={item.title}
                                className="border-b-0"
                            >
                                <AccordionTrigger className="text-customGray hover:text-customBlack hover:no-underline py-3 text-base">
                                    <div className="w-full flex items-center justify-start gap-2 ">
                                        {item.icon}{item.title}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="w-full flex flex-col gap-2 justify-start items-start pl-6">
                                    {
                                        item.children.map(subItem => {
                                            return (
                                                <Link
                                                    key={subItem.id}
                                                    to={subItem.path}
                                                    className="text-base font-medium text-customGray w-full hover:text-customBlack"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default Nav;