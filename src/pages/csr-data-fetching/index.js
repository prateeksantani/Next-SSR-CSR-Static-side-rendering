import { useEffect , useState} from "react";
import Link from "next/link";

const UserPage = () => {

  const[users , setUsers] = useState([]);

  useEffect(() => {
      async function fetchUsers(){
        const data = await fetch('https://dummyjson.com/users')
        setUsers(await data.json());
      }
      fetchUsers()
  },[])

  console.log("Users",users);

  return (
    <div>
    <h1>User</h1>
    {
      users && users.users && //check
      users.users.map(user => <Link href={`../csr-data-fetching/${user.id}`} key={user.id}>
      <div>{user.firstName}</div>
      </Link>)
    }
    </div>
  )
}

export default UserPage;