import joinClasses from "../../../helpers/joinClasses"

export function Title({children, className}){
    return (
        <h1 className={joinClasses(className, "font-josefin font-bold text-title text-white titleUnderline ")}>{children}</h1>
    )
}
