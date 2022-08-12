interface IAuthUseCase {
    isValidEmail: (email: string) => boolean;
}

export class AuthUseCase implements IAuthUseCase {


    isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

}