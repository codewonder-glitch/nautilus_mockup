import React from 'react';
import matchesimg from  '../assets/bio_and_beyond.jpeg'
import wiseimg from  '../assets/wise_sci_and_engineering.png'
import abstractimg from  '../assets/abstractions.jpeg'
import earthimg from   '../assets/earth.jpeg'
import tlas from '../assets/tlas.jpeg'
import cosmos from '../assets/cosmos.jpeg'
import poetry from '../assets/poetry.jpeg'
import maxplank from '../assets/maxplanck.jpeg'
import aging from '../assets/aging.png'
import alliance from '../assets/alliance.png'
import './Matches.css'
class Matches extends React.Component{
constructor(props)
{

    super(props);
    this.state ={scroll
        :false}
    
}
 

    render(){
return(
<div>
   <img id="bigandbeyond" src={matchesimg}/>
   <img src={wiseimg} />
   <img src={abstractimg} />
   <img src={earthimg} />
   <img src={tlas} />
   <img src={cosmos} />
   <img src={poetry} />
   <img src={aging} />
   <img src={alliance} />
   <img src={maxplank} />
    
</div>

);

    }
}
export default Matches;