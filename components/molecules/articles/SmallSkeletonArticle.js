export function SmallSkeletonArticle() {
    return (
        <div className="animate-pulse 896:col-span-2 md:col-span-3 sm:w-auto col-span-1">
        <div className="w-full sm:h-[265px] h-[300px] bg-blue-skeleton"></div>
        <div className="bg-blue-skeleton h-12 mt-3"></div>
        <div className="bg-blue-skeleton h-6 w-1/3 mt-3"></div>
      </div>
    )
}