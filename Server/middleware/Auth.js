import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json('unauthorized');
                console.log('unauthorized');
            }
            req.user = decoded;
            next();
        });
    } else {
        res.json('unauthorized');
    }
};


export const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json('unauthorized');
            }
            req.admin = decoded;
            next();
        });
    } else {
        res.json('unauthorized');
    }
};

export const verifyProviderToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json('unauthorized');
            }
            req.user = decoded;
            next();
        });
    } else {
        res.json('unauthorized');
    }
};