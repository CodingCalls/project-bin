import { bool, oneOf, shape, string, node, func } from "prop-types";
import { mergeClasses } from "utils";
import classNames from "classnames";
import defaultClasses from "./Button.module.scss";

const buttonPropTypes = {
    type:
        (oneOf < "button") |
        "reset" |
        ("submit" > ["button", "reset", "submit"]),
    disabled: bool,
    children: node,
    className: string,
    classes: shape({
        buttonClass: string,
        buttonClassModifier: string,
        buttonContent: string,
        buttonContentModifier: string,
    }),
    buttonSize:
        (oneOf < "small") |
        "customise" |
        ("large" > ["small", "customise", "large"]),
    buttonStyle:
        (oneOf < "primary") |
        "secondary" |
        ("error" > ["primary", "secondary", "error"]),
    onClick: func,
};

const Button = (props) => {
    const {
        type,
        children,
        onClick,
        buttonStyle,
        buttonSize,
        classes: propClasses,
    } = props;

    const classes = mergeClasses(defaultClasses, propClasses);

    const rootClasses = classNames(
        classes.buttonClass,
        classes.buttonClassModifier,
        classes[buttonStyle],
        classes[buttonSize]
    );
    return (
        <button type={type} onClick={onClick} className={rootClasses}>
            <span
                className={classNames(
                    classes.buttonContent,
                    classes.buttonContentModifier
                )}
            >
                {children}
            </span>
        </button>
    );
};

Button.propTypes = buttonPropTypes;

Button.defaultProps = {
    buttonSize: "large",
    type: "button",
    buttonStyle: "primary",
};
export default Button;
