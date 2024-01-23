import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useDeletePlayerMutation } from "../api/api";

function singlePlayer() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(params.id);
  const [deletePlayer] = useDeletePlayerMutation();

  const handleDelete = async () => {
    try {
      await deletePlayer(data.data.player.id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };
  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="single-player-card">
            <div className="single-player-image-container">
              <img
                className="single-player-image"
                src={data.data.player.imageUrl}
                alt={data.data.player.name}
              />
            </div>
            <div className="single-player-details">
              <h1>Player Name: {data.data.player.name}</h1>
              <p>Player Breed: {data.data.player.breed}</p>
              <p>Player Status: {data.data.player.status}</p>
              <p>Created at: {data.data.player.createdAt}</p>
              <p>Team ID: {data.data.player.teamId}</p>
              <button onClick={() => navigate(-1)}>Back to All Players</button>
              <button onClick={handleDelete}>Delete Player</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default singlePlayer;
