const ThrottleRequest =  function(time){
    this.time = time;
    this.lastCallAt = 0;

    return call => {
        let dateNow = Date.now();
        let diff = dateNow - this.lastCallAt

        if(diff > this.time){
            call();
            this.lastCallAt =  dateNow;
        }
    }   
}
// this.throttle =  new ThrottleRequest(1000);
// this.throttle( () =>{} );  

export default ThrottleRequest;