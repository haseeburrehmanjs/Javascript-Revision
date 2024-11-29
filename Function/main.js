// simple javascript function

function myIntro(){
    document.write('i am haseeb ur rehman js...')
    document.write('<br>')
    document.write('you can tell me haseeb bhai...')
    document.write('<br>')
    document.write('i am frontend developer...')
    document.write('<br>')
    document.write('i am currently learn <br> mern stack development')
}

myIntro()

// javascript parameters 
function fullName(fName , lName){
    document.write(`${fName}  ${lName}`)
}

fullName('haseeb', ' ur rehman')


// default parameters
function fullName(fName , lName='khan bhai'){
    document.write(`${fName} ${lName}`)
}

fullName('ur rehman')



function sum(num1, num2){
    document.write(num1 + num2)
}

sum(10, 30)