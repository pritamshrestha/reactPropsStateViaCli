import React, { Component } from 'react';

import './App.css';

class App extends Component {
	
	
  render() {
	  
    return (
      <div className="App">
        <h1>This is the communication between components</h1>
        <Parent />
        
        <Toyota name="corola" model="2015" />
        <h2>This is the props numberType: {this.props.propNumber}</h2>
        <h3>This is the example of the propString:{this.props.propString}</h3>
        <h4>This is the object type :{this.props.propObject.obj1}</h4>
        
      </div>
    );
  }
}
class Parent extends Component{
	constructor(props){
		super(props);
		this.state={
			country:['one-nepal','two-india',"three-pakistan","four-usa"]
		};
	}
	//creating the event
	clickHandle(){
		this.setState({country:this.state.country.reverse()});
	}
	upperCase(){
		this.setState({country:this.state.country.reverse()});
	}
	render(){
		return(
		<div>
			<h2>just some info</h2>
			<button onClick={this.upperCase.bind(this)}>click here to reverse</button>
			<button onMouseOver={this.clickHandle.bind(this)}>mouseover here to reverse</button>
			<Cars msg="cars are cool" model="34556" ourcountry={this.state.country}/>
			
		</div>);
	}
}
//this is the use of the PropTypes
App.propeTypes={
	propString:React.PropTypes.string,
	propObject:React.PropTypes.object,
	propNumber:React.PropTypes.number
	
}
App.defaultProps={
	propString:"I am example of the propstring!",
	propObject:{
		obj1:"object1",
		obj2:"object2",
		obj3:"object3"
	},
	propNumber:30
	
}
class Cars extends Component{
	
	render(){
		console.log(this.props)
		return(
		<div>
		    <Toyota name="corola" model="2013" />
			<h3>i am from cars component</h3>
			
			<p>{this.props.msg}</p>
			<p>{this.props.model}</p>
			
		<div id="nepal">{this.props.ourcountry.map((item,i)=>{
			return <p key={i}>{item}</p>;
		})}</div>
		</div>);
	}
}

Parent.defaultProps={
	country:['nepal','india',"pakistan","usa"]

}
class Toyota extends Component{
	render(){
		return(
			<div>
			<h1>This is the toyota component</h1>
			
			<h2>name:{this.props.name}</h2>
			<p>model:{this.props.model}</p>
			
			
	</div>
		)
	}
}

export default App;
