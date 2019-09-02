import { controller, httpGet } from "inversify-express-utils";

@controller("/api/hello")
export default class SatestoController {

    @httpGet("/hi")
    async salute() {
        return "hello";
    }

}