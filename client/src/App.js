import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      posts: []
    }
  }

  componentDidMount = () => {
    this.getBlogPosts()
  }

  handleChanges = ({ target }) => {
    const {name, value} = target
    this.setState({[name]: value})
    console.log(this.state)
  }

  formSubmission = event => {
    event.preventDefault()
    if(this.state.title === '' || this.state.body === ''){
      console.log('No data entered')
    }else{
      const payload = {
        title: this.state.title,
        body: this.state.body
      }

      axios({
        url:'/save',
        method: 'POST',
        data: payload
      })
      .then(() => {
        console.log('Data sent')
        this.resetInputs()
        this.getBlogPosts()
      })
      .catch(() => console.log('Internal Error'))
    }
  }

    getBlogPosts = () => {
      axios.get('/get')
      .then((response) => {
        const data = response.data
        this.setState({ posts: data})
        console.log('Data received')
      })
      .catch((err) => {
        console.log('Error:', err)
      })

  }

  resetInputs = () => {
    this.setState({
      title: '',
      body: ''
    })
  }

  // displayPosts = (posts) => {
  //   if(!posts.length) return null

  //   return posts.map((post, index) => {
  //     <div key={index}>
  //       <h3>{post.title}</h3>
  //       <p>{post.body}</p>
  //     </div>
  //   })
  // }

  render() {
    return (
      <div>
        <h2>Welcome to BlogRoom</h2>
        <h3 className="blog-add">Add Blog Post:</h3>
        <form onSubmit={this.formSubmission} className="form">
          <div className="form-input">
            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChanges} />
          </div>
          <div className="form-input">
            <textarea value={this.state.body} placeholder="Body" onChange={this.handleChanges} name="body"></textarea>
          </div>    
          <button type="submit">Post</button>
        </form>

        <h3 className="blog-list-title">Post List:</h3>
        <div className="blog-list">          
          {
            this.state.posts.map((post) => {
              return (
                <div key={post._id} className="posts">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <hr />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App
