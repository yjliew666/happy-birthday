/**
 * 打字效果 byaei
 */
 function typewrite()
 {
     let str="生日快乐！希望你喜欢这份生日礼物嘿嘿<哎呀不知不觉都聊三年了，真的好幸运啊<这首是我很喜欢的一首钢琴曲，要是可以的话还想用我弹的版本作背景音乐<但是.....但是我学不来啊！！TT所以我选择了这个当初一听就爱上的版本！<本来要搞个计时器在下面算计时我们认识了多久的<结果我也做不到！！（掩面痛哭）一直卡bug，于是我放弃了<接下来就单纯听歌吧";//利用<作为换行符 -作为空格
     let strp="";
     let i=0;
     function print1()
     {        
         if(str[i]=='<')
         {
             document.getElementById("box1").innerHTML=strp+"<br><br>"+'|';
             strp+="<br><br>";
         }
         else
         if(str[i]=='-')
         {
             document.getElementById("box1").innerHTML=strp+'&nbsp&nbsp&nbsp';
             strp+="&nbsp&nbsp&nbsp";
         }
         else
         {
             strp+=str[i];
             document.getElementById("box1").innerHTML=strp+'|';
         }
         i++;
     }
     function print2()
     {
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'&nbsp';},100);
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
     }
     let printid=setInterval(() => {
         print1();
         if(i==str.length)
         clearInterval(printid);
     },90);  
     setTimeout(() => {
         id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
     },(str.length-1)*90);
     //0.53秒闪一次
 }



