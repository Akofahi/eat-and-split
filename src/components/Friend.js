export default function Friend({ friend, curOpen, handleOpenToggle }) {
  const id = friend.id;

  return (
    <li>
      <img src={friend.image} alt="friendImage" />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance > 0 ? "green" : friend.balance === 0 ? "" : "red"
        }
      >
        {friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : friend.balance === 0
          ? `You and ${friend.name} are even`
          : `You owe ${friend.name} ${friend.balance}$`}
      </p>
      <button className="button" onClick={() => handleOpenToggle(id)}>
        {id === curOpen ? "Close" : "Select"}
      </button>
    </li>
  );
}
