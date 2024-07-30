let  userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if (UserRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "no access granted";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);
console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);