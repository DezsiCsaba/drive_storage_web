const qNotifyoptions = {
  serverErrorOccured: {
    message: 'Something went wrong with the process! - ERROR_CODE: 500',
    color: 'red',
    actions: [
      { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
    ]
  },
  connectionFailed: {
    message: 'Could not connect to the server! Try again later.',
    color: 'red',
    actions: [
      { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
    ]
  },
  userNameOrPasswordWrong: {
    message: 'Username or password is wrong!',
    color: 'warning',
    actions: [
      { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
    ]
  },
}

export default qNotifyoptions
