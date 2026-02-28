import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Table from "../components/Table";
import Loader from "../components/Loader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <>
      <h1 className="p-2 text-center text-3xl font-bold text-white bg-green-700">
        Users List
      </h1>

      <Card>
        <h2 className="text-xl font-bold mb-4">Users</h2>

        <Button className="text-black" onClick={() => setIsOpen(true)}>Add User</Button>

        <Table columns={columns} data={users} />

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Add User"
        >
          <Input
            label="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button onClick={() => setIsOpen(false)}>
            Submit
          </Button>
        </Modal>
      </Card>

      {/* Optional Grid View */}
      <div className="p-5 m-2 flex flex-wrap">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 m-3 bg-green-100 w-64 rounded-lg hover:bg-white shadow text-center"
          >
            <h3 className="font-semibold">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>
              City: {user.address?.city || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}