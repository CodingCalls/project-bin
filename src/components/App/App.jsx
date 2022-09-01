import PageNotFoundError from "components/PageNotFoundError";
import classes from "./App.module.scss";

const App = () => {
    return (
        <>
            <div className={classes.root}>
                <h1>React Template</h1>
            </div>
            <PageNotFoundError />
        </>
    );
};

export default App;
