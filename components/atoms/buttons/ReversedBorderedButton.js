import joinClasses from "../../../helpers/joinClasses";

export function ReversedBorderedButton({children, className, onClick})
{
    return (
        <button onClick={onClick} className={joinClasses(className,`p-cta font-roboto font-bold bg-white border border-blue text-blue rounded-full hover:bg-blue hover:text-white hover:border-white duration-200 `)}>
            {children}
        </button>
    );
}   