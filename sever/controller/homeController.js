

class HomeController {

    index (req, res) {
        res.send("Home page")
    }
}

module.exports = new HomeController;