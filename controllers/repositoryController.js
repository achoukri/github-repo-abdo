const repositories = require('../dummyDB/repositoriesDb');

class RepositoryController {
    static getAllRepositories(req, res) {
        return res.status(200).json({
            message: "List of all the publics Github's repositories",
            repositories
        });
    }
    static getAllRepositoriesById(req, res) {
        const id = parseInt(req.params.id, 10);
        const repo = repositories.find(repo => repo.id === id);
        console.log("==================>",repo);
        if(repo) {
        return res.status(200).json({
            message: "List of one public Github's repository",
            repo
        }); }
        else {
        return res.status(404).json({
            message: "repository not found",
            repo
        });
    }
    }
}

module.exports = RepositoryController;