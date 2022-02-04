export default function formHandler(req, res){
    console.log(req.body);
    if (!req.body.email){
        return res.status(422).json("Email field is required");
    }
    if (!req.body.message){
        return res.status(422).json("Message field is required");
    }
    return res.status(200).json('OK')
}