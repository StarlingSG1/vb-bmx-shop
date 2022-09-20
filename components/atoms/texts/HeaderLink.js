import joinClasses from "../../../helpers/joinClasses"
import Link from "next/link"

export function HeaderLink({children, className, href ="#"}){
    return (
        <Link href={href}><a className={joinClasses(className, `textLink 350:text-left text-center`)}>{children}</a></Link>
    )
}
