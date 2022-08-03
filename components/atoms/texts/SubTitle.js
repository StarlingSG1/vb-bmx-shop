import joinClasses from "../../../helpers/joinClasses"

export function SubTitle({children, className}){
    return (
        <h2 className={joinClasses(className, "font-roboto font-medium text-subtitle text-white ")}>{children}</h2>
    )
}