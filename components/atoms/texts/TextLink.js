import joinClasses from "../../../helpers/joinClasses"
import Link from "next/link"

export function TextLink({children, className, href ="#"}){
    return (
        <Link href={href}><a className={joinClasses(className, `font-roboto text-[18px]  underline text-white`)}>{children}</a></Link>
    )
}
