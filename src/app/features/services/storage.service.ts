import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class StorageService {

  public god!: string;
  public group!: string;
  public level!: string;

  constructor() {}
}
