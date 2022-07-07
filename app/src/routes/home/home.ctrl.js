'use strict'


const output = {
    home : (req, res) => {
        res.render('home/index.ejs');
    },

    login :(req, res) => {
        res.render('home/login.ejs');
    },
};

const users = {
    id : ['dbgus' , '강유현' ,'유현이'],
    psword:['1234','123', '12324'],
};
const process = {
    login :(req,res)=>{
        const id = req.body.id,
        psword = req.body.ps;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success:true,
                });
            }
        }
        return res.json({
            success:false,
            msg:'로그인에 실패하셨습니다.',
        });
    }
}

module.exports= {
    output,
    process
};