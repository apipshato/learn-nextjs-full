if(process.env.NODE_ENF === 'production'){
    module.exports =require('./prod.js');
}{
    module.exports =require('./dev.js');
}