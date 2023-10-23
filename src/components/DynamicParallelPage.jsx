/* eslint-disable react/prop-types */
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

const DynamicParallelPage = ({ ids }) => {
  const queryResults = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["superhero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  return (
    <div>
      <h2>DynamicParallelPage</h2>
      {queryResults.map((result) => {
        return <div key={result.data?.data?.id}>{result.data?.data?.name}</div>;
      })}
    </div>
  );
};

export default DynamicParallelPage;
