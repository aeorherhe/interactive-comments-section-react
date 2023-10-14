/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";
import { Message, Count, ReplyInputBox, Replies, Delete } from "../ui";

const Profiles = () => {
  const {
    state: { comment, textInput },
  } = useGlobalContext();

  return (
    <StyledProfiles>
      {comment.map((item, index) => {
        return (
          <Profile
            key={item.id}
            {...item}
            index={index}
            textInput={textInput}
          />
        );
      })}
      <ReplyInputBox type={"send"} index={null} />
      <Delete />
    </StyledProfiles>
  );
};
export default Profiles;

// prettier-ignore
function Profile({ id,content, createdAt, user, replyingTo, replies, score, index, textInput }) {
  const [showReplies, setShowReplies] = useState(false);
  // prettier-ignore
  const messageProps = { content, createdAt,  replyingTo, };
  const commonProps = { id, user, index, showReplies, setShowReplies, textInput }; 

  return (
    <div className="profiles">
      <div className="contents">
        <Count score={score} />
        <Message {...messageProps} {...commonProps} />
      </div>
      <div className="replies">
        {showReplies && (
          <Replies {...commonProps} replies={replies}/>
        )}
        {showReplies && !textInput && <ReplyInputBox type={"reply"}  index={index} user={user} id={id} />}
      </div>
    </div>
  );
}

// /********************* styled component *************************/
// /********************* styled component *************************/

const StyledProfiles = styled.section`
  font-size: 1rem;

  .profiles {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  .contents {
    padding: 1.5rem;
    display: flex;
    gap: 1.5rem;
    box-shadow: var(--box-shadow-2);
    border-radius: var(--border-radius);
  }

  @media screen and (max-width: 45rem) {
    .contents {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`;
