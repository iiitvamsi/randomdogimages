import React from 'react';
import './dogs.css';

class Dogs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }

    }

    componentDidMount(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result.message);
                this.setState({
                    isLoaded: true,
                    items:result             
                });
            },(error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }

    render(){
        const {isLoaded, items } = this.state;
            if (!isLoaded) {
                return <div>Loading...</div>;
            }else{
                return(
                <div className="center">
                <img src={items.message} alt="Beautiful Dogs" />
                </div>
                )
            }
    }
}

export default Dogs;

