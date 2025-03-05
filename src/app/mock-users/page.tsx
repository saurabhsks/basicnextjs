import {revalidatePath} from "next/cache";

type MockUser = {
    id: number;
    name: string;
};

export default async function MockUsers() {
    const res = await fetch(
        "https://67c7d7c6c19eb8753e7afa79.mockapi.io/users"
    );
    const users= await res.json();

    async function  addUser(formData: FormData){
        "use server";
        const name = formData.get("name");
        const res = await fetch(
            "https://67c7d7c6c19eb8753e7afa79.mockapi.io/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name}),
            }
        );
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser
        );
    }

    return (
        <div>
            <h1>Users</h1>
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required placeholder="Name" className="border p-2 mr-2" />
                <button type="submit" className="border p-2 bg-blue-500 text-white">Add User</button>

            </form>
            <ul>
                {users.map((user: MockUser) => (
                    <div key={user.id}>
                        <li>{user.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}