"use client";
import {useState, useEffect} from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if(!response.ok){
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                if(err instanceof Error){
                    setError(`Failed to fetch users: ${err.message}`);
                } else {
                    setError("Failed to fetch users");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <div key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}