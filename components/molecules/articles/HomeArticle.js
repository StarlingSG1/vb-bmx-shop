/* eslint-disable @next/next/no-img-element */
export default function HomeArticle({bgColor = "red",  children = "Nom du produit", alt = "home-article"}) {
    return (
        <div className={`lg:h-[345px] lg:w-[225px] h-[250px] lg:px-0 500:pl-10 pl-5 500:pr-28 pr-0 500:w-2/3 350:w-[90%] w-full lg:block flex items-center justify-between flex-row-reverse lg:rotate-[10deg] rounded-r-md lg:rounded-t-md  bg-${bgColor} relative`}>
            <img src="/assets/img/example.png" alt={alt} className={`lg:w-auto lg:h-auto 500:h-[85%] 350:h-[60%] h-[35%] aspect-square 500:absolute right-0  500:translate-x-1/2 lg:translate-x-0 lg:-top-20`} />
            <div className={`h-[5px] min-w-[55px] w-[55px] bg-red lg:mt-[170px] lg:rotate-0 rotate-90 hidden 500:block ${bgColor == "red" ? "bg-blue" : "bg-red"} lg:m-auto`}></div>
            <div className={`h-[55px] mx-3 min-w-[5px] w-[5px] bg-red lg:mt-[170px] block 500:hidden ${bgColor == "red" ? "bg-blue" : "bg-red"} lg:m-auto`}></div>
            <p className="text-center lg:mt-[20px]  font-josefin font-bold  text-white 896:line-clamp-2">{children}</p>
        </div>
    )
}