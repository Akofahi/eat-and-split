import Sidebar from "./Sidebar";
import FormSplitBill from "./Form-split-bill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [curOpen, setCurOpen] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleOpenToggle(id) {
    if (id === curOpen) {
      return setCurOpen(null);
    }
    setCurOpen(id);
  }

  return (
    <div className="app">
      <Sidebar
        friends={friends}
        addFriends={setFriends}
        curOpen={curOpen}
        handleOpenToggle={handleOpenToggle}
      />
      <FormSplitBill
        friends={friends}
        editFriend={setFriends}
        curOpen={curOpen}
        handleOpenToggle={handleOpenToggle}
      />
    </div>
  );
}
