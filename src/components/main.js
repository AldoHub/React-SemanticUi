import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Main extends Component {
     
  render() {
    return (
      <section>
          <h2 className="sub-heading">Welcome.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mollis odio, non fringilla mauris. Nullam tincidunt volutpat felis, in facilisis metus tristique id. Duis gravida risus finibus risus dapibus interdum. Donec a mollis purus, et scelerisque ipsum. Etiam iaculis lectus odio, sit amet finibus urna convallis et. Morbi cursus urna sit amet augue porttitor, vitae aliquam eros commodo. Phasellus tincidunt leo eget suscipit pharetra. Vestibulum ultricies lectus urna, aliquam imperdiet est laoreet ut. Ut vitae odio nunc. Etiam ullamcorper sem purus, eu sodales metus tempor non. In tempus congue ullamcorper.</p>
      
          <h2 className="sub-heading">Gallery.</h2>

          <div className="cards-container">  
          
          <Card>
               <Image src='https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-0.3.5&s=cea56a983718711400188b2ee2e95b43&auto=format&fit=crop&w=634&q=80' />
          </Card>
           
          <Card>
               <Image src='https://images.unsplash.com/photo-1485962093642-5f4386e84429?ixlib=rb-0.3.5&s=909fb82a81b86762e90f3cfc263a5ab5&auto=format&fit=crop&w=634&q=80' />
          </Card>
           
           <Card>
               <Image src='https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-0.3.5&s=d3c2446192f154ace365cc554f1c3e8e&auto=format&fit=crop&w=634&q=80' />
          </Card>
          <Card>
               <Image src='https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixlib=rb-0.3.5&s=90d27711f65aca83b89fa9cfcf40c2ca&auto=format&fit=crop&w=634&q=80' />
          </Card>
           
          <Card>
               <Image src='https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-0.3.5&s=a2d62ca311c4713b4f2aaaeb22612cb2&auto=format&fit=crop&w=634&q=80' />
          </Card>
           
           <Card>
               <Image src='https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-0.3.5&s=e97697e014991406c8a374bddfeb1327&auto=format&fit=crop&w=634&q=80' />
          </Card>
          <Card>
               <Image src='https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-0.3.5&s=620bbd32feb808a3898a1ae5a88ebc4d&auto=format&fit=crop&w=634&q=80' />
          </Card>
           
          <Card>
               <Image src='https://images.unsplash.com/photo-1505156520151-3ba2f845e717?ixlib=rb-0.3.5&s=3d9d0ebe1ab1b6caf90110b56f7bb42c&auto=format&fit=crop&w=634&q=80' />
          </Card>
           
          <Card>
               <Image src='https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-0.3.5&s=4e9face33a62237d5846e32db4fa114e&auto=format&fit=crop&w=634&q=80' />
          </Card>
   
       </div>  
     
      
      </section>
    );
  }
}

  
export default Main;

