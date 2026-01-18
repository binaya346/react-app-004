import "./button.css"

const Button = (props) => {
    const { children, variant } = props;

    return (
        <button className={`btn btn-${variant}`}>
            {children}
        </button>
    )
}

export default Button;