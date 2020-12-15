import React, {Component} from 'react';
 
class Card extends Component{
    constructor(props){
        super(props)
            this.state ={
            firstName: 'Mohit Mishra',
            initials:'MM',
            info:[
                {title: 'Birthday', text: 'May 23rd, 1994'},
                {title: 'Address', text: 'St. Thomas Street, CA'},
                {title: 'Phone', text: ''},
                {title: 'Email', text: 'hello@gmail.com'},

            ]
            }
        
    }
    render (){
        const {
            firstName,initials, info
        } = this.state;
        return(
            <React.Fragment>
              <section className="card-container">
              <header className="card-header">
              <span initials={initials}></span>
        <h2>{firstName}</h2>
              </header>
              <main>
              <ul>
                  {info.map((row,index) => {
                      return(
                        <li key={index}>
                        <span>{row.title}</span>
                        {row.text ? row.text:'N/A'}
                        </li>
                      )  
                  })                
                  }        
              </ul>
              </main>
              </section>
              </React.Fragment>
        );             
        
    }
}
export default Card;