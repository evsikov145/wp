import Login from "../../components/admin/Login";

export default function Index({data}) {

    return (
        <>
            <Login props={data}/>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/user`)
    const data = await res.json()
    return { props: { data } }
}