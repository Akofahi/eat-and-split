import { useState } from "react";

export default function FormAddFriend({ addFriends, id, curOpen }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  if (id !== curOpen) {
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const friendToAdd = {
      name: name,
      image: image,
      id: Date.now(),
      balance: 0,
    };
    addFriends((friends) => [...friends, friendToAdd]);
  }

  return (
    <div>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="friendName">🧑‍🤝‍🧑Friend name</label>
        <input
          type="text"
          id="friendName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="imageURL">🌄Image URL</label>
        <input
          type="text"
          id="imageURL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}
