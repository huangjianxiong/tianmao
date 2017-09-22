

'use strict';


window.onload = function () {
    //轮播图的效果
    let baBox1 = document.getElementsByClassName('ban')[0];
    let baBox = document.getElementsByClassName('bam');
    let lis = document.querySelectorAll('.btn>li');
    let index = 0;
    let t = setInterval(fun, 2000);
    let arr = ['#987531', '#FCAE24', '#E56813', '#015FD7', '#F43835', '#E8B1B4'];

    function fun() {
        index++;
        if (index == baBox.length) {
            index = 0;
        }
        for (let i = 0; i < baBox.length; i++) {
            baBox[i].style.display = 'none';
            lis[i].className = "";
        }
        baBox[index].style.display = 'block';
        baBox[index].style.background = arr[index];
        lis[index].className = 'hot';
    }

    baBox1.onmouseover = function () {
        clearInterval(t);
    }
    baBox1.onmouseout = function () {
        t = setInterval(fun, 2000);
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (let j = 0; j < baBox.length; j++) {
                baBox[j].style.display = 'none';
                lis[j].className = "";
            }
            lis[i].className = 'hot';
            baBox[i].style.display = 'block';
            index = i;
        }
    }
    //banner 的侧边拉出效果
    // let bs=document.getElementsByClassName("cla1");
    var show = document.getElementsByClassName('show');
    var hidden = document.getElementsByClassName('hidden');
    var lsi = document.getElementsByClassName('hot');
    for (let k = 0; k < show.length; k++) {
        show[k].onmouseover = function () {
            hidden[k].style.display = "block";
        }
        show[k].onmouseout = function () {
            hidden[k].style.display = "none";
        }
    }


    //鼠标下拉 显示出来搜索和侧边
    let nav = document.getElementsByClassName('heads')[0];
    let ch = document.getElementsByClassName('ce')[0];
    let flag1 = true, flag = true, n = 0;
    let aee = [];

    // let aee[];
    window.onscroll = function () {
        let tops = document.body.scrollTop;
        // console.log(tops);
        if (tops >= 664) {
            if (flag1) {
                flag1 = false;
                nav.style.transform = `translateY(50px)`;
                ch.style.left = 0;
            }
        } else if (tops < 664) {
            if (!flag1) {
                flag1 = true;
                nav.style.transform = `translateY(-50px)`;
                ch.style.left = "-35px";
            }
        }
    }


    //楼层点击跳转
    let db = document.querySelector('.ce .a2');
    db.onclick = function () {
        animate(document.body, {scrollTop: 0});
    }
    let floor = document.querySelectorAll('.lc');
    let dj = document.querySelectorAll('.ce a');
    floor.forEach(function (value, index) {
        aee.push(value.offsetTop);
    });
    for (let i = 0; i < dj.length; i++) {
        dj[i].onclick = function () {
            flag = false;
            dj[n].classList.remove('floor');
            this.classList.add('floor');
            n = i;
            animate(document.body, {scrollTop: aee[i]});
        }
    }
};

//按需加载

