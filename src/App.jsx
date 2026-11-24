import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, addnumber } from "./Redux/counterSlice";
import { updateName } from "./Redux/userSlice";
import { useState } from "react";
import { addProduct, removeProduct } from "./Redux/productSlice";
const App = () => {
  const dispatch = useDispatch();
  const [Number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [productid, setProductid] = useState("");
  const [productname, setProductname] = useState("");
  const [search, setsearch] = useState("")

  const count = useSelector((state) => {
    return state.counter.count;
  });
  const username = useSelector((state) => {
    return state.user.name;
  });
  const useremail = useSelector((state) => {
    return state.user.email;
  });
  const product = useSelector((state) => {
    return state.product.products;
  });

  const SendName = () => {
    dispatch(updateName(name));
  };
  const IncrementHandler = () => {
    dispatch(increment());
  };
  const DecrementHandler = () => {
    dispatch(decrement());
  };
  const Resethandler = () => {
    dispatch(reset());
  };
  const numberhandler = () => {
    dispatch(addnumber(Number));
  };
  const productHandler = () => {
    dispatch(
      addProduct({
        id: productid,
        name: productname,
      }),
    );
  };

  const filterProduct = product.filter((product) => {

    return product.name.toLowerCase().includes(search.toLowerCase());
  })
  

  return (
    <>
     <div className="input-box">
      count :{count}
      <br />
      email id :{useremail}
      <br />
      name : {username}
     <br />
     <br />
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={SendName}>Send Name</button>
      </div>
      <br />
      <br />
      <br />

      <div className="product">
       <div className="search">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
       </div>
        <h2> Total Product :{product.length}</h2>
        {product.length > 0 ? (
          filterProduct.map((product) => (
              <div key={product.id} className="prod">
                <h1>{product.id}</h1>
                <h1>{product.name}</h1>
                <button onClick={() => dispatch(removeProduct(product.id))}>Delete Product</button>
                <button>Edit</button>
              </div>
          ))
        ) : (
          <h1>No Product Yet</h1>
        )}
        <input type="number" onChange={(e) => setProductid(e.target.value)} />
        <input type="text" onChange={(e) => setProductname(e.target.value)} />
        <button onClick={productHandler}>Add Product</button>
      </div>
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={IncrementHandler}>Increment </button>
        <button onClick={DecrementHandler}>Decrement </button>
        <button onClick={Resethandler}>Reset </button>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <button onClick={numberhandler}>Upadate Number</button>
      </div>
    </>
  );
};

export default App;
