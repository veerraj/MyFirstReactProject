import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

 class Avatar extends Component{

    constructor()
    {
        super();
        this.state={
            name:"welcome to learning World"
        }
    }
    namechange()
    {
        this.setState({
            name:"welcome to Developer World"
        })
    }
         
        render()
        {
            const AvatarlistArray=[
                {
                    id:1,
                    name:"rajveer",
                    work:"full stack developer"
                },
                {
                    id:2,
                    name:"veer",
                    work:"python developer"
                },
                {
                    id:3,
                    name:"raj",
                    work:"web developer"
                },
                {
                    id:4,
                    name:"rajesh",
                    work:"java developer"
                }
            ]
            const Avatarvalue = AvatarlistArray.map( (value,i) => {
        
                return <Avatarlist key={i} id={AvatarlistArray[i].id} name={AvatarlistArray[i].name} work={AvatarlistArray[i].work} />
            })
            
            return(
                <div className="mainpage">
             <h1 className="tc"> {this.state.name} </h1>
             {Avatarvalue}
             <button className="ma4" onClick={ () => this.namechange()}>Subcribe</button>
             <h6 className="tr">Developed By Rajveer Mewara</h6>
             </div>
            )
        }
    }
      

export default Avatar;