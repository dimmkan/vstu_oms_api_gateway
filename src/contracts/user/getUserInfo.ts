export namespace UserGetInfo {
  export const topic = 'user.getinfo.query';

  export class Request {
    id: number;
  }

  export class Response {
    id: number;
    email: string;
    confirmed: boolean;
    user_profiles: {
      id: number;
      full_name: string;
      sex: string;
      birthday: string;
      user_building: {
        id: number;
        name: string;
        address: string;
      };
    };
  }
}
