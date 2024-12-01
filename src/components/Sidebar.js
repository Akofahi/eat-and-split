import FormAddFriend from "./Form-add-friend";
import Friend from "./Friend";

export default function Sidebar({
  friends,
  addFriends,
  curOpen,
  handleOpenToggle,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            curOpen={curOpen}
            key={friend.id}
            handleOpenToggle={handleOpenToggle}
          />
        ))}
      </ul>
      <FormAddFriend
        addFriends={addFriends}
        curOpen={curOpen}
        id="formAddFirend"
      />
      <button
        className="button"
        onClick={() => handleOpenToggle("formAddFirend")}
      >
        {curOpen === "formAddFirend" ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}
