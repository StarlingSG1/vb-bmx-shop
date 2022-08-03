import Link from "next/link";

export function PanierButton(){
    return (
        <div className="right-[160px] absolute top-[222px] ">
                <Link href="/panier" >
                <a className="w-[95px] flex items-center relative col-start-10 h-[50px] group duration-200 text-white font-roboto font-medium gap-5  hover:bg-white hover:text-red">
                        <div className="w-[10px] h-[50px] bg-red duration-200  "></div>
                        Panier</a>
                </Link>
            </div>
    )
}