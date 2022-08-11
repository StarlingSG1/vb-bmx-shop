import Link from "next/link";

export function ReturnButton({href = "/"}){
    return (
        <div className="grid grid-cols-12 gap-[50px] mb-10">
                <Link href={href} >
                <a className="w-[95px] flex items-center relative col-start-3 h-[50px] group duration-200 text-white font-roboto font-medium gap-6 outline-8 outline outline-blue hover:bg-white hover:text-red">
                        <div className="w-[10px] h-[50px] bg-red "></div>
                        retour</a>
                </Link>
            </div>
    )
}