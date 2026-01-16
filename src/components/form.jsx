import { useState } from "react"
import Input from "./input"
import Button from './button'

const Form = () => {
    // State of component. Stores the input collected from users
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    })

    const [error, setError] = useState("");

    // Change handler. Gets the change from user & pass them to state of the component.
    const handleChange = (event) => {
        const name = event.target.name; // username, 
        const value = event.target.value; // test
        setState({ ...state, [name]: value })
        setError("")
    }

    // Submit handler, triggers the action once the submit button is clicked. 
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state)
        const isValid = handleValidation();
        if (isValid) {
            alert("Data ready to submit")
        }
    }

    const handleValidation = () => {
        if (state.username.length < 3) {
            setError("Username should be atleast 3 characters. ");
            return false;
        }

        if (!state.email.includes("@")) {
            setError("Not a valid email. ");
            return false;
        }

        if (state.password.length < 6) {
            setError("Password should be atlest 6 character long");
            return false;
        }

        if (state.phone.length < 10 || state.phone.length > 15) {
            setError("Phone should be between 10 to 15 character");
            return false;
        }

        return true;
    }

    return (
        <>
            <form>
                <Input
                    type="text"
                    placeholder="Enter Your username"
                    name="username"
                    onChange={handleChange}
                    label="Username: "
                />
                <Input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange}
                    label="Email: "
                />
                <Input
                    type="password"
                    placeholder="Enter Your password"
                    name="password"
                    onChange={handleChange}
                    label="Password: "
                />
                <Input
                    type="number"
                    placeholder="Enter Your Phone"
                    name="phone"
                    onChange={handleChange}
                    label="Phone Number: "
                />
                {error && <div className="danger">{error}</div>}
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </>
    )
}

export default Form;