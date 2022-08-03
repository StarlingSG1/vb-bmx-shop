import joinClasses from "../../../helpers/joinClasses";

export function Button({children, className, onClick})
{
    return (
        <button onClick={onClick} className={joinClasses(className,`p-cta font-roboto font-bold bg-red text-white rounded-full hover:bg-red-hover duration-200`)}>
            {children}
        </button>
    );
}   