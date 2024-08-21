const rollCheck = (role) => {
    return (req, res, next) => {
        if (req.user.role === role) {
            next();
        } else {
            res.status(403).send('You are not authorized to access this route');
        }
    }
}

export { rollCheck }