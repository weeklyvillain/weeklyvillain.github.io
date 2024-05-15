import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as Error; // Add type assertion here
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.message}</i>
            </p>
        </div>
    );
}