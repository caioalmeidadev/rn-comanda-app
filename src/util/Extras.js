export function checkPassword(password, id) {

    const userId = id.padStart('0',6);

    let passCrypt = '';
    let vAux = '';
    let vResult = 0;

    passCrypt = `${password.substring(0,1)}0${password.substring(1,2)}0${password.substring(3,1)}`;

    for (let index = 0; index < passCrypt.length; index++) {
        vAux = Number(passCrypt.substring(index,1) + userId.substring(index,1));
        
        vAux > 0 ? vResult = vResult + Number(vAux) : vResult = vResult + Number(vAux.substring(1,2));
    }

    return vResult;

}