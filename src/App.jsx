 const Card = ({title}) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
 }

const App = () => {
    return(
        <>
            <h2 className="text-cyan-400">Functional Arrow components</h2>
            <Card title="Star Wars ❤️"/>
            <Card title="Avatar 🤍"/>
            <Card title="The Lion King"/>
        </>

    )
}

export default App
