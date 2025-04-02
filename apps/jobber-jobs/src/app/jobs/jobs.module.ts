import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';

import { FibonacciJob } from './fibonacci.job';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.reolver';

@Module({
  imports: [DiscoveryModule],
  providers: [FibonacciJob, JobsService, JobsResolver],
})
export class JobsModule {}
