import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";

function ProductList()
{
    const { data, loading, error } = useFetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    if(loading)
{
    return (
        <div className="loading">
            Loading Products...
        </div>
    );
}

    if (error)
    {
        return <h2>{error}</h2>;
    }
  return (
    <div className="container">

        <h1>Products</h1>

        <div className="products">

            {
                 data.map((product) =>
    {
        return (
            <ProductCard
                key={product.id}
                product={product}
            />
        );
                })
            }

        </div>

    </div>
);
}

export default ProductList;