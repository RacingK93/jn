// 1.创建一个构造函数
function Student(name,sex){
    this.name = name;
    this.sex = sex;
}

// 2.创建构造函数的原型对象
Student.prototype = {
    constructor:Student,
    study:function(){
        console.log(this.name+"是一个爱学习的好同学！")
    }
}

var stu = new Student("小明");
stu.study();