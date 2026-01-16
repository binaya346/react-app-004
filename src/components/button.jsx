
// const Button = (props) => {
//     return (
//         <button>{props.name}</button>
//     )
// }

// const Button = ({ name }) => {
//     return (
//         <button>{name}</button>
//     )
// }

// component vitra ko data: state
// parent bata aako data: props

const Button = (props) => {
    const { children, onClick } = props;
    // Children is reserved word
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button;