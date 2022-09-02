import React from "react";
import { usePageNotFoundError } from "./logic/usePageNotFoundError";
import bgImage from "../../assets/scanlines.png";
import classes from "./PageNotFoundError.module.scss";

const PageNotFoundError = () => {
    const { error404, pageError } = usePageNotFoundError();

    return (
        <>
            <div className={classes.screen}>
                <img src={bgImage} alt="" className={classes.image} />
                <div className={classes.content}>This is a sample text</div>
            </div>
        </>
    );
};

export default PageNotFoundError;
