import { Controller, Get } from "@nestjs/common";
import { LeadsService } from "../service/leads.service";
import { Lead } from "../entity/lead.entity";
import { BodyResponse } from "src/types";

@Controller("leads")
export class LeadsController {
  constructor(private leadService: LeadsService) {}

  @Get()
  async findAll(): Promise<BodyResponse<"leads", Lead[]>> {
    return { leads: await this.leadService.findAll() };
  }
}
