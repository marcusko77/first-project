let hands = [];
let id = 0;

module.exports = {

    
    
    create:  (req, res) => {
        req.body.id = id;
        hands.push( req.body);
        id++;
        res.status(200).send(hands);
    },

    read: (req, res) => {
        res.status(200).send(hands)
    },
    
    delete: (req, res) => {
        handIndex = hands.findIndex( hand => hand.id === req.params.id);
        hands.splice(handIndex, 1);
        res.status(200).send(hands);
    },

    update: (req, res) => {
      
        for(var i = 0; i < hands.length; i++){
            if(hands[i].id === +req.params.id){
                hands[i].inputName = req.body.inputName || hands[i].inputName;
                hands[i].inputHand = req.body.inputHand || hands[i].inputHand;
                return res.status(200).send(hands);
            };

        }
        

    }
        
    
}