import { T } from "../libs/types/common";
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service"

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
    try {
      console.log("goHome");
       res.send("HELLO MOTHER FUCKER BITCH")
    } catch(err) {
       console.log("goHome", err)
    }
    
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
      console.log("getLogin");
       res.send("getLogin")
    } catch(err) {
       console.log("getLogin", err)
    }
    
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
       res.send("getSignup")
    } catch(err) {
       console.log("goHome", err)
    }
    
}
console.log("getSignup")
export default memberController;