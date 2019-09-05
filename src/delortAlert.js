import swal from 'sweetalert2'

async function confirm(content) {
  return swal.fire({
    title: 'Are you sure?',
    text: "Are you sure you want to delete this " + content + "?",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9c27b0',
    cancelButtonColor: '#ff9800',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    return result.value
  });
}

export default { confirm } 