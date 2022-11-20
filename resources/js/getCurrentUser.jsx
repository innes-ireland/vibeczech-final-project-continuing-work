import axios from "axios";

const getCurrentUser = async () => {
  console.log("getting user");
  try {
    const response = await axios("/api/user");
    const currentUser = response.data ? response.data : "logged out";
    console.log(currentUser);

    return currentUser;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export default getCurrentUser;