import { useMutation, useQueryClient } from "react-query";
import request from "../utils/axios-utils";

const addSuperHero = (superHero) => {
  return request({ url: `/superheroes/`, method: "post", data: superHero });
};

const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueriesData("super-heroes");
      queryClient.setQueriesData("super-heroes", (old) => {
        return {
          ...old,
          data: [...old.data, { id: old?.data?.length + 1, ...newHero }],
        };
      });
      return {
        previousHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueriesData("super-heroes", context?.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};

export default useAddSuperHeroData;
