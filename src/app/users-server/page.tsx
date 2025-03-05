type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersClient() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users: User[] = await response.json();
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: User) => (
                    <div key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}