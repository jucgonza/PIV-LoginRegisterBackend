const login = async (req, res) => {
    try {
        res.json({
            message: "Login exitoso",
            status: "success",
        });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error interno", status: "error", error: error});
    }
};

module.exports = {
    login,
}