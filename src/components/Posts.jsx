import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost } from "../Redux/postSlice";

const Posts = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(fetchpost());
  }, [dispatch]);

  const filterSearch = post.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filterSearch);

  return (
    <>
      <div className="searchbox">
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <br />
      <div className="container">
        {!loading && !error && filterSearch.length === 0 && (
          <p>No matches found</p>
        )}

        {loading && <p>Post Loading....</p>}
        {error && <p>Having Some Error... {error}</p>}
        {!loading &&
          !error &&
          filterSearch.map((item) => (
            <div key={item.id}>
              <ul>
                <span>{item.id}</span>
                <li>{item.title}</li>
                <li>{item.body}</li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
