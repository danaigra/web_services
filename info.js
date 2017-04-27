'use strice'

var http = require('http'),
    events = require('events'),
    config = require('./config').events,
    emitter = new events(),
    save_prints = " ",
    save=" ";

class user{
    constructor($name, $wins, $type){
        this.name=$name;
        this.wins=$wins;
        this.type=$type;
    }

    plusWins(){
        this.wins+=1;
        emitter.emit(config.plusWins, this.name, this.wins, this.type);
    }

        minusWins(){
        if (this.wins>0)
        {
            this.wins-=1;
            emitter.emit(config.minusWins, this.name, this.wins, this.type);
        }
        else if (this.wins==0)
        {
            console.log('err');
            emitter.emit(config.err);
        }
    }
}

exports.new_user=function($name, $wins, $type){
    var new_user=new user($name,$wins,$type);
    return new_user;
}

emitter.on(config.plusWins, function(name, wins, type){
    console.log(`name: ${name} wins: ${wins} type: ${type}`);
    save+=`name: ${name} wins: ${wins} type: ${type}`;
    exports.save_prints=save;
});

emitter.on(config.minusWins, function(name, wins, type){
    console.log(`name: ${name} wins: ${wins} type: ${type}`);
    save+=`name: ${name} wins: ${wins} type: ${type}`;
    exports.save_prints=save;
});

emitter.on(config.err, function(name, wins, type){
    console.log(`error!!`);
    save+=`error!!`;
    exports.save_prints=save;
});