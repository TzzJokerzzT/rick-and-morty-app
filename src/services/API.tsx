import { ApiResponse } from "@/types/services.interface";

export const fecthAPI = async (
  page: number,
  status: string,
  gender: string,
  name: string
): Promise<ApiResponse> => {
  const resp = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}&name=${name}`
  );
  const data: ApiResponse = await resp.json();
  return data;
};
