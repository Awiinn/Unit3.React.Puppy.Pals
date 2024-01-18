import { Navigate, useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../api/api";
import { useNavigate } from "react-router-dom";

function singlePlayer() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(params.id);

  console.log(data);

  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h1>{data.name}</h1>
            <button onClick={() => navigate(-1)}>Back to All Players</button>
          </div>
        )}
      </div>
    </>
  );
}

export default singlePlayer;
