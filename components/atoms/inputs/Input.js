import joinClasses from "../../../helpers/joinClasses";

export function Input({placeholder, defaultValue = "", className, type = "text"})
{
    return (
        <input type={type} defaultValue={defaultValue} placeholder={placeholder} className={joinClasses(className,`p-input font-roboto font-medium bg-white text-blue rounded-lg w-[593px] `)}/>
    );
}   