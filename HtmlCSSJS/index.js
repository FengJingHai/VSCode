/*index.html*/
document.write("Hello JavaScript~" + "<br>");
document.write(Math.ceil(3.3)+"<br>");
document.write(Math.ceil(-0.1)+"<br>");
document.write(Math.ceil(-9.9)+"<br>");
document.write(Math.ceil(8.9)+"<br>");
//数组练习
var myarr = new Array();
for (i = 0; i < 3; i++) {
    myarr[i] = new Array();
    for (j = 0; j < 6; j++) {
        myarr[i][j] = i * j;
    }
}
for (i = 0; i < 3; i++) {
    for (j = 0; j < 6; j++) {
        document.write(myarr[i][j] = i * j + "&nbsp");
    }
    document.write("<br>");
}

//数组练习-1
//第一步把之前的数据写成一个数组的形式,定义变量为 infos
var infos = [['小A', '女', 21, '大一'], ['小B', '男', 23, '大三'],
['小C', '男', 24, '大四'], ['小D', '女', 21, '大一'],

['小E', '女', 22, '大四'], ['小F', '男', 21, '大一'],

['小G', '女', 22, '大二'], ['小H', '女', 20, '大三'],

['小I', '女', 20, '大一'], ['小J', '男', 20, '大三']];

//第一次筛选，找出都是大一的信息
for (i = 0; i < 10; i++) {
    if (infos[i][3] == "大一") {
        document.write(infos[i] + "<br>");
    }
}
document.write("<hr>");
//第二次筛选，找出都是女生的信息
for (i = 0; i < 10; i++) {
    if (infos[i][1] == "女") {
        document.write(infos[i] + "<br>");
    }

}

function openwindow() {
    document.write("调用了openwindows!" + "<br>")
    var open = confirm("是否打开窗口？");
    if (open == true) {
        var openedwindow = window.open('http://www.imooc.com', '_blank', 'width=400px,height=400px,menubar=no,toolbar=no');
        document.write("打开了新窗口~");
        openedwindow.close();
    } else {
        var feedback = prompt("为何不打开？");
        document.write("你不打开的原因是：" + feedback);
    }
}


function message() {
    alert("加载中，请稍等…");
}

/*index2.html*/
var myh2 = document.getElementById("con");
var mydiv = document.getElementById("txt");

//定义"改变颜色"的函数
function changecolor() {
    myh2.style.color = "red";
    myh2.backgroundColor = "#CCC"
    mydiv.style.color = "blue";
    mydiv.style.backgroundColor = "#CCC"
}

//定义"改变宽高"的函数
function changesize() {
    myh2.style.width = "20px";
    myh2.style.height = "20px";
    mydiv.style.width = "20px";
    mydiv.style.height = "20px";
}

//定义"隐藏内容"的函数
function nodisplay() {
    myh2.style.display = "none";
    mydiv.style.display = "none";
}

//定义"显示内容"的函数
function display() {
    myh2.style.display = "block";
    mydiv.style.display = "block";
}
//定义"取消设置"的函数
function cancelsetting() {
    var result = confirm();
    if (result == true) {
        myh2.removeAttribute("style");
        mydiv.removeAttribute("style");
    } else {
        alert("你取消了操作~");
    }
}

function onunload_message() {
    // window.onunload = onunload_message;
    // alert("您确定离开该网页吗？");
}



function count() {

    //获取第一个输入框的值
    //获取第二个输入框的值
    //获取选择框的值
    //获取通过下拉框来选择的值来改变加减乘除的运算法则
    //设置结果输入框的值 
    var num1 = parseInt(document.getElementById("txt1").value);
    var sign = document.getElementById("select").value;
    var num2 = parseInt(document.getElementById("txt2").value);
    //  document.write(num1);
    //  document.write(sign);
    //  document.write(num2);
    switch (sign) {
        case "+":
            document.getElementById("fruit").value = num1 + num2;
            break;
        case "-":
            document.getElementById("fruit").value = num1 - num2;
            break;
        case "*":
            document.getElementById("fruit").value = num1 * num2;
            break;
        case '/':
            document.getElementById("fruit").value = num1 / num2;
            break;
        default:
            break;
    }

}