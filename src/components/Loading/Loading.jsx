import { useEffect } from "react"
import Swal from "sweetalert2"

export const Loading = () => {

  useEffect(() => {
    load()
  }, [])

  const load = () => {
    let timerInterval;
    Swal.fire({
      title: "Loading!",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    })
  }

    return(
      <></>
    )
}
