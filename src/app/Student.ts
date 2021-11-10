
export class Student {
    givenName: string;
    familyName: string;
    birthDate: Date;

    constructor();
    constructor(familyName:string, givenName:string);
    constructor(familyName:string, givenName:string, birthDate:Date);

    constructor(familyName?:string, givenName?:string, birthDate?:Date){
        if(givenName!=null){
            this.givenName = givenName;
        }
        if(familyName!=null){
            this.familyName = familyName;
        }
        if(birthDate!=null){
            this.birthDate = birthDate;
        }
    }

    setFullName(familyName:string, givenName:string){
        this.givenName = givenName;
        this.familyName = familyName;
    }
    
    setBirthDate(birthDate: Date){
        this.birthDate = birthDate;        
    }

    getFullName(): string {
        if(!this.givenName || !this.familyName){
            throw new Error("Student\'s given and/or family name is not set.");
        }            
        return this.familyName + ' ' + this.givenName;
    }

    getBirthDate(): Date {
        if(!this.birthDate){
            throw new Error("Student\'s birth date is not set.");
        }
        return this.birthDate;
    }

    //指定した日付の時の年齢を返すメソッド
    getAge( dateAt: Date): number {
        if(!this.birthDate){
            throw new Error("Student\'s birth date is not set.");
        }
        var age = dateAt.getFullYear() - this.birthDate.getFullYear();

        //今年の誕生日
        var birthday = new Date(dateAt.getFullYear(), this.birthDate.getMonth(), this.birthDate.getDate());
        if (dateAt < birthday) { //今年の誕生日前なら
            age--; 
        }
        return age;
    }
}