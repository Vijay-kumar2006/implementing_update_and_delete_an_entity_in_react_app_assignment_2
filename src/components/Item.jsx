const Item = ({ item }) => {

    // Render a single item
    // Add a Delete and Edit button
    return(
        <>
            <div>
                <h1>{item.id}</h1>
                <p>{item.name}</p>
                <p>{item.status}</p>
            </div>
        </>
    );
};

export default Item;
