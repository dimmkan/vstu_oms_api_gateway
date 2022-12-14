import { Strategy } from 'passport-jwt';
import { IJWTPayload } from 'src/interfaces/jwtpayload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: IJWTPayload): Promise<IJWTPayload>;
}
export {};
