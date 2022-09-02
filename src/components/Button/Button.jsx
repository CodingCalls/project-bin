import { bool, oneOf, shape, string, node, func } from "prop-types";
import classnames from "classnames";
import classes from "./Button.module.scss";

export const buttonPropTypes = {
    children: node,
    className: string,
    classes: shape({
        button: string,
        buttonModifier: string,
        content: string,
        contentModifier: string,
        roundedRight: string,
    }),
    color:
        (oneOf < "primary") |
        "secondary" |
        ("error" > ["primary", "secondary", "error"]),
    disabled: bool,
    hasAnchorAppearance: bool,
    id: string,
    isAnchor: bool,
    isLoading: bool,
    noRound: bool,
    onClick: func,
    onMouseUp: func,
    priority: string,
    roundedRight: bool,
    size:
        (oneOf < "small") |
        "customise" |
        "large" |
        ("order" > ["small", "customise", "large", "order"]),
    title: string,
    to: string,
    type:
        (oneOf < "button") |
        "reset" |
        ("submit" > ["button", "reset", "submit"]),
};

const rootClass = classnames(
    classes.buttonClass,
    classes.buttonClassModifier
);

const Button = (props) => {
    const { type, handleMouseEnter, handleMouseUp } = props;
    return (
        <button
            className={rootClass}
            type={type}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
        >
            <span className={classes.content}>button</span>
        </button>
    );
};

export default Button;
