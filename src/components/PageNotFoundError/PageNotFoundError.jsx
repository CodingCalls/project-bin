import React from "react";
import { usePageNotFoundError } from "./logic/usePageNotFoundError";

const PageNotFoundError = () => {
    const { error404, pageError } = usePageNotFoundError();

    return (
        <div>
            PageNotFoundError{pageError()} {error404()}
        </div>
    );
};

export default PageNotFoundError;
