import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 1, description: 'O ID único do usuário' })
  id: number;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'O e-mail do usuário',
  })
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'O nome do usuário' })
  name: string | null;
}
