import { useSelector } from "react-redux";
import { useGetAllPlayersQuery } from "../api/api";
import { Link } from "react-router-dom";

function AllPlayers() {
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
                <Link key={player.id} to={"/players/" + player.id}>
                  <button>See Details</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AllPlayers;
