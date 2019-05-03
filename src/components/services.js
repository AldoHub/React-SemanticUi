import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Services extends Component {
     
  render() {
    return (
      <section>
        <h2 className="sub-heading">Our Services.</h2>
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mollis odio, non fringilla mauris. Nullam tincidunt volutpat felis, in facilisis metus tristique id. Duis gravida risus finibus risus dapibus interdum. Donec a mollis purus, et scelerisque ipsum. Etiam iaculis lectus odio, sit amet finibus urna convallis et. Morbi cursus urna sit amet augue porttitor, vitae aliquam eros commodo. Phasellus tincidunt leo eget suscipit pharetra. Vestibulum ultricies lectus urna, aliquam imperdiet est laoreet ut. Ut vitae odio nunc. Etiam ullamcorper sem purus, eu sodales metus tempor non. In tempus congue ullamcorper.</p>
        
        <p>Vestibulum eu gravida purus. Duis sed ex non ligula tristique auctor ut nec mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Sed fringilla bibendum metus aliquet pharetra. Nam vel pulvinar metus. Quisque tristique diam in laoreet rutrum. Morbi sit amet aliquam mauris. Nulla aliquet arcu et efficitur faucibus. Donec vel interdum elit.</p>
        
        <p>Maecenas dictum rutrum lectus, id semper sapien porta a. Donec fermentum, nibh eget facilisis venenatis, ex elit tincidunt odio, vel facilisis tortor augue sed diam. Integer id lorem turpis. Donec lorem magna, suscipit non neque ac, sodales consectetur orci. Nullam vitae velit euismod, rhoncus magna ut, ultrices quam. Praesent ultrices facilisis purus, non efficitur lacus finibus ac. Etiam commodo ullamcorper nisl, sed sodales dui laoreet sit amet. Vivamus rutrum odio eget nulla fermentum, non sollicitudin metus luctus. In aliquam sed mi nec gravida. Mauris sagittis augue vel urna aliquam, eget commodo quam placerat.</p>
      

        <h2 className="sub-heading">Check Them Out.</h2>
    <div className="cards-container">  
       
        <Card>
            <Image src='https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-0.3.5&s=8b42866a06f9d7229fe701c743bed47f&auto=format&fit=crop&w=634&q=80' />
            <Card.Content>
            <Card.Header>
                Full Meals.
            </Card.Header>
            </Card.Content>
           
        </Card>
        
        <Card>
            <Image src='https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixlib=rb-0.3.5&s=474eda2f97f5bed81dd0f45841f1f725&auto=format&fit=crop&w=634&q=80' />
            <Card.Content>
            <Card.Header>
               Sweet Desserts.
            </Card.Header>
            </Card.Content>
            
        </Card>
        
        <Card>
            <Image src='https://images.unsplash.com/photo-1511122979121-77a44e2cbdfe?ixlib=rb-0.3.5&s=f9b4ae31712fb0462e301dc27d057213&auto=format&fit=crop&w=634&q=80' />
            <Card.Content>
            <Card.Header>
              Cold Drinks.
            </Card.Header>
            </Card.Content>
            
        </Card>

    </div>  
  
      </section>
    );
  }
}

  
export default Services;

