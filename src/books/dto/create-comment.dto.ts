import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/schemas/user.schema';

export class CreateCommentDto {
  @ApiProperty({ example: 'Esperaba más' })
  readonly title: string;

  @ApiProperty({ example: 3 })
  readonly stars: number;

  @ApiProperty({ example: 'Nisi officia .....' })
  readonly comment: string;

  @ApiProperty({ example: 'jhondoe' })
  readonly username: User;
}
