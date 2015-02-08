/**
 * Created by Gerardo on 08/02/2015.
 */
module.exports = function(express, app){
    var router = express.Router();

    router.get('/', function(req, res, next){
        res.render('index',{titulo:'Hola Mundo!'});
    })

    app.use('/',router);
}