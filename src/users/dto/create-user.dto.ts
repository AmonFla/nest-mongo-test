import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'jhondoe' })
  readonly _id: string;

  @ApiProperty({ example: 'Json Doe' })
  readonly name: string;

  @ApiProperty({ example: 'jhondow@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Spain' })
  readonly country: string;
}
