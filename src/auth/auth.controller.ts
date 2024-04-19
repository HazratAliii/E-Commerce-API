import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { UpdateSignupDto } from './dto/update.signup.dto';
import { Response } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: SignupDto, @Res() res: Response) {
    return this.authService.create(createAuthDto, res);
  }

  @Post('signin')
  SignIn(@Body() createAuthDto: SignupDto, @Res() res: Response) {
    return this.authService.SignIn(createAuthDto, res);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.authService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  Add_user_info() {}
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateSignupDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
