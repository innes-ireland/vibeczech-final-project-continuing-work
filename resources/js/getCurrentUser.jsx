import axios from "axios";

// basically just a function for getting the current user, useful for several different apps

const getCurrentUser = async () => {
  console.log("getting user");
  try {
    const response = await axios("/api/worker");
    const currentUser = response.data ? response.data : null;
    console.log(currentUser);

    return currentUser;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export default getCurrentUser;