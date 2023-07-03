import { Link } from "react-router-dom";

const UserCard = ({ id, user }) => {
  const { name, email, picture } = user;

  return (
    <article>
      <h3>{`${name.first} ${name.last}`}</h3>
      <img src={picture.medium} alt='Image of user' />
      <p>{`Email: ${email}`}</p>
      <Link to={`${id}`}>Display more of this user's details</Link>
    </article>
  );
};

export default UserCard;