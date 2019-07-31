module.exports = router => { //bên đây là sử dụng biến router để tiếp tục lắng nghe link của người dùng
    var mongoose = require('mongoose');

    require('D:/NodeJS/New_Form/dbconfig/connectdb');
    require('D:/NodeJS/New_Form/dbconfig/model');
    var info = [];
    router.get('/search', async function(req, res){
        res.render('search', {
          info : info
        });
    });
    
    router.post('/search', async function(req,res){
      let insert = {
        ...req.body
      }
      //console.log(insert.mssv);
      info = await mongoose.model('students').find({mssv : insert.mssv}, function(err){
        if(err) {console.log(err);};
      }); 
      res.render('search', {
        info: info
      })
    });
}

// e vẫn có thể xử dụng cách cũ là khai báo router rồi exports, nhưng cái đố p<% info.map(eachPerson) => { %>