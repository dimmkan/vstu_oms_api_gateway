/// <reference types="multer" />
import { RMQService } from 'nestjs-rmq';
import { UserGetAvatar, UserGetInfo, UserUpdateInfo, UserSetAvatar, UserDeleteAvatar, ValidateUserEmail, GenerateRefreshPasswordLink, ConfirmRefreshPasswordLink } from 'src/contracts';
import { IGenerateRefreshPasswordLinkDto } from 'src/contracts/user/dto/generateRefreshPasswordLink.dto';
import { IUpdateUserDto } from 'src/contracts/user/dto/updateUser.dto';
import { IValidateUserEmailDto } from 'src/contracts/user/dto/validateUserEmail.dto';
export declare class UserController {
    private readonly rmqService;
    constructor(rmqService: RMQService);
    getUserInfo({ id }: {
        id: any;
    }): Promise<UserGetInfo.Response>;
    updatUserInfo({ id }: {
        id: any;
    }, dto: IUpdateUserDto): Promise<UserUpdateInfo.Response>;
    getUserAvatar({ id }: {
        id: any;
    }): Promise<UserGetAvatar.Response>;
    setUserAvatar({ id }: {
        id: any;
    }, avatar: Express.Multer.File): Promise<UserSetAvatar.Response>;
    deleteUserAvatar({ id }: {
        id: any;
    }): Promise<UserDeleteAvatar.Response>;
    validateUserEmail(dto: IValidateUserEmailDto): Promise<ValidateUserEmail.Response>;
    generateRefreshPasswordLink(dto: IGenerateRefreshPasswordLinkDto): Promise<GenerateRefreshPasswordLink.Response>;
    confirm(code: string): Promise<ConfirmRefreshPasswordLink.Response>;
}
