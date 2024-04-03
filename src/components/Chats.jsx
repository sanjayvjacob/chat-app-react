import React from "react";

function Chats() {
  return (
    <div className="chat">
      <div className="userChat">
        <img
          src="https://pm1.aminoapps.com/6964/ecb336686ac7c1c46faab1a3b9977706a85c0273r1-814-814v2_00.jpg"
          alt="Ross"
        />
        <div className="userChatInfo">
          <span>Ross</span>
          <p>Unagi</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Rachel_Green_Rachel_haircut.jpg/170px-Rachel_Green_Rachel_haircut.jpg"
          alt="Rachel"
        />
        <div className="userChatInfo">
          <span>Rachel</span>
          <p>He's so pretty, I want to cry</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"
          alt="Phoebe"
        />
        <div className="userChatInfo">
          <span>Phoebe</span>
          <p>I asked for the news, not the weather</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg"
          alt="Joey"
        />
        <div className="userChatInfo">
          <span>Joey</span>
          <p>How you doing?</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
