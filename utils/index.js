export const logOut = (signOut, auth, setLoggedInState) => {
  signOut(auth)
    .then(() => {
      setLoggedInState(false)
      console.log('Signed out')
    })
    .catch((error) => {
      console.log(error.message)
    })
}
