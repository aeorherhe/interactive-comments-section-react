import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";

const Delete = () => {
  const { state, dispatch } = useGlobalContext();
  const { deleteFlag, deleteId, deleteIndex, username } = state.delete;

  if (!deleteFlag) return null;

  return (
    <StyledDelete>
      <div className="delete-ctn">
        <h1>Delete comment</h1>
        <p>
          {`Are you sure you want to delete this post? This will remove the comment
            and can't be undone.`}
        </p>
        <div className="btns">
          <button
            className="btn cancel"
            onClick={() => {
              dispatch({
                type: "DELETE_REPLY",
              });
            }}
          >
            no, cancel
          </button>
          <button
            className="btn delete"
            onClick={() => {
              dispatch({
                type: "DELETE_REPLY",
                payload: { deleteId, deleteIndex, username },
              });
            }}
          >
            yes, delete
          </button>
        </div>
      </div>
      <div
        className="overlay"
        onClick={() => dispatch({ type: "CLOSE-OVERLAY" })}
      ></div>
    </StyledDelete>
  );
};
export default Delete;

// /********************* styled component *************************/
// /********************* styled component *************************/

const StyledDelete = styled.div`
  .delete-ctn {
    max-width: 30rem;
    padding: 1rem;
    margin: 0 auto;
    border-radius: var(--border-radius);
    background-color: var(--White);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .overlay {
    content: "";
    position: absolute;
    inset: 0;
    /* height: 100%;
    width: 100%; */
    border-radius: var(--border-radius);
    background-color: black;
    opacity: 0.5;
  }

  p {
    margin: 1rem 0;
  }

  .btns {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .btn {
    border-radius: 0.35rem;
    padding: 0.5rem 1rem;
    align-self: start;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--White);
  }

  .delete {
    background-color: var(--Soft-red);
  }

  .cancel {
    background-color: var(--Moderate-blue);
  }
`;