let clickb=false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件
 
 function funclick()
 {
     let x = document.createElement("audio");
     x.setAttribute("src", "./video/55.mp3");
     x.setAttribute("autoplay","autoplay");
     let yinyan=document.getElementById("yinyan");
     yinyan.setAttribute("style","opacity:0");
     setTimeout(function(){
         document.getElementById("fronclick").style.zIndex=-300;
         document.getElementById("box").style.opacity=1;
     },1500);//让播放按钮消失了
     //yinyan.style.opacity=0;
     clickb=true;
 }


 
 
 let k={
     a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
     A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
 } 
 let a=[
     {name:"A",yin:1, str:"<br><br><br>这是第二个字母....<br><br>继续加油<br><br>柯南都没有你聪明"},
     {name:"B" ,yin:2, str:`<br><br><br><br>哈？干嘛按我啊<br>你走错路了啦<br><br>B哪里像密码了`},
     {name:"C" ,yin:3, str:"<br><br><br><br>Car goes the wrong way<br><br>"},
     {name:"D" ,yin:4, str:"<br><br><br><br>D for Donkey<br><br>打出来的那一瞬间才意识到<br><br>念了那么久的顺口....<br><br>原来是驴啊"},
     {name:"E" ,yin:6, str:"<br>你是不是从上一条线索来的呀<br><br>是的话请务必告诉我<br><br>为了找到我<br><br>你真的一个个字母算笔画吗？<br><br>高手都是直接猜整个词的。"},
     {name:"F" ,yin:2, str:"恭喜！<br><br>你找到第一个字母啦<br><br>虽然不知道你是误打误撞还是猜到了内容.....<br><br>无论如何，<br><br>这个字母的下一个联系是什么呢？"},
     {name:"G" ,yin:7, str:"<br><br>明明我上一个兄弟才是正解<br><br>不要再敲我门了行不行<br><br>这提示就当送你的了<br></br>我怎么那么好啊"},
     {name:"H" ,yin:5, str:"<br><br>H for Happy Birthday！<br></br>希望你玩得愉快<br></br>但真的不是我<br><br>找找其他兄弟姐妹吧"},
     {name:"I" ,yin:2, str:"<br><br>恭喜你找到我了！<br><br>奖励你下一个字母的线索吧.... <br>它是个英文单词噢<br>听说还是一首英文歌的名字....？<br>原唱主唱叫Adam<br><br>你猜？"},
     {name:"J" ,yin:10, str:"<br><br>今天的风儿甚是喧嚣<br>....<br>....<br>....<br><br>还看？快去找密码呀"},
     {name:"K" ,yin:11, str:"<br><br>其实并不难吧<br><br>所以你可以告诉我<br><br>为什么要按我吗"},
     {name:"L" ,yin:8, str:"<br><br><br><br>落霞与孤鹜齐飞，<br><br>秋水共长天一色<br><br>没什么 炫耀我还记得的名句精华而已<br><br>再不拿出来就要永远派不上用场了"},
     {name:"M" ,yin:1, str:"太聪明啦你哈哈哈<br></br>关于下一个字母....<br><br>它跟我说，<br>它有四个笔画....<br><br>这人怎么学我呢？”<br><br>（偷偷告诉你，我们会再次相遇）"},
     {name:"N" ,yin:12, str:"<br><br><br>嘿<br><br>竟然给你找到了我阿三<br><br>可以帮我找找我的弟弟阿四吗？"},
     {name:"O" ,yin:2, str:"咕噜咕噜咕噜<br>你差两步就到达终点了<br><br>也有可能，<br>其实你还没上路<br>只是刚好路过我？"},
     {name:"P" ,yin:16, str:"<br><br><br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>我们站着不说话，就十分美好。"},
     {name:"Q" ,yin:17, str:"<br><br><br><br>你一眨眼，温驯的小鹿有跳动一下，<br><br>柔软的暖风有轻拂一下，遥远的星星有闪烁一下，<br><br>我也有心动，却不止一下。"},
     {name:"R" ,yin:1, str:"<br><br><br><br>都到这里了<br><br>就不多说了吧"},
     {name:"S" ,yin:19, str:"<br><br>我的心是亿万光年恒星爆炸后的残骸，荒烟蔓草，满目疮痍。<br><br>你来到这里，携着万千欢喜，覆在贫瘠之地上。枯木逄春，<br></>从此我的世界里只有为你而绽的名为爱的绝色。"},
     {name:"T" ,yin:20, str:"<br><br>写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，<br><br>像是一只害羞的小兽躲在情意绵绵的字里行间，被火漆封印起来，<br><br>等着解封的那一刻窜出来，跳进启信人眼底的柔波里。"},
     {name:"U" ,yin:5, str:"<br><br>我把我整个的灵魂都给你，<br><br>连同它的怪癖，耍小脾气，忽明忽暗，<br><br>一千八百种坏毛病， 它真讨厌。只有一点好， 爱你"},
     {name:"V" ,yin:22, str:"<br><br><br><br>我一生都是坚定不移的唯物主义者<br><br>唯有你<br><br>我希望有来生"},
     {name:"W" ,yin:3, str:"<br><br><br><br>这个世纪疯狂,没人性,腐败。<br><br>您却一直清醒,温柔,<br><br>一尘不染。"},
     {name:"X" ,yin:1, str:"<br><br>找到阿四啦！<br><br>为了让兄弟们集结....<br><br>不要忘记前面的三兄弟哦<br><br>都找到这里了，还不知道密码是什么就过分了吧"},
     {name:"Y" ,yin:12, str:"<br>欢迎光临<br>你成功解锁密码！<br><br>不是的话....<br>重新来过吧嘻嘻<br><br>所以说密码不可以打错啊"},
     {name:"Z" ,yin:9, str:"<br><br>开始寻找密码吧！<br><br>隐藏在二十六个字母里<br><br>跟着顺序按下后才算过关噢<br><br>你觉得我会设置关于什么的密码呢？"}
 ];
 let b=["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
 "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
 "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
 "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
 "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
 "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
 "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
 "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
 "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
 "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
 "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
 "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
 "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
 "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
 "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
 "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
 "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
 "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
 "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
 "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
 "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
 "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
 "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
 "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
 "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
 "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
 let s='a';
 let records=0;//记录我已经输入过了，防止出现多个打字function byaei
 
 
 /*键盘事件*/
 function fl(e)
 {
     if(clickb==true)
     {
        let key =e.key;
     if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
     {
         let p=a[k[key]];
         s=s+p.name;
         let x = document.createElement("audio");
         x.setAttribute("src", `./video/${p.yin}.mp3`);
         x.setAttribute("autoplay","autoplay");
         let box=document.getElementById("box");
         let boxl=document.getElementById("boxl");
         let boxr=document.getElementById("boxr");
         let boxup=document.getElementById("boxup");
         let bac=document.getElementById("bac");
         bac.style.opacity=0;
         box.style.transition="0.5s";
         box.style.opacity=0;
         boxup.style.opacity=0;
         setTimeout(function()
         {
         boxl.innerHTML=`${p.name}`;
         boxr.innerHTML=`${p.str}`;
         console.log(b[k[key]]);
         bac.style.background=`${b[k[key]]}`;
         box.style.opacity=1;
         boxup.style.opacity=0;  
         bac.style.opacity=1;
         },500);
         if(s.indexOf("FANXIMEMORY")!=-1&&records==0)
         {
             setTimeout(function()
             {
                 records=1;
                 bac.style.opacity=0;
                 box.style.opacity=0;
                 boxup.style.opacity=0;  
                 bac.style.opacity=0;
                 let box1=document.getElementById("box1");
                 box1.style.zIndex=7;
                 box1.style.opacity=1;
                 let music=document.createElement("audio");
                 x.setAttribute("src", `./video/flowerdance.mp3`);
                 x.setAttribute("autoplay","autoplay");
                 x.setAttribute("loop","loop");
             },750);
             setTimeout(typewrite,3000);//进行打字
         }
     }
     }  
 }
 
 
 window.onkeyup=fl;