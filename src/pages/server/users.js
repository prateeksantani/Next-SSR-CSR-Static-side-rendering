// Server side Rendering SSR



const UserPage = (props) => {
  return(
    <div>
    <h1>Users (SSR)</h1>
    {
      props.data.users.map(user => <li key={user.id} >{user.firstName}</li>)
    }
    </div>
  )
}

  export const getServerSideProps = async ()  => {                      //function by which you can render server side redering
    const data = await( await fetch('https://dummyjson.com/users')).json();

  return {
    props: {                                                            //data is more secure in server side rendering and
      data,                                                              //the page brcomes more seo freindly in SSR
    }
    }
  };

export default UserPage;