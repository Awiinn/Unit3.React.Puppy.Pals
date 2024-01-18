import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../api/api";

function singlePlayer() {
  const params = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(params.id);

  console.log(data);

  return (
    <>
      <div>{isLoading ? <h1>Loading...</h1> : <h1>{data.name}</h1>}</div>
    </>
  );
}

export default singlePlayer;
