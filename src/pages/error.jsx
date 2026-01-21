import Header from "../components/layouts/header";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className="error-page">
                <h1 className="component-title">404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </>
    )
}

// Every component should return one root element. 

export default ErrorPage;