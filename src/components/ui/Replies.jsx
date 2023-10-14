import styled from "styled-components";
import { Count, Message, ReplyInputBox } from "./index";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Replies = ({
  replies,
  showReplies,
  setShowReplies,
  index,
  textInput,
}) => {
  return (
    <StyledReplies>
      {replies.map((item) => {
        return (
          <article key={item.id} className="replies">
            <Count {...item} />
            <Reply
              index={index}
              item={item}
              textInput={textInput}
              showReplies={showReplies}
              setShowReplies={setShowReplies}
            />
          </article>
        );
      })}
    </StyledReplies>
  );
};
export default Replies;

const Reply = ({ item, index, textInput }) => {
  const [secReplies, setSecReplies] = useState(false);

  return (
    <div className="reply">
      <Message
        {...item}
        index={index}
        secReplies={secReplies}
        setSecReplies={setSecReplies}
      />
      {secReplies && !textInput && (
        <ReplyInputBox type={"reply"} index={index} />
      )}
    </div>
  );
};

// /********************* styled component *************************/
// /********************* styled component *************************/

const StyledReplies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: var(--line);
  padding-left: 2rem;
  margin: 2rem 0 2rem 2rem;

  .replies {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    box-shadow: var(--box-shadow-2);
    border-radius: var(--border-radius);
  }

  .reply {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media screen and (max-width: 45rem) {
    .replies {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`;
