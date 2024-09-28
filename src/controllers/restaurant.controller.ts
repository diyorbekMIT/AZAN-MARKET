import { T } from "../libs/types/common";
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service"
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { InputType } from "zlib";

const memberService =  new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
      console.log("goHome");
       res.render("home")
    } catch(err) {
       console.log("getSignup", err)
    }
    
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
      console.log("getLogin");
       res.render("login")
    } catch(err) {
       console.log("getSignup", err)
    }
    
}

restaurantController.getSignup = (req: Request, res: Response) => {
   try {
     console.log("getSignup");
      res.render("signup")
   } catch(err) {
      console.log("getSignup", err)
   }
   
}


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
   try {
     console.log("processSignup");
     const newMember: MemberInput = req.body;
     newMember.memberType = MemberType.RESTAURTANT;
     const result =  await memberService.processSignup(newMember);

     
     req.session.member = result;
     req.session.save(function () {
      res.end(result)
     })

     console.log(result);
      res.send(result);
   } catch(err) {
      console.log("processSignup", err);
      res.send(err);
   }
   
}



restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
   try {
      const newMember: LoginInput = req.body;
      const result =  await memberService.processLogin(newMember);
     console.log("processLogin");

     req.session.member = result;
     req.session.save(function () {
      res.send(result)
     })
   } catch(err) {
      console.log("processLogin", err);
      res.send(err);
   }
}





export default restaurantController ;