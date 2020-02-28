import * as config from "./config/";

export class NbaApi {
  protected headers: object;
  protected api_url: string; 
  protected year: number;
  protected date: Date;

  constructor(additional_headers?: object) {
    this.headers = config.ApiHeaders;
    this.api_url = config.API_URL;
    this.year = config.YEAR
    this.date = new Date();

    if(additional_headers) {
      this.headers = Object.assign(this.headers, additional_headers);
    }

  }

  getNbaDate(date: Date) {
    let month: number | string = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;

    let day: number | string = date.getDate();
    day = day < 10 ? '0' + day : day;

    return date.getFullYear().toString() + month + day;
  }
}