 import joinClasses from "../../../helpers/joinClasses";

export function RoundedIcon({ onClick, icon, className = "", height = "26" ,width = "26" }) {
  return (
    <div
      onClick={onClick}
      className={joinClasses(className, "bg-grey-light h-[50px] w-[50px] cursor-pointer rounded-full flex items-center justify-center")}
    >
      <img alt="icon" width={width} height={height} src={icon} />
    </div>
  );
}
