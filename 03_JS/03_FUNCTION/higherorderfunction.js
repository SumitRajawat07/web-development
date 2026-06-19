function runtwice(fn)
{
  fn();
  fn();
}
runtwice(function(){
    console.log("hello! sumit");
});