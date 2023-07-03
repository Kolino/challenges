import UserCard from "../../components/UserCard/UserCard";

const UserList = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <section>
          {users.map((user, i) => <UserCard key={i} id={i} user={user} />)}
        </section>
      ) : <p>Loading...</p>}
    </>
  );
};

export default UserList;