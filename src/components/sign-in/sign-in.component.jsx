import React from 'react'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    
     constructor(){
          super()
          this.state={
               email:'',
               password:''
          }
     }

     handleEmail=(event)=>{
          const {name,value}=event.target
          this.SetState ({[name]:value})
         
     }

     handleSubmit=(event)=>{
          event.preventDefault()
     }
    render(){
     console.log(this.state)
               return (
                         
                              <div className='sign-in'>
                                   <h2>I already have an account</h2>
                                   <spna>
                                        Sign in with your email and password
                                   </spna>
                                   <form onSubmit={this.handleSubmit}>
                                        <input
                                             name='email'
                                             placeholder='Email'
                                             type='email'
                                             handleChange={this.handleChange} />

                                        <input
                                             name='password'
                                             placeholder='Password'
                                             type='password'  
                                             handleChange={this.handleChange}
                                             />
                                            
                                        <input

                                             type='submit'
                                             value='Submit Form' />
                                   </form>
                              </div>
                         
                         
                    )
          }
    
}

export default SignIn;