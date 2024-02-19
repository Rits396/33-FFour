# 33-FFour

## PROJECT TITLE: BusQuest
 TECH USED: 
FOR FRONTEND-->HTML CSS and JavaScript <br>
FOR BACKEND--> PYTHON & MYSQL <br>
USED PYTHON'S LIBRARY--> FLASK <br>

### IDEA DESCRIPTION:
 BusQuest is a web application that provides users with a convenient way to find public bus routes between their specified source and destination locations. It offers  information on bus timings, fares, distance, and estimated travel time. Users can also explore features such as route suggestions, alternate options, and other relevant details to enhance their travel planning experience. It is designed to revolutionize urban mobility by providing a seamless solution for planning and navigating public transportation routes within cities. It's a forward-thinking solution for efficient, eco-friendly urban transportation.

### WHY US?
1.Limited Information Access: Insufficient route, schedule and fare information leads to uncertainty and inconvenience for public transport users. <br>
2. While numerous apps focus on private buses like Redbus often charging exorbitant fees, there is a glaring absence of dedicated options for efficient public bus solutions. No app integrates roadways from all over India. <br>
3. Environmental Impact: High individual reliance on private vehicles contributes to increased  traffic congestion, elevated carbon emissions, and environmental degradation, highlighting ineffective public transportation. <br>

### FILES DESCRIPTION
 first.html--> PAGE WHICH TAKES SOURCE AND DESTINATION INPUT FROM USER <br>
 last.html--> PAGE WHICH SHOWS AVAILABLity and other BUS DETAILS <br>
 feedback.html-->PAGE WHICH TAKES FEEDBACK FROM CUSTOMER TO IMPROVE OUR SERVICES <br>
 app.py--> PYTHON (Flask) FILE <br>
 connect.py -->PYTHON (Flask) FILE WHICH TAKES INPUT FROM FIRST PAGE AND DISPLAYS DETAILS ON LAST PAGE <br>
 BusQuest.sql--> DATABASE <br>
 hey.jpg--> BACKGROUND IMAGE <br>

### REQUIREMENTS:
#### SOFTWARE REQUIREMENTS: PYTHON IDE, JDK, VS CODE (ANY ONE WILL DO), MySQL
#### LIBRARIES/FRAMEWORKS/LANGUAGES: HTML, CSS, javascript, Python, Flask,  SQL

### NOTE: RIGHT NOW THE PROJECT ONLY INCLUDES A LIMITED NUMBER OF BUSES AND BUS STOPS. SO AS OF NOW, IT WILL WORK ONLY FOR THREE DESTINATIONS THAT ARE CHANDIGARH, MOHALI AND KHARAR. ANY OTHER INPUT WILL LEAD TO NO AVAILABLE BUSES FOUND.

### STEPS TO RUN CODE
1. HAVE THE ABOVE-MENTIONED REQUIREMENTS INSTALLED AND FULFILLED.<br>
2. DOWNLOAD ALL THE FILES PRESENT IN THE REPOSITORY.<br>
3. SAVE ALL THE FILES IN SINGLE FOLDER.<br>
4. RUN First.html AND PROVIDE SOURCE AND DESTINATION AS INPUT THEN PRESS SEARCH BUSES BUTTON<br>
5  ALL THE AVAILABLE BUSES WITH THEIR DETAILS WILL BE LISTED IN last.html PAGE.<br>
6  PRESS next FOR FEEDBACK AND RATINGS.<br>

### CODE WORKING
FIRST WE CREATED THE FRONT END USING HTML, CSS AND JAVASCRIPT. first.html PAGE TAKES USER INPUT IN FORM AND THE DETAILS ARE THEN SENT TO FLASK UPON CLICKING THE SUBMIT BUTTON.THEN FLASK STORES THE INPUT IN VARIABLES AND WE USE SQL QUERIES AND FUNCTIONS TO FIND THE AVAILABLE BUSES. THEN THE REQUIRED BUS AND ITS DETAIL IS STORED AS RETURN VALUE AND GET RETURNED TO last.html PAGE IN TABULAR FORM. THEN THE USER PRESS NEXT AND IS DIRECTED TO feedback.html PAGE WHERE HE OR SHE CAN RATE AND REVIEW THE WEBSITE. IT IS DONE USING JAVASCRIPT.

### TEAM MEMBERS DETAILS
#### STUDENTS OF CHANDIGARH UNIVERSITY PURSUING B.E
Chetanya Gupta: CSE-BDA 3rd year, Frontend, java, html, CSS, javascript, dsa in java<br>
Rudrakshi Jhajharia: CSE-AIML 3rd year, machine learning, python,c++, dsa in c++.<br>
Ishmeet  Kur: CSE 2nd year, backend, java, web development, dsa in java.<br>
Ritika Makharia: CSE-BDA 3rd year, backend, python, java, dsa in java.<br>








