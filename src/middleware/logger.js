const logger=(store)=>(next)=>(action)=>{
    console.group(action.type)
        console.log('action is',action)
        const returnlogger=next(action)
        console.log('the state is:',store.getState())
    console.groupEnd()
    return returnlogger
}
export default logger