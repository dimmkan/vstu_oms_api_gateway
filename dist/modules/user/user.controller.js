"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const nestjs_rmq_1 = require("nestjs-rmq");
const contracts_1 = require("../../contracts");
const jwt_guard_1 = require("../../guards/jwt.guard");
const user_decorator_1 = require("../../guards/user.decorator");
let UserController = class UserController {
    constructor(rmqService) {
        this.rmqService = rmqService;
    }
    async getUserInfo({ id }) {
        try {
            return await this.rmqService.send(contracts_1.UserGetInfo.topic, { id });
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async updatUserInfo({ id }, dto) {
        try {
            return await this.rmqService.send(contracts_1.UserUpdateInfo.topic, { id, user_profile: dto });
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async getUserAvatar({ id }) {
        try {
            return await this.rmqService.send(contracts_1.UserGetAvatar.topic, { id });
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async setUserAvatar({ id }, avatar) {
        try {
            return await this.rmqService.send(contracts_1.UserSetAvatar.topic, {
                id,
                avatar: avatar.buffer.toString('base64'),
                filename: avatar.originalname,
            });
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async deleteUserAvatar({ id }) {
        try {
            return await this.rmqService.send(contracts_1.UserDeleteAvatar.topic, { id });
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async validateUserEmail(dto) {
        try {
            return await this.rmqService.send(contracts_1.ValidateUserEmail.topic, dto);
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async generateRefreshPasswordLink(dto) {
        try {
            return await this.rmqService.send(contracts_1.GenerateRefreshPasswordLink.topic, dto);
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    async confirm(code) {
        try {
            return await this.rmqService.send(contracts_1.ConfirmRefreshPasswordLink.topic, { hash: code });
        }
        catch (error) {
            if (error instanceof nestjs_rmq_1.RMQError) {
                if (error.code && error.code === 400) {
                    throw new common_1.BadRequestException(error.message);
                }
            }
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatUserInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Get)('avatar'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserAvatar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Post)('avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 5000000 }),
            new common_1.FileTypeValidator({ fileType: 'jpeg|png' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "setUserAvatar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Delete)('avatar'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserAvatar", null);
__decorate([
    (0, common_1.Post)('validate-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "validateUserEmail", null);
__decorate([
    (0, common_1.Post)('generate-refresh-link'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "generateRefreshPasswordLink", null);
__decorate([
    (0, common_1.Get)('confirm-refresh-link'),
    __param(0, (0, common_1.Query)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "confirm", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [nestjs_rmq_1.RMQService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map