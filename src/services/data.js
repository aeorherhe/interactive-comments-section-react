import data from "../assets/data.json";

export const commentData = data.comments;
export const currentUserData = data.currentUser;

// set localStorage
export const updateLocalStorage = (state) => {
  const data = JSON.stringify(state);
  localStorage.setItem("data", data);
};

// get localStorage
export const getLocalStorage = () => {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
