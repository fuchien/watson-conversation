export class Config {
    
    private static BACK_ENDPOINT: string = "http://localhost:3004";
    private static BACK_ENDPOINT_HEROKU: string = "";
    private static BACK_ENDPOINT_GITHUB: string = "https://bluehack.herokuapp.com";

    static get BackEndPoint(): string {

        return this.BACK_ENDPOINT_HEROKU;
    }
}