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
});
