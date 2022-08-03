import joinClasses from "../../../helpers/joinClasses";

export function BorderedButton({children, className, onClick})
{
    return (
        <button onClick={onClick} className={joinClasses(className,`p-cta font-roboto font-bold bg-blue border border-white text-white rounded-full hover:bg-white hover:text-blue hover:border-blue duration-200 `)}>
            {children}
        </button>
    );
}   