import UserList from "../../containers/UserList/UserList";

const UsersPage = ({ users }) => {
  return (
    <main>
      <h2>Retrieved Users</h2>
      <UserList users={users} />
    </main>
  );
};

export default UsersPage;