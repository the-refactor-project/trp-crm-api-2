import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lead } from "../entity/lead.entity";

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead) private leadsRepository: Repository<Lead>,
  ) {}

  findAll(): Promise<Lead[]> {
    return this.leadsRepository.find();
  }
}
