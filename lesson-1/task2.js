let login = 'admin1';
let password = 'admin';
let flag = true;

switch(flag){
    case login == 'admin', password == 'admin':{
        console.log('Welcom!');
        break;
    }

    case login != 'admin', password == 'admin':{
        console.log('I don`t know you! \nCanceled');
        break;
    }

    case login == 'admin', password !='admin':{
        console.log('Wrong password! \nCanceled');
        break;
    }

    default:{
        console.log("Canceled!");
        flag = false;
    }
}