import { useState } from "react";
import { useAddNewPlayerMutation } from "../api/api";

function NewPlayerForm() {
  const [addNewPlayer, { isLoading }] = useAddNewPlayerMutation();
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewPlayer(playerData);
    } catch (error) {
      console.error("Error Adding New Player", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Add New Player</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your Player Name:
            <input
              type="text"
              name="name"
              value={playerData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your Player Breed:
            <input
              type="text"
              name="breed"
              value={playerData.breed}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your Player Status:
            <input
              type="text"
              name="status"
              placeholder="Enter 'field' or 'bench'"
              value={playerData.status}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your Player image URL:
            <input
              type="text"
              name="imageUrl"
              value={playerData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Player"}
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPlayerForm;
