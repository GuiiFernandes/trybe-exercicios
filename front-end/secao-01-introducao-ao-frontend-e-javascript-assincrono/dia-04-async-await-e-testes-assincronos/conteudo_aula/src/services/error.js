import Swal from 'sweetalert2';

export const showErro = ({ message }) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    background: '#292929',
    color: '#FFF',
    buttonsStyling: false,
  });
};
