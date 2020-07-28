import React from 'react';
import Loading from './Loading';

class DogImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending',
      message: 'teste',
      name: '',
    }
    this.saveData = this.saveData.bind(this);
  }

  fetchAPI = () => {
    this.setState({
      status: 'pending',
    });

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          status: data.status,
          message: data.message,
          dogs: [],
        });
      });
  }

  componentDidMount(prevState) {
    if (localStorage) {
      const dogName = localStorage.getItem('dogName');
      const dogURL = localStorage.getItem('dogURL');
      return this.setState({ message: dogURL, status: 'success', name: dogName, dogs: [{dogName, dogURL}]});
    } else {
      this.fetchAPI();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.message.includes('terrier')) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message) {
      const dogBreed = this.state.message.split('/')[4];
      alert('Prepare to see a ' + dogBreed + ' dog');
      localStorage.setItem('dogURL', this.state.message)
    }
  }
  
  saveData() {
    this.setState({
      dogs: [...this.state.dogs, {dogName: this.state.name, dogURL: this.state.message}],
    })
    localStorage.setItem('dogName', this.state.name);
  }

  render() {
    const { status, message, dogs } = this.state;
    if(status === 'pending') return <Loading />;
    return(
      <div>
        <h4>Doguinho</h4>
        <button onClick={this.fetchAPI}>New Doguinho</button>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="digite o nome do doguinho"
          />
          <button onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={message} alt='Cute Dog'/>
        </div>
      </div>
    )
  }
}

export default DogImage;
