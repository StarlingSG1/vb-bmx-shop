import Link from "next/link";

export function ReturnButton(){
    return (
        <div className="grid grid-cols-12 gap-[50px] mb-10">
                <Link href="/login" >
                <a className="w-[95px] flex items-center relative col-start-3 h-[50px] hover:pl-2 group duration-200 text-white font-roboto font-medium gap-[30px] outline-8 outline outline-blue hover:bg-white hover:text-red">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-transparent outline outline-[20px] outline-blue z-20"></div>
                    <div className="relative">
                        <div className="w-[10px] h-[25px] absolute bottom-0 bg-red group-hover:rotate-45 duration-200 group-hover:h-[48px] group-hover:-left-[0.5px] group-hover:-bottom-3"></div>
                        <div className="w-[10px] h-[25px]  absolute top-0 bg-red group-hover:-rotate-45 duration-200 group-hover:h-[48px] group-hover:-left-[0.5px] group-hover:-top-3"></div>
                        </div>
                        retour</a>
                </Link>
            </div>
    )
}