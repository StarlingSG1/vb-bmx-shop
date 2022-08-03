import joinClasses from "../../../helpers/joinClasses"

export function Paragraph({children, className}){
    return (
        <p className={joinClasses(className, "font-lato  text-white ")}>{children}</p>
    )
}
