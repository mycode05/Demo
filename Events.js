import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Events(){
    /*const greet = () =>{
        alert("Hello world");
    }
    return (
        <button onClick={greet} type="button" class="btn btn-success">greet me</button>
    );
    */
   /*
    const greet = (a) =>{
        alert(a);
    }
    return (
        <button onClick={()=> greet("God day!")} type="button" class="btn btn-success">greet me</button>
    );
    */
    const greet = (a,b) =>{
        alert(a);
        alert(b.type);
    }
    return (
        <button onClick={(event)=> greet("Keep Smiling..!!",event)} type="button" class="btn btn-success">greet me</button>
    );
}
export default Events; 