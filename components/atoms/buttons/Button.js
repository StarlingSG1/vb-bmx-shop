import joinClasses from "../../../helpers/joinClasses";

export function Button({children, type = "button", className, onClick})
{
    return (
        <button onClick={onClick} type={type} className={joinClasses(className,`p-cta font-roboto font-bold bg-red text-white rounded-full hover:bg-red-hover duration-200`)}>
            {children}
        </button>
    );
}   