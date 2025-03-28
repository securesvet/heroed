import { useEffect, useState } from "react";
import { getUsers } from "@root/src/lib/getUsers";

const Users = () => {
  const [users, setUsers] = useState<{ username: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="mt-[var(--header-height)]">
      <h1>Users</h1>
      {users.map(({ username }) => (
        <div key={username}>
          <p>{username}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
