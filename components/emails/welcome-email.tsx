export const WelcomeEmailTemplate = ({ firstname } : { firstname: string }) => {
    return (
        <div>
            <h1>Welcome, {firstname}!</h1>
        </div>
    )
}