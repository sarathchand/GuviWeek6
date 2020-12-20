function tableCreate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '60%';
  //tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  var temp = 1;
  for (var i = 0; i < 6; i++) {
    var tr = document.createElement('tr');

    for (var j = 0; j < 3; j++) {

      if (i == 0) {
        var td = document.createElement('td');

        var textarea = document.createElement('textarea');
        textarea.setAttribute('rows', '4')
        textarea.setAttribute('cols', '100')
        textarea.setAttribute('readonly', 'true');
        textarea.setAttribute('id', 'txtarea');

        td.setAttribute('colspan', '4');
        td.appendChild(textarea);
        tr.appendChild(td);
        break;

      }
      else {
        var td = document.createElement('td');
       
        if (i != 4 && i!= 5)  {
          var input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', temp);
          input.setAttribute('id', temp);
          input.setAttribute('onclick', 'myFunction()');
          input.innerHTML = temp;
          // td.innerHTML=temp;
          td.appendChild(input);

          tr.appendChild(td);
          temp++;

        }
        if (i == 4 && j == 0) {
          input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', 0);
          input.setAttribute('id', 0);
          input.innerHTML = 0;
          td.appendChild(input);
          tr.appendChild(td);

        }
        if (i == 4 && j == 1) {
          input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', '+');
          input.setAttribute('id', '+');
          input.innerHTML = '+';
          td.appendChild(input);
          tr.appendChild(td);

        }
        if (i == 4 && j == 2) {

          input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', '-');
          input.setAttribute('id', '-');
          input.innerHTML = '-';
        
          td.appendChild(input);
          tr.appendChild(td);
          
    

        }

        if (i == 5 && j == 0) {
          input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', '*');
          input.setAttribute('id', '*');
          input.innerHTML = '*';
          td.appendChild(input);
     
          tr.appendChild(td);

        }
        if (i == 5 && j == 1) {
          input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', '=');
          input.setAttribute('id', '=');
          input.innerHTML = '=';
        
          td.appendChild(input);
          tr.appendChild(td);
        }
        if (i == 5 && j == 2) {
          input = document.createElement('button');
          input.setAttribute('class', 'btn btn-info');
          input.setAttribute('value', 'C');
          input.setAttribute('id', 'C');
          input.innerHTML = 'C';
        
          td.appendChild(input);
          tr.appendChild(td);
        

        }


      }

    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate();



// var size1 = document.getElementsByTagName('button');
// for(var p = 0 ; p < size1; p++)
// {
//   document.getElementsByTagName('button')[i].addEventListener('keydown',keydownfun);

// }



function myFunction() {

  console.log('hello');

  

}




  document.getElementsByClassName('btn btn-info')[0].addEventListener('click',clickfun0);
  document.getElementsByClassName('btn btn-info')[1].addEventListener('click',clickfun1);
  document.getElementsByClassName('btn btn-info')[2].addEventListener('click',clickfun2);
  document.getElementsByClassName('btn btn-info')[3].addEventListener('click',clickfun3);
  document.getElementsByClassName('btn btn-info')[4].addEventListener('click',clickfun4);
  document.getElementsByClassName('btn btn-info')[5].addEventListener('click',clickfun5);
  document.getElementsByClassName('btn btn-info')[6].addEventListener('click',clickfun6);
  document.getElementsByClassName('btn btn-info')[7].addEventListener('click',clickfun7);
  document.getElementsByClassName('btn btn-info')[8].addEventListener('click',clickfun8);
  document.getElementsByClassName('btn btn-info')[9].addEventListener('click',clickfun9);
  document.getElementsByClassName('btn btn-info')[10].addEventListener('click',clickfun10);
  document.getElementsByClassName('btn btn-info')[11].addEventListener('click',clickfun11);
  document.getElementsByClassName('btn btn-info')[12].addEventListener('click',clickfun12);
  document.getElementsByClassName('btn btn-info')[13].addEventListener('click',clickfun13);
  document.getElementsByClassName('btn btn-info')[14].addEventListener('click',clickfun14);




// document.getElementById('1').addEventListener('click',clickfun);

// document.getElementById('2').addEventListener('click',clickfun);

function clickfun0(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:49,key:1});
}

