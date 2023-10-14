/* eslint-disable react/prop-types */
// import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";

const ReplyInputBox = ({ type, index }) => {
  const { state, dispatch } = useGlobalContext();
  const { currentUser, replyingTo } = state;

  return (
    <StyledReplyInputBox>
      <div className="user-img">
        <img src={currentUser.image.webp} alt="" />
      </div>
      <textarea
        name="reply"
        id="reply"
        cols="30"
        rows="5"
        placeholder="Add a comment..."
        defaultValue={type === "reply" ? `@${replyingTo} ` : null}
        onChange={(e) =>
          dispatch({
            type: "WRITE_POST",
            payload: { reply: e.target.value, replyingTo },
          })
        }
      ></textarea>
      {type === "send" ? (
        <button
          className="btn send-btn"
          onClick={() => dispatch({ type: "SEND_POST" })}
        >
          {type}
        </button>
      ) : (
        <button
          className="btn send-btn"
          onClick={() => dispatch({ type: "ADD_REPLY", payload: index })}
        >
          {type}
        </button>
      )}
    </StyledReplyInputBox>
  );
};
export default ReplyInputBox;

/********************* styled component *************************/
/********************* styled component *************************/
const StyledReplyInputBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  padding: 1.5rem;
  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius);

  .send-btn {
    border-radius: 0.35rem;
    background-color: var(--Moderate-blue);
    padding: 0.5rem 1rem;
    align-self: start;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--White);
  }

  textarea {
    font-family: "Rubik";
    font-size: 1rem;
    padding: 0.5rem;
  }
`;
