import { Loader } from "lucide-react";

const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-3">
            <Loader className="size-7 animate-spin" />
            <span className="text-sm font-semibold text-customBlack">
                Loading...
            </span>
        </div>
    )
}

export default Loading;