const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const app = express();
const cors = require('cors')
const port = 3005;
app.use(bodyParser.json());

app.use(cors())


app.get('/api/componentDidMount', ctrl.read)
app.post('/api/addHand', ctrl.create)
app.delete('/api/removeHand/:id', ctrl.delete)
app.put(`/api/editHand/:id`, ctrl.update)


app.listen(port, ()=> {console.log(`Server listening on port ${ port }`);});