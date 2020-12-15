let i = 1 ;

setTimeout(function run() {
    if(i<=20){
        console.log(i);
        i++;
    }
  setTimeout(run, 100);
});