import { IUserRequest } from '../Interfaces/user/IUserRequest';
import CreateUserRepositoryTest  from '../repository/CreateUserRepositoryTest';

export default class CreateUserService2 {

  // Tipo do memso repositorio que eu criei
  private repository: CreateUserRepositoryTest;

  constructor() {
    this.repository = new CreateUserRepositoryTest();
  }


  async createUserService({ name, email, password }: IUserRequest) {
    const user = await this.repository.createUserRepository({ name, email, password });
    console.log('>>>', user);

    return user;
  }

 }
