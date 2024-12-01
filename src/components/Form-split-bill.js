import { useState } from "react";

export default function FormSplitBill({
  friends,
  editFriend,
  curOpen,
  handleOpenToggle,
}) {
  const [bill, setBill] = useState(0);
  const [yourExpanse, setYourExpanse] = useState(0);
  const [friendExpanse, setFriendExpanse] = useState(0);
  const [whosPaying, setWhosPaying] = useState("You");
  if (curOpen === "formAddFirend" || curOpen === null) {
    return;
  }

  const friend = friends.slice().filter((friend) => friend.id === curOpen);
  function handleSubmit(e) {
    e.preventDefault();
    if (friendExpanse < 0) {
      return window.alert("Expanse cant be negative value");
    }
    if (bill < yourExpanse) {
      return window.alert("Expanse cant be more than bill");
    }
    const balance =
      whosPaying === "You" ? bill - yourExpanse : -(bill - yourExpanse);
    editFriend(
      friends.map((friend) =>
        friend.id === curOpen ? { ...friend, balance: balance } : friend
      )
    );
    setBill(0);
    setFriendExpanse(0);
    setYourExpanse(0);
    setWhosPaying("You");
    handleOpenToggle(friend[0].id);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {friend[0].name}</h2>
      <label htmlFor="bill">💰Bill value</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label htmlFor="your-expanse">🕴️Your expanse</label>
      <input
        type="text"
        id="your-expanse"
        value={yourExpanse}
        max={bill}
        onChange={(e) => setYourExpanse(+e.target.value)}
      />
      <label htmlFor="friend-expanse">🧑‍🤝‍🧑Friend expanse</label>
      <input
        type="text"
        id="friend-expanse"
        value={bill - yourExpanse}
        onChange={(e) => setFriendExpanse(+e.target.value)}
        disabled
      />
      <label htmlFor="whos-paying">🤑Who is paying the bill?</label>
      <select
        id="whos-paying"
        value={whosPaying}
        onChange={(e) => setWhosPaying(e.target.value)}
      >
        <option value="You">You</option>
        <option value="Friend">{friend[0].name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
