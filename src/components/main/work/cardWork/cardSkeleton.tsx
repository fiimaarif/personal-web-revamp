import React from 'react'

function CardSkeleton() {
    return (
        <div className="bg-gray-100 dark:bg-slate-700 p-5 rounded-xl animate-pulse">
            <div className="bg-gray-300 p-5 rounded-xl w-full h-36"></div>
            <div className="pt-3">
                <div className="h-4 bg-gray-300 rounded-2xl w-1/3 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-2xl w-2/3"></div>
            </div>
        </div>
    );
}

export default CardSkeleton