import {useSelector} from 'react-redux';

export async function checkPassword(password, id) {
  const userId = String(id).padStart(6, '0');

  let passCrypt = '';
  let vAux = '';
  let vResult = '';

  passCrypt = `${password.substring(0, 1)}0${password.substring(
    1,
    3,
  )}0${password.substring(3, 4)}`;

  for (let index = 0; index < passCrypt.length; index++) {
    vAux =
      Number(passCrypt.substring(index, index + 1)) +
      Number(userId.substring(index, index + 1));

    vAux < 10
      ? (vResult = vResult + String(vAux))
      : (vResult = vResult + String(vAux).substring(1, 2));
  }

  if (vResult.substring(0, 2) === '00') {
    vResult = vResult.subtring(2, 4);
  } else if (vResult.substring(0, 1) === '0') {
    vResult = vResult.substring(1, 6);
  }

  const users = useSelector(state => state.config.users);

  const user = users.find(u => u.codigo === userId);

  return vResult === user.senha ? true : false;
}
