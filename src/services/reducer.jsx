import { nanoid } from "nanoid";
// prettier-ignore
import { commentData, currentUserData, updateLocalStorage, getLocalStorage } from "./data";

import { calculatePostTime } from "./calculateRemainingTime";

export const initialState = {
  currentUser: currentUserData,
  comment: getLocalStorage() === null ? commentData : getLocalStorage(),
  replies: [],
  reply: "",
  replyingTo: "",
  count: commentData.map((item) => item.score),
  editReply: false,
  newPost: false,
  createdAt: calculatePostTime(new Date().getTime()),
  textInput: false,
  delete: {
    deleteFlag: false,
    deleteId: "",
    deleteIndex: "",
    deletePostUser: "",
  },
};

const actionTypes = {
  writePost: "WRITE_POST",
  addReply: "ADD_REPLY",
  showReply: "SHOW_REPLY",
  sendPost: "SEND_POST",
  editReply: "EDIT_REPLY",
  deleteFlag: "DELETE_FLAG",
  deleteReply: "DELETE_REPLY",
  updateTime: "UPDATE_TIME",
  closeOverlay: "CLOSE-OVERLAY",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    //   REPLY
    case actionTypes.showReply: {
      const reply = state.comment.map((item) => item.replies);
      return {
        ...state,
        replyingTo: payload.username,
        replies: reply[payload.index],
        newPost: false,
      };
    }

    //   ADD_REPLY
    case actionTypes.addReply: {
      const post = {
        id: nanoid(),
        content: state.reply,
        createdAt: state.createdAt,
        score: 0,
        replyingTo: state.replyingTo,
        replies: [],
        user: {
          username: state.currentUser.username,
          image: {
            png: state.currentUser.image.png,
            webp: state.currentUser.image.webp,
          },
        },
      };
      state.replies.push(post);
      const reply = state.comment.map((item) => item.replies);
      updateLocalStorage(state.comment);
      return {
        ...state,
        replies: reply[payload],
      };
    }

    //   write post
    case actionTypes.writePost: {
      const postTo = payload.replyingTo;

      if (postTo !== "") {
        const post = payload.reply.slice(state.replyingTo.length + 2);
        return {
          ...state,
          reply: post,
        };
      }
      return {
        ...state,
        reply: payload.reply,
      };
    }

    // send new post
    case actionTypes.sendPost: {
      const post = {
        id: nanoid(),
        content: state.reply,
        createdAt: state.createdAt,
        score: 0,
        replyingTo: "",
        replies: [],
        user: {
          username: state.currentUser.username,
          image: {
            png: state.currentUser.image.png,
            webp: state.currentUser.image.webp,
          },
        },
      };

      state.comment.push(post);
      updateLocalStorage(state.comment);
      return {
        ...state,
        comment: [...state.comment],
        newPost: true,
      };
    }

    // edit reply
    case actionTypes.editReply:
      return {
        ...state,
        editReply: true,
      };

    // deleteFlag
    case actionTypes.deleteFlag: {
      if (!payload.showReplies || !payload.secReplies) {
        return {
          ...state,
          textInput: true,
          delete: {
            deleteFlag: true,
            deleteId: payload.id,
            deleteIndex: payload.index,
            deletePostUser: payload.username,
          },
        };
      }

      return {
        ...state,
        textInput: false,
        delete: {
          deleteFlag: true,
          deleteId: payload.id,
          deleteIndex: payload.index,
          deletePostUser: payload.username,
        },
      };
    }

    // delete reply
    case actionTypes.deleteReply: {
      // const repliesIds = state.comment
      //   .map((item) => item.replies)
      //   .map((item) => item.id);
      const postsIds = state.comment.map((item) => item.id);
      if (!payload) {
        return {
          ...state,
          delete: {
            deleteFlag: false,
          },
        };
      }

      if (state.newPost && postsIds.includes(payload.deleteId)) {
        const post = [
          ...state.comment.filter((item) => item.id !== payload.deleteId),
        ];
        updateLocalStorage(post);
        return {
          ...state,
          comment: post,
          delete: {
            deleteFlag: false,
          },
        };
      }

      if (!state.newPost && postsIds.includes(payload.deleteId)) {
        const post = [
          ...state.comment.filter((item) => item.id !== payload.deleteId),
        ];
        updateLocalStorage(post);
        return {
          ...state,
          comment: post,
          delete: {
            deleteFlag: false,
          },
        };
      }

      const deleteReply = state.comment.map((item) => item.replies);
      const deletePost = deleteReply[payload.deleteIndex].filter(
        (item) => item.id !== payload.deleteId
      );
      const newPost = state.comment.map((item, index) => {
        if (payload.deleteIndex === index) {
          item.replies = deletePost;
          return item;
        }
        return item;
      });
      updateLocalStorage(newPost);
      return {
        ...state,
        comment: newPost,
        textInput: false,
        delete: {
          deleteFlag: false,
          deleteId: "",
          deleteIndex: "",
        },
      };
    }

    // close overlay
    case actionTypes.closeOverlay:
      return {
        ...state,
        delete: {
          deleteFlag: false,
        },
      };

    default:
      return state;
  }
};

export { reducer };
