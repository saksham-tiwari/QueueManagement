export default function authHeader() {
    const access = localStorage.getItem("refresh");
    if (access) {
      // For Spring Boot back-end
      return { Authorization: "Bearer " + access };
  
      // for Node.js Express back-end
    //   return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }