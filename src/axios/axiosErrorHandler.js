import {QNotifier} from "src/services/QNotifier";

export class AxiosErrorHandler{
  constructor(axiosError) {
    this.axiosError = axiosError
  }

  handleAxiosError(){
    const customNotifier = new QNotifier()

    if (this.axiosError.message === 'Network Error'){
      customNotifier.connectionFailed()
    }
    if (this.axiosError.response.data){
      const errorDataObj = this.axiosError.response.data
      this.displayCustomApiError(errorDataObj, customNotifier)
    }
    else{
      customNotifier.displayDefaultServerError()
    }
  }

  displayCustomApiError(errData={}, notifier){
    notifier.displayCustomApiError(errData.error.code, errData.error.message)
  }

}
