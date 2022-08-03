import joinClasses from "../../../helpers/joinClasses"

export function Price({children, className}){
    return (
        <p className={joinClasses(className, "font-lato font-bold text-white ")}>{children}</p>
    )
}
