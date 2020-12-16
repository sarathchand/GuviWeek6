let div1 = document.createElement('div');
div1.setAttribute('id', 'div2');




div1.innerHTML = "<br/>BRAIN DUDEY";
document.body.append(div1);

let br = document.createElement('br');
document.body.append(br);

let div3 = document.createElement('div');
div3.setAttribute('id', 'div3');
let img1 = document.createElement('img');
img1.setAttribute('class', 'head-image');
img1.setAttribute('src', 'img_avatar.png');

let div4 = document.createElement('div');
div4.setAttribute('id', 'div4');

document.body.appendChild(div3).appendChild(img1).appendChild(div4);

let email = document.createElement('div');

email.setAttribute('class', 'email');

let email1 = document.createElement('p');

email1.setAttribute('class', 'email');

email1.innerHTML = "N Damen Avenue,Chicago 99999999| 999-9999-9999|hello@kickresume.com|www.kickresume.com";

document.body.appendChild(email).appendChild(email1);

let hr = document.createElement('hr');
document.body.append(hr);
br = document.createElement('br');
document.body.appendChild(br);

br = document.createElement('br');
document.body.appendChild(br);

let row = document.createElement('div');
row.setAttribute('class', 'row');
let column = document.createElement('div');
column.setAttribute('class', 'column');
let innerdiv = document.createElement('div');

innerdiv.innerHTML = '  <table><tbody> <tr> <td> <img class="image" src="profile.png"></td><td class="head-style">Profile</td></tr></tbody></table > ';


let content = document.createElement('div');

content.setAttribute('class', 'content');
content.innerText = `Over 3+ years of experience in supporting and maintaining applications using Java, Informatica and
CA Gen.
Working experience in supporting and enhancing web applications , Informatica , Unix and CA Gen
applications
Working experience in ETL Tools.
Good knowledge on core java.
Quick learner, Team player. Good analytical and communication skills
`;

br = document.createElement('br');
document.body.appendChild(br);

br = document.createElement('br');
document.body.appendChild(br);

let innerdiv1 = document.createElement('div');

innerdiv1.innerHTML = `<table>
<tbody>
    <tr>
        <td>
            <img class="image" src="skills.png">
        </td>

        <td class="head-style">
            Skills
        </td>

    </tr>
    <tr>

    </tr>
</tbody>
</table>`;

let skilldiv = document.createElement('div');
skilldiv.innerHTML = `  Techincal Skills
<table class="skills">
    <tbody>
        <tr>
            <td>
                JavaScript
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="10">
            </td>
        </tr>

        <tr>
            <td>
                CSS
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="18">
            </td>
        </tr>
        <tr>
            <td>
                HTML
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="30">
            </td>
        </tr>
        <tr>
            <td>
                Informatica
            </td>
            <td>
                <input class="range1" type="range">
            </td>
        </tr>
        <tr>
            <td>
                CA Gen
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="25">
            </td>
        </tr>
        <tr>
            <td>
                DB2
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="40">
            </td>
        </tr>
        <tr>
            <td>
                Additonal Skills
            </td>

        </tr>
        <tr>
            <td>
                Project Management
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="10">
            </td>
        </tr>

        <tr>
            <td>
                Editing
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="18">
            </td>
        </tr>
        <tr>
            <td>
                Fund Raising
            </td>
            <td>
                <input class="range1" type="range" min="1" max="50" step="1" value="30">
            </td>
        </tr>
        <tr>
            <td>
                Business Development
            </td>
            <td>
                <input class="range1" type="range">
            </td>
        </tr>


    </tbody>
</table>



</div>`;

let innerdiv2 = document.createElement('div');

innerdiv2.innerHTML = `<table>
<tbody>
    <tr>
        <td>
            <img class="image" src="work.png">
        </td>

        <td class="head-style">
            Work experience
        </td>

    </tr>
</tbody>
</table>`;
let content1 = document.createElement('div');
content1.setAttribute('class', 'content');
content1.innerHTML = `<h5>Developer   <span>(Aug 2017 – Till Date):</></h5>
                   
<ul>
    <li>
        I'm a part of Airline vertical and team that Maintains and supports web applications,
        Informatica and Ca Gen applications for Airline clients.

    </li>
    <li>
        Here, I have handled multiple applications which deals with very large amount of data with
        high performance
    </li>
    <li>
        I have used Core java, Informatica and CA Gen to maintain and support the applications.
    </li>


</ul>`;


document.body.appendChild(row).appendChild(column).appendChild(innerdiv).appendChild(content).appendChild(innerdiv1).appendChild(skilldiv).appendChild(innerdiv2).appendChild(content1);


column = document.createElement('div');
column.setAttribute('class','column');


 div1 = document.createElement('div');

div1.innerHTML=`<table>
<tbody>
    <tr>
        <td>
            <img class="image" src="work.png">
        </td>

        <td class="head-style">
            Work experience
        </td>

    </tr>
</tbody>
</table>`;

content = document.createElement('div');
content.setAttribute('class','content');


let para = document.createElement('p');

para.innerHTML='organizational levels to advance cohesive operations.<span> 06/2011 – 01/2014LOS ANGELES</span>';

let heading=document.createElement('h5');
heading.innerText='Community Relations Manager';

content.innerHTML=para.innerHTML+'<br>'+ heading.innerHTML+'<br>' + `Gay & Lesbian Elder Housing
                    
              
<ul>
    <li>
        Arranging presentations and pitch deck.
    </li>
    <li>
        Designing a PR plan and establishing important focus points.
    </li>
    <li>
        Designing, creating and managing content across multiple communication platforms.
    </li>
    <li>
        Building relationships with key media players.
    </li>


</ul>`;


div2 = document.createElement('div');

div2.innerHTML=`<table>
<tbody>
    <tr>
        <td>
            <img class="image" src="education.png">
        </td>

        <td class="head-style">
            Education
        </td>

    </tr>
</tbody>
</table>`;

content2 = document.createElement('div');
content2.setAttribute('class','content');

content2.innerHTML=` <h5>Engineering Immersion Program</h5>
<p>(Aug 2013 – Aug 2017):</p>
<p> Thinkful
    Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN)
    technical stack</p>
    <ul>
        <li>
            Developed a full-stack web application, "RenewU", using React that allows users to explore various
aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.

        </li>
        <li>
            Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data
structure. React was used to create the front end components while Node and Mongo were used to create a
backend that stores user data.

        </li>
        <li>
            
Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new
place. React was used to develop the front end which includes real-time chat, drag and drop and variety
of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of
well-developed RESTful API, Geospatial searching, and user authentication with JWT.


        </li>
    </ul>


`;






document.body.appendChild(column).appendChild(div1).appendChild(content).appendChild(div2).appendChild(content2);

