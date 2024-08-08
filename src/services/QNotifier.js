import { Notify } from 'quasar'
import qNotifyOptions from "./QNotifyOptions";

export class QNotifier{
  /**
   * Sets a defaultError (a basic server error) and then sets this as the default notiOptions prop for
   * ease of later comparison and editability.
   */
  constructor() {
    this.defaultError = {
      message: 'Something went wrong with the process! - ERROR_CODE: 500',
      color: 'red',
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
      ],
      position: 'bottom',
      group: false,
      timeout: 3000,
      progress: true
    } //Sets the base template as a common server error
    this.notiOptions = this.defaultError //sets notiOptioptions so we have the non modified default saved separately
  }

  /**
   * Displays the default server error (500)
   */
  displayDefaultServerError(){
    this.editOptionsWith(qNotifyOptions.serverErrorOccured)
    Notify.create(this.notiOptions)
  }

  /**
   * Displays the default server error (500)
   */
  connectionFailed(){
    this.editOptionsWith(qNotifyOptions.connectionFailed)
    Notify.create(this.notiOptions)
  }

  /**
   * Displays the error message assuming the error originates from an instance of CustomApiError
   * @param errCode
   * @param errMsg
   */
  displayCustomApiError(errCode, errMsg){
    this.notiOptions.message = `${errMsg} - CUSTOM_ERROR_CODE: ${errCode}`
    Notify.create(this.notiOptions)
  }

  /**
   * Calls the Notify.create method with the currently set notiOptions. This way we do not need
   * to import and use Quasar.Notify, only within the QNotifier
   */
  dispalyWithCurrentOptions(){
    Notify.create(this.notiOptions)
  }

  /**
   * Completely replaces the notiOptions prop with options param, not keeping any of the default setttings.
   * Used to completely ignore all the default settings for the notifications in favor of options param.
   * @param options
   */
  overWriteOptionsObjWith(options = qNotifyOptions.serverErrorOccured){
    this.notiOptions = options
  }

  /**
   * Overwrites matching keys of notiOptions prop with the options param settings.
   * This way, default options, like timeout and position will not change,
   * only if wanted for this specific instance.
   * @param options
   */
  editOptionsWith(options=qNotifyOptions.serverErrorOccured){
    const notiOptionKeys = Object.keys(this.notiOptions)
    const optionKeys = Object.keys(options)

    notiOptionKeys.forEach((key)=>{
      if (optionKeys.includes(key)){
        this.notiOptions[`${key}`] = options[`${key}`]
      }
    })
    // console.log({afterChange:this.notiOptions})
  }
}

