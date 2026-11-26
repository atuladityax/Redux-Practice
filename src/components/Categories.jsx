import { useDispatch, useSelector } from "react-redux"
import { fetchcategories } from "../Redux/categorySlice"
import { useEffect } from "react"


const Categories = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcategories())
  },[dispatch])

  const {  category , loading ,error} = useSelector((state) => state.category)
  console.log(category);
  return (
    <>
      <div className="categories">
        <h2>Fetched Categorry</h2>
        {loading && <h4>Loading Api Categories </h4> }
        {error && <h4> could not load api data {error} </h4> }
        {!loading && !error && (
          <ul>
            {category.map((cat)=> (
              <li key={cat.name}>
                {cat.slug}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Categories