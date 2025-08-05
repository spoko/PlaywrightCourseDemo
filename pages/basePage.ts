export abstract class BasePage{

    abstract isAt(): Promise<boolean>;
}