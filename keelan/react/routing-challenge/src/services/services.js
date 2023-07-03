// TODO: make this function return results for some given page
// TODO: create error checks in this function
export const getUsersPage = async () => {
  const response = await fetch(`https://randomuser.me/api/?page=1&results=20&seed=abc`);
  const users = await response.json();

  return users;
}