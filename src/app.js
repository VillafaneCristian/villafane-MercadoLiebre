const express = require ('express');
const path = require ('path');
const app = express();

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

app.get('/',function(req,res){
    const homePath = path.join(__dirname,'views/home.html');
    res.sendFile(homePath); 
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});