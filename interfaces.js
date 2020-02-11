var rect1 = {
    id: '14',
    size: {
        width: 20,
        height: 30
    },
    color: 'red'
};
var rect2 = {
    id: '15',
    size: {
        width: 10,
        height: 20
    }
};
rect2.color = 'black';
var rect3 = {}; // будет впоследствии проверять на соответствие типам, объявленным в Rect
var rect4 = {
    id: '123',
    size: {
        width: 20,
        height: 28
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect4.getArea());
