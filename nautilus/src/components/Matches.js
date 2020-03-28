import React from 'react';
import matchesimg from  '../assets/matches.png'

class Matches extends React.Component{
constructor(props)
{

    super(props);
    this.state ={scroll
        :false}
    this.handleScroll=this.handleScroll.bind(this);
}
 
handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      this.setState({scroll:true});
    }
  }
    render(){
return(
<div>
    
    if {!this.state.scroll }

    <img id="matchimg" src={matchesimg} onScroll={this.handleScroll}/>
   
</div>

);

    }
}
export default Matches;