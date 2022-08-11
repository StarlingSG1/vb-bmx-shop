import joinClasses from "../../../helpers/joinClasses"

export function Bloc({className = ""}){
    return (
        <div className={joinClasses(className,"bg-red h-full min-w-[30px] w-[30px]")}></div>
    )
}