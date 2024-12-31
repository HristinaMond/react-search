import React from "react";

export const useSearchTime = () => {
    const [searchTime, setSearchTime] = React.useState<number>(0);

    const measureSearchTime = React.useCallback((startTime: number) => {
        const endTime = performance.now();
        setSearchTime((endTime - startTime) / 1000);
    }, []);

    return { searchTime, measureSearchTime };
};
