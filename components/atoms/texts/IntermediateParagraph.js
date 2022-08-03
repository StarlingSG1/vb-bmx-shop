import joinClasses from "../../../helpers/joinClasses"

export function IntermediateParagraph({children, className}){
    return (
        <p className={joinClasses(className, "font-lato font-bold text-intermediate text-white ")}>{children}</p>
    )
}
