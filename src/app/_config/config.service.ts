import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http/src/client";

@Injectable()
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

}
