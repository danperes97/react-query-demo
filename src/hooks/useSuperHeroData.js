import { useQuery, useQueryClient } from "react-query";
import request from "../utils/axios-utils";

const fetchSuperHero = (id) => {
  return request({ url: `/superheroes/${id}` });
};

const useSuperHeroData = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", id], () => fetchSuperHero(id), {
    initialData: () => {
      return queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === id);
    },
  });
};

export default useSuperHeroData;
