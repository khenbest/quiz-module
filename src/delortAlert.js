import swal from 'sweetalert2'

async function confirm(content) {
  return swal.fire({
    title: 'Are you sure?',
    text: "Are you sure you want to delete this " + content + "?",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9c27b0',
    cancelButtonColor: '#ffc107',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    return result.value
    // if (result.value) {
    //   swal.fire(
    //     'Deleted!',
    //     'Successfully Deleted!',
    //     'success'
    //   )
    // }
  });
}

export default { confirm } 