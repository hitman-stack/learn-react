import React, {Component} from 'react';
 
class Card extends Component{
    render (){
        return(
            <React.Fragment>
              <section className="card-container">
              <header className="card-header">
              <span initials="MM"></span>
              <h2>Mohit Mishra</h2>
              </header>
              <main>
              <ul>
              <li><span>Birthday</span> May 23rd, 1994</li>
              <li><span>Address</span> Beverly Hills, California</li>
              <li><span>Phone</span>123-456-789</li>              
              </ul>
              </main>
              </section>
              </React.Fragment>
        );             
        
    }
}
export default Card;