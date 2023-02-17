import Swal from 'sweetalert2';

export const showSuccessMessage = (message) => {
  return Swal.fire({
    title: 'Success!',
    icon: 'success',
    text: message,
    showConfirmButton: false,
    timer: 1500,
    width: '350px',
    padding: '10px',
  });
};

export const showDeleteConfirmation = () => {
  return Swal.fire({
    title: 'Are you sure you want to delete this note?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
    width: '350px',
    padding: '10px',
  });
};

export const showArchiveConfirmation = () => {
  return Swal.fire({
    title: 'Are you sure?',
    text: 'Archive this note',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, archive it!',
    width: '350px',
    padding: '10px',
  });
};

export const showUnarchiveConfirmation = () => {
  return Swal.fire({
    title: 'Are you sure?',
    text: 'Unarchive this note',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, unarchive it!',
    width: '350px',
    padding: '10px',
  });
};
