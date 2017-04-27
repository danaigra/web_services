var http = require('http'),
    user = require('./info');
http.createServer(function (req,res) {
     var user1 = user.new_user("user1", 3, "football");
         user1.plusWins();
     var user2 = user.new_user("user2", 2, "football");
         user2.minusWins();
         user2.minusWins();
         user2.minusWins();
    res.writeHeader(200);
    res.write(user.save_prints);
    res.end('success\n');
}).listen(8080);
console.log('listening on port 8080');