import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <div className="flex flex-col items-center mt-4">
            <div className="flex">
                {page > 1 && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                )}

                {page < totalPages && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next
                    </button>
                )}
            </div>

            <p className="mt-2">
                Page {page} of {totalPages}
            </p>
        </div>
    );
};

export default Pagination;
