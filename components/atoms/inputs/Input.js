import joinClasses from "../../../helpers/joinClasses";

export function Input({placeholder, defaultValue = "", className, type = "text", onChange})
{
    return (
        <input type={type} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange} className={joinClasses(className,`p-input font-roboto font-medium bg-white text-blue rounded-lg w-[593px] `)}/>
    );
}   