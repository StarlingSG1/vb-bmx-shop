import joinClasses from "../../../helpers/joinClasses"

export function BigParagraph({children, className}){
    return (
        <p className={joinClasses(className, "font-roboto font-medium text-bigger text-white ")}>{children}</p>
    )
}
