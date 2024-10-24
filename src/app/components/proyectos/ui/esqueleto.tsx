

export const  EsqueletonProyectos = () => {
    return (
        <div className="min-h-screen p-4 sm:p-8 ">
        <div className="max-w-4xl mx-auto">
            <div className="h-10 w-3/4 bg-slate-900 rounded mb-4 animate-pulse"></div>
            <div className="h-4 w-full bg-slate-900 rounded mb-8 animate-pulse"></div>

            <div className="space-y-8">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="border-l-2 border-slate-700 pl-4 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                    <div className="h-6 w-16 bg-slate-900 rounded mb-2 sm:mb-0 animate-pulse"></div>
                    <div className="h-6 w-3/4 bg-slate-900 rounded sm:ml-4 animate-pulse"></div>
                </div>
                <div className="h-4 w-full bg-slate-900 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-slate-900 rounded animate-pulse"></div>
                <div className="mt-4 bg-slate-900 animate-pulse p-4 rounded-lg">
                    <div className="h-4 w-1/3 bg-slate-900 rounded mb-2 animate-pulse"></div>
                    <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-4 w-1/2 bg-slate-900 rounded animate-pulse"></div>
                    ))}
                    </div>
                    <div className="h-4 w-1/4 bg-slate-900 rounded mt-4 animate-pulse"></div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}