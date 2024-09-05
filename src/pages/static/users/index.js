const UserPage = (props) => {
  return(
    <div>
    <h1>Users Page Static Site Genration(SSG)</h1>
    {
      props.data.users.map(user => <li key={user.id} >{user.firstName}</li>)
    }
    </div>
  )
}

export const getStaticProps = async () => {
    const data = await( await fetch('https://dummyjson.com/users')).json();

  return {
    props: {                                                            //data is more secure in server side rendering and
      data,                                                              //the page brcomes more seo freindly in SSR
    }
    }
};

export default UserPage;