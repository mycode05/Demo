import Correct from 'Correct';
import Wrong from 'Wrong';
function Condition(props){
    const done=props.isGoal;
    if(done){
        return <Correct />;
    }
    else{
        return <Wrong />;
    }
}
export default Condition;