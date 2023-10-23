import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>Super Hero details</h2>
      <p>Name: {data?.data.name}</p>
      <p>Alter ego: {data?.data.alterEgo}</p>
    </div>
  );
};

export default RQSuperHeroPage;
