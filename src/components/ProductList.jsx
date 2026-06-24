import useFetch from "../hooks/useFetch";

function ProductList()
{
    const { data, loading, error } = useFetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    if (loading)
    {
        return <h2>Loading...</h2>;
    }

    if (error)
    {
        return <h2>{error}</h2>;
    }
  return (
    <div>
    <h1>Products</h1>
        {
        data.map((product) =>
            {
            return (
            <div
            key={product.id}>
               <img
                src={product.images[0]}
                alt={product.title}
                width="200"/>
                <h3>
                {product.title}
                </h3>
                <p>
                ₹ {product.price}
                </p>
                </div>

                );
            })
        }

    </div>
);
}

export default ProductList;