import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const {
    data: superHeroes,
    isLoading: spLoading,
    isError: spIsError,
    error: spError,
  } = useQuery("superheroes", fetchSuperHeroes);
  const {
    data: friends,
    isLoading: friendsLoading,
    isError: friendsIsError,
    error: friendsError,
  } = useQuery("friends", fetchFriends);

  if (spLoading || friendsLoading) {
    return <h2>Loading...</h2>;
  }

  if (spIsError || friendsIsError) {
    return <h2>{spError?.message || friendsError?.message}</h2>;
  }

  return (
    <div>
      <h2>Super Heroes</h2>
      {superHeroes?.data.map((superhero) => {
        return <div key={superhero.id}>{superhero.name}</div>;
      })}

      <h2>Friends</h2>
      {friends?.data.map((superhero) => {
        return <div key={superhero.id}>{superhero.name}</div>;
      })}
    </div>
  );
};

export default ParallelQueriesPage;
