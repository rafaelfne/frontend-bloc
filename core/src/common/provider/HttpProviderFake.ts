import { injectable } from "inversify";
import { fund } from "../../funds/test/mock/fund";

const data = {
  "/funds/warren-fic-fim-cp": fund
} as Record<string, unknown>;

@injectable()
export class HttpProviderFake {
  get(url: string): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({ data: data[url] });
    });
  }
}