function clickfun1(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:50,key:2});
}

function clickfun2(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:51,key:3});
}

function clickfun3(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:52,key:4});
}

function clickfun4(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:53,key:5});
}


function clickfun5(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:54,key:6});
}


function clickfun6(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:55,key:7});
}

function clickfun7(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:56,key:8});
}

function clickfun8(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:57,key:9});
}

function clickfun9(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:48,key:0});
}

function clickfun10(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:107,key:'+'});
}

function clickfun11(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:189,key:'-'});
}

function clickfun12(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:106,key:'*'});
}

function clickfun13(e)
{
  console.log('clicked 0');
  keydownfun({keyCode:187,key:'='});
}


function clickfun14(e)
{
  document.getElementById('txtarea').innerHTML =0;

}
 


document.addEventListener('keydown', keydownfun);
var flag = 0;
var disp = ''
var addflag = 0;
var subflag = 0;
var mulflag = 0;
var divflag = 0;
var res = 0;
var a;
var b =[];
var temp ='';
var res =0;


function keydownfun(e) {
  flag =0;

  console.log(e.keyCode);
  if ((e.keyCode >= 48) && (e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
    flag =1;
    console.log(e);
    console.log(e.code);
    console.log(e.key);
    
    disp = document.getElementById('txtarea').innerHTML + e.key
    document.getElementById('txtarea').innerHTML = disp;
    flag = 1;
    console.log("subflag"+subflag);
  }

  if (e.keyCode == 187) {
    flag = 1;
    //Equal
    disp = document.getElementById('txtarea').innerHTML + e.key
    document.getElementById('txtarea').innerHTML = disp;
    console.log(res);
    a= document.getElementById('txtarea').innerHTML.split('');

    for(var i =0 ; i < a.length;i++){
      if(a[i] =="0" || a[i]=="1" || a[i] =="2" || a[i]=="3" || a[i] =="4" || a[i]=="5" ||a[i] =="6" || a[i]=="7"||a[i] =="8" || a[i]=="9"){
          temp = temp +a[i];
      }
      else
      {
          b.push(Number(temp));
          temp='';
          b.push(a[i]);
      }

  }
  
  b.push(temp)
  console.log(b);

  for (i = 0 ; i < b.length; i++)
  {
    if(a[i]=='+')
    {
      if(i == 1)
      {
        res = res + a[i-1]+a[i+1];

      }
      else{
        res = res + a[i+1];
      }
     
    }

    if(a[i]=='-')
    {
      if(i == 1)
      {
        res = a[i-1]-a[i+1];

      }
      else{
        res = res - a[i+1];
      }
     
    }

    if(a[i]=='*')
    {
      if(i == 1)
      {
        res = a[i-1]*a[i+1];

      }
      else{
        res = res * a[i+1];
      }
     
    }


    
    if(a[i]=='/')
    {
      if(i == 1)
      {
        res = a[i-1]/a[i+1];

      }
      else{
        res = res / a[i+1];
      }
     
    }
  }

  document.getElementById('txtarea').innerHTML = document.getElementById('txtarea').innerHTML +res;

  


  }

  if (e.keyCode == 106) {
    mulflag = 1;
    disp = document.getElementById('txtarea').innerHTML + e.key
    document.getElementById('txtarea').innerHTML = disp;
    flag = 1;
    //Mul
  }

  if (e.keyCode == 107) {
    addflag = 1;
    disp = document.getElementById('txtarea').innerHTML + e.key
    document.getElementById('txtarea').innerHTML = disp;
    flag = 1;
    //Add

  }
  if (e.keyCode == 189) {
    subflag = 1;
    //Sub
    disp = document.getElementById('txtarea').innerHTML + e.key
    document.getElementById('txtarea').innerHTML = disp;
    flag = 1;
  }

  if (e.keyCode == 191) {
    divflag = 1;
    disp = document.getElementById('txtarea').innerHTML + e.key
    document.getElementById('txtarea').innerHTML = disp;
    flag = 1;
    //Div
  }

  if (flag == 0) {
    alert('Only Numbers Are Allowed')
    console.log(e);
  }

}

