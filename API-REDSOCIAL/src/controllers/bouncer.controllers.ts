import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import tweets from "../models/tweets.model";
import user, { socialUser} from "../models/user.model";
import { CustomRequest } from "../types/user.type";
import bcrypt from 'bcrypt';

const salt: number=13;
class Bouncer{

    public async register(req: CustomRequest, rep: FastifyReply): Promise<any>{
        console.log(req.body)
        const {username, email, password}=req.body;
        const thereIsUser= await user.findOne({email: email});
        if (thereIsUser === null && password!==undefined){
            const hash= await bcrypt.hashSync(password,salt);
            const newUser= await new user({username, email, password: hash, location:'', name:'',birthday:'', bio:'',});
            const userTweets= await new tweets({username, tweets: []});
            const socialUserData= await new socialUser({username, followers:[], follows:[]})
            await socialUserData.save()
            await newUser.save();
            await userTweets.save();
            return {msg: 'succesful operation, new user registered', newUser};
        }
        else if(password===undefined){
            return {msg: 'Please, put a password'};
        }
        else if(thereIsUser !==null && (thereIsUser.username === username || thereIsUser.email === email)){
            return {msg: 'user already existed, please change username or email'}
        }
    }

    //handler para login de usuarios

    public async login(req: CustomRequest, rep: FastifyReply): Promise<any>{
        const {email, password}=req.body;
        const thereIsUser= await user.findOne({email: email})
        if(thereIsUser=== null) return rep.status(403).send({msg:'user dont existed'});
        else if(thereIsUser.password===undefined || password===undefined) return rep.status(403).send({msg:'password is empty'});
        else if(bcrypt.compareSync(password, thereIsUser.password)){
            const userTweets= await tweets.findOne({username:thereIsUser.username});
            return rep.status(200).send({msg: 'free pass', username:thereIsUser.username, tweets:userTweets?.tweets});
        }
        else return rep.status(403).send({msg:'incorrect password'});

    }
}

export const bouncer= new Bouncer();