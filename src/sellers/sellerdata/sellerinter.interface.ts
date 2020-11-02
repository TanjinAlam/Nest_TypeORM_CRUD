import { UserInfo } from "src/users/userdata/userdetails.entity";

export interface SellerInfoInter {
    shopname: string;
    username:string;
    password:string;
    cellNo: string;
    useremail: string;
    address: string;
    DOB: string;
    gender: string;
    nationality: string;
    role: string;
    CreatedBy?: string;
    CreatedAt?: string;
    UpdatedBy?: string;
    UpdatedAt?: string;
    user:UserInfo
}