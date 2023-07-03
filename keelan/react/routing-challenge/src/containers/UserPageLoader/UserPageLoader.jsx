import { useParams } from "react-router";

const UserPageLoader = ({ users }) => {
  const { id } = useParams();

  console.log(users[id]);
  const user = users[id];

  return (
    <main>
      {user ? (
        <article>
          <h2>Retrieved User</h2>
          <h3>{`Name: ${user.name.first} ${user.name.last}`}</h3>
          <img src={user.picture.large} alt='Image of user' />
          <p>{`Age: ${user.dob.age}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Phone number: ${user.phone}`}</p>
        </article>
      ) : <p>Loading...</p>}
    </main>
  );
};

export default UserPageLoader;