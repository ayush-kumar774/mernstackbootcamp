const express = require("express") ;

const app = express() ;

const port = 8000 ;

app.get("/" , (req, res) => {
        return res.send("Hello World!");
        }
);

const admin = (req, res) => {
        return res.send("This is admin dashboard");
};

const isAdmin = (req, res, next) => {
        console.log("isAdmin is running");
        next();
};

const isLoggedIn = (req, res, next) => {
        console.log("is logged in");
        next();
};

app.get("/admin" , isLoggedIn , isAdmin , admin);


app.get("/login" , (req, res) => {
        return res.send("You are visiting login route");
        }
);

app.get("/signout" , (req, res) => {
        return res.send("Click here to sign out");
        }
);

app.listen(port, () => {
        console.log("Server is up and running...");
        }
);
