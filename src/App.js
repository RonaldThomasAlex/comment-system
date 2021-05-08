import React from "react";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:00AM"
          comment="Nice blog post"
          img={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="James"
          timeAgo="Today at 5:00AM"
          comment="Nice blog post"
          img={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Thomas"
          timeAgo="Today at 12:00AM"
          comment="Nice blog post"
          img={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Rahul"
          timeAgo="Today at 2:00PM"
          comment="Nice blog post"
          img={faker.image.cats()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
