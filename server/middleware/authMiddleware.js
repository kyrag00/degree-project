const { admin } = require("../firebase");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.userId = decodedToken.uid; // Attach user ID to request
    next();
  } catch (error) {
    console.error("Authentication failed; error verifying token:", error);
    res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = authenticate;
