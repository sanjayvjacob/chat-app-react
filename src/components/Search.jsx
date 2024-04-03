import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://hips.hearstapps.com/vidthumb/images/elle-monica-geller-friends-1554216155.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
          alt="Monica"
        />
        <div className="userChatInfo">
          <span>Monica</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
