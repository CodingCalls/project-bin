import TestComponent from 'components/TestComponent';
import classes from './app.module.scss';

const App = () => {
    return (
        <div className={classes.root}>
            <h1>React Template</h1>
            <TestComponent />
        </div>
    );
};

export default App;
