import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { username } = router.query;


  return (
    <div>
    <h1>This is Index(Root) page for {username} </h1>
    <button onClick={() => router.push(`../../access/${username}/setting`)}>Open Settings page</button>

    <br/>


    <button onClick={(e) => router.reload()}>Reload</button>
    </div>
  )
}

export default Page;