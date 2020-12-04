import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService{
    constructor() {}
    setItem(key: string, value:any){
        // sessionStorage.setItem(key, JSON.stringify({value}));
        localStorage.setItem(key, JSON.stringify({value}));

    }

    getItem(key){
        // const result = JSON.parse(sessionStorage.getItem(key));
        const result = JSON.parse(localStorage.getItem(key));
        return result? result.value: null;
    }
}
