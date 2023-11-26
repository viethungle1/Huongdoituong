// Bài Xây dựng lớp mô tả hình chữ nhật
// class Rectangle {
//     constructor(heigh, width) {
//         this.heigh = heigh;
//         this.width = width;
//     }
//     getArea() {
//         let area=(this.heigh*this.width);
//         return area;
//     }
//     getPerimeter () {
//         let perimeter = ((this.heigh + this.width)*2);
//         return perimeter;
//     }
//     drawRec(){
//         let c=document.getElementById("myCanvas");
//         let ctx=c.getContext("2d")
//         ctx.fillStyle="#66FF00";
//         ctx.fillRect(0,0,this.heigh,this.width);
//     }
// }
// let rectangle = new Rectangle(200,300);
// rectangle.drawRec();
// rectangle.getArea();
// document.getPerimeter();

// Bài 2 Xây dựng lớp mô tả Temperature
// class Temperature {
//     constructor(c) {
//         this.c = c;
//     }
//         getF() {
//             let tempF = this.c*1.8+32
//             return tempF
//         }
//         getKenvin () {
//             let tempKenvin = this.c+273
//             return tempKenvin
//         }
// }
// let temperature = new Temperature(25)
// temperature.getF()
// temperature.getKenvin()

// Bài 3 Xây dựng lớp mô tả điện thoại

class Phone {
    constructor(battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    charge(){
        this.battery = 100;
    }
    textMessage(text){
        this.draft = text;
    }
    showInbox(){
        return this.inbox;
    }

    showSent(){
        return this.sent;
    }


    // dien thoai hien tai la this.
    // dien thoai dc nhan tin nhan la phone
    sendMessage(phone){
        //     B1: chuyen thu nhap cua dien thoai hien tai vao sent
        this.sent.push(this.draft);
        //     B2: chuyen thu nhap cua dien thoai hien tai -> inbox cua phone
        phone.inbox.push(this.draft);
        //     B3: xoa thu nhap
        this.draft="";
    }
}
let nokia = new Phone(80,"",[],[])
let iphone = new Phone(85,"",[],[])