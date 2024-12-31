export const debounce = (func: any, delay: any) => {
    let timeout: any;
    return (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};