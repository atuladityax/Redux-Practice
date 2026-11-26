import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/apiProductSlice";
import {
  addProduct,
  removeProduct,
  updateProduct,
} from "../Redux/productSlice";

const ProductManager = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");


  useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

    const {productsapi: apiProducts, error: apiError, loading} = useSelector((state) => state.apiProduct);
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddProduct = () => {
  if (!productId || !productName.trim()) {
    setError("Please enter product ID and name");
    return;
  }

  const exists = products.some((item) => {
    return item.id === Number(productId);
  });

  if (exists) {
    setError("Product ID already exists!");
    return;
  }

  dispatch(
    addProduct({
      id: Number(productId),
      name: productName.trim(),
    })
  );

  setError("");
  setProductId("");
  setProductName("");
};

  const handleSaveProduct = () => {
    dispatch(
      updateProduct({
        id: editId,
        name: editName,
      }),
    );
    setEditId(null);
    setEditName("");
  };

  return (
    <div className="product">

      <div className="apifetch">
        <h2>API Products</h2>
        {loading && <p>Loading API products...</p>}
        {apiError && <p role="alert">Could not load API products: {apiError}</p>}
        {!loading && !apiError && (
          <ul>
            {apiProducts.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <h2>Total Product :{products.length}</h2>
      {products.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="prod">
            <h1>{product.id}</h1>
            {editId === product.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                />
                <button onClick={handleSaveProduct}>Save</button>
              </>
            ) : (
              <>
                <h1>{product.name}</h1>
                <button
                  onClick={() => {
                    setEditId(product.id);
                    setEditName(product.name);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeProduct(product.id))}
                >
                  Delete Product
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <h1>No Product Yet</h1>
      )}
      <input
        type="number"
        value={productId}
        onChange={(event) => setProductId(event.target.value)}
      />
      <input
        type="text"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ProductManager;
