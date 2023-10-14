import { FaReply } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";

/* eslint-disable react/prop-types */
const Button = ({ type, btnProps }) => {
  // prettier-ignore
  const { showReplies, setShowReplies, secReplies, setSecReplies, username, index, id } = btnProps;
  const { dispatch } = useGlobalContext();

  return (
    <StyledButton>
      {type === "reply" && <FaReply />}
      {type === "delete" && <AiFillDelete className="delete-btn" />}
      {type === "edit" && <AiFillEdit />}
      <button
        className={`btn ${type}-btn`}
        onClick={() => {
          dispatch({
            type: `${
              type === "edit"
                ? "EDIT_REPLY"
                : type === "delete"
                ? "DELETE_FLAG"
                : "SHOW_REPLY"
            }`,
            payload: { username, index, id, showReplies, secReplies },
          });

          if (!setSecReplies) {
            setShowReplies(!showReplies);
          }

          if (!setShowReplies) {
            setSecReplies(!secReplies);
          }
        }}
      >
        {type}
      </button>
    </StyledButton>
  );
};
export default Button;

// /********************* styled component *************************/
// /********************* styled component *************************/

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--Moderate-blue);

  .delete-btn {
    color: var(--Soft-red);
  }
`;
