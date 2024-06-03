type userID = string; 

export interface Chat {
    userId: userID; 
    name: string; 
    message: string; 
    upvotes: userID[];
}

export abstract class Store{
    constructor() {

    }

    initRoom(roomId: string){

    }

    getChats(roomId:string, limit: number, offset: number){

    }

    addChat(roomId:string, limit: number, offset: number){

    }
}