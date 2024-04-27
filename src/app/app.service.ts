import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getPong(): { message: string } {
    return { message: "pong" };
  }
}
