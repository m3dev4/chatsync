import jwt  from "jsonwebtoken";

const generateTokenandSetCookie = (userId, res) => {
    const jwtSecret = "gXS8DWEPJBqTclf4XWor4Dc4fqp9Z4jkwt8MXQ3RnlA="
    const token = jwt.sign({ userId }, jwtSecret,{
        expiresIn: "30d"
    })
    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: "development"
    })
}
export default generateTokenandSetCookie;