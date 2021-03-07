const app = require('./src/app.js');

const PORT =  process.env.PORT || 4000;
app.listen(PORT, ()=>{
  console.log(`Server is currently running on port ${PORT}`);
})
