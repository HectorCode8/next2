
const Pokemon = ( { data }) => {
    return (
        <p>Lala</p>
    )
}

export default Pokemon

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await res.json()


    return { props: { data } }
}