import { useSelector } from "react-redux";
import { useGetAllPlayersQuery } from "../api/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
  const navigate = useNavigate();
  const players = useSelector((state) => state.player);
  const { isLoading } = useGetAllPlayersQuery();
  return (
    <>
      <div className="players">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          players.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-image-container">
                <img
                  className="player-image"
                  src={player.imageUrl}
                  alt={player.name}
                />
              </div>
              <div className="player-details">
                <h1>{player.name}</h1>
                <button onClick={() => navigate(`/players/${player.id}`)}>
                  See Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AllPlayers;
