/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";
import Button from "../utils/Button";

// prettier-ignore
const Message = ({ id, index, content, createdAt, user, replyingTo,
 showReplies, setShowReplies, secReplies, setSecReplies }) => {
  const { username, image } = user;
  const { state:{currentUser},  } = useGlobalContext();
  // prettier-ignore
  const btnProps = {id, showReplies, setShowReplies, secReplies, setSecReplies, username, index};

 
  return (
    <>
      <StyledMessage>
        <div className="header">
          <div className="title">
            <img src={image.webp} alt={username} />
            <h3>{username}</h3>
            <p>{createdAt}</p>
          </div>
          <div className="btns">
            {currentUser.username === username ? (
              <Button type={"delete"} btnProps={btnProps} />
            ) : (
              <Button type={"reply"} btnProps={btnProps} />
            )}
            {currentUser.username === username && (
              <Button type={"edit"} btnProps={btnProps} />
            )}
          </div>
        </div>
        <div className="message">
          <p>
            <a href="/">{replyingTo ? `@${replyingTo}` : null} </a>
            <span className="comment">{content}</span>
          </p>
        </div>
      </StyledMessage>
    </>
  );
};
export default Message;

/********************* styled component *************************/
/********************* styled component *************************/
const StyledMessage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    color: var(--Moderate-blue);
    font-weight: 700;
    text-decoration: none;
  }

  .btns {
    display: flex;
    gap: 1rem;
  }

  textarea {
    cursor: pointer;
  }
`;
