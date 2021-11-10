import { Student } from '../app/Student'
 
describe('Student test suite', () => {
    test('コンストラクタで設定した姓名からフルネームを返す', () => {
        let student = new Student('河原','太郎');
        expect(student.getFullName()).toBe('河原 太郎');
    });
    test('setFullNameメソッドで設定した姓名からフルネームを返す', () => {
        let student = new Student();
        student.setFullName('河原','太郎');
        expect(student.getFullName()).toEqual('河原 太郎');
    });
    test('setBirthDateで2020-10-01と設定したら2021-10-01には年齢が1', () => {
        let student = new Student();
        student.setBirthDate( new Date('2020-10-01') );
        expect(student.getAge(new Date('2021-10-01'))).toBe(1);
    });
    test('setBirthDateで2020-10-01と設定したら2021-09-30には年齢が0', () => {
        let student = new Student();
        student.setBirthDate( new Date('2020-10-01') );
        expect(student.getAge(new Date('2021-09-30'))).toBe(0);
    });

    test('氏名が設定されていない状態でgetFullNameを呼ぶと例外がスローされる',() => {
        let student = new Student();
        try{
            student.getFullName();
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', "Student\'s given and/or family name is not set.");
        }
    });
    test('氏名が設定されていない状態でgetFullNameを呼ぶと例外がスローされる(関数内でgetFullName)', ()=>{
        function expectError(){
            let student = new Student();
            student.getFullName();
        }
        expect(expectError).toThrow(); 
        //toThrow() の引数を省略すると、例外がスローされていることのみを確認する
    });
    test('氏名が設定されていない状態でgetFullNameを呼ぶと例外がスローされる(無名関数内でgetFullName)', ()=>{
        expect(() => {
            let student = new Student();
            student.getFullName();
        }).toThrow("Student\'s given and/or family name is not set."); 
        //toThrow() の引数に文字列を設定すると、例外のメッセージも確認する
    });

    test('生年月日が設定されていない状態でgetFullNameを呼ぶと例外がスローされる',() => {
        let student = new Student();
        try{
            student.getBirthDate();
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', "Student\'s birth date is not set.");
        }
    });
    test('生年月日が設定されていない状態でgetFullNameを呼ぶと例外がスローされる',() => {
        let student = new Student();
        try{
            student.getAge(new Date('2021-10-01'));
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', "Student\'s birth date is not set.");
        }
    });

});
