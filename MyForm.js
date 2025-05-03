function MyForm(){
    const greet = (a) =>{
        alert(a);
    }
    return(
        <form>
            <label>
                Enter your name:
                <input type="text"/>
            </label>
            <button onClick={()=>(greet)}>Submit</button>
        </form>
    )
}
export default MyForm;