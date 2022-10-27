
export function Skeleton() {

    return (
      <div className="flex flex-col gap-2.5 animate-pulse">
            <div className="relative w-full bg-blue-skeleton rounded-md  aspect-square">
            </div>
            <div className="flex justify-between gap-2.5">
              <div className={" bg-blue-skeleton w-full rounded-md h-[54px]"}></div>
              <div className="w-14 bg-blue-skeleton rounded-md h-1/2"></div>
            </div>
            <div className={"bg-blue-skeleton rounded-md w-full h-[96px]"}>
            </div>
      </div> 
    )
}
