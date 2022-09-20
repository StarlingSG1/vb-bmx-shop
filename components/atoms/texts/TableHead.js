import joinClasses from "../../../helpers/joinClasses";

export function TableHead({ children, className = "" }) {
  return <th className={joinClasses(className, "font-josefin sm:text-bigger py-3 first:pl-2.5  text-white") }>{children}</th>;
}
