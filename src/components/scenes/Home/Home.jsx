import React, { Component } from 'react';
import { Link } from 'gatsby';
import { withFirebase } from '../../../utils/Firebase';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Loading from '../../atoms/Loading';
import Image from '../../atoms/Image';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {
/*  _initFirebase = false;

  state = {
    posts: [],
    loading: true,
    title: '',
    description: '',
  };

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.getPosts();
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  getPosts = () => {
    const { firebase } = this.props;

    firebase
      .posts()
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(item => item.data());
        this.setState({
          posts: data,
          loading: false,
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, posts } = this.state;
    const { firebase } = this.props;

    let slug =
      (title.match(/^[a-zA-Z0-9 ]*$/, '') &&
        title.match(/^[a-zA-Z0-9 ]*$/, '')[0]) ||
      '';

    const latestPost = {
      title,
      slug:
        slug
          .toLowerCase()
          .split(' ')
          .join('-') +
        Math.floor(Math.random() * 200) +
        1,
      description,
    };

    const newPosts = [latestPost, ...posts];

    this.setState({
      posts: newPosts,
      title: '',
      description: '',
    });

    firebase.posts().add({
      ...latestPost,
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
*/
  render() {
//    const { posts, description, title, loading } = this.state;

//    if (loading) return <Loading />;

    return (
      <section id="background" style={{width: '100%', height: '100%', margin: 'auto', paddingBottom: '5rem'}}>
      <Container fluid>
        <Row>
          <Col>
          <h1 style={{textAlign: 'center'}}>Home</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="NoMobile" />
          <Col>

          <iframe id="ifStreaming" className="video" src="https://meet.jit.si/elite-care-chiro" frameBorder="0" width="100%" height="800px" allow="geolocation; microphone; camera" style={{marginBottom: '3rem', paddingBottom: '5rem'}}/>

          </Col>
        <Col xs={2} className="NoMobile" />
        </Row>
        {/*<div className="home__details">
          <h1 className="home__title">Home Page</h1>
          <p className="home__description">
            The Home Page is accessible by every signed in user.
          </p>
        </div>

        <div className="home__posts">
          <div className="home__posts__form">
            <div className="home__posts__form__title">Add Posts</div>
            <form onSubmit={this.handleSubmit}>
              <Input
                name="title"
                type="text"
                value={title}
                labelName="Title"
                onChange={this.handleChange}
                required
              />
              <Input
                name="description"
                type="text"
                value={description}
                labelName="Description"
                onChange={this.handleChange}
                required
              />

              <Button
                className="home__posts__form__btn"
                type="submit"
              />
            </form>
          </div>

          <div className="home__posts__items">
            {posts &&
              posts.length > 0 &&
              posts.map((item, id) => (
                <div key={id} className="home__post">
                  <Link
                    className="home__post__title"
                    to={'/post/' + item.slug}
                  >
                    <Image
                      className="home__post__image"
                      filename="gatsby-post-bg.jpg"
                    />
                    <div className="home__post__text">
                      {item.title && item.title < 30
                        ? item.title
                        : item.title.slice(0, 30) + '...'}
                      <div
                        className="home__post__description"
                        key={id}
                      >
                        {item.description &&
                        item.description.length > 150
                          ? item.description.slice(0, 150)
                          : item.description + '...'}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>*/}
      </Container>

      </section>
    );
  }
}

export default withFirebase(Home);
