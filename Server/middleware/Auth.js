import Jwt from "jsonwebtoken"

export const verifyToken = async (req, res, Next) => {
    try {
        const AuthHead = req.headers.authorization
        const token = AuthHead && AuthHead.split(' ')[1];
        if (!token) {
            res.json({ error: 'No token Provided' })
        }
        const decode = Jwt.verify(token, 'myWebAppSecretKey123')
        req.decode = decode
        if (decode) {
            Next()
        } else {
            res.json({ error: "Token Found" })
        }
    } catch (error) {
        console.log(error);
    }
}


