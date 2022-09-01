export const usePageNotFoundError = () => {
    const error404 = () => {
        console.log("404 Error");
    };

    const pageError = () => {
        console.log("Page Error");
    };

    return {
        error404,
        pageError,
    };
};
